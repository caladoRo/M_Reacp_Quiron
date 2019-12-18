import React,{Component} from 'react';
import Axios from 'axios';
import Nav from '../../components/nav/Nav';
import '../../assets/css/cadastrar.css'

class PacientesCadastrar extends Component{
    constructor(){
        super();
        this.state = {
            lista: [],
            medicos: [],
            nome : "",
            dataNascimento: "",
            cpf: "",
            idMedicoEscolhido: ""
        };
    }
    
    componentDidMount(){
        this.ListaMedicosSelect();
    }

    stateNome = (event) =>{
        this.setState({nome: event.target.value});
    }

    stateDataNascimento = (event) =>{
        this.setState({dataNascimento: event.target.value});
    }

    stateCpf = (event) =>{
        this.setState({cpf: event.target.value});
    }

    stateIdMedico = (event) =>{
        this.setState({idMedicoEscolhido: event.target.value});
    }

    ListaMedicosSelect = () =>{
        fetch('http://localhost:5000/api/medicos',{
            method: 'GET'
         })
             .then(response => response.json())
             .then(data => this.setState({medicos: data}));
     }

    Cadastrar = (event) => {
        event.preventDefault();
       Axios.post("http://localhost:5000/api/pacientes", {
           nome: this.state.nome,
           dataNascimento: this.state.dataNascimento,
           cpf: this.state.cpf,
           idMedico: this.state.idMedicoEscolhido
       }).then(response => {
        if (response.status === 200){
            this.props.history.push('/listarpaciente');
        }else{
            console.log("vish deu ruim");
        }})
       .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <Nav/>
                <h1>Cadastrar Paciente</h1>
                <form>
                    <input className="input_maior" placeholder="Nome" onInput={this.stateNome} type="text"/>
                    <div className="juntos">
                    <input placeholder="Data de Nascimento" onInput={this.stateDataNascimento} type="date"/>
                    <input placeholder="CPF" onInput={this.stateCpf} type="text"/>
                    </div>
                    <select value={this.state.idMedicoEscolhido} onChange={this.stateIdMedico}>
                        <option value='' selected disabled>Selecione um Médico</option>
                        {this.state.medicos.map(element => {
                            return(  
                                <option value={element.idMedico}>{element.nome}</option>
                                )
                            })}
                    </select>
                    <button onClick={this.Cadastrar} type="submit">CADASTRAR</button>
                </form>
            </div>
        );
    }
}

export default PacientesCadastrar;