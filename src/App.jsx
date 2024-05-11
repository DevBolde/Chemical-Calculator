import React from 'react';
import './App.css';
import ChemicalLevelsForm from './ChemForm/Form.js';
import { Route, Routes } from 'react-router-dom';

import {HeaderContent} from './components/Header'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout



function App() {
  return (
    <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
    </Layout> 
  );
}

export default App;

