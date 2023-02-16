import styles from './Item.module.css'
import { useState } from 'react'
import { TodoType } from '../todoSlice'
import { deleteTodo, toggleTodo } from '../todoSlice'
import { useAppDispatch } from '../../../app/hooks'

export default function Item(prop: TodoType) {
    const dispatch = useAppDispatch();

    const { title, id, completed } = prop
    const [check, setCheck] = useState(completed)
    const className = check ? `${styles.todo__title} ${styles.todo__titleDone
        } ` : styles.todo__title
    const handlerCheck = (id: number) => {
        setCheck(!check)
        dispatch(toggleTodo(id))
    }

    const handleRemove = (id: number) => {
        dispatch(deleteTodo(id))
    }

    return (
        <li className={styles.todo__item} onClick={() => handlerCheck(id)} >
            <p className={className}>{title}</p>
            <div className={styles.todo__wrapper}>
                <input className={styles.todo__checkbox} type="checkbox" onChange={() => handlerCheck(id)} checked={check} />
                <button className={styles.todo__remove} onClick={() => handleRemove(id)}>del</button>
            </div>
        </li>
    )
}
