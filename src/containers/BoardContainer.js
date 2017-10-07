import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCard, moveCard, deleteCard } from '../actions';
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
	return bindActionCreators({
		addCard,
		moveCard,
		deleteCard
	}, dispatch);
};

// const mapDispatchToProps = { addCard, moveCard, deleteCard };

// TODO render all boards

const BoardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);

export default BoardContainer;
