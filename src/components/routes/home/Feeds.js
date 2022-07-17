import styled from 'styled-components';
import { Flex } from 'components/atoms';

export default function Feeds() {
	return (
		<Container>
			<Basic>
				<Flex>
					<Message> Congrats everyone 🔥🔥</Message>
					<Time>9:34 PM</Time>
				</Flex>
			</Basic>
		</Container>
	);
}

const Container = styled.div`
	padding: 0 10%;
	margin-top: 65px;
`;

const Basic = styled.div`
	position: relative;
	display: inline-flex;
	padding: 6px 7px 8px 9px;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 5px;
	border-bottom: 0.5px solid #ccc;
`;

const Message = styled.div`
	color: ${(props) => props.theme.colors.RichBlack};
	font-size: 14px;
`;

const Time = styled.div`
	position: relative;
	padding-left: 1rem;
	bottom: -8px;
	font-size: 11px;
	color: ${(props) => props.theme.colors.SlateGray};
`;
