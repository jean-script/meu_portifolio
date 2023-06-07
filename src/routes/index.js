import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import ProjetosPage from '../pages/ProjetoPage';


function RoutesApp(){
    return (
        <Routes>
            <Route path='/' element={ <Home/> } />

            <Route path='/projeto/:id' element={ <ProjetosPage/> } />
            
        </Routes>
    )
}

export default RoutesApp;
