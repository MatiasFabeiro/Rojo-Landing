import {React, useState } from 'react'
import './Formulario.css'

const Formulario = () => {

    const [formulario, setFormulario] = useState({name:"", email:"", message:""})

    const handleChange = (e) => {
        setFormulario({...formulario, [e.target.name]:e.target.value})
    }

    const sendForm = (e) => {
        e.preventDefault()
        const email = {to:"matiasfabeiro@gmail.com", subject:"Tenes una nueva consulta desde la pagina web", template:"", _method:"PUT", 
        message:'Te ha llegado una consulta de ' + formulario.name + '\n\n Mail de contacto: ' + formulario.email + '\n\n Mensaje: ' + formulario.message}
        console.log(email)
        let dataSend = new FormData();
        for (let key in email) { dataSend.append(key, email[key]); }
        fetch("http://apinew-test.gloouds.com/api/emailsystem", {method:"POST", body:dataSend}).then((res)=>{
            console.log(res)
        }).catch(e=>console.log(e))
        show_alert()
    }

    function show_alert() {

        alert("Tu mensaje ha sido enviado!")
        
    }

    return (
        <div>

        
            <form className="form-container">

                <div className="name-container">
                <label className="form-label">
                    Nombre y apellido:
                </label>
                <input type="text" name="name" onChange={(e)=>handleChange(e)} placeholder="Ej: Juan Gutierrez" className="name-field"/>
                </div>

                <div className="email-container">
                <label className="form-label">    
                    Email:
                </label>
                <input type="text" name="email" onChange={(e)=>handleChange(e)} placeholder="Ej: hola@gmail.com" className="email-field"/>
                </div>

                <div className="textarea-container">
                <label className="form-label">
                    Mensaje:
                </label>
                <textarea name="message" onChange={(e)=>handleChange(e)} placeholder="Escribe tu mensaje aqui..." className="textarea-field"/>
                </div>

                <div className="container-input">
                <input type="submit" value="Enviar" data-wait="Enviando..." className="submit" onClick={ (e) => sendForm(e)}/>
                </div>
            </form>

        </div>
    )
}

export default Formulario

