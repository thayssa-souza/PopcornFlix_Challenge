import React, {Component} from 'react';
import Header from './Rotas/Header.js';
import Body from './Rotas/Body.js';

export default class App extends Component{
  render(){
    return(
      <section>
        <Header />
        <Body />
      </section>
    );
  }
}
