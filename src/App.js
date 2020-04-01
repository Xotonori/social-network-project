import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
        </div>
    );
};

const Header = () => {
    return (
        <div className='Header'>
            <a href="">Home</a>
            <a href="">News Feed</a>
            <a href="">Messages</a>
        </div>
    )
};

const Technologies = () => {
    return (
        <div className="Technologies">
            <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
};

export default App;
