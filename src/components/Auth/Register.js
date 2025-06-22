import { useState } from "react";
import "./Register.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { postCreateNewUser, postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
const Register = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [username, setUsername] = useState();
	const navigate = useNavigate();
	const handleRegister = async () => {
		let data = await postRegister(email, username, password);

		if (data && data.EC === 0) {
			toast.success(data.EM);
			navigate("/");
		}
		if (data && data.EC !== 0) {
			toast.error(data.EM);
		}
	};
	return (
		<>
			<div className="login-container">
				<div className="header">
					<span>Dont have a acount yet</span>
					<button>SignUp</button>
				</div>
				<div className="title col-4 mx-auto">HoiDanIT</div>
				<div className="welcome col-4 mx-auto">Hello whos this</div>
				<div className="content-form col-4 mx-auto">
					<div className="form-group">
						<label>Email</label>
						<input
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							type="email"
							className="form-control"
						/>
					</div>
					<div className="form-group ">
						<label>Username</label>
						<input
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							className="form-control"
						/>
					</div>{" "}
					<div className="form-group ">
						<label>Password</label>
						<input
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							type="password"
							className="form-control"
						/>
					</div>
					<span className="forgot-password">Forgot password ?</span>
					<div className="mx-auto">
						<button className="btn-submit" onClick={() => handleRegister()}>
							Login
						</button>
					</div>
					<div className="back">
						<span
							onClick={() => {
								navigate("/");
							}}
						>
							Go to Homepage
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default Register;
