import './App.css';
import Navbar from './components/navbar/Navbar';
import JobPosts from './pages/JobPosts/JobPosts';
import React from 'react';

function App() {
  return (
    <div className="md:container mx-auto px-4">
      <header className="App-header">
        <Navbar />
        <JobPosts />
      </header>
    </div>
  );
}

export default App;
