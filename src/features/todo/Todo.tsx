import React, { useEffect, useState } from 'react';
import Item from './Item';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getTodos, selectTodo,
} from './todoSlice';


export function Todo() {
  // const list = useAppSelector(selectTodo);
  const list = useAppSelector(state => state.todo.list)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos())
  }, [])
  return (
    <ul>
      {list.map((item) => <Item key={item.id} {...item}></Item>)}
      <button onClick={() => console.log(list)}>basic  </button>

    </ul>
  );
}
