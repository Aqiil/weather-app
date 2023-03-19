import LocationPane from '../LocationPane';

function GlobalLocationPanes() {
  return (
    <>
      <div className="section">
        <h3 className='inter-semi-bold'>Around The World</h3>
      </div>
      <div className="section">
        <LocationPane co='Kenya' loc='Narobi' time='10:35' temp='22' desc='clear sky'/>
      </div>
      <div className="section">
        <LocationPane co='Japan' loc='Tokyo' time='16:35' temp='17' desc='few clouds'/>
      </div>
      <div className="section">
        <LocationPane co='United States' loc='New York' time='02:35' temp='5' desc='shower rain'/>
      </div>
    </>
  );
}

export default GlobalLocationPanes;