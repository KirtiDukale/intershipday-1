import { useState } from 'react'
import './App.css'

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
}

function validate(values) {
	const errors = {}

	if (!values.name.trim()) {
		errors.name = 'Name is required'
	}

	if (!values.email.trim()) {
		errors.email = 'Email is required'
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors.email = 'Enter a valid email address'
	}

	if (!values.password) {
		errors.password = 'Password is required'
	} else if (values.password.length < 6) {
		errors.password = 'Password must be at least 6 characters'
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = 'Please confirm your password'
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = 'Passwords do not match'
	}

	return errors
}

export default function App() {
	const [values, setValues] = useState(initialValues)
	const [errors, setErrors] = useState({})
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (event) => {
		const { name, value } = event.target

		setValues((currentValues) => ({
			...currentValues,
			[name]: value,
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const nextErrors = validate(values)
		setErrors(nextErrors)
		setSubmitted(false)

		if (Object.keys(nextErrors).length === 0) {
			setSubmitted(true)
			setValues(initialValues)
		}
	}

	const handleBlur = () => {
		setErrors(validate(values))
	}

	return (
		<main className="app-shell">
			<section className="form-card">
				<p className="eyebrow">React form validation</p>
				<h1>Validate a form in JSX</h1>
				<p className="subtitle">
					This example checks required fields, email format, password length,
					and matching confirmation.
				</p>

				<form className="form" onSubmit={handleSubmit} noValidate>
					<label className="field">
						<span>Name</span>
						<input
							type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="John Doe"
						/>
						{errors.name && <small className="error">{errors.name}</small>}
					</label>

					<label className="field">
						<span>Email</span>
						<input
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="john@example.com"
						/>
						{errors.email && <small className="error">{errors.email}</small>}
					</label>

					<label className="field">
						<span>Password</span>
						<input
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="At least 6 characters"
						/>
						{errors.password && (
							<small className="error">{errors.password}</small>
						)}
					</label>

					<label className="field">
						<span>Confirm password</span>
						<input
							type="password"
							name="confirmPassword"
							value={values.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Repeat your password"
						/>
						{errors.confirmPassword && (
							<small className="error">{errors.confirmPassword}</small>
						)}
					</label>

					<button type="submit">Submit</button>
				</form>

				{submitted && (
					<p className="success">Form submitted successfully.</p>
				)}
			</section>
		</main>
	)
}

