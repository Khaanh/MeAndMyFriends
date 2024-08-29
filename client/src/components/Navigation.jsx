import { NavLink, Outlet } from "react-router-dom";

const checkActive = ({ isActive }) => (isActive ? "is-active" : "");

const Navigation = () => {
	return (
		<>
			<header className="flex justify-center mt-8 mb-36">
				<nav className="flex list-none">
					<li className="">
						<NavLink className="mx-3 text-xl" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className="mx-3 text-xl" to="about-me">
							About me
						</NavLink>
					</li>
					<li>
						<NavLink className="mx-3 text-xl" to="my-friends">
							My Friends
						</NavLink>
					</li>
					<li>
						<NavLink className="mx-3 text-xl" to="my-portfolio">
							My Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink className="mx-3 text-xl" to="join-our-team">
							Join Our Team
						</NavLink>
					</li>
				</nav>
			</header>
			<div className="container mx-auto px-3">
				<Outlet />
			</div>
		</>
	);
};

export default Navigation;
