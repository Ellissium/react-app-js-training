import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const Post = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])
    
    const goBack = () => navigate(-1);

    return (
        <div>
            <h1>Post {params.id}</h1>
            {isPostLoading
                ? <Loader />
                : <div>{post.title}</div>
            }
            <h1>Коментарии</h1>
            {isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map(comment => 
                        <div key={comment.id}>
                            <h3>{comment.name}</h3>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )
                    
                    }
                </div>
            }
            <MyButton 
                onClick={goBack}
            >Назад</MyButton>
        </div>
    )
}

export default Post