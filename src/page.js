import React, { Component } from 'react';
//import Header from './header';
//import TopNav from './topNav';
import Top from './Top';
import Left from './components/left';
import Content from './content';
export default class Page extends Component {
  render() {
    return (<div>{Top}{Left}{Content}</div>);
  }
}