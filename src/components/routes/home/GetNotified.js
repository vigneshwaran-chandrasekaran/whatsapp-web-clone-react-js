import styled from 'styled-components';
import { Image, Box } from 'components/atoms';
import bell from 'assets/svg/stop-notification-bell.svg';
import rightArrow from 'assets/svg/right-arrow.svg';

export default function GetNotified() {
	return (
		<Container>
			<Image width={48} height={48} src={bell} pr="5px" />
			<Box pl="1rem">
				<Title>Get notified of new messages</Title>
				<SubTitle>Turn on desktop notifications</SubTitle>
			</Box>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 13px 12px 14px 13px;
	background-color: ${(props) => props.theme.colors.CyanProcess};
	min-height: 62px;
`;

const Title = styled.div`
	font-size: 16px;
	line-height: 21px;
	color: ${(props) => props.theme.colors.RichBlack};
`;

const SubTitle = styled.div`
	position: relative;
	font-size: 14px;
	line-height: 19px;
	color: ${(props) => props.theme.colors.Gunmetal};
	margin-top: 5px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}

	&::after {
		content: ' ';
		background-image: url(${rightArrow});
		top: 4px;
		right: 20px;
		position: absolute;
		width: 8px;
		height: 12px;
		background-repeat: no-repeat;
	}
`;
