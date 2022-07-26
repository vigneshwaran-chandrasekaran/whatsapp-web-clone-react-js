import styled from 'styled-components';
import { Image, Box, Flex } from 'components/atoms';
import status from 'assets/svg/status.svg';
import newChat from 'assets/svg/new-chat.svg';
import menu from 'assets/svg/menu.svg';
import { contacts } from 'helpers/static-data';
import { vigneshwaran } from 'helpers/images';
import { GetNotified, LeftSearch, Archived } from 'components/routes/home';

export default function LeftContainer() {
	return (
		<Container>
			<Top>
				<Flex justifyContent="space-between">
					<Image circle width={40} height={40} src={vigneshwaran} />
					<Box>
						<Image p="8px" width={24} height={24} src={status} />
						<Image p="8px" width={24} height={24} src={newChat} />
						<Image p="8px" width={24} height={24} src={menu} />
					</Box>
				</Flex>
			</Top>
			<GetNotified />
			<LeftSearch />
			<ContactList>
				<Archived />
				{contacts?.map((item) => (
					<Contact key={item?.id}>
						<Image circle width={49} height={49} src={item?.profilePic} />
						<Info>
							<Flex justifyContent="space-between">
								<ContactName>{item?.contactName}</ContactName>
								<Time>{item?.time || 'yesterday'}</Time>
							</Flex>
							<LastMessage title={item?.lastMessage}>{item?.lastMessage}</LastMessage>
						</Info>
					</Contact>
				))}
			</ContactList>
		</Container>
	);
}

const Container = styled.div`
	width: 30%;
`;

const Top = styled.div`
	padding: 10px 16px;
	background-color: ${(props) => props.theme.colors.Cultured3};
	border-right: 1px solid ${(props) => props.theme.colors.LightGray};
`;

const ContactList = styled.div`
	max-height: 73vh;
	background-color: ${(props) => props.theme.colors.white};
	overflow: auto;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		border: 5px solid #ccc;
	}
`;

const Contact = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 72px;
	cursor: pointer;
	img {
		padding: 0 15px 0 13px;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-top: 1px solid ${(props) => props.theme.colors.Cultured};
	width: 80%;
	height: 100%;
`;

const ContactName = styled.div`
	font-size: 17px;
	color: ${(props) => props.theme.colors.RichBlack};
	padding-bottom: 5px;
`;

const Time = styled.div`
	font-size: 12px;
	color: ${(props) => props.theme.colors.SlateGray};
`;

const LastMessage = styled.div`
	font-size: 14px;
	color: ${(props) => props.theme.colors.SlateGray};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-bottom: 2px;
`;
