/* eslint-disable sonarjs/no-duplicate-string */
import styled from 'styled-components';
import randomColor from 'randomcolor';
import { Flex } from 'components/atoms';

const messages = [
	{
		id: 1,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Congrats everyone 🔥🔥',
		time: '9:34 PM',
	},
	{
		id: 2,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Tq so much Everyone for your lovable wishes ♥️😍',
		time: '9:34 PM',
	},
	{
		id: 3,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Happy Birthday 🎉 sir',
		time: '9:34 PM',
	},
	{
		id: 4,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Absolutely true 🙏',
		time: '9:34 PM',
	},
	{
		id: 5,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Thank you everyone for your lovely wishes 🙂🙏',
		time: '9:34 PM',
	},
	{
		id: 6,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Happy happy birthday 🎂🎉 kumar ji',
		time: '9:34 PM',
	},
	{
		id: 7,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Congrats everyone 🔥🔥',
		time: '9:34 PM',
	},
	{
		id: 8,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Congrats everyone 🔥🔥',
		time: '9:34 PM',
	},
	{
		id: 9,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Congrats everyone 🔥🔥',
		time: '9:34 PM',
	},
	{
		id: 10,
		number: '+91 78969 11111',
		name: 'James',
		message: 'Congrats everyone 🔥🔥',
		time: '9:34 PM',
	},
];

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
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10%;
	margin-top: 65px;
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
