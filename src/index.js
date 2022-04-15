import ReactDOM from 'react-dom/client';
import React from 'react';

//Subcomponents
import { Landing } from './Screens/Landing';

const App = () => <Landing />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);