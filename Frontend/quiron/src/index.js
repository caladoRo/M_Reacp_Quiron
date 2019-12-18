import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MedicosCadastro from './pages/MedicosCadastro/medicosCadastrar';
import MedicosLista from './pages/MedicosLista/medicosLista';
import PacientesLista from './pages/PacientesLista/pacientesLista';
import PacientesCadastro from './pages/PacientesCadastro/pacientesCadastrar';



const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/listarmedico' component={MedicosLista}/>
                <Route path='/cadastrarmedico' component={MedicosCadastro}/>
                <Route path='/listarpaciente' component={PacientesLista}/>
                <Route path='/cadastrarpaciente' component={PacientesCadastro}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
