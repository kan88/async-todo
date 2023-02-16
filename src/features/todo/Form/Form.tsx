import styles from './Form.module.css'
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { addTodos } from '../todoSlice';

export default function Form() {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        dispatch(addTodos(value))
    }

    const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input required className={styles.form__input} onInput={handleInput} type="text" name="title" placeholder='add new task' value={value} />
            <button className={styles.form__submit} type="submit">SEND</button>
        </form>
    )
}
