import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<Outlet />
			<nav>
				<NavLink to={"my-friends"}>MyFriends</NavLink>
			</nav>
		</div>
	);
};

export default Navigation;
