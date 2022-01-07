import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {

    constructor(props){
        super(props);

        this.state = {
            moedaA_valor:"",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        let cotacao;

        switch(this.props.moedaB){
            case "USD": 
                cotacao = 0.1762021;
                break;
            case "ARS":
                cotacao = 18.33;
                break;
            case "CLP": 
                cotacao = 147.02;
                break;
            case "COP":
                cotacao = 718.95;
                break;
            case "UYU": 
                cotacao = 7.94;
                break;
            case "BOB":
                cotacao = 1.22;
                break;
        }
        
        let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2);
        this.setState({ moedaB_valor });

        
    }

    render(){
        return(
            <div className='conversor'>
                <h2 className='valor'>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2 className='valor'>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}