import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const eventDate = new Date('2024-11-06T18:30:00'); // Set the event date and time
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeRemaining() {
    const now = new Date();
    const difference = eventDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="App">
      <nav className="App-nav">
        <a href="#home">Home</a>
        <a href="#picture">Picture</a>
        <a href="#about">About Us</a>
      </nav>
      <header className="App-header">
        <h1>Mini Sports League 2024</h1>
        <p className="event-details">Think Tank 6 (1.408) | 6 November | 18:30 - 20:45</p>
        <p className="intro-message">
          ready to conquer the leaderboard and win big? <a href="https://forms.office.com/r/wP17jdj2Ep" target="_blank" rel="noopener noreferrer" className="join-link">Join us</a> for the Mini Sports League 2024 and bring your A-game!
        </p>
        <div className="countdown">
          <div className="time-unit">
            <p className="time-number">{timeRemaining.days}</p>
            <p className="time-label">Days</p>
          </div>
          <div className="time-unit">
            <p className="time-number">{timeRemaining.hours}</p>
            <p className="time-label">Hours</p>
          </div>
          <div className="time-unit">
            <p className="time-number">{timeRemaining.minutes}</p>
            <p className="time-label">Minutes</p>
          </div>
          <div className="time-unit">
            <p className="time-number">{timeRemaining.seconds}</p>
            <p className="time-label">Seconds</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;