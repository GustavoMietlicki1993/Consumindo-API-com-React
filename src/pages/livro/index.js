import React, { Component } from 'react';
import api from '../../services/api'
import './style.css';
export default class Livro extends Component {

    state = {
        livro: {},
    }
    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/livro/${id}`);

        this.setState({ livro: response.data});

    }
    render() {
        const { livro } = this.state;

        return(
            <div className="livro-info">
                <h1>{livro.id}</h1>
                <p>{livro.nome}</p>
            </div>
        )
    }
}