import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

const cards = [
  {
    title: 'Login',
    content: ['Login'],
  },
  {
    title: 'Register',
    content: ['Register'],
  },
  {
    title: 'Dashboard',
    content: ['Dashboard'],
  },
  {
    title: 'Profile',
    content: ['Profile'],
  },
  {
    title: 'Acceptable File Format',
    content: ['RAR', 'ZIP'],
  },
];

const Content = () => {
  return (
    <div className="container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h1>{card.title}</h1>
          <br />
          {card.content.length > 1 ? (
            <ul>
              {card.content.map((item, index) => (
                <li key={index}>
                  <label>{item}</label>
                </li>
              ))}
            </ul>
          ) : (
            <nav>
              <ul>
                <li>
                  <Link to={`/${card.content[0].toLowerCase()}`}>
                    {card.content[0]}
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      ))}
    </div>
  );
};

export default Content;
