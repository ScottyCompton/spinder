import { connect } from 'react-redux';
import DemoComponent from './DemoComponent';
import { demoOperations } from './duck';

const mapStateToProps = state => {
  const { currentCount } = state.demo;
  return { currentCount }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const onIncrementClick = () => dispatch(demoOperations.incrementCount(1));
  const onDecrementClick = () => dispatch(demoOperations.decrementCount(1));
  
  return {
    onIncrementClick,
    onDecrementClick
  }
};

const DemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoComponent);

export default DemoContainer;