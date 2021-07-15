import React, { useState } from 'react'
import { connect } from 'react-redux'
import './header.css'
import {getDogs} from './../actions/dogActions'

const initialFormValue = ''

const Header = (props) => {

    const [formValue, setFormValues] = useState(initialFormValue)

    const handleChange = (e) => {
        setFormValues(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        props.dispatch(getDogs(formValue))
    }

    return(
        <div className='headerContainer'>
            <h1 className="mainHeading">Get Dog By Breed</h1>
            <form className='form' onSubmit={submit} >
                <label htmlFor='breed' className='label'> Breed
                    <input type='text' name='breed' placeholder='type breed here' className='breed' value={formValue} onChange={handleChange}></input>
                </label>
                <button className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default connect()(Header)