import { useState } from 'react';

import { Button, Modal, Checkbox, FormControlLabel } from '@mui/material';

import {
	BackgroundRegisterModal,
	ButtonContainer,
	CheckboxContainer,
	CheckboxErrorContainer,
	RegisterModalContainer,
	RegisterModalFooter,
	RegisterModalHeader,
	RegisterModalHeaderButton,
	RegisterModalHeaderText,
	StyledRegisterForm,
	StyledTextField,
} from './styles';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function Register() {
	const [registerModal, setRegisterModal] = useState(false);

	const handleOpenRegisterModal = () => {
		setRegisterModal(true);
	};

	const handleCloseRegisterModal = () => {
		setRegisterModal(false);
	};

	const formSchema = yup.object().shape({
		name: yup.string().required('Name is required!'),
		email: yup
			.string()
			.required('Email is required!')
			.email('Email is not valid!'),
		password: yup
			.string()
			.required('Password is required!')
			.min(6, 'Password must have at least 6 characters!'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Password does not match!')
			.required('Password Confirm is required!'),
		acceptTerms: yup.boolean().isTrue('You must accept the terms of service!'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<Button onClick={handleOpenRegisterModal} variant="contained">
				Create account
			</Button>
			<Modal open={registerModal} onClose={handleCloseRegisterModal}>
				<BackgroundRegisterModal>
					<RegisterModalContainer>
						<RegisterModalHeader>
							<RegisterModalHeaderButton>
								<Button
									sx={{ minWidth: '5px' }}
									onClick={handleCloseRegisterModal}
									variant="text"
									color="secondary"
								>
									X
								</Button>
							</RegisterModalHeaderButton>
							<RegisterModalHeaderText>
								<p>Create account</p>
							</RegisterModalHeaderText>
						</RegisterModalHeader>
						<StyledRegisterForm id="form" onSubmit={handleSubmit(onSubmit)}>
							<StyledTextField
								error={errors.name?.message}
								helperText={errors.name?.message}
								{...register('name')}
								label="Name"
								placeholder="Please enter your full name"
								variant="outlined"
								color="secondary"
							/>
							<StyledTextField
								error={errors.email?.message}
								helperText={errors.email?.message}
								{...register('email')}
								label="Email"
								placeholder="Please enter your email"
								variant="outlined"
								color="secondary"
							/>
							<StyledTextField
								error={errors.password?.message}
								helperText={errors.password?.message}
								{...register('password')}
								color="secondary"
								type="password"
								label="Password"
								placeholder="Please enter your password"
								variant="outlined"
							/>
							<StyledTextField
								error={errors.confirmPassword?.message}
								helperText={errors.confirmPassword?.message}
								{...register('confirmPassword')}
								color="secondary"
								type="password"
								label="Confirm Password"
								placeholder="Please confirm your password"
								variant="outlined"
							/>
						</StyledRegisterForm>
						<CheckboxContainer>
							<FormControlLabel
								label="I accept Terms of Service"
								error={!!errors.acceptTerms}
								control={
									<Checkbox
										{...register('acceptTerms')}
										sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
									/>
								}
							/>
						</CheckboxContainer>
						<CheckboxErrorContainer>
							{errors.acceptTerms && <span>{errors.acceptTerms.message}</span>}
						</CheckboxErrorContainer>
						<ButtonContainer>
							<Button
								form="form"
								type="submit"
								//onClick={handleCloseRegisterModal}
								variant="contained"
							>
								Create account
							</Button>
						</ButtonContainer>
						<RegisterModalFooter>
							<p>Already have an account? Sign In</p>
							{/* TODO - descomentar quando tiver a parte de rotas */}
							{/*<Link to="/login">Already have an account? Sign In</Link>*/}
						</RegisterModalFooter>
					</RegisterModalContainer>
				</BackgroundRegisterModal>
			</Modal>
		</>
	);
}

export default Register;
