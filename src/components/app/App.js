import React from 'react';
import './App.css';

import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div id="app">
      <header class="dark">
        <div id="background-container">
          <video id="background-video" muted loop autoPlay>
            <source src="background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="absolute-container">
          <div class="padding">
            <a href="/">LaLa</a>
            <nav id="menu">
              <a href="#">About</a>
            </nav>
            <div id="title-container">
              <h1>We are LaLa Family</h1>
            </div>
            </div>
          </div>
      </header>
      <section class="light">
        <div class="content-container">
          <h2>ABOUT LALA FAMILY</h2>
          <p>We are Korean.</p>
        </div>
      </section>
      <footer>
        <nav>
          <SocialIcon url="https://www.facebook.com/welalafamily" />
          <SocialIcon url="http://instagram.com/welalafamily" />
        </nav>
        COPYRIGHT 2019 © LALA FAMILY
      </footer>
    </div>
  );
}

export default App;
