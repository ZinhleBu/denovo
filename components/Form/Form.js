import React from 'react'
import styles from '../../styles/Home.module.css'

const Form = () => {
    return (
        <div>
            <form className={styles.form} action="">
                <label className={styles.form_title} htmlFor="">Sign up to get the latest on De Novo</label>
                <input className={styles.input_field} type="text" name="" id="" placeholder="Name" />
                <input className={styles.input_field} type="text" name="" id="" placeholder="Surname" />
                <input className={styles.input_field} type="email" name="" id="" placeholder="email" />
                <button className={styles.button_submit} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form