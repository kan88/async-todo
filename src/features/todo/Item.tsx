import styles from './Item.module.css'
import { useState } from 'react'
import { Todo } from './todoSlice'
import { deleteTodo } from './todoSlice'
import { useAppDispatch } from '../../app/hooks'

export default function Item(prop: Todo) {
    const dispatch = useAppDispatch();

    const { title, id, completed } = prop
    const [check, setCheck] = useState(completed)
    const className = check ? `${styles.todo__title} ${styles.todo__titleDone
        } ` : styles.todo__title
    const handlerCheck = () => {
        setCheck(!check)
    }

    const handleRemove = (id: number) => {
        console.log(id)
        dispatch(deleteTodo(id))
    }
    return (
        <li className={styles.todo__item} onClick={handlerCheck} >
            <p className={className}>{title}</p>
            <div className={styles.todo__wrapper}>
                <input className={styles.todo__checkbox} type="checkbox" onChange={handlerCheck} checked={check} />
                <button className={styles.todo__remove} onClick={() => handleRemove(id)}>del</button>
            </div>
        </li>
    )
}
