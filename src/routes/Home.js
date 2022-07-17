import React from 'react';
import { Image, Box, Flex } from 'components/atoms';
import * as S from 'components/routes/Home.styles';
import smile from 'assets/svg/smile.svg';
import pin from 'assets/svg/pin.svg';
import voice from 'assets/svg/voice.svg';
import searchIcon from 'assets/svg/search-icon-big.svg';
import menu from 'assets/svg/menu.svg';
import groupIcon from 'assets/images/11-group.jpg';
// import { Info, LeftContainer } from 'components/routes/home';
import { LeftContainer, Feeds } from 'components/routes/home';

const title = '✨💥 🌟 11 Stars 🌟 ✨💥';
const users = 'Ajay, Arnold, Arnold, Clinton, Croni, Gnana, Kiruba, Mani, Suli, Thamu, You';

console.log('user', users);

export default function Home() {
	return (
		<S.Container>
			<LeftContainer />
			{/* <Info /> */}
			<S.RightContainer>
				<S.Top>
					<Flex alignItems="center">
						<Image ml="1rem" circle width={40} height={40} src={groupIcon} />
						<Box pl="1rem">
							<S.SectionTitle>{title}</S.SectionTitle>
							<S.SectionInfo>{users}</S.SectionInfo>
						</Box>
					</Flex>
					<Flex>
						<Image p=".5rem" width={26} height={26} src={searchIcon} />
						<Image p=".5rem" width={26} height={26} src={menu} />
					</Flex>
				</S.Top>
				<Feeds />
				<S.Bottom>
					<Image p=".5rem" width={26} height={26} src={smile} />
					<Image p=".5rem" width={24} height={24} src={pin} />
					<S.BottomSearch placeholder="Type a message" />
					<Image p=".5rem" width={24} height={24} src={voice} />
				</S.Bottom>
			</S.RightContainer>
		</S.Container>
	);
}
