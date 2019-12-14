import React, { useState, useReducer } from 'react';
import SideBar from './SideBar';
import Maps from './Maps';
const initialState = '';

const locationReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_LOCATION') {
    return action.payload;
  }
  return state;
};

const App = () => {
  const [location, changeLocation] = useReducer(locationReducer, initialState);
  const [open, setOpen] = useState(true);
  return (
    <div className="app">
      <SideBar
        open={open}
        location={location}
        changeLocation={changeLocation}
      />
      <button
        className={`open-close ${open ? '' : 'open'}`}
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <span
            className="icon icon-arrow-right
      "
          />
        ) : (
          <span
            className="icon icon-arrow-left
      "
          />
        )}
      </button>
      <Maps
        location={location}
        open={open}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        containerElement={
          <div
            className={`map-container ${!open ? 'open' : ''}`}
            style={{ height: `100vh` }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default App;
