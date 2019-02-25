import React, { Component } from 'react'
import './Main.css'

class MainContent extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="main">
                    <h1 className="salutation">Seja Bem vindo ao sistema de Cadastros da Lalink</h1>
                    <h3>Selecione alguma opção</h3>
                </div>
            </div>
        );
    }
}

export default MainContent