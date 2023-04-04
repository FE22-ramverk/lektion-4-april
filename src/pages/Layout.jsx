import { NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

function Layout() {
    return (
        <>
            <ScrollToTop />
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                style={({ isActive }) => ({ color: isActive ? 'hotpink' : 'white' })}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                style={({ isActive }) => ({ color: isActive ? 'hotpink' : 'white' })}>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Layout;