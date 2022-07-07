import styled from 'styled-components';
import * as muiStyles from '@mui/material/styles';
import { TextField } from '@mui/material';

export const BackgroundRegisterModal = styled.div`
	padding: 10px;
	width: 100vw;
	height: 100vh;
	margin: auto;
	top: 0;
	left: 0;
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
`;

export const RegisterModalContainer = styled.div`
	width: 100%;
	max-width: 350px;
	max-height: 635px;
	display: flex;
	flex-direction: column;
	background: white;
	border-radius: 10px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: fixed;
`;

export const RegisterModalHeader = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

export const RegisterModalHeaderButton = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	flex-direction: row;
	justify-content: end;
	padding: 10px 20px 0px 0px;
`;

export const RegisterModalHeaderText = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	flex-direction: row;
	justify-content: start;
	color: #3d97b4;
	font-weight: bolder;
	font-size: 1.5rem;
	padding: 0 0 0px 20px;
`;

export const StyledRegisterForm = styled.form`
	width: 100%;
	display: flex;
	padding: 0px 20px;
	gap: 10px;
	flex-direction: column;
	align-items: center;
`;

export const CheckboxContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	color: #3d97b4;
	margin-top: 10px;
`;

export const CheckboxErrorContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	color: #d32f2f;
	font-size: 0.8rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 10px;

	button {
		width: 90%;
		height: 50px;
		text-transform: capitalize;
		font-size: 1rem;
	}
`;

export const RegisterModalFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 0.95rem;
	color: #3d97b4;
	margin-top: 20px;
	margin-bottom: 10px;
`;

export const StyledTextField = muiStyles.styled(TextField)`
width:100%;
`;
