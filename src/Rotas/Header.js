import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home.js';
import Movies from '../Components/Movies.js';
import Series from '../Components/Series.js'
import * as S from '../styled.js';

export default class Header extends Component{
    render(){
        return(
            <BrowserRouter>
            <S.h1>Popcorn flix</S.h1>
            <nav>
                <S.Ul>
                    <S.Li>
                        <S.Links to='/'>Tela Inicial</S.Links>
                    </S.Li>
                    <S.Li>
                        <S.Links to='Movies'>Filmes</S.Links>
                    </S.Li>
                    <S.Li>
                        <S.Links to='Series'>Séries</S.Links>
                    </S.Li>
                </S.Ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Movies' element={<Movies />} />
                <Route path='/Series' element={<Series />} />
            </Routes>
            </BrowserRouter>
        );
    }
}