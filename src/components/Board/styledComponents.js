import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const boardColor = props => {
	const color = {0: '#F9E79F', 1: '#82E0AA', 2: '#85C1E9'};
	return color[props.id];
};

export const BoardCol = styled(Col)`
	padding: 10px;
	text-align: center;
	height: 100%;
	background-color: ${boardColor};
	}}
`;

export const CardList = styled.ul`
	list-style: none;
	margin: 0 10px 10px 10px;
	padding: 0;
`;
