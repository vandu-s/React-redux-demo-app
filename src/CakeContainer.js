import React from 'react';
import { buyCake } from './redux';
import { addCake } from './redux';

import { connect } from 'react-redux';
const CakeContainer = (props) => {
  return (
    <div>
      <h3>Number of cakes-{props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy Cakes</button>
      <button onClick={props.addCake}>ADD Cakes</button>
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
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
