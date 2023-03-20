import LocationPane from '../LocationPane';

function GlobalLocationPanes({ locations }) {
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
    </>
  );
}

export default GlobalLocationPanes;