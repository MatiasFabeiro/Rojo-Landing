import React from 'react'
import './Formulario.css'

const Formulario = () => {

    function show_alert() {

        alert("Tu mensaje ha sido enviado!")
        
    }

    return (
        <div>

        
            <form className="form-container">

                <div className="name-container">
                <label>
                    <p>Nombre y apellido</p>
                    <input type="text" name="nombre" placeholder="Ej: Juan Gutierrez" className="name-field"/>
                </label>
                </div>

                <div className="email-container">
                <label>
                    <p>Email</p>
                    <input type="text" name="email" placeholder="Ej: hola@gmail.com" className="email-field"/>
                </label>
                </div>

                <div className="textarea-container">
                    <p>Mensaje</p>
                <textarea placeholder="Escribe tu mensaje aqui..." className="textarea-field"/>
                </div>

                <div className="container-input">
                <input type="submit" value="Enviar" data-wait="Enviando..." className="submit" onClick={show_alert}/>
                </div>
            </form>

        </div>
    )
}

export default Formulario

