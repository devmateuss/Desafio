import React, { Component } from 'react'
import './RegisterAgents.css'
class RegisterAgentens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agents: [
                {
                    name: "Mateus Sousa",
                    departament: "Desenvolvimento"
                },
                {
                    name: "Douglas Junio",
                    departament: "Desenvolvimento"
                },
                {
                    name: "Ezequiel Ken",
                    departament: "Desenvolvimento"
                }
            ],

            registerAgent: false,
            registerDepartament: false
        }
    }

    validation

    render() {
        return (
            <div>
                <div className="subBar">
                    <h6 onClick={() => this.setState({ registerAgent: !this.state.registerAgent, registerDepartament: false })}
                    >Cadastrar funcionario</h6>
                    <h6 onClick={() => this.setState({ registerDepartament: !this.state.registerDepartament, registerAgent: false })}
                    >Cadastrar Departamento</h6>
                </div>
                {
                    this.state.registerAgent ? (
                        <div className="registerBar">
                            <input type="text" name="" id="" />
                            <select>
                                <option value="Departamento Pessoal">Departamento Pessoal</option>
                                <option value="Desenvolvimento">Desenvolvimento</option>
                                <option value="Recursos Humanos">Recursos Humanos</option>
                            </select>
                            <button>Cadastrar</button>

                        </div>
                    ) : null
                }
                {
                    this.state.registerDepartament ? (
                        <div className="registerBar">
                            <input type="text" name="" id="" />
                            <button>Cadastrar</button>

                        </div>
                    ) : null
                }
                <div className="fieldTitle">
                    <span className="title">Funcionario</span>
                    <span className="title">Departametno</span>
                </div>
                <div className="main">
                    {
                        this.state.agents.map(agent => {
                            return (
                                <div className="fieldBody">
                                    <div className="test" >
                                        <small id="name" className="field" >{agent.name}</small>
                                    </div>
                                    <div className="test" >
                                        <small className="field">{agent.departament}</small>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default RegisterAgentens