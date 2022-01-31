import React from 'react';
import ReactDOM from 'react-dom';
import List from './src/components/List';

export default function App() {
    return (
        <List></List>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}