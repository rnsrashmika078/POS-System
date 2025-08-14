import { Outlet, Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            {/* <h1 className='flex bg-red-500'>Electron + React Router</h1> */}
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}
