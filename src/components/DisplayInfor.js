import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

//stateless vs stateful

// class DisplayInfor extends React.Component{

//     render() {
//         console.log("Call me render")
//         const {listUsers} = this.props;
//         //props => viet gon properties
//         return(
//             <div className='display-infor-container'>
//                 {true &&
//                     <>
//                     {listUsers.map((user,index) => {
//                     return(

//                         <div key={user.id} className={+user.age >21 ?"green":"red"}>
//                             <div>My name is {user.name}</div>
//                             <div>My age is {user.age}</div>
//                             <div>
//                                 <button onClick={() => {this.props.handleDeleteUser(user.id)}}>Delete</button>
//                             </div>
//                         </div>
//                     )
//                 })}
//
//                         </>
//                 }

//             </div>

//         )
//     }
// }

const DisplayInfor = (props) => {
	const { listUsers } = props;

	const [isShowHideListUser, setShowHideUser] = useState(true);
	const handleShowHideUser = () => {
		setShowHideUser(!isShowHideListUser);
	};

	useEffect(() => {});

	return (
		<div className="display-infor-container">
			<div>
				<span onClick={() => handleShowHideUser()}>
					{isShowHideListUser === true ? "hide list" : "showlist"}
				</span>
			</div>
			{isShowHideListUser && (
				<>
					{listUsers.map((user, index) => {
						return (
							<div key={user.id} className={+user.age > 21 ? "green" : "red"}>
								<div>My name is {user.name}</div>
								<div>My age is {user.age}</div>
								<div>
									<button
										onClick={() => {
											props.handleDeleteUser(user.id);
										}}
									>
										Delete
									</button>
								</div>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
};

export default DisplayInfor;
