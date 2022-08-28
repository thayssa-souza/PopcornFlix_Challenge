import React, {Component, Components} from 'react';
import axios from 'axios';
import * as S from '../styled.js'

const MoviesApi = axios.create({
    baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=9b0b9533dfbf27fddfe8c3c68cb6f5eb&language=pt-BR&page=1'
})
console.log(MoviesApi)

export default class Movies extends Component{
    state = {
        movies: [],
    };

    componentDidMount(){
        this.getMovies();
    }

    getMovies = async () => {
        const answer = await MoviesApi.get();
        console.log(answer)

        const allMovies = answer.data.results.map((item) => {
            return{
                ...item,
                image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
            };
        });
        this.setState({
            movies: allMovies,
        });
        console.log(allMovies)
    };

    render(){
        return(
            <S.Section>
            {this.state.movies.map((item, index) => (
              <S.Div key={index}>
                <ul>
                  <S.Li>{item.title}</S.Li>
                </ul>
                <figure>
                  <S.img src={item.image} alt={item.title} />
                </figure>
              </S.Div>
            ))}
          </S.Section>
        );
    }
}