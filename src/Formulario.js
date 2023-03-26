import React from 'react';
import { Form, Field } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

class Formulario extends React.Component {
  render() {
    return (
      <div>
        <Form
          render={(formRenderProps) => (
            <form onSubmit={formRenderProps.onSubmit}>
              <fieldset>
                <legend>Formulario</legend>
                <div>
                  <Field label="Nombre:" labellayout="left" name="nombre" component={Input}  />
                </div>
                <div>
                  <Field label="Apellido:" labellayout="left" name="apellido" component={Input} />
                </div>
                <div>
                  <Field label="Correo electrónico:" labellayout="left" name="correo" component={Input} />
                </div>
                <div>
                  <Field label="Teléfono:" labellayout="left" name="telefono" component={Input} />
                </div>
                <div>
                  <Field  label="Mensaje:" labellayout="left" name="mensaje" component={Input}/>
                </div>
                <div>
                  <Button primary="true" type="submit">Enviar</Button>
                </div>
              </fieldset>
            </form>
          )}
        />
      </div>
    );
  }
}

export default Formulario;
