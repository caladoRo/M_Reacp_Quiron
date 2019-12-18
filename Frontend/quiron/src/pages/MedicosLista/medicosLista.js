import React,{Component} from 'react';
import Nav from '../../components/nav/Nav';
import { unwatchFile } from 'fs';

class MedicosLista extends Component{
    constructor(){
        super();
        this.state = {
            lista: [],
            nome: "",
            crm: "",
            crmUf: ""
        };
    }

    componentDidMount(){
        this.listaAtt();
    }

    listaAtt = () =>{
        fetch('http://localhost:5000/api/medicos',{
            method: 'GET'
         })
             .then(response => response.json())
             .then(data => this.setState({lista: data}));
     }

    render(){
        return(
            <div>
              <Nav/>
              <h1>Nossos Médicos</h1>
              <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CRM</th>
                        <th>CRM-UF</th>
                    </tr>
                </thead>
                <tbody>
        
                    {this.state.lista.map(element =>{
                        return(
                            <tr key={element.idMedico}>
                                <td>{element.nome}</td>
                                <td>{element.crm}</td>
                                <td>{element.crmUf}</td>
                            </tr>
                        )
                    })}
                </tbody>
          </div>
        );
    }
}
export default MedicosLista;