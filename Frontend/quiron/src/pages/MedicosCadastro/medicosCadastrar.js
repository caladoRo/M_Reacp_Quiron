import React,{Component} from 'react';
import Nav from '../../components/nav/Nav';
import '../../assets/css/cadastrar.css'
import Axios from 'axios';

class MedicosCadastrar extends Component{
    constructor(){
        super();
        this.state = {
            lista: [],
            nome : "",
            crm: "",
            crmUf: ""
        };
    }

    stateNome = (event) =>{
        this.setState({nome: event.target.value});
    }

    stateCrm = (event) =>{
        this.setState({crm: event.target.value});
    }
    
    stateCrmUf = (event) =>{
        this.setState({crmUf: event.target.value});
    }

    Cadastrar = (event) => {
        event.preventDefault();
       Axios.post("http://localhost:5000/api/medicos", {
           nome: this.state.nome,
           crm: this.state.crm,
           crmUf: this.state.crmUf,
       }).then(response => {
        if (response.status === 200){
            this.props.history.push('/listarmedico');
        }else{
            console.log("vish deu bosta");
        }})
       .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <Nav/>
                <h1>Cadastrar Médico</h1>
                <form>
                    <input className="input_maior" placeholder="Nome" onInput={this.stateNome} type="text"/>
                    <div className="juntos">
                    <input placeholder="CRM" onInput={this.stateCrm} type="text"/>
                    <input placeholder="CRM-UF" onInput={this.stateCrmUf} type="text"/>
                    </div>
                    <button onClick={this.Cadastrar} type="submit">CADASTRAR</button>
                </form>
            </div>
        );
    }
}
export default MedicosCadastrar;