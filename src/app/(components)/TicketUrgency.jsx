import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TicketUrgency = () => {
    return ( 
        <div className="flex justify-start align-baseline">
            <FontAwesomeIcon icon={faSquare} className="text-green-500" />
            <FontAwesomeIcon icon={faSquare} className="text-yellow-500"/>
            <FontAwesomeIcon icon={faSquare} className="text-orange-500"/>
            <FontAwesomeIcon icon={faSquare} className="text-red-500"/>
        </div>
        
    );
};

export default TicketUrgency;
    