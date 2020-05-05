import React, { Component } from 'react';
import api from '../../services/api'
import './style.css';

export default class Livro extends Component {

    state = {
        livro: {},

    }
    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/livro/${id}`);

        this.setState({ livro: response.data });
    }
    async deletar(idLivro) {
        const { id } = this.props.match.params;

        const response = await api.delete(`/livro/${id}`)

        this.setState({ livro: response.data });
    }
    async alterar(idLivro) {
        const { id } = this.props.match.params;

        const response = await api.put(`/livro/${id}`)

        this.setState({ livro: response.data });
    }
    render() {
        const { livro } = this.state;

        return (
            <div className="livro-info">
                <p><strong>Id: </strong>{livro.id}</p>
                <p><strong>Nome: </strong>{livro.nome}</p>
                <p><strong>Código: </strong> {livro.codigo}</p>
                <p><strong>Páginas: </strong> {livro.paginas}</p>
                <p><strong>Preço: </strong>{livro.preco}</p>

                <div className="navButtons">
                    <button onClick={() => this.deletar(livro.id)}>
                        Deletar
                    </button>
                    <button onClick={() => this.alterar(livro.id)}>
                        Alterar
                    </button>
                </div>
            </div>
        )
    }
}