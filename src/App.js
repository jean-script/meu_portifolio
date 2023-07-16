import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';

import ProjetosProvider from './contexts/Projects';

function App() {
  return (
    <BrowserRouter>
      <ProjetosProvider>
        <Header/>
        <HeaderMobile/>
        <RoutesApp/>
      </ProjetosProvider>
    </BrowserRouter>
  );
}

export default App;
