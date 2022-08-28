import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home.js';
import Movies from '../Components/Movies.js';
import Series from '../Components/Series.js'
import * as S from "../styled.js";

export default class Body extends Component{
    render(){
        return(
            <div>
                <Movies />
                <Series />
            </div>
        )
    }
}