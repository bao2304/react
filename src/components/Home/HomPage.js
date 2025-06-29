import { useSelector } from "react-redux";
import videoHomepage from "../../assets/video-homepage.mp4";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
	const navigate = useNavigate();
	return (
		<div className="homepage-container">
			<video autoPlay muted loop>
				<source src={videoHomepage} type="video/mp4" />
			</video>
			<div className="homepage-content">
				<div className="title-header">
					Get to know your customers with forms
				</div>
				<div className="title-content">
					Collect all the data you need to understand customers with forms
					designed to be refreshingly different.
				</div>
				<div className="title-start">
					{isAuthenticated === false ? (
						<button onClick={() => navigate("/login")}>
							Get started—it's free
						</button>
					) : (
						<button onClick={() => navigate("/users")}>Doing Quiz now</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
