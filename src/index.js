import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const libros = ['Hacking with React',
    'React Native Express',
    'Mastering Modular JavaScript',
    'Practical Modern JavaScript',
    'U&I with React',
    'Developing with Angular',
    'The Road to learn React',
    'React.js for the Visual Learner',
    'Recipes with Angular.js',
    'Exploring ES6',
    'What You Need to Know about JavaScript',
    'Object-Oriented JavaScript – Second Edition',
    'The JavaScript Way',
    'Thinking in JavaScript',
    'What You Need To Know About Node.js',
    'Angular 2 Succinctly']

ReactDOM.render(<App cantidad={10} libros={libros} />, document.getElementById('root'));
registerServiceWorker();
