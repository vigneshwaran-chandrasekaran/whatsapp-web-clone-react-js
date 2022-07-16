import styled, { css } from 'styled-components';
import { border, flexbox, grid, position, shadow, space } from 'styled-system';

const Image = styled.img.attrs((props) => ({
	src: props.src,
	'object-fit': props['object-fit'] ? props['object-fit'] : 'cover',
	height: props.height ? `${props.height}px` : 'auto',
	width: props.width ? `${props.width}px` : 'auto',
}))`
	${space}
	${position}
	${grid}
	${border}
	${flexbox}
	${shadow}
	${({ circle }) =>
		circle &&
		css`
			border-radius: 50%;
		`}
`;

export default Image;
