import React, { useState } from "react";

// class AddUserInfor extends React.Component {
// 	state = {
// 		name: "Le Bao",
// 		address: "1 NB",
// 		age: 18,
// 	};

// 	handleOnChangeInput = (event) => {
// 		this.setState({
// 			name: event.target.value,
// 		});
// 	};

// 	handleOnChangeAge = (event) => {
// 		this.setState({
// 			age: event.target.value,
// 		});
// 	};

// 	handleOnSubmit = (event) => {
// 		event.preventDefault();
// 		console.log(this.state);
// 		this.props.handleAddNewUser({
// 			id: "hardcode",
// 			name: this.state.name,
// 			age: this.state.age,
// 		});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				My name is {this.state.name} My age is {this.state.age}
// 				<button
// 					onClick={(event) => {
// 						this.handleClick(event);
// 					}}
// 				>
// 					Click Me
// 				</button>
// 				<form
// 					onSubmit={(event) => {
// 						this.handleOnSubmit(event);
// 					}}
// 				>
// 					<label>Your name:</label>
// 					<input
// 						value={this.state.name}
// 						type="text"
// 						onChange={(event) => this.handleOnChangeInput(event)}
// 					/>
// 					<button>submit</button>

// 					<label>Your age:</label>
// 					<input
// 						value={this.state.age}
// 						type="text"
// 						onChange={(event) => this.handleOnChangeAge(event)}
// 					/>
// 					<button>submit</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

const AddUserInfor = (props) => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("1nczz");
	const [age, setAge] = useState("");

	const handleOnChangeInput = (event) => {
		setName(event.target.value);
	};

	const handleOnChangeAge = (event) => {
		setAge(event.target.value);
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state);
		props.handleAddNewUser({
			id: "hardcore",
			name: name,
			age: age,
		});
	};

	return (
		<div>
			My name is {name} My age is
			{age}
			{/* <button
				onClick={(event) => {
					handleClick(event);
				}}
			>
				Click Me
			</button> */}
			<form
				onSubmit={(event) => {
					handleOnSubmit(event);
				}}
			>
				<label>Your name:</label>
				<input
					value={name}
					type="text"
					onChange={(event) => handleOnChangeInput(event)}
				/>
				<button>submit</button>

				<label>Your age:</label>
				<input
					value={age}
					type="text"
					onChange={(event) => handleOnChangeAge(event)}
				/>
				<button>submit</button>
			</form>
		</div>
	);
};

export default AddUserInfor;
