import { connect } from 'react-redux';
import Wall from '../components/Wall';

const mapStateToProps = state => {
  return {
    boards: state.boards
  }
};

const mapDispatchToProps = null;

const WallContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);

export default WallContainer;
