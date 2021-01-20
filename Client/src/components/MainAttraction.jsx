import React from 'react';
import PropTypes from 'prop-types';

const MainAttraction = ({ mainAttraction }) => (
  <div>
    <h2>Get to know the area</h2>
    <div>
      <img src={mainAttraction.imageUrl} alt="A fantastic attraction" />
    </div>
    <div>
      {mainAttraction.name}
    </div>
    {/* <div>
      small description
    </div> */}
    <div>
      {mainAttraction.ratings.avg}
      {' '}
      {mainAttraction.ratings.total}
    </div>
    <div>
      {mainAttraction.description}
    </div>
    <div>
      {mainAttraction.price}
    </div>
    <div>
      more info
    </div>
  </div>
);

MainAttraction.propTypes = {
  mainAttraction: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    ratings: PropTypes.shape({
      avg: PropTypes.number,
      total: PropTypes.number,
    }),
  }).isRequired,
};

export default MainAttraction;
