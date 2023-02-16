import React, { useEffect } from 'react';
import Item from '../Item/Item';
import styles from './List.module.css'
import { TodoType } from '../todoSlice';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { getTodos } from '../todoSlice';


export function Todo() {
  const todo = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  return (
    <>
      <ul className='todo__list' style={{ marginBottom: '30px' }}>
        {todo.list.map((item: TodoType) => <Item key={item.id} {...item}></Item>)}
      </ul>
      <button className={styles.state} onClick={() => console.log(todo)}>SHOW STATE</button>

    </>

  );
}
