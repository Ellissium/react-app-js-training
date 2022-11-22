import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton.jsx';

const PostItem = (props) => {
    const postsRouter = useNavigate();
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton className="post__btn" onClick={() => postsRouter(`/${props.post.id}`)}>Открыть</MyButton>
                <MyButton className="post__btn" onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem;