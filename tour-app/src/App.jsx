import React, { useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Our Tours</h1>
      <Gallery tours={tours} onRemoveTour={removeTour} />
      <button onClick={() => setTours([])}>Fetch new tours</button>
    </main>
  );
}

export default App;