import { useEffect, useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModaleDeleteUser from "./ModalDeleteUser";
import TableUser from "./TableUser";
import TableUserPaginate from "./TableUserPaginate";
const ManagerUser = (props) => {
	const LIMIT_USER = 2;

	const [showHideModal, setShowHideModal] = useState(false);
	const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
	const [showModalViewUser, setShowModalViewUser] = useState(false);
	const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
	const [listUsers, setListUsers] = useState([]);
	const [dataUpdate, setDataUpdate] = useState({});
	const [dataDelete, setDataDelete] = useState({});
	const [pageCount, setPageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		// fetchListUsers();
		fetchListUsersPaginate(1);
	}, []);

	const fetchListUsers = async () => {
		let res = await getAllUsers();
		if (res.EC === 0) {
			setListUsers(res.DT);
		}
	};

	const fetchListUsersPaginate = async (page) => {
		let res = await getUserWithPaginate(page, LIMIT_USER);
		if (res.EC === 0) {
			console.log("res.dt = ", res.DT);
			setListUsers(res.DT.users);
			setPageCount(res.DT.totalPages);
		}
	};

	const handleClickBtnUpdate = (user) => {
		setShowModalUpdateUser(true);
		setDataUpdate(user);
	};

	const handleClickBtnView = (user) => {
		setShowModalViewUser(true);
		setDataUpdate(user);
	};
	const handleClickBtnDelete = (user) => {
		setShowModalDeleteUser(true);
		setDataDelete(user);
	};

	// const handleClick

	const resetUpdateData = () => {
		setDataUpdate();
	};

	return (
		<div className="manage-user-container">
			<div className="title">ManagerUser</div>
			<div className="users-content">
				<div className="btn-add-new">
					<button
						className="btn btn-primary"
						onClick={() => setShowHideModal(true)}
					>
						Add new Users
					</button>
				</div>
				<div className="table-users-container">
					{/* <TableUser /> */}

					<TableUserPaginate
						listUsers={listUsers}
						handleClickBtnUpdate={handleClickBtnUpdate}
						handleClickBtnView={handleClickBtnView}
						handleClickBtnDelete={handleClickBtnDelete}
						fetchListUsersPaginate={fetchListUsersPaginate}
						pageCount={pageCount}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
				<ModalCreateUser
					show={showHideModal}
					setShow={setShowHideModal}
					fetchListUsers={fetchListUsers}
					fetchListUsersPaginate={fetchListUsersPaginate}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
				<ModalUpdateUser
					show={showModalUpdateUser}
					setShow={setShowModalUpdateUser}
					fetchListUsers={fetchListUsers}
					dataUpdate={dataUpdate}
					resetUpdateData={resetUpdateData}
					fetchListUsersPaginate={fetchListUsersPaginate}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
				<ModalViewUser
					show={showModalViewUser}
					resetUpdateData={resetUpdateData}
					setShow={setShowModalViewUser}
					dataUpdate={dataUpdate}
				/>
				<ModaleDeleteUser
					show={showModalDeleteUser}
					setShow={setShowModalDeleteUser}
					dataDelete={dataDelete}
					fetchListUsers={fetchListUsers}
					fetchListUsersPaginate={fetchListUsersPaginate}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
};

export default ManagerUser;
