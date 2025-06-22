import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { putUpdateNewUser } from "../../../services/apiService";
import _ from "lodash";
const ModalViewUser = (props) => {
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const { show, setShow, dataUpdate } = props;

	const handleClose = () => {
		setShow(false);
		setEmail("");
		setPassword("");
		setUsername("");
		setRole("");
		setImage("");
		setPreviewImage("");
		props.resetUpdateData();
	};
	// const handleShow = () => setShow(true);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [role, setRole] = useState("USER");
	const [image, setImage] = useState("");
	const [previewImage, setPreviewImage] = useState("");

	useEffect(() => {
		console.log("check efect", dataUpdate);
		if (!_.isEmpty(dataUpdate)) {
			setEmail(dataUpdate.email);
			setPassword(dataUpdate.password);
			setUsername(dataUpdate.username);
			setRole(dataUpdate.role);
			setImage("");
			if (dataUpdate.image) {
				setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
			}
		}
	}, [dataUpdate]);

	const handleUploadImage = (event) => {
		if (event.target && event.target.files && event.target.files[0])
			setPreviewImage(URL.createObjectURL(event.target.files[0]));
		setImage(event.target.files[0]);
	};
	const handleSubmitCreateUser = async () => {
		//validate
		const isValidEmail = validateEmail(email);
		if (!isValidEmail) {
			return toast.error("invalid email");
		}

		let data = await putUpdateNewUser(dataUpdate.id, username, role, image);
		if (data && data.EC === 0) {
			toast.success(data.EM);
			handleClose();
			await props.fetchListUsers();
		}
		if (data && data.EC !== 0) {
			toast.error(data.EM);
		}
	};
	console.log("check", props.dataUpdate);
	return (
		<>
			{/* <Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button> */}

			<Modal
				show={show}
				onHide={handleClose}
				size="xl"
				backdrop="static"
				className="modal-add-user"
			>
				<Modal.Header closeButton>
					<Modal.Title>View a Users</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="row g-3">
						<div className="col-md-6">
							<label className="form-label">Email</label>
							<input
								type="email"
								className="form-control"
								value={email}
								disabled={true}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Password</label>
							<input
								disabled={true}
								type="password"
								className="form-control"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>

						<div className="col-md-6">
							<label className="form-label">Username</label>
							<input
								type="text"
								className="form-control"
								value={username}
								onChange={(event) => setUsername(event.target.value)}
							/>
						</div>
						<div className="col-md-4">
							<label className="form-label">Role</label>
							<select
								className="form-select"
								onChange={(event) => setRole(event.target.value)}
							>
								<option value="USER">USER</option>
								<option value="ADMIN">ADMIN</option>
							</select>
						</div>
						<div className="col-md-12">
							<label className="form-label label-upload" htmlFor="labelUpload">
								Image
							</label>
							<input
								type="file"
								id="labelUpload"
								onChange={(event) => handleUploadImage(event)}
								hidden
							></input>
						</div>
						<div className="col-md-12 img-preview">
							{previewImage ? (
								<img src={previewImage} />
							) : (
								<span>preview Image</span>
							)}
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalViewUser;
