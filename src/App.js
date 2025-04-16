import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
const App = () => {
	return (
		<div className="App">
			<Header />
			<div>
				test
				<div>
					<button>
						<Link to={"/user"}> go to user page</Link>
					</button>
				</div>
				<div>
					<button>
						<Link to={"/admin"}> go to admin page</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
export default App;
