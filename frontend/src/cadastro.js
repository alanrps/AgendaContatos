import React from 'react';
import 'antd/es/input/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/form/style/index.css';
import 'antd/es/list/style/index.css';
import 'antd/es/icon/style/index.css';
import 'antd/es/modal/style/index.css';
import './cadastro.css';
import {
  Form,
  Input,
  Button,
  List,
  Icon,
  Modal,
  Label,
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
    };

    this.VetorContatos = [];
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNome = this.handleNome.bind(this)
    this.handleTelefone = this.handleTelefone.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
  }
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.resetFields();
      this.VetorContatos.push(this.state);
      console.log(this.VetorContatos);
      this.setState({id : ID + 1});
      this.setState({
        nome: "",
        telefone: "",
        email: "",
      });
    };

    handleUpdate = e => {
      e.preventDefault();
      this.props.form.resetFields();
      for(var i = 0; i < this.VetorContatos.length; i++){
        if(this.VetorContatos[i].id === this.state.id){
          this.VetorCsontatos.pop(i);
          this.VetorContatos[i] = this.state;

          return this.setState({visible: false, nome : "", email : "", telefone : ""});
        }
      }
    }

    handleDelete(id) {
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

    handleNome = (e) => {
      this.setState({ nome: e.target.value});
    }

    handleTelefone = (e) => {
      this.setState({ telefone: e.target.value});
    }

    handleEmail = (e) => {
      this.setState({ email: e.target.value});
    }

    showModal(contato){
      this.setState({
        visible: true,
        id: contato.id,
        nome: contato.nome,
        telefone: contato.telefone,
        email: contato.email,
      });
    };

    handleCancel = () => {
      this.setState({ visible: false });
      this.props.form.resetFields();
    };

    render(){
      const { visible, loading } = this.state;
      return (
        <div>
          <Form className="cadastro" onSubmit={this.handleSubmit}>
            <Form.Item className="nome">
              <label>Nome</label>
              <br></br>
             <Input placeholder="Digite o Nome" onChange={this.handleNome}/>
            </Form.Item>

            <Form.Item className="Telefone">
              <label>Número de Telefone</label>
              <br></br>
              <Input  placeholder="Digite o Telefone" onChange={this.handleTelefone}/>
            </Form.Item>

            <Form.Item >
              <label>E-mail</label>
              <br></br>
              <Input  placeholder="Digite o E-mail" onChange={this.handleEmail}/> 
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
                <Icon type="edit" onClick={() => this.showModal(item)}/>
              </List.Item>
              )}
          />
          <Modal
            visible={visible}
            title="Editar Contato"
            onOk={this.handleUpdate}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Cancelar
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={this.handleUpdate}>
                Editar
              </Button>,
            ]}
            
          >
            <Form className="atualizar" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleUpdate}>
              <Form.Item >
                <label >Nome:</label>
                <Input  type="text" name="nome" value={this.state.nome} placeholder="Nome da Atividade: " onChange={this.handleNome} />
              </Form.Item>

              <Form.Item>
                <label >Email:</label>
                <Input  type="text" name="nome" value={this.state.email} placeholder="Nome da Atividade: " onChange={this.handleEmail} />
              </Form.Item >

              <Form.Item>
                <label >Telefone:</label>
                <Input type="text" name="nome" value={this.state.telefone} placeholder="Nome da Atividade: " onChange={this.handleTelefone} />
              </Form.Item >
            </Form>
          </Modal>
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