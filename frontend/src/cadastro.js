import React from 'react';
import 'antd/es/input/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/form/style/index.css';
import 'antd/es/list/style/index.css';
import 'antd/es/icon/style/index.css';

// import 'antd/es/modal/style/index.css';

import './cadastro.css';
import {
  Form,
  Input,
  Button,
  List,
  Icon,
  // Modal,
} from 'antd';

var ID = 0;

class RegistrationForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
    id: 0,
    nome: '',
    telefone: '',
    email :'',
    value: ""};

    this.VetorContatos = [];
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNome = this.handleNome.bind(this)
    this.handleTelefone = this.handleTelefone.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.editContatos = this.editContatos.bind(this)
    this.handleUpdatecontato = this.handleUpdatecontato.bind(this);
  }
  
    handleSubmit = e => {
      e.preventDefault();
      this.VetorContatos.push(this.state);
      console.log(this.VetorContatos);
      this.setState({id : ID + 1});
      this.props.form.resetFields();
    };

    handleDelete(id) {
      console.log(id);
      var i;
      for(i = 0; i < this.VetorContatos.length; i++){
          if(this.VetorContatos[i].id === id){
            const exclusao = this.VetorContatos.pop(i);
            console.log(exclusao);
            console.log(this.VetorContatos);
          } 
      }
      this.setState({nome : "", email : "", telefone : ""});
    }


    editContatos = (id, nome, telefone, email) => {
      const vetorContatos = this.vetorContatos.slice(); //faz cópia do Vetor de contatos
      vetorContatos[id].nome = nome; //recever novo valor
      vetorContatos[id].telefone = telefone; //recever novo valor
      vetorContatos[id].email = email; //recever novo valor

      this.setState({vetorContatos})
    }

    handleUpdatecontato = (contato) => {
      console.log(contato);
      // <ListaViewItem>
      //   id = {contato.id}
      //   nome = {contato.nome}
      //   telefone = {contato.telefone}
      //   email = {contato.email}
      //   {/* editContatos = {editContatos} */}
      //   </ListaViewItem>
      
    }

    handleNome = (e) => {
      this.setState({ nome: e.target.value});
    }

    handleTelefone = (e) => {
      this.setState({ telefone: e.target.value});
    }

    handleEmail = (e) => {
      this.setState({ email: e.target.value});
    }

    

    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.VetorContatos.push(this.state);
    //     console.log(this.VetorContatos);
    //     this.setState({id : ID + 1});
    //     this.props.form.resetFields();
    //   };
  

    //   this.setState({vetorContatos}); //****
    // }
  
    render(){
      const { getFieldDecorator } = this.props.form;

      return (

        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item className="nome">
              <label>Nome</label>
              <br></br>
              {getFieldDecorator('nome',)(<Input placeholder="Digite o Nome" onChange={this.handleNome}/>)}
            </Form.Item>

            <Form.Item className="Telefone">
              <label>Número de Telefone</label>
              <br></br>
              {getFieldDecorator('telefone',)(<Input placeholder="Digite o Telefone" onChange={this.handleTelefone}/>)}
            </Form.Item>

            <Form.Item >
              <label>E-mail</label>
              <br></br>
              {getFieldDecorator('email',)(<Input placeholder="Digite o E-mail" onChange={this.handleEmail}/>)}    
            </Form.Item>

            <Button class="button"type="primary" htmlType="submit" >
                Cadastro
            </Button>
          </Form>

          <List
            itemLayout="horizontal"
            dataSource={this.VetorContatos}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<h3>{item.nome}</h3>}
                  description={<h4>{item.telefone}<br></br>{item.email}</h4>}
                />
                <Icon type="delete" onClick={() => this.handleDelete(item.id)}/>
                <Icon type="edit" onClick={() => this.handleUpdate(item)}/>
              </List.Item>
              )}
          />
        </div>
      );
    }
  }

//-----------------------------------------------------
  class ListaViewItem extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        edit: false,
        nome: props.nome,
        telefone: props.telefone,
        email: props.email,
      }
    this.abrirForm = this.abrirForm.bind(this)
    this.fechaForm = this.fechaForm.bind(this)
    this.handleNome = this.handleNome.bind(this)
    this.handleTelefone = this.handleTelefone.bind(this)
    this.handleEmail = this.handleEmail.bind(this)      
    }
      editContatos = () => {
        this.props.editContatos(this.props.id, this.state.nome, this.state.telefone, this.state.email);
        this.setState({edit:false});
      }

      abrirForm = () => {
        this.setState({edit: true});
      }

      fechaForm = () => {
        this.setState({edit: false});
      }

      handleNome = (e) => {
        this.setState({ nome: e.target.value});
      }
  
      handleTelefone = (e) => {
        this.setState({ telefone: e.target.value});
      }
  
      handleEmail = (e) => {
        this.setState({ email: e.target.value});
      }
      render(){
        const { getFieldDecorator } = this.props.form;
        // if(this.state.edit){
          // return (
          //   <p>
          //     {this.props.id} - {this.props.nome} - {this.props.telefone} - {this.props.email}
          //     <span onClick={this.abrirForm}>Editar</span>
          //   </p>
          // );
        // }
      
      return (
        <div>
          {/* {this.props.id} - {this.props.nome} - {this.props.telefone} - {this.props.email} */}
          <Form onSubmit={this.handleSubmit}>
            <Form.Item className="nome">
              <label>Nome</label>
              <br></br>
              {getFieldDecorator('nome',)(<Input value={this.state.nome} type = "text" placeholder="Digite o Nome" onChange={this.handleNome}/>)}
            </Form.Item>

            <Form.Item className="Telefone">
              <label>Número de Telefone</label>
              <br></br>
              {getFieldDecorator('telefone',)(<Input value={this.state.telefone} placeholder="Digite o Telefone" onChange={this.handleTelefone}/>)}
            </Form.Item>

            <Form.Item >
              <label>E-mail</label>
              <br></br>
              {getFieldDecorator('email',)(<Input value={this.state.email} placeholder="Digite o E-mail" onChange={this.handleEmail}/>)}    
            </Form.Item>

            <Button class="button"type="primary" htmlType="submit" >
                Salvar
            </Button>
            <Button class="button"type="primary" onClick={this.fechaForm}>
                Cancelar
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