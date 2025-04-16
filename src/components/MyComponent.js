import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers:[
//             {id:    1,name:"Hoi DanIt", age:"30"},
//             {id:    2,name:"le123", age:"31"},
//             {id:    3,name:"bao", age:"20"},
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [...this.state.listUsers,userObj]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers:listUsersClone
//         })
//     }

//     //DRY: dont repeat yoursefl
//     //JSX
//     render() {
//         return(
//             <>
//                 <div className="a">
//                     <AddUserInfor
//                     handleAddNewUser = {this.handleAddNewUser}

//                     />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser = {this.handleDeleteUser}
//                     />
//                 </div>

//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }
const MyComponent = (props) => {
	const [listUsers, setListUsers] = useState([
		{ id: 1, name: "Le Bao", age: 17 },
		{ id: 2, name: "Le A", age: 27 },
		{ id: 3, name: "Le BC", age: 47 },
	]);

	const handleAddNewUser = (userObj) => {
		setListUsers([userObj, ...listUsers]);
	};

	const handleDeleteUser = (userId) => {
		let listUsersClone = listUsers;
		listUsersClone = listUsersClone.filter((item) => item.id !== userId);
		setListUsers(listUsersClone);
	};

	//DRY: dont repeat yoursefl
	//JSX

	return (
		<>
			<div className="a">
				<AddUserInfor handleAddNewUser={handleAddNewUser} />
				<DisplayInfor
					listUsers={listUsers}
					handleDeleteUser={handleDeleteUser}
				/>
			</div>

			<div className="b"></div>
		</>
	);
};

export default MyComponent;
