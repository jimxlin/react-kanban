import { connect } from 'react-redux';
import { addCard } from '../actions';
import Card from '../components/Card';
import Board from '../components/Board';

const getBoardCards = (cards, boardId) => {
	return cards.filter(card => card.boardId === boardId);
};

const mapStateToProps = (state, ownProps) => {
	const board = state.boards.find(board => board.id === ownProps.id);
	return {
		name: board.name,
		cards: getBoardCards(state.cards, board.id)
	}
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addCard }, dispatch)
};

// const mapDispatchToProps = { addCard };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
