import styled from 'styled-components';
import { Image } from 'components/atoms';
import filter from 'assets/svg/filter.svg';
import leftGreenArrow from 'assets/svg/left-green-arrow.svg';
import search from 'assets/svg/search.svg';

export default function LeftSearch() {
	return (
		<Container>
			<SearchBox>
				<Input placeholder="Search input textbox" type="text" />
			</SearchBox>
			<Image width={20} height={20} src={filter} alt="filter" />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	background-color: ${(props) => props.theme.colors.white};
`;

const SearchBox = styled.div`
	width: 100%;
	position: relative;

	&::before {
		content: ' ';
		background-image: url(${search});
		left: 15px;
		top: 7px;
		position: absolute;
		width: 24px;
		height: 24px;
		background-repeat: no-repeat;
		z-index: 10;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	&:hover {
		&::before {
			background-image: url(${leftGreenArrow});
		}
	}
`;

const Input = styled.input`
	width: 73%;
	border: 0;
	outline: none;
	background-color: ${(props) => props.theme.colors.Cultured3};
	border-radius: 8px;
	padding-right: 32px;
	padding-left: 65px;
	height: 35px;

	&::placeholder {
		font-size: 15px;
		color: ${(props) => props.theme.colors.Charcoal};
		line-height: 20px;
	}
`;
