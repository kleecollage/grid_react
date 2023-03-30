import React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import { Link } from 'react-router-dom';


const emailRegex = new RegExp(/\S+@\S+\.\S+/)
const emailValidator = value => emailRegex.test(value) ? "" : "Please enter a valid email."
const EmailInput = fieldRenderProps => {
const {
validationMessage,
visited,
...others
} = fieldRenderProps;
return <div>
 <Input {...others} />
{visited && validationMessage && <Error>{validationMessage}</Error>}
</div>;
};

const Formulario = () => {
    const [messages, setMessages] = React.useState(initialMessages);
  
    const addNewMessage = (event) => {
      setMessages([...messages, event.message]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const message = {
        nombre: formData.get('nombre'),
        apellido: formData.get('apellido'),
        correo: formData.get('correo'),
        telefono: formData.get('telefono'),
        mensaje: formData.get('mensaje'),
      };
      addNewMessage({ message });
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form
          onSubmit={handleSubmit}
          render={(formRenderProps) => (
            <FormElement style={{ maxWidth: 650 }}>
              <fieldset className={'k-form-fieldset'}>
                <legend className={'k-form-legend'}>Formulario</legend>
                <div className="mb-3">
                  <Field label="Nombre:" name="nombre" component={Input} />
                </div>
                <div className="mb-6">
                  <Field label="Apellido:" name="apellido" component={Input} />
                </div>
                <div className="mb-3">
                  <Field
                    label="Correo electrónico:"
                    type="email"
                    name="correo"
                    component={EmailInput}
                    validator={emailValidator}
                  />
                </div>
                <div className="mb-3">
                  <Field label="Teléfono:" name="telefono" component={Input} />
                </div>
                <div className="mb-3">
                  <Field label="Mensaje:" name="mensaje" component={Input} />
                </div>
              </fieldset>
                <div style={{ textAlign: 'center' }}> 
                  <div className="k-form-buttons">
                    <button 
                      primary="true"
                      type={'submit'}
                      className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                      disabled={!formRenderProps.allowSubmit}>Enviar
                    </button>
                    <Link to="/grid" className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" style={{ marginLeft: '10px' }}>
                      Ver registros
                    </Link>
                  </div>
                </div>
            </FormElement>
          )}
        />
      </div>
    );
  };
  
  const initialMessages = [];
  
  export default Formulario;
  