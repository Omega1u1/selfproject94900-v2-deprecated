import { faCaretDown, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const Nav = () => {
    return (
        <nav className="flex justify-between bg-nav p-5">
            <div className="flex items-center space-x-5"> 
            <Link href={"/"}>
                <FontAwesomeIcon icon={faCaretDown} className="icon"/>
            </Link>
            <Link href="/Ticketing/new">
                <FontAwesomeIcon icon={faTicket} className="icon"/>
            </Link>
            </div>
            <div> 
            <p className= "text-default-text"> somethingsomething@kpmg.us?</p> 
            </div>
        </nav>
    );
};
export default Nav;