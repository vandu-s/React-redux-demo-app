import React, { useState } from 'react';
import { buyCake } from './redux';
import { addCake } from './redux';

import { connect } from 'react-redux';
const CakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h3>Number of cakes-{props.numOfCakes}</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    addCake: () => dispatch(addCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
