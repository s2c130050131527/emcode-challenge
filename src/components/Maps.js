import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Maps = withGoogleMap(props => {
  // eslint-disable-next-line no-undef
  let latLong = props.location.split(' ').map(el => parseFloat(el));
  const mapRef = React.createRef();
  React.useEffect(() => {
    console.log(latLong);
    mapRef &&
      mapRef.current &&
      mapRef.current.panTo(new google.maps.LatLng(latLong[0], latLong[1]));
  }, [props.location]);
  return (
    <div className={`maps`}>
      <GoogleMap
        defaultZoom={8}
        ref={mapRef}
        defaultCenter={{ lat: latLong[0], lng: latLong[1] }}
      >
        <Marker position={{ lat: latLong[0], lng: latLong[1] }} />
      </GoogleMap>
    </div>
  );
});

Maps.propTypes = {
  location: PropTypes.string,
};

Maps.defaultProps = {
  location: '0 0',
};

const HotMap = props => {
  console.log(Maps);
  return <Maps {...props} />;
};

export default HotMap;
