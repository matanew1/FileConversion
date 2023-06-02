import React from 'react';
import Footer from '../../footer/Footer'
import Header from '../../header/Header';
import Sidebar from '../../sidebar/Sidebar';
import Content from './Content';
import './Home.css';

const Home = () => {
    return (
        <div>
            <header><Header /></header>
            <main>
                <aside><Sidebar /></aside>
                <div><Content /></div>
            </main>
            <footer><Footer /></footer>
        </div>
    );
};

export default Home;