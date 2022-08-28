import React, {Component, Components} from 'react';
import axios from 'axios';
import * as S from '../styled.js'

const SeriesApi = axios.create({
    baseURL:
    'https://api.themoviedb.org/3/tv/popular?api_key=9b0b9533dfbf27fddfe8c3c68cb6f5eb&language=pt-BR&page=1'
})
console.log(SeriesApi)

export default class Series extends Component{
    state = {
        series: []
    };

    componentDidMount(){
        this.getSeries();
    }

    getSeries = async () => {
        const answerSeries = await SeriesApi.get();
        console.log(answerSeries)

        const allSeries = answerSeries.data.results.map((item) => {
            return{
                ...item,
                imageSeries: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
            };
        });
        this.setState({
            series: allSeries,
        });
        console.log(allSeries)
    };

    render(){
        return(
            <S.Section>
            {this.state.series.map((item, index) => (
              <S.Div key={index}>
                <ul>
                  <S.Li>{item.name}</S.Li>
                </ul>
                <figure>
                  <S.img src={item.imageSeries} alt={item.name} />
                </figure>
              </S.Div>
            ))}
          </S.Section>
        );
    }
}