import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import ProjetosPage from '../pages/ProjetoPage';
import Erro from '../pages/Erro';
import Portifolio from '../pages/Portfolio';

function RoutesApp(){
    return (
        <Routes>
            <Route path='/' element={ <Home/> } />

            <Route path='/projeto/:id' element={ <ProjetosPage/> } />
            <Route path='/portfolio' element={ <Portifolio/> } />
            
            <Route path='*' element={ <Erro/> } />
        </Routes>
    )
}

export default RoutesApp;
