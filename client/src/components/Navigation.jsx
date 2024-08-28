import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
	return (
		<header>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="about-me">About me</NavLink>
				<NavLink to="my-friends">My Friends</NavLink>
				<NavLink to="my-portfolio">My Portfolio</NavLink>
				<NavLink to="join-our-team">Join Our Team</NavLink>
			</nav>

			<div className="container px-14">
				<Outlet />
			</div>
		</header>
	);
};

export default Navigation;
