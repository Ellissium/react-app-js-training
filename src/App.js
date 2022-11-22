import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css'
import AppRouter from './components/AppRouter.jsx';
import Navbar from './components/UI/Navbar/Navbar.jsx';
import { AuthContext } from './context';

//2:33
function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')){
            setIsAuth(true);
        }
        setLoading(false);
    }, [])
    
    return (
        <AuthContext.Provider value={{
            isAuth, 
            setIsAuth, 
            isLoading,
            setLoading,
        }}>
            <BrowserRouter> 
                <Navbar/>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;

// import React, { useEffect, useState } from 'react';
// import PostFilter from './components/PostFilter.jsx';
// import PostForm from './components/PostForm.jsx';
// import PostList from './components/PostList.jsx';
// import MyButton from './components/UI/button/MyButton.jsx';
// import MyModal from './components/UI/modal/MyModal.jsx';
// import { usePosts } from './hooks/usePosts.js';

// import './styles/App.css'
// import PostService from './API/PostService.js';
// import Loader from './components/UI/Loader/Loader.jsx';
// import { useFetching } from './hooks/useFetching.js';
// import { getPageCount } from './components/utils/pages.js';
// import Pagination from './components/UI/pagination/Pagination.jsx';
// //2:12
// function App() {
//     const [posts, setPosts] = useState([]);
//     const [filter, setFilter] = useState({ sort: '', query: '' });
//     const [modal, setModal] = useState(false);
//     const [totalPages, setTotalPages] = useState(0);
//     const [limit, setLimit] = useState(10);
//     const [page, setPage] = useState(1);
//     const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
//     const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
//         const response = await PostService.getAll(limit, page);
//         // limit, page
//         setPosts(response.data);
//         const totalCount = response.headers['x-total-count'];
//         setTotalPages(getPageCount(totalCount, limit));
//     });

//     useEffect(() => {
//         fetchPosts(limit, page)
//     }, [])

//     const changePage = (page) => {
//         setPage(page);
//         fetchPosts(limit, page)
//     }
    
//     const createPost = (newPost) => {
//         setPosts([...posts, newPost]);
//         setModal(false);
//     }

//     const removePost = (post) => {
//         setPosts(posts.filter(p => p.id !== post.id));
//     }

//     return (
//         <div className='App'>
//             <MyButton style={{ marginTop: 15 }} onClick={() => setModal(true)}>
//                 Создать пост
//             </MyButton>
//             <MyModal visible={modal} setVisible={setModal} >
//                 <PostForm create={createPost} />
//             </MyModal>
//             <PostFilter
//                 filter={filter}
//                 setFilter={setFilter}
//             />
//             {postError &&
//                 <h1>Произошла ошибка ${postError}</h1>
//             }
//             {isPostLoading
//                 ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
//                     <Loader />
//                 </div>
//                 : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
//             }
//             <Pagination
//                 page={page}
//                 changePage={changePage}
//                 totalPages={totalPages}
//             />
//         </div>
//     );
// }

// export default App;