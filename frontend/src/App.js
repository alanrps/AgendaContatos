import React, {Component}  from 'react';
import './App.css';
import Cadastro from './cadastro';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

export class Routes extends Component {    
  render(){
      return(
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Cadastro}/>
              </Switch>
          </BrowserRouter>
      )
  }
};

export default Routes;
