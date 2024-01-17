// App.jsx
import React from 'react';
import FilmList from './components/FilmList';
import './index.css'
const filmData = [
    {
        "name": "Pán Prstenů",
        "writer": "Peter Jackson",
        "image": "./src/assets/panprstenu.png"
    },
    {
        "name": "Matrix",
        "writer": "Lana Wachowski, Lilly Wachowski",
        "image": "./src/assets/metrix.png"
    },
    {
        "name": "Já, legenda",
        "writer": "Francis Lawrence",
        "image": "./src/assets/jalegenda.png"
    },
];

const App = () => {
    return (
        <div>
            <FilmList filmData={filmData} />
        </div>
    );
};

export default App;
