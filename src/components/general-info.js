import React from "react";

class GeneralInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name || "",
			email: this.props.email || "",
			phoneNumber: this.props.phoneNumber || "",
			finalState: this.props.finalState || "false",
		};
	}

	handleNameChange = (event) => {
		this.setState(
			{
				name: event.target.value,
			},
			this.sendData
		);
	};

	handleEmailChange = (event) => {
		this.setState(
			{
				email: event.target.value,
			},
			this.sendData
		);
	};

	handleNumberChange = (event) => {
		this.setState(
			{
				phoneNumber: event.target.value,
			},
			this.sendData
		);
	};

	sendData = () => {
		this.props.parentCallback(this.state);
	};

	save = (event) => {
		event.preventDefault();
		this.setState(
			{
				finalState: "true",
			},
			this.sendData
		);
	};

	edit = () => {
		this.setState({
			finalState: "false",
		});
	};

	render() {
		if (this.state.finalState === "false") {
			return (
				<div>
					<h3>General Information</h3>
					<form onSubmit={this.save}>
						<label htmlFor="name"></label>
						<input
							type="text"
							id="name"
							placeholder="name"
							value={this.state.name}
							onChange={this.handleNameChange}
							required
						></input>
						<label htmlFor="email"></label>
						<input
							type="email"
							id="email"
							placeholder="email"
							value={this.state.email}
							onChange={this.handleEmailChange}
							required
						></input>
						<label htmlFor="phone-number" />
						<input
							type="tel"
							id="phone-number"
							placeholder="phone-number"
							pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
							value={this.state.phoneNumber}
							onChange={this.handleNumberChange}
							required
						></input>
						<button type="submit">Save</button>
					</form>
				</div>
			);
		} else if (this.state.finalState === "true") {
			return (
				<div>
					<h3>General Information</h3>
					<p>{this.state.name}</p>
					<p>{this.state.email}</p>
					<p>{this.state.phoneNumber}</p>
					<button onClick={this.edit}>Edit</button>
				</div>
			);
		}
	}
}

export default GeneralInfo;
