import React from 'react';
import axios from 'axios'
import fileDownload from 'js-file-download'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/fontawesome-free-solid';

import 'purecss/build/pure.css';
import '../css/descargar.css';

function handleClick(){
    const url = 'http://localhost:5000/icon';
    const filename = 'Tour.png';
    axios.get(url, {
        responseType: 'blob',
    })
    .then((res) => {
        fileDownload(res.data, filename)
    })
  }
class Purec extends React.Component{
    
  
    render(){
        return(
            <div className='pure__container'>
                <div className="home__message__btn">
                    <button id="btn__download" className="pure-button"  onClick={handleClick}><FontAwesomeIcon icon={faDownload} className="icons"/>Descargar para Windows</button>
                </div>
                <table class="pure-table">
                    <thead>
                        <tr>
                            <th>Chat App</th>
                            <th>Other Chats Apps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="pure-table-odd">
                            <td>Prioriza la privacidad de los usuarios</td>
                            <td>Tienen acceso a tus datos personales</td>
                        </tr>
                        <tr>
                            <td>Mas simple y ligero</td>
                            <td>Son pesadas</td>
                        </tr>
                        <tr class="pure-table-odd">
                            <td>Mejor conexion con tus amigos</td>
                            <td>Aleja a tus amigos</td>
                        </tr>
                        <tr>
                            <td>Sin publicidad ni bots</td>
                            <td>Tienen bots</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        );
    }
}

export default Purec;