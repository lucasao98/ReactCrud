import React, { Component } from 'react';
import Main from '../template/Main';
import axios from 'axios';

const headerProps = {
    icon: 'address-book',
    title: 'Cadastro'
}

const baseUrl = 'http://localhost:3001/players';
const initialState = {
    player: { nome:'', idade:'', posicao:'', pernaboa:'', cidade:'', caracteristicas:'', nomeresponsavel:'', email:'' },
    list: []
}

export default class UserCrud extends Component{
    state = { ...initialState };

    limpar(){
        this.setState({ player: initialState.player });
    }

    salvar(){
        const player = this.state.player;
        axios.post(baseUrl,player)
        .then(resp =>{
            const list = this.UpdateList(resp.data);
            this.setState({ player: initialState.player, list })
        });
    }

    alterar(){
        const player = this.state.player;
        const url = `${baseUrl}/${player.id}`;
        axios.put(url, player)
        .then(resp => {
            const list = this.UpdateList(resp.data);
            this.setState({ player: initialState.player, list })
        });
    }

    UpdateList(user){
        const list = this.state.list.filter(u=>u.id !== user.id);
        list.unshift(user);
        
        return list;
    }

    updateField(event){
        const player = {...this.state.player };
        player[event.target.name] = event.target.value;
        this.setState({ player });
    }

    renderForm(){
        return(
            <div className="form">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input className="ml-2" type="text" name="nome"
                        placeholder="Digite o nome" value={this.state.player.nome}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Idade</label>
                        <input className="ml-2" type="text" name="idade"
                        placeholder="Digite a idade" value={this.state.player.idade}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <label className="mr-2">Posição em Campo</label>
                    <div className="btn-group btn-group-toogle" data-toogle="buttons">
                        <label className="btn btn-primary">
                            <input type="radio" name="posicao" value="Goleiro" onChange={e=>this.updateField(e)}/>GL
                        </label>
                        <label className="btn btn-warning">
                        <input type="radio" name="posicao" value="Zagueiro" onChange={e=>this.updateField(e)}/>ZG  
                        </label>
                        <label className="btn btn-success">
                        <input type="radio" name="posicao" value="Meio-Campo" onChange={e=>this.updateField(e)}/>MC  
                        </label>
                        <label className="btn btn-danger">
                        <input type="radio" name="posicao" value="Atacante" onChange={e=>this.updateField(e)}/>AT
                        </label>
                            
                    </div>
                </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group border border-dark">
                        <label className="ml-2">Perna Boa</label><br/>
                        <input className="ml-2" type="radio" name="pernaboa" value="Esquerda" onChange={e=>this.updateField(e)} /> Esquerda
                        <input className="ml-2" type="radio" name="pernaboa" value="Direita" onChange={e=>this.updateField(e)}/>Direita
                        </div>
                    </div>    

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input className="ml-2" type="text" name="cidade" value={this.state.player.cidade} onChange={e=>this.updateField(e)} placeholder="Digite a Cidade..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="mb-2">Caracteristicas</label>
                            <input className="ml-2" type="text" name="caracteristicas" value={this.state.player.caracteristicas} onChange={e=>this.updateField(e)}
                            placeholder="Digite as Caracteristicas..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Responsável</label>
                            <input className="ml-2" type="text" name="nomeresponsavel" value={this.state.player.nomeresponsavel} onChange={e=>this.updateField(e)}
                            placeholder="Responsavel..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input className="ml-2" type="text" name="email" value={this.state.player.email} onChange={e=>this.updateField(e)}
                            placeholder="Email..." />
                        </div>

                        <div className="col-12 col-md-6">
                        <div className="btn-group">
                            <button className="btn btn-success"
                            onClick={e=>this.salvar()}>
                                Salvar
                            </button>

                            <button className="btn btn-danger ml-2"
                            onClick={e=>this.limpar()}>
                                Limpar
                            </button>
                        </div>
                    </div>
                    
                    </div>

                </div>
        )
    }


    render(){
        return(
           <Main {...headerProps}>
            {this.renderForm()}
            </Main>
        )
    }
}