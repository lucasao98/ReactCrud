import React,{ Component } from 'react';
import Main from '../template/Main';
import axios from 'axios';
import './Lista.css';

const headerProps = {
    icon:'user',
    title: 'Jogadores da Base'
}

const baseUrl = 'http://localhost:3001/players';
const initialState = {
    player: { nome:'', idade:'', posicao:'', pernaboa:'', cidade:'', caracteristicas:'', nomeresponsavel:'', email:'' },
    list: []
}

export default class Lista extends Component{
    state = { ...initialState };

    componentWillMount(){
        axios(baseUrl).then(resp=>{
            this.setState({ list:resp.data })
        });
    }

    updateField(event){
        const player = {...this.state.player };
        player[event.target.name] = event.target.value;
        this.setState({ player });
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

    UpdateList(player, add = true){
        const list = this.state.list.filter(u=>u.id !== player.id);
        if(add) list.unshift(player);
        
        return list;
    }

    renderForm(){
        return(
        <div className="form d-block">
            <div className="col-12 col-md-6 float-left">
                <div className="form-group">
                    <label className="d-inline">Nome</label>
                    <input className="ml-2" type="text" name="nome" value={this.state.player.nome}
                    onChange={e=>this.updateField(e)}/>
                </div>
            </div>

            <div className="col-12 col-md-6 float-right">
                    <div className="form-group">
                        <label>Idade</label>
                        <input className="ml-2" type="text" name="idade"
                        value={this.state.player.idade}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md-6 float-left">
                    <div className="form-group">
                        <label>Posição</label>
                        <input className="ml-2" type="text" name="posicao" value={this.state.player.posicao}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md-6 float-right">
                    <div className="form-group">
                        <label>Perna Boa</label>
                        <input className="ml-2" type="text" name="pernaboa" value={this.state.player.pernaboa}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md-6 float-left">
                    <div className="form-group">
                        <label>Cidade</label>
                        <input className="ml-2" type="text" name="cidade" value={this.state.player.cidade}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md-6 float-right">
                    <div className="form-group">
                        <label>Caracteristicas</label>
                        <input className="ml-2" type="text" name="caracteristicas" value={this.state.player.caracteristicas}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md-6 float-left">
                    <div className="form-group">
                        <label>Responsável</label>
                        <input className="ml-2" type="text" name="nomeresponsavel" value={this.state.player.nomeresponsavel}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

                <div className="col-12 col-md-6 float-right">
                    <div className="form-group">
                        <label>Email</label>
                        <input className="ml-2" type="text" name="email" value={this.state.player.email}
                        onChange={e=>this.updateField(e)}/>
                    </div>
                </div>

        </div>
        )
    }

    load(player){
        this.setState({ player });
    }

    remove(player){
        axios.delete(`${baseUrl}/${player.id}`).then(resp=>{
            const list = this.UpdateList(player, false);
            this.setState({ list });
        });
    }

    renderTable(){
        return(
            <table className="table mt-4 table-dark">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Posição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(player =>{
            return(
                <tr key={player.id}>
                    <td>{player.nome}</td>
                    <td>{player.idade}</td>
                    <td>{player.posicao}</td>
                    <td>
                        <button className="btn btn-primary" onClick={()=>this.load(player)}>
                            <i className="fa fa-pencil"></i>
                        </button>

                        <button className="btn btn-danger ml-2" onClick={()=>this.remove(player)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
   
    render(){
        console.log(this.state.list);
        return(
            <Main {...headerProps}>
                    {this.renderForm()}
                    {this.renderTable()}
            </Main>
        )
    }

}
   