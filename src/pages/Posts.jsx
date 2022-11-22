import React, { useEffect, useRef, useState } from 'react';
import PostFilter from '../components/PostFilter.jsx';
import PostForm from '../components/PostForm.jsx';
import PostList from '../components/PostList.jsx';
import MyButton from '../components/UI/button/MyButton.jsx';
import MyModal from '../components/UI/modal/MyModal.jsx';
import { usePosts } from '../hooks/usePosts.js';

import '../styles/App.css'
import PostService from '../API/PostService.js';
import Loader from '../components/UI/Loader/Loader.jsx';
import { useFetching } from '../hooks/useFetching.js';
import { getPageCount } from '../utils/pages.js';
import Pagination from '../components/UI/pagination/Pagination.jsx';
import { useObserver } from '../hooks/useObserver.js';
//2:12
function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    const changePage = (page) => {
        setPage(page);
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className='App'>
            <MyButton style={{ marginTop: 15 }} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal} >
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>
            {isPostLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <Loader />
                </div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;