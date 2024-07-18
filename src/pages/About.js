import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

import Whothis from '../components/Whothis';
import Team from '../components/Team';
import Vision from '../components/Vision';
import { BrowserRouter as Router,Routes,Route,NavLink } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Container, Button, Box} from '@mui/material';

export default function About(){
    
    return (
        <div>
            
            <Box >
                <Box display="flex" justifyContent="space-around" my={2} >
                    <Button variant="contained" color="primary" component={NavLink} to="/about/whoarewe" style={({isActive}) => ({
                    color: isActive ? 'red' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal'
                    })}>
                    Who are we?
                    </Button>
                    <Button variant="contained" color="primary" component={NavLink} to="/about/team" style={({isActive}) => ({
                    color: isActive ? 'red' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal'
                    })}>
                    Team
                    </Button>
                    <Button variant="contained" color="primary" component={NavLink} to="/about/vision" style={({isActive}) => ({
                    color: isActive ? 'red' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal'
                    })}>
                    Vision
                    </Button>

                    
                </Box>


                <Box>
                
    
 

                <Routes>
                    <Route path='whoarewe' element= {<Whothis />}/>  
                    <Route path='team' element= {<Team />}/>
                    <Route path='vision' element= {<Vision />}/>
                    </Routes>
                
                </Box>
                    
            
            </Box>
            
        </div>
    )
}