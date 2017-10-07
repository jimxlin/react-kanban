import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';
import { moveCard, deleteCard } from '../actions';
import Card from '../components/Card';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
	return {
		bindActionCreators({ moveCard, deleteCard }, dispatch)
		// Equivalenty:
		// moveCard: (id, direction) => dispatch(moveCard(id, direction));
		// deleteCard: id => dispatch(deleteCard(id));
	}
};

// const mapDispatchToProps = {
// 	moveCard,
// 	deleteCard
// }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Card);
