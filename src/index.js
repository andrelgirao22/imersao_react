import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import Home from './pages/Home'
import CadastroCategoria from './pages/cadastro/Categoria'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route component={() => (<div>Pagina 404</div>)} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);