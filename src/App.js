import React, { Component } from 'react';

import Header from './Header'
import Author from './Author'
import CurrentArticle from './CurrentArticle'
import Social from './Social'
import Ad from './Ad'
import Footer from './Footer'
import OtherArticles from './OtherArticles'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <Author />
        <CurrentArticle />
        
        <Social />
      </div>
      <Ad />

      <OtherArticles />
    </main>
    <Footer />
    

    
      </div>
    );
  }
}

export default App;
