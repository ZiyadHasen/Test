const FlightCard = ({ flight }) => {
  return (
    <div className='border p-4 mb-4 rounded shadow-md'>
      <h2 className='font-bold'>{flight.airline}</h2>
      <p>Price: ${flight.price}</p>
      <p>Departure: {flight.departureTime}</p>
      <p>Duration: {flight.duration}</p>
    </div>
  );
};

export default FlightCard;
