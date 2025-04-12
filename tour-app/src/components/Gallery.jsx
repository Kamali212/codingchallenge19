import React, {useState, useEffect} from "react";
import TourCard from "./Tourcard";

function Gallery() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

// Fetch tours from API
// Corrected by Co-Pilot
const fetchTours = async () => {
    try {
        const response = await fetch("https://www.course-api.com/react-tours-project");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTours(data);
        setLoading(false);
    } catch (error) {
        setError(true);
        setLoading(false);
    }
};
{/* Run fetchTours when mounted */}
useEffect(() => {  
    fetchTours();
} , []);

// Render loading state
if (loading) {
    return <h2>Loading...</h2>;
};
// Render error state
if (error) {
    return <h2>Something went wrong...</h2>;
};
if (tours.length === 0) {
    return (
        <>
            <h2>No tours available</h2>
            <button onClick={fetchTours}>Refresh</button>
        </>
    );
}
const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
};

return (
    <section className="gallery">
      {tours.map((tour) => {
        return (
          <TourCard
            key={tour.id}
            {...tour}
            onRemoveTour={removeTour}
          />
        );
      })}
    </section>
  );
}
export default Gallery;