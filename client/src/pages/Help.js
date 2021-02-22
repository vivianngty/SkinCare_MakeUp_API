import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css_folders/help.css'
import Modal from './Modal'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

function Help() {

    const [ form, setForm ] = useState (null);

    async function createHelp(){
        try{
            const res = await axios.post ('http://localhost:8080/help', form)
            console.log (res.data)
        }catch(e){
            console.error (e, e.message)
        }
    }

    function handleChange(e){
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        createHelp();
    }

    const [ showModal, setshowModal ] = useState (false);

    const onMouseClick = () => {
        setshowModal (true);
    }
    const closeModal = () => {
        setshowModal (false);
    }



    return(
        <div className="container">
            <h3>Beauty Consultations & Questions</h3>

            <form className="form" 
                    onChange = { (e) => handleChange(e)}
                    onSubmit = { (e) => handleSubmit(e)}>
                
                <label className="name-label">
                    Name
                    <input type="text" name="name" className="name-form"/>
                </label>

                <label className="email-label">
                    Email
                    <input type="text" name="email" className="email-form"/>
                </label>

                <label className="subject-label">
                    Subject
                    <input type="text" name="subject" className="subject-form"/>
                </label>

                <label className="message-label">
                    Message
                    <textarea type="text" name="message" className="message-form"/>
                </label>

                <label>
                    <button type="submit" value="Send!"className="submit-label" onClick = {onMouseClick}>Send!</button> 
                    { showModal &&  
                    <div>
                        <div className="modal">
                            <h3 className="model-content"> We received it 😉 
                            <Link to="/"><i class="fa fa-times" aria-hidden="true"></i></Link>
                            </h3>
                        </div>
                    </div>
                    }
                </label>

            </form>




        </div>
    )
}

export default Help;