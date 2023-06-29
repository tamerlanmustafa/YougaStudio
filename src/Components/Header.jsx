import { Link} from "react-router-dom"


const Header = () => {
    return (
        <nav className="nav flex flex-jc-sa flex-ai-c">
            <Link to="/" > Home </Link>
            <Link to="/classes"> Classes </Link>
            <Link to="/blogs" > Blogs </Link>
            <Link to="/about" > About </Link>
            <Link to="/contact" > Contact </Link>
        </nav>
    );
}
 
export default Header;