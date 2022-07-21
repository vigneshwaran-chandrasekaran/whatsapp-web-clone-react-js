/* eslint-disable sonarjs/no-identical-functions */
import styled from 'styled-components';
import randomColor from 'randomcolor';
import { Flex } from 'components/atoms';
import bgIcons from 'assets/images/bg-icons.png';
import { messages } from 'helpers/static-data';

export default function Feeds() {
	return (
		<Container>
			{messages?.map((item) => (
				<Basic key={item?.id}>
					<Flex>
						<Number color={randomColor({ luminosity: 'dark' })}>{item?.number}</Number>
						<Name>~{item?.name}</Name>
					</Flex>
					<Flex>
						<Message>{item?.message}</Message>
						<Time>{item?.time}</Time>
					</Flex>
				</Basic>
			))}
			{messages?.map((item) => (
				<Basic key={item?.id}>
					<Flex>
						<Number color={randomColor({ luminosity: 'dark' })}>{item?.number}</Number>
						<Name>~{item?.name}</Name>
					</Flex>
					<Flex>
						<Message>{item?.message}</Message>
						<Time>{item?.time}</Time>
					</Flex>
				</Basic>
			))}
			{messages?.map((item) => (
				<Basic key={item?.id}>
					<Flex>
						<Number color={randomColor({ luminosity: 'dark' })}>{item?.number}</Number>
						<Name>~{item?.name}</Name>
					</Flex>
					<Flex>
						<Message>{item?.message}</Message>
						<Time>{item?.time}</Time>
					</Flex>
				</Basic>
			))}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10%;
	background-color: ${(props) => props.theme.colors.Alabaster};
	max-height: 82vh;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		border: 5px solid #ccc;
	}

	&::after {
		content: '';
		background-image: url(${bgIcons});
		width: 98%;
		opacity: 0.4;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
	}
`;

const Basic = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 6px 7px 8px 9px;
	margin-top: 1rem;
	width: fit-content;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 5px;
	border-bottom: 0.5px solid #ccc;
`;

const Message = styled.div`
	color: ${(props) => props.theme.colors.RichBlack};
	font-size: 14px;
	line-height: 19px;
`;

const Time = styled.div`
	position: relative;
	padding-left: 1rem;
	bottom: -10px;
	font-size: 11px;
	color: ${(props) => props.theme.colors.SlateGray};
`;

const Number = styled.div`
	color: ${(props) => (props.color ? props.color : randomColor({ luminosity: 'dark' }))};
	font-size: 14px;
	line-height: 22px;
`;

const Name = styled.div`
	color: rgba(17, 27, 33, 0.4);
	font-size: 12.8px;
	line-height: 22px;
	padding-left: 10px;
`;
