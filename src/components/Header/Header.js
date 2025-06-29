import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Header = (props) => {
	const account = useSelector((state) => state.user.account);
	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("login");
	};
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				{/* <Navbar.Brand href="#home">Shop Taycam</Navbar.Brand> */}
				<NavLink to="/" className="navbar-brand">
					Shoptaycam
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/users" className="nav-link">
							Users
						</NavLink>
						<NavLink to="/admins" className="nav-link">
							Admin
						</NavLink>

						{/* <Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#users">Users</Nav.Link>
						<Nav.Link href="#admin">Admin</Nav.Link> */}
					</Nav>

					<Nav>
						{isAuthenticated === false ? (
							<>
								<button className="btn btn-login" onClick={() => handleLogin()}>
									Login
								</button>
								<button className="btn btn-signup">Sign Up</button>
							</>
						) : (
							<NavDropdown title="Settings" id="basic-nav-dropdown">
								<NavDropdown.Item>Log out</NavDropdown.Item>
								<NavDropdown.Item>Profile</NavDropdown.Item>
							</NavDropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
