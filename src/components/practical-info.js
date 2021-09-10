import React from "react";

class PracticalInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			company: this.props.company || "",
			position: this.props.position || "",
			mainTasks: this.props.mainTasks || "",
			yearsWorked: this.props.yearsWorked || "",
			id: this.props.id,
			finalState: this.props.finalState || false,
		};
	}

	handleCompanyChange = (event) => {
		this.setState(
			{
				company: event.target.value,
			},
			this.sendData()
		);
	};

	handlePositionChange = (event) => {
		this.setState(
			{
				position: event.target.value,
			},
			this.sendData()
		);
	};

	handleMainTasksChange = (event) => {
		this.setState(
			{
				mainTasks: event.target.value,
			},
			this.sendData()
		);
	};

	handleYearsWorkedChange = (event) => {
		this.setState(
			{
				yearsWorked: event.target.value,
			},
			this.sendData()
		);
	};

	sendData = () => {
		this.props.parentCallback(this.state);
	};

	save = () => {
		this.setState(
			{
				finalState: true,
			},
			this.sendData
		);
	};

	edit = () => {
		this.setState({
			finalState: false,
		});
	};

	delete = () => {
		this.props.delCallback(this.state.id);
	};

	render() {
		if (this.state.finalState === false) {
			return (
				<form onSubmit={this.save}>
					<p>---------------------</p>
					<label htmlFor="company"></label>
					<input
						type="text"
						id="company"
						placeholder="Company"
						value={this.state.company}
						onChange={this.handleCompanyChange}
					/>

					<label htmlFor="position"></label>
					<input
						type="text"
						id="position"
						placeholder="Position"
						value={this.state.position}
						onChange={this.handlePositionChange}
					/>

					<label htmlFor="main-tasks"></label>
					<input
						type="text"
						id="main-tasks"
						placeholder="Main Tasks"
						value={this.state.mainTasks}
						onChange={this.handleMainTasksChange}
					/>

					<label htmlFor="years-worked"></label>
					<input
						type="text"
						id="years-worked"
						placeholder="Years Worked"
						value={this.state.yearsWorked}
						onChange={this.handleYearsWorkedChange}
					/>

					<input type="submit" value="Save" onClick={this.save} />
					<button type="button" onClick={this.delete}>
						Delete
					</button>
					<p>---------------------</p>
				</form>
			);
		} else if (this.state.finalState === true) {
			return (
				<div>
					<p>---------------------</p>
					<p>{this.state.company}</p>
					<p>{this.state.position}</p>
					<p>{this.state.mainTasks}</p>
					<p>{this.state.yearsWorked}</p>
					<button type="button" onClick={this.edit}>
						Edit
					</button>
					<button type="button" onClick={this.delete}>
						Delete
					</button>
					<p>---------------------</p>
				</div>
			);
		}
	}
}

export default PracticalInfo;
