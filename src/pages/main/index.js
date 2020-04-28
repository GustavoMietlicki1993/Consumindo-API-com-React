import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component{

    state = {
        livro:[],
        livroInfo: {},
    };
    componentDidMount(){
        this.loadProduts();
    }
    loadProduts = async () =>{
        const response = await api.get(`/livro`);

        this.setState({ livro: response.data});
    };
    
    render(){

        const {livro} =this.state;

        return <div className="livro-list">
            {livro.map(livro =>(
                <article key={livro.id}>
                    <strong>{livro.id}</strong>
                    <p>{livro.nome}</p>
                    <Link to={`livro/${livro.id}`}>Acessar</Link>
                </article>
            ))}
        </div>
    }
}