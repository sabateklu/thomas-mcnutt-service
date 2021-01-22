import React from 'react';
import PropTypes from 'prop-types';

import Image from 'material-ui-image';
import { styled } from '@material-ui/core/styles';

const StyledImg = styled(Image)({
  height: '50px',
  width: '50px',
});

const MainAttraction = ({ mainAttraction }) => (
  <div>
    <h2>Get to know the area</h2>
    <div>
      <StyledImg src={mainAttraction.imageUrl} alt="A fantastic attraction" />
    </div>
    {mainAttraction.basicDescription}
    <div>
      {mainAttraction.name}
    </div>
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
    distanceFrom: PropTypes.string,
    basicDescription: PropTypes.string,
  }).isRequired,
};

export default MainAttraction;
