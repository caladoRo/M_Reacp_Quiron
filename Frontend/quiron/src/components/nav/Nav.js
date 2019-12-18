import {Link} from 'react-router-dom';
import React from 'react';
import '../nav/Nav.css';
import ImgRecap from '../../assets/img/recap_white.png'


function Nav(){
        return(
            <nav>
            <img src={ImgRecap}/>
                <div class="Links">
                    <Link to="">Home</Link>
                    <Link to="/listarmedico">Nossos Médicos</Link>
                    <Link to="/cadastrarmedico">Cadastrar Médico</Link>
                    <Link to="/listarpaciente">Nossos Pacientes</Link>
                    <Link to="/cadastrarpaciente">Cadastrar Pacientes</Link>
                </div>
            </nav>
        );                                                                                                                                                                
    }

export default Nav; 