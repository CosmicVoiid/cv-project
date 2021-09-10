import React from "react";

// function educationalInfo() {
// 	return (
// 		<div>
// 			<label htmlFor="school" />
// 			<input type="text" id="school" placeholder="school"></input>
// 			<label htmlFor="study" />
// 			<input type="text" id="study" placeholder="Area of Study"></input>
// 			<label htmlFor="year" />
// 			<input type="text" id="year" placeholder="Year"></input>
// 		</div>
// 	);
// }

class EducationalInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			school: this.props.school || "",
			study: this.props.study || "",
			year: this.props.year || "",
			id: this.props.id,
			finalState: this.props.finalState || false,
		};
	}

	handleSchoolChange = (event) => {
		this.setState({
			school: event.target.value,
		});
	};

	handleStudyChange = (event) => {
		this.setState({
			study: event.target.value,
		});
	};

	handleYearChange = (event) => {
		this.setState({
			year: event.target.value,
		});
	};

	sendData = () => {
		this.props.parentCallback(this.state);
	};

	delete = () => {
		console.log(this.props.id);
		this.props.delCallback(this.state.id);
	};

	save = (event) => {
		event.preventDefault();
		this.sendData();
		this.setState(
			{
				finalState: true,
			},
			this.sendData
		);
	};

	edit = () => {
		this.setState(
			{
				finalState: false,
			},
			this.sendData
		);
	};

	render() {
		console.log(this.state);
		if (this.state.finalState === false) {
			return (
				<form onSubmit={this.save}>
					<div>---------------------</div>
					<label htmlFor="school"></label>
					<input
						type="text"
						id="school"
						placeholder="school"
						value={this.state.school}
						onChange={this.handleSchoolChange}
					></input>
					<label htmlFor="study"></label>
					<input
						type="text"
						id="study"
						placeholder="study"
						value={this.state.study}
						onChange={this.handleStudyChange}
					></input>
					<label htmlFor="year" />
					<input
						type="text"
						id="year"
						placeholder="year"
						value={this.state.year}
						onChange={this.handleYearChange}
					></input>
					<button type="submit">Save</button>
					<button type="button" onClick={this.delete}>
						Delete
					</button>
					<div>---------------------</div>
				</form>
			);
		} else if (this.state.finalState === true) {
			return (
				<div>
					<div>---------------------</div>
					<p>{this.state.school}</p>
					<p>{this.state.study}</p>
					<p>{this.state.year}</p>
					<button onClick={this.edit}>Edit</button>
					<button onClick={this.delete}>Delete</button>
					<div>---------------------</div>
				</div>
			);
		}
	}
}

export default EducationalInfo;
