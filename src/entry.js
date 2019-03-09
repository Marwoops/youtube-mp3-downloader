import React from 'react';
import ReactDOM from 'react-dom';

import Mod from './components/test.js'

const App = () => {
    return <div>
        <Mod />
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));