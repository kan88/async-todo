import React, { useEffect } from 'react';
import Item from '../Item/Item';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { getTodos } from '../todoSlice';


export function Todo() {
  const list = useAppSelector(state => state.todo.list)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  return (
    <ul className='todo__list'>
      {list.map((item) => <Item key={item.id} {...item}></Item>)}
      <button onClick={() => console.log(list)}>basic  </button>

    </ul>
  );
}
