import React from "react";
import uniqid from "uniqid";
import GeneralInfo from "./components/general-info";
import EducationalInfo from "./components/educational-info";
import PracticalInfo from "./components/practical-info";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			generalInfo: {},
			educationalInfo: {
				details: {},
				id: uniqid(),
			},
			practicalInfo: {
				details: {},
				id: uniqid(),
			},
			allEducationalInfo: [],
			allPracticalInfo: [],
			preview: false,
		};

		this.handleSubmit.bind(this);
		this.callbackGeneral.bind(this);
		this.callbackEducational.bind(this);
		this.delEducationalInfo.bind(this);
	}

	callbackGeneral = (childData) => {
		this.setState({
			generalInfo: childData,
		});
	};

	callbackEducational = (childData) => {
		const findObject = this.state.allEducationalInfo.findIndex(
			(obj) => obj.id === childData.id
		);

		const arrayCopy = [...this.state.allEducationalInfo];
		let objCopy = { ...arrayCopy[findObject] };
		objCopy.details = childData;
		arrayCopy[findObject] = objCopy;

		this.setState({
			allEducationalInfo: arrayCopy,
		});
	};

	addEducationalInfo = () => {
		this.setState({
			allEducationalInfo: this.state.allEducationalInfo.concat(
				this.state.educationalInfo
			),
			educationalInfo: {
				details: {},
				id: uniqid(),
			},
		});
	};

	delEducationalInfo = (delItemId) => {
		const array = this.state.allEducationalInfo.filter(
			(item) => item.id !== delItemId
		);
		this.setState({
			allEducationalInfo: array,
		});
	};

	callbackPractical = (childData) => {
		const findObject = this.state.allPracticalInfo.findIndex(
			(obj) => obj.id === childData.id
		);

		const arrayCopy = [...this.state.allPracticalInfo];
		let objCopy = { ...arrayCopy[findObject] };
		objCopy.details = childData;
		arrayCopy[findObject] = objCopy;

		this.setState({
			allPracticalInfo: arrayCopy,
		});
	};

	addPracticalInfo = () => {
		this.setState({
			allPracticalInfo: this.state.allPracticalInfo.concat(
				this.state.practicalInfo
			),
			practicalInfo: {
				details: {},
				id: uniqid(),
			},
		});
	};

	delPracticalInfo = (delItemId) => {
		const array = this.state.allPracticalInfo.filter(
			(item) => item.id !== delItemId
		);
		this.setState({
			allPracticalInfo: array,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	showArray = () => {
		console.log(this.state.allPracticalInfo);
	};

	preview = () => {
		this.setState({
			preview: true,
		});
	};

	previewClose = () => {
		this.setState({
			preview: false,
		});
	};

	render() {
		if (this.state.preview === false) {
			return (
				<div>
					<GeneralInfo
						name={this.state.generalInfo.name}
						email={this.state.generalInfo.email}
						phoneNumber={this.state.generalInfo.phoneNumber}
						finalState={this.state.generalInfo.finalState}
						parentCallback={this.callbackGeneral}
					/>

					<h3>Educational Experience</h3>
					<button type="button" onClick={this.addEducationalInfo}>
						Add
					</button>
					{this.state.allEducationalInfo.map((info) => (
						<EducationalInfo
							key={info.id}
							id={info.id}
							school={info.details.school}
							study={info.details.study}
							year={info.details.year}
							finalState={info.details.finalState}
							parentCallback={this.callbackEducational}
							delCallback={this.delEducationalInfo}
						/>
					))}

					<h3>Practical Experience</h3>
					<button type="button" onClick={this.addPracticalInfo}>
						Add
					</button>
					{this.state.allPracticalInfo.map((info) => (
						<PracticalInfo
							key={info.id}
							id={info.id}
							company={info.details.company}
							position={info.details.position}
							mainTasks={info.details.mainTasks}
							yearsWorked={info.details.yearsWorked}
							finalState={info.details.finalState}
							parentCallback={this.callbackPractical}
							delCallback={this.delPracticalInfo}
						/>
					))}

					<br></br>
					<button onClick={this.preview}>Preview</button>
				</div>
			);
		} else if (this.state.preview === true) {
			return (
				<div>
					<h3>General Information</h3>
					<p>{this.state.generalInfo.name}</p>
					<p>{this.state.generalInfo.email}</p>
					<p>{this.state.generalInfo.phoneNumber}</p>

					<h3>Educational Information</h3>
					{this.state.allEducationalInfo.map((info) => (
						<div>
							<p>---------------------</p>
							<p>{info.details.school}</p>
							<p>{info.details.study}</p>
							<p>{info.details.year}</p>
							<p>---------------------</p>
						</div>
					))}

					<h3>Practical Information</h3>
					{this.state.allPracticalInfo.map((info) => (
						<div>
							<p>---------------------</p>
							<p>{info.details.company}</p>
							<p>{info.details.position}</p>
							<p>{info.details.mainTasks}</p>
							<p>{info.details.yearsWorked}</p>
							<p>---------------------</p>
						</div>
					))}

					<button onClick={this.previewClose}>Back</button>
				</div>
			);
		}
	}
}

export default App;
