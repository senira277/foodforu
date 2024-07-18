import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Whothis from './components/Whothis';
import Team from './components/Team';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route,NavLink } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Container, Button} from '@mui/material';

export default function App() {
  
  

  return (
    <Router>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
            FoodForU
          </Typography>
          <Button color='inherit' component={NavLink} to='/' style={({isActive}) => ({
            color: isActive ? 'red' : 'inherit',
            fontWeight : isActive ? 'bold' : 'normal',
          })}>
            Home
          </Button>
          <Button color='inherit' component={NavLink} to='/about'  style={({isActive}) => ({
            color: isActive ? 'red' : 'inherit',
            fontWeight : isActive ? 'bold' : 'normal',
          })}>
            About
          </Button>
          <Button color='inherit' component={NavLink} to='/contactus'  style={({isActive}) => ({
            color: isActive ? 'red' : 'inherit',
            fontWeight : isActive ? 'bold' : 'normal',
          })}>
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md' style={{ marginTop: '20px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/*' element={<About />} />
          <Route path='/contactus' element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}
