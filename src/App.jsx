import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GeneralRoutes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  return (
    //o router não esta no arquivo de routes pois o header deve se manter em todas as rotas, e o header deve ter acesso as rotas (clciar no titulo para voltar a home e clicar no carrinho para acessar a página do carrinho)
    <Router>
      <Header />
      <GeneralRoutes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
