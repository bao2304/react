import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/Users/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomPage";
import ManagerUser from "./components/Admin/Content/ManageUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import Login from "./components/Auth/Login";
import { Bounce, ToastContainer, toast } from "react-toastify";
import App from "./App";
import Register from "./components/Auth/Register";
import ListQuiz from "./components/Users/ListQuiz";

const Layout = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="users" element={<ListQuiz />} />
				</Route>
				<Route path="/admins" element={<Admin />}>
					<Route index element={<DashBoard />} />

					<Route path="manage-users" element={<ManagerUser />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				// transition={Bounce}
			/>
			;
		</>
	);
};

export default Layout;
