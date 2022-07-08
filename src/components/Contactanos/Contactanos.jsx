import React from 'react'
import './Contactanos.css'
import Formulario from './Formulario.jsx'

const Contactanos = () => {
    return (
        <div id="Contactanos" className="contactanos-container">

            
            <h1 className="contactanos-title">Contáctanos</h1>

            <div className="contactanos">

              <Formulario></Formulario>

              <table className="table-divider">
              <tr>
              <td className="td-divider"><hr className="hr" color={"#004056"}/></td>
              <div className="separator">O</div>
              <td className="td-divider2"><hr className="hr"  color={"#004056"}/></td>
              </tr>
              </table>

              <div className="container-btn-redes">

                <a href="https://wa.me/5491123859081?" target="blank" className="container-btn-whatsapp">
                  <button className="btn-whatsapp">
                    <p>Whatsapp</p>
                  </button>
                </a>

                <a href="https://www.linkedin.com/company/rojo-agency/" target="blank" className="container-btn-linkedin">
                  <button className="btn-linkedin">
                    <p>LinkedIn</p>
                  </button>
                </a>

              </div>

            </div>
            
        </div>
    )
}

/* class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  } */


export default Contactanos
