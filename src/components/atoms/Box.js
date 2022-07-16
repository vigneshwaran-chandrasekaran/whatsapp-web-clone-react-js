import styled, { css } from 'styled-components';
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
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`}
`;

export default Box;
