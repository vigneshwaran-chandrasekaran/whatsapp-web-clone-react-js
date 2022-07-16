import styled from 'styled-components';
import bgIcons from 'assets/images/bg-icons.png';

const Container = styled.div`
	width: 85%;
	padding-top: 1.25rem;
	margin: 0 auto;
	display: flex;
	z-index: 100;
	min-height: 95vh;
`;

const RightContainer = styled.div`
	/* display: none; */
	width: 70%;
	position: relative;
	background-image: url(${bgIcons});
	background-color: ${(props) => props.theme.colors.Alabaster};
	/* opacity: 0.5; */
`;

const Top = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* padding: 0 16px; */
	height: 62px;
	width: 100%;
	background-color: ${(props) => props.theme.colors.Cultured};
`;

const SectionTitle = styled.div`
	color: ${(props) => props.theme.colors.RichBlack};
	font-size: 16px;
`;

const SectionInfo = styled.div`
	color: ${(props) => props.theme.colors.SlateGray};
	font-size: 13px;
	padding-top: 5px;
`;

const Bottom = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 62px;
	width: 100%;
	background-color: ${(props) => props.theme.colors.Cultured};
`;

const BottomSearch = styled.input.attrs({
	type: 'text',
})`
	width: 83%;
	height: 42px;
	padding: 0 12px;
	margin: 5px 10px;
	border: 1px solid ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.Charcoal};
	border-radius: 8px;
	outline: none;
	font-size: 16px;
`;

export { Container, RightContainer, Top, SectionTitle, SectionInfo, Bottom, BottomSearch };
