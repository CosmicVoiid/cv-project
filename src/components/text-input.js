import React from "react";

function TextInput(props) {
	return (
		<div>
			<input type="text" id={props.name} placeholder={props.name}></input>
			<br />
		</div>
	);
}

export default TextInput;
