import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

import ProjetosProvider from './contexts/Projects';

function App() {
  return (
    <BrowserRouter>
      <ProjetosProvider>
        <Header/>
        <RoutesApp/>
        <Footer/>
      </ProjetosProvider>
    </BrowserRouter>
  );
}

export default App;
