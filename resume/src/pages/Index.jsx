import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="resume-container">
      <Header />
      <main className="main-content">
        <Introduction />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
