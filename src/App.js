import React, { Component, lazy, Suspense } from 'react';
import Routes from './routes';

import './styles.css';

const Header = lazy(() => import('./Componentes/Header'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={
          <div>
            <span className="sr-only">Loading...</span>
          </div>
        }>

          <Header />
        </Suspense>
        <Routes />
      </div>
    );
  }
}
export default App;
