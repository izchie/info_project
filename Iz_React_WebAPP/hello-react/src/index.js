import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //นำ App.js มาใช้
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Logo from './Logo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Logo />,
    document.getElementById('iLogo'), //มา Render ใส่ Root
  );
ReactDOM.render(
    <App />,
    document.getElementById('iApp'), //มา Render ใส่ Root
  );
ReactDOM.render(
    <Header />,
    document.getElementById('iHeader'), //มา Render ใส่ Root
  );
ReactDOM.render(
    <Content />,
    document.getElementById('iContent'), //มา Render ใส่ Root
  );
ReactDOM.render(
    <Footer />,
    document.getElementById('iFooter'), //มา Render ใส่ Root
  );

registerServiceWorker();
