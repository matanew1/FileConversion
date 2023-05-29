import React from 'react';
import Footer from '../../footer/Footer'
import Header from '../../header/Header';
import Sidebar from '../../sidebar/Sidebar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <body>
                <header><Header/></header>
                <main>
                    <aside><Sidebar/></aside>
                    <section className="content">
                        <h1>Welcome to the Home Page</h1>
                        <div className="card">
                            <h2>Card 1</h2>
                            <p>This is the content of Card 1.</p>
                        </div>
                        <div className="card">
                            <h2>Card 2</h2>
                            <p>This is the content of Card 2.</p>
                        </div>
                        <div className="card">
                            <h2>Card 3</h2>
                            <p>This is the content of Card 3.</p>
                        </div>
                    </section>
                </main>
                <footer><Footer/></footer>
            </body>
        </div>
    );
};

export default Home;