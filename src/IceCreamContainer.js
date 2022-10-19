import React from 'react';
import { buyIcecream } from './redux';

import { connect } from 'react-redux';
const CakeContainer = (props) => {
  return (
    <div>
      <h3>Number of IceCream-{props.numberOfIceCream}</h3>
      <button onClick={props.buyIcecream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
