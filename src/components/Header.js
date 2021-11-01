import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header className="flex items-center h-max  flex-wrap bg-light text-primary text-opacity-20 justify-between px py-4  ">
            <h2 className="flex-shrink-0">
                <Link to="/">FREE CV BUILDER</Link>
            </h2>
            <a href="https://www.theshawa.cf/about" className="font-bold flex-shrink-0 hover:text-primary" rel="noreferrer" target="_blank">By Theshawa Dasun</a>
        </header>
     );
}

export default Header;