import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

import Header from './components/Header';

import ProjetosProvider from './contexts/Projects';

function App() {
  return (
    <BrowserRouter>
      <ProjetosProvider>
        <Header/>
        <RoutesApp/>
      </ProjetosProvider>
    </BrowserRouter>
  );
}

export default App;
