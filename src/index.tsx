import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root') as HTMLElement;

const render = () => {
  ReactDOM.render(
    <App />,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}

render();

registerServiceWorker();
