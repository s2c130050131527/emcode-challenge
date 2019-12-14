import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapData } from '../constants';
import ListItem from './ListItem';
const SideBar = props => {
  const [selectedVal, setVal] = useState(MapData[0].place);
  const [selectedPlace, setPlace] = useState(MapData[0].latLong);
  const [search, setSearch] = useState('');
  useEffect(() => {
    props.changeLocation({ type: 'CHANGE_LOCATION', payload: selectedPlace });
  });
  const items = MapData.filter(
    el =>
      el.name.toLowerCase().includes(search) ||
      (el.plateNumber && el.plateNumber.toLowerCase().includes(search))
  );
  return (
    <div className={`sidebar ${!props.open ? 'close' : ''}`}>
      <div className="search-container">
        <div className="search-box">
          <button type="button" className="search-clear-btn">
            <span className="icon icon-magnifier" />
          </button>
          <input
            placeholder="Search"
            className="search"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="list-container">
        <div className="list">
          {items.map((item, index) => {
            return (
              <ListItem
                key={item.name + index}
                item={item}
                selected={selectedVal === item.place}
                changeSelected={() => {
                  setVal(item.place);
                  setPlace(item.latLong);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool,
  location: PropTypes.string,
  changeLocation: PropTypes.func,
};

SideBar.defaultProps = {
  open: true,
  location: '',
  changeLocation: () => {},
};

export default SideBar;
