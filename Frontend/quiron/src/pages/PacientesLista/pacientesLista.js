import React,{Component} from 'react';
import Nav from '../../components/nav/Nav';
import '../../assets/css/listar.css'

class PacientesLista extends Component{
    constructor(){
        super();
        this.state = {
            lista: [],
            nome : "",
            dataNascimento:"",
            cpf: "",
            idMedico:""
        };
    }
    componentDidMount(){
        this.listaAtt();
    }   

    listaAtt = () =>{
        fetch('http://localhost:5000/api/pacientes',{
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => this.setState({lista: data}));
    }
    
    render(){
        return(
            <div>
              <Nav/>
              <thead>
                    <h1>Nossos Pacientes</h1>
                    <tr>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>CPF</th>
                        <th>Médico responsável: </th>
                    </tr>
                </thead>
                <tbody>                 
                    {this.state.lista.map(element =>{
                        return(
                            <tr key={element.idPaciente}>
                                <td>{element.nome}</td>
                                <td>{element.dataNascimento}</td>
                                <td>{element.cpf}</td>
                                <td>{element.idMedicoNavigation.nome}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </div>
        );
    }
}
export default PacientesLista;