import styled from 'styled-components';
import {
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	typography,
} from 'styled-system';

const Box = styled.div`
	${space}
	${color}
	${layout}
	${background}
	${position}
	${grid}
	${border}
	${flexbox}
	${shadow}
	${typography}
	display: flex;
`;

export default Box;
