import styled from 'styled-components';
import { Image } from 'components/atoms';
import archive from 'assets/svg/archive.svg';

export default function Archived() {
	return (
		<Container>
			<Image width={18} height={18} src={archive} p="0 1rem" />
			<Title>Archived</Title>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 13px 12px 14px 13px;
	background-color: ${(props) => props.theme.colors.white};
	cursor: pointer;
`;

const Title = styled.div`
	font-size: 17px;
	font-weight: 400;
	line-height: 21px;
	color: ${(props) => props.theme.colors.RichBlack};
	padding-left: 1rem;
`;
