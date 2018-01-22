import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App 
text = "The very first chirp."

/>, document.getElementById('root'));
registerServiceWorker();
