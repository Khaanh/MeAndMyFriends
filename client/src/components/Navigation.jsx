import { NavLink, Outlet } from "react-router-dom";

const checkActive = ({ isActive }) => (isActive ? "is-active" : "");

const Navigation = () => {
	return (
		<>
			<header className="flex justify-center mt-8 mb-8">
				<nav>
					<li>
						<NavLink className={`${checkActive} mx-3 text-xl`} to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={`${checkActive} mx-3 text-xl`} to="about-me">
							About me
						</NavLink>
					</li>
					<li>
						<NavLink className={`${checkActive} mx-3 text-xl`} to="my-friends">
							My Friends
						</NavLink>
					</li>
					<li>
						<NavLink
							className={`${checkActive} mx-3 text-xl`}
							to="my-portfolio"
						>
							My Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink
							className={`${checkActive} mx-3 text-xl`}
							to="join-our-team"
						>
							Join Our Team
						</NavLink>
					</li>
				</nav>
			</header>
			<div className="container px-14">
				<Outlet />
			</div>
		</>
	);
};

export default Navigation;
