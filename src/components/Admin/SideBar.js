import "react-pro-sidebar/dist/css/styles.css";

import {
	ProSidebar,
	Menu,
	MenuItem,
	SubMenu,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from "react-pro-sidebar";

import {
	FaTachometerAlt,
	FaGem,
	FaList,
	FaGithub,
	FaRegLaughWink,
	FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";

const SideBar = (props) => {
	const { image, collapsed, toggled, handleToggleSidebar } = props;
	return (
		<>
			<ProSidebar
				image={sidebarBg}
				collapsed={collapsed}
				toggled={toggled}
				breakPoint="md"
				onToggle={handleToggleSidebar}
			>
				<SidebarHeader>
					<div
						style={{
							padding: "24px",
							textTransform: "uppercase",
							fontWeight: "bold",
							fontSize: 14,
							letterSpacing: "1px",
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						Hoi Dan IT
					</div>
				</SidebarHeader>

				<SidebarContent>
					<Menu iconShape="circle">
						<MenuItem
							icon={<FaTachometerAlt />}
							suffix={<span className="badge red">New</span>}
						>
							dashboard
							<Link to="/admins" />
						</MenuItem>

						{/* <MenuItem icon={<FaGem />}> components </MenuItem> */}
						<Menu iconShape="circle">
							<SubMenu icon={<FaGem />} title={"ChucNang"}>
								<MenuItem>
									{" "}
									QuanLy User
									<Link to="/admins/manage-users" />
								</MenuItem>
								<MenuItem> 2</MenuItem>
								<MenuItem> 3</MenuItem>
							</SubMenu>
						</Menu>
					</Menu>
					<Menu iconShape="circle">
						<SubMenu
							suffix={<span className="badge yellow">3</span>}
							icon={<FaRegLaughWink />}
						>
							<MenuItem> 1</MenuItem>
							<MenuItem> 2</MenuItem>
							<MenuItem> 3</MenuItem>
						</SubMenu>
					</Menu>
				</SidebarContent>

				<SidebarFooter style={{ textAlign: "center" }}>
					<div
						className="sidebar-btn-wrapper"
						style={{
							padding: "20px 24px",
						}}
					>
						<a
							href="https://github.com/azouaoui-med/react-pro-sidebar"
							target="_blank"
							className="sidebar-btn"
							rel="noopener noreferrer"
						>
							<FaGithub />
							<span
								style={{
									whiteSpace: "nowrap",
									textOverflow: "ellipsis",
									overflow: "hidden",
								}}
							>
								viewSource
							</span>
						</a>
					</div>
				</SidebarFooter>
			</ProSidebar>
		</>
	);
};

export default SideBar;
