import ButtonBanner from '../buttonBanner/ButtonBanner';
import './Form.scss';
import natural from '/natural.jpeg';
import { useForm } from 'react-hook-form';

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className='Form container'>
			<div className="form-bg">
				<h1>5% off on the first order</h1>
				<div className="row-form">
					<div className="img-container">
						<img src={natural} alt="" />
					</div>

					<form
						onSubmit={handleSubmit((data) => {
							console.log(data);
						})}
					>
						<input
							type="text"
							{...register('UserName', {
								required: "This field is required",
								minLength: {
									value: 3,
									message: 'Username must be at least 3 characters long',
								},
								maxLength: {
									value: 20,
									message: 'Username must be no more than 20 characters',
								},
							})}
							placeholder="Name"
						/>
						{errors.UserName && (
							<span style={{ color: 'white' }}>{errors.UserName.message}</span>
						)}

						<input
							placeholder="Phone number"
							type="tel"
							{...register('PhoneNumber', {
								required: 'This field is required',
								pattern: {
									value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i,
									message: 'Enter a valid phone number',
								},
							})}
						/>
						{errors.PhoneNumber && (
							<span style={{ color: 'white' }}>
								{errors.PhoneNumber.message}
							</span>
						)}
						<input
							placeholder="Email"
							type="email"
							{...register('Email', {
								required: 'This field is required',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
									message: 'Enter a valid email address',
								},
							})}
						/>
						{errors.Email && (
							<span style={{ color: 'white' }}>{errors.Email.message}</span>
						)}
						<ButtonBanner className="ButtonBanner" title="Get a discount" />
					</form>
				</div>
			</div>
		</div>
	);
}
