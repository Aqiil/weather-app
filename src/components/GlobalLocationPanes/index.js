import LocationPane from '../LocationPane';

function GlobalLocationPanes({ locations, onRemoveLastLocation, setLocations, setError }) {
  const handleRemoveLastLocation = () => {
    const newLocations = locations.slice(0, locations.length - 1);
    setLocations(newLocations);
    onRemoveLastLocation();
  };

  return (
    <>
      <div className='section'>
        <h3 className='inter-semi-bold'>Around The World</h3>
      </div>
      {locations.map((location, index) => (
        <div className='section' key={index}>
          <LocationPane {...location} />
        </div>
      ))}
      <div className='section'>
        <button onClick={handleRemoveLastLocation}>Delete Last Location</button>
      </div>
    </>
  );
}

export default GlobalLocationPanes;