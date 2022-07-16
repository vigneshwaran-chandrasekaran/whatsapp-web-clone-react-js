import styled from 'styled-components';
import { Box, Flex, Image } from 'components/atoms';
import banner from 'assets/svg/banner.svg';
import lock from 'assets/svg/lock.svg';

export default function Info() {
	return (
		<Container>
			<Image width={360} height={200} src={banner} />
			<Flex mt="40px" alignItems="center">
				<Title>WhatsApp Web</Title>
				<New>NEW</New>
			</Flex>
			<Box mt="1rem">
				<SubTitle>
					Now send and receive messages without keeping your phone online.
				</SubTitle>
				<SubTitle>
					Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
				</SubTitle>
			</Box>
			<Encrypted>
				<Image width={10} height={12} src={lock} pr="5px" />
				<span>End-to-end encrypted</span>
			</Encrypted>
		</Container>
	);
}

const Container = styled.div`
	width: 70%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.Cultured2};
	border-bottom: 6px solid ${(props) => props.theme.colors.Malachite};
`;

const Title = styled.h1`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.Charcoal2};
`;

const New = styled.span`
	padding: 5px 8px;
	font-size: 2rem;
	color: ${(props) => props.theme.colors.SlateGray};
	font-size: 10px;
	font-weight: 700;
	background-color: ${(props) => props.theme.colors.Platinum};
	border-radius: 10px;
	margin-left: 12px;
`;

const SubTitle = styled.p`
	font-size: 14px;
	color: ${(props) => props.theme.colors.SlateGray};
	line-height: 20px;
	text-align: center;
`;

const Encrypted = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 40px;
	font-size: 14px;
	color: ${(props) => props.theme.colors.CadetGrey};
	line-height: 20px;
	text-align: center;
`;
