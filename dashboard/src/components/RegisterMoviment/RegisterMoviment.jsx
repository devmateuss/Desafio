import React, { Component } from 'react'
import './RegisterMoviment.css'

class RegisterMoviment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moviments: [
                {
                    agent: "Mateus Sousa",
                    description: "Pagamento de contas atrasadas",
                    value: 300.22
                },
                {
                    agent: "Gabriela Rodrigues",
                    description: "Pagamento de de salarios",
                    value: 342.23
                },
                {
                    agent: "Rodrigues meneses",
                    description: "Pagamento de qualquer coisa",
                    value: 897.23
                }
            ],

            registerMoviment: false
        }
    }
    render() {
        return (
            <div className="container">
                <div className="subBar">
                    <h6 onClick={() => this.setState({ registerMoviment: !this.state.registerMoviment })}
                        id="moviment"
                    >Cadastrar Movimentação</h6>
                    <h6>Filtrar por Departamento</h6>
                </div>
                {
                    this.state.registerMoviment ? (
                        <div className="registerBar">
                            <input type="text" placeholder="Funcionário" name="" id="" />
                            <input type="text" placeholder="Descrição" name="" id="" />
                            <input type="text" placeholder="Valor" name="" id="" />
                            <button>Cadastrar</button>

                        </div>
                    ) : null
                }
                <div className="fieldTitle">
                    <span className="title">Funcionario</span>
                    <span className="title">Descrição</span>
                    <span className="title">Valor</span>
                </div>

                {
                    this.state.moviments.map(moviment => {
                        return (
                            <div className="fieldBody">
                                <div className="test" >
                                    <small id="name" className="field" >{moviment.agent}</small>
                                </div>
                                <div className="test" id="description" >
                                    <small className="descriptionText" >{moviment.description}</small>
                                </div>
                                <div className="test" >
                                    <small className="field" >{moviment.value}</small>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default RegisterMoviment 