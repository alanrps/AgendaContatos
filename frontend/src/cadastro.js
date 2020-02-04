import React from 'react';
import 'antd/es/input/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/form/style/index.css';
import './cadastro.css';

import {
  Form,
  Input,
  Button,
} from 'antd';


    
  class RegistrationForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
    };
  
    render() {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              <label>Nome</label>
              <br></br>
              <Input type = "text"placeholder="Digite o Nome" />
            </Form.Item>

            <Form.Item className="Telefone">
              <label>Número de Telefone</label>
              <br></br>
              <Input  placeholder="Digite o Telefone"/>
            </Form.Item>

            <Form.Item >
              <label>E-mail</label>
              <br></br>
              <Input  placeholder="Digite o E-mail"/>    
            </Form.Item>

            <Button class="button"type="primary" htmlType="submit">
                Cadastro
            </Button>
          </Form>
        </div>
      );
    }
  }


  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  
  function Cadastro() {
    return (
      <WrappedRegistrationForm />
    )
  }
  
  export default Cadastro;