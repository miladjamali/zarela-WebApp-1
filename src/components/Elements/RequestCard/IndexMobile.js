import styled from 'styled-components';
import { Typography } from '../Typography';
import { GenericLinkButton } from '../Button';

export const RequestCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* background: linear-gradient(220.57deg, rgba(107, 230, 238, 0.15) -15.95%, rgba(64, 76, 189, 0.15) 107.46%); */
	background: white;
	border: 1px solid #C4C4C4;
	border-radius: 8px;
	padding: ${props => props.theme.spacing(1.7)} ${props => props.theme.spacing(1.4)} ${props => props.theme.spacing(1.4)};

	margin-bottom: 25px;
	/* &:not(:last-child){
		margin-bottom: 25px;
	} */
`;

export const HeaderLayout = styled.div`
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
`;

export const RequestNumber = styled.div`
	height: 26px;
  width:38px;
	margin-right: ${props => props.theme.spacing(1.5)};
  padding: 5px 10px;
  border-radius: 5px 5px 0 5px;
	font-weight: bold;
	background: linear-gradient(246.29deg, #3A68DE 12.69%, #3A68DE 100%);
	font-size: 15px;
	color: #FFFFFF;
	text-align: center;
`;
export const Title = styled.div`
	font-weight: 600;
	font-size: 14px; 
	line-height: 20px;
	color: ${props => props.theme.textPrimary};
`;

export const Description = styled.div`
  margin-top: ${props => props.theme.spacing(2)};
	flex: 1 0 100%;
	background: #EAF1FA;
	border-radius: 5px 5px 0 0;
	padding: ${props => props.theme.spacing(2)};
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
	text-align: justify;
	color: #121213;
`;

export const Timestamp = styled(Typography)`
	text-align: left;
	font-size: 9px;
	color: #858585;
	margin-left: ${props => props.theme.spacing(5)};
	margin-top: ${props => props.theme.spacing(0.5)};
`;

export const ProgressTrackerWrapper = styled.div`
	position: relative;
	top: -3px;
	width: 100%;
	height: 3px;
	overflow: visible;
`;
export const ProgressTrackerTrack = styled.div`
	height: 3px;
	background: rgba(123, 139, 178, 0.26);
	border-radius: 0;
`;

export const ProgressTrackerProcess = styled.div`
	position: absolute;
	left: 0;
	top: -1px;
	height: 5px;
	width: ${props => props.progress + '%' || '0%'};
	background: #3A68DE;
	border-radius: 0;
`;

export const Footer = styled.div`
	flex: 1 0 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-top: ${props => props.theme.spacing(2)};
`;

export const BiobitToDollarPair = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  align-self: self-start;
  width: fit-content;
`;

export const BadgeRow = styled.div`
	width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const BadgeLabel = styled.div`
	line-height: 1;
	font-size: 10px;
	font-weight: 700;
	white-space: normal;
	color: #121213;
`;

export const BiobitToDollarValue = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 0px;
  color: #3A68DE;
  margin-right: 2px;
  margin-left: 8px;
  white-space: nowrap;
	margin-left: ${props => props.noMargin ? props.theme.spacing(1) : props.theme.spacing(0.8)};
	white-space: nowrap;
`;

export const Hint = styled.div`
	font-weight: 300;
	font-size: 12px;
	line-height: 20px;
	color: #3A68DE;
	white-space: nowrap;
`;

export const ValueLabel = styled.div`
	line-height: 1;
	font-size: 12px;
	font-weight: 700;
	white-space: normal;
	padding-bottom: 2px;
	color: ${props => props.colored ? '#3A68DE' : props.theme.textPrimary};
`;

export const TokenValue = styled.div`
	font-weight: 600;
	font-size: 10px;
	line-height: 20px;
	color: ${props => props.theme.textPrimary};
	margin-right: 3px;
`;

export const ContributorBadge = styled(BiobitToDollarPair)`
	align-self: center;
`;

export const Bookmark = styled.img`
	width: 20px;
	align-self: flex-start;
	margin-left: ${props => props.theme.spacing(0.5)};
`;

export const TokenIcon = styled.img`
	flex:0 0 14px;
	height: 14px;
	margin-right: ${props => props.theme.spacing(0.5)};
`;

export const ContributorsIcon = styled.img`
	width: 13px;
	height: 12px;
	margin-right: ${props => props.theme.spacing(0.5)};
`;

export const Spacer = styled.div`
	flex: 1;
`;

export const Divider = styled.div`
	height: 18px;
	background: #121213;
	width: 1px;
	margin: 0 ${props => props.theme.spacing(1)};
  align-self: self-start;
`;

export const JoinButton = styled(GenericLinkButton)`
	margin: 0;
  height: fit-content;
  align-self: self-start;
  content-self: self-end;
  position: absolute;
  right: 33px;

  
	& > * {
		color: #7246D0;
    font-size: 10px;
    padding: 7px 17px;
    margin-bottom: 2px;
	}
`;

export default RequestCardWrapper;
export {
	// Avatar,
	// Bookmark,
	// Description,
	Typography,
	// ProgressLayout,
	// TokenIcon,
	// Spacer,
	// AvatarImage,
	// HeaderLayout
};