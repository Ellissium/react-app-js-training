import React from 'react'
import { usePagination } from '../../../hooks/usePagination';
import MyButton from '../button/MyButton';
import classes from './Pagination.module.css'

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePagination(totalPages);
    return (
        <div className={classes.pagination}>
            {pagesArray.map(p =>
                <MyButton
                    classname={page === p ? classes.current : ''}
                    key={p}
                    onClick={() => changePage(p)}
                >
                    {p}
                </MyButton>
            )}
        </div>
    )
}

export default Pagination