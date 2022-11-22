import React, { useState } from "react";
import styles from './RegFrom.module.css';

export const RegForm = () => {

    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form className={styles.form}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label>SurName:</label>
                    <input type="text" onChange={(e) => setSurName(e.target.value)} />
                </div>

                <div>
                    <label>Mail:</label>
                    <input type="text" onChange={(e) => setMail(e.target.value)} />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <button type="submit">Отправить</button>
                </div>

            </form>

            <div>Name is: {name}</div>
            <div>SurName is: {surName}</div>
            <div>Mail is: {mail}</div>
            <div>Password is: {password}</div>

        </div>
    );
}