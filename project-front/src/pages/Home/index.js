import React from 'react';
import logo from '../../assets/magic.gif';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Worked like
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <Link className="goCrud" to="/user">
          <p>

            User CRUD (create, read, update, delete) example
          </p>
        </Link>
        <a
          className="App-link"
          href="https://github.com/leonklinke/nodejs-full-stack-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          boilerplate home
        </a>
      </header>
    </div>
  );
}

export default Home;
