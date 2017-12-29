import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App headerTitle = "React Fundamental Final Test"/>, document.getElementById('root'));
registerServiceWorker();
