import React from 'react';
import ReactDOM from 'react-dom';

import Downloader from './components/downloader.js'

const App = () => {
    return <div>
        <h1>YouTube Downloader</h1>
        <Downloader />
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));