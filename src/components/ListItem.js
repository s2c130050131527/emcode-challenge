import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
  return (
    <div
      className={`list-item${props.selected ? ' selected' : ''}`}
      onClick={props.changeSelected}
    >
      <div className="list-content">
        <span className="color">
          <span className={`circle ${props.item.color}`} />
        </span>
        <span className="name">
          {props.item.name}{' '}
          <span className="plate-num">{props.item.plateNumber}</span>
        </span>

        <span className="noti-box">
          {props.item.number && (
            <span className={`square ${props.item.color}`}>
              {props.item.number}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    latLong: PropTypes.string.isRequired,
    plateNumber: PropTypes.string,
    color: PropTypes.string,
    number: PropTypes.string,
  }),
  selected: PropTypes.bool.isRequired,
  changeSelected: PropTypes.func,
};

ListItem.defaultProps = {
  item: {
    name: 'Not Given',
    latLong: '0 0 0 0',
    plateNumber: '',
    color: 'grey',
    number: '',
  },
  selected: false,
  changeSelected: () => {},
};

export default ListItem;
