import React from 'react';
import 'purecss/build/pure.css';
import '../css/descargar.css';

class Purec extends React.Component{
    render(){
        return(
            <div className='pure__container'>
                <a className="pure-button pure-button-primary" href="#">A Primary Button</a>
                <button className="pure-button pure-button-primary">A Primary Button</button>
                <button className="button-large button-success pure-button">Success Button</button>
                <table class="pure-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Make</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="pure-table-odd">
                            <td>1</td>
                            <td>Honda</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Toyota</td>
                        </tr>
                        <tr class="pure-table-odd">
                            <td>3</td>
                            <td>Hyundai</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Ford</td>
                        </tr>
                        <tr class="pure-table-odd">
                            <td>5</td>
                            <td>Nissan</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        );
    }
}

export default Purec;