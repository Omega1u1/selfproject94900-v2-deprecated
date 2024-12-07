import TicketDeletion from "./TicketDeletion";
import TicketUrgency from "./TicketUrgency";
import TicketProgress from "./TicketProgress";
import TicketStatus from "./TicketStatus";
import TicketProgressIndicator from "./TicketProgressIndicator";


const TicketInfo = () => {
    return (
        <div className="flex flex-col bg-card hover:bg-card-hover shadow-lp pd-3 m-2"> 
        <div className="flex mb-3">
        <TicketUrgency />
        <h4> Insert Ticket Name Here </h4>
        <div className="ml-auto"> <TicketDeletion /> </div>

        </div>
        
         <hr className="h-px border-1 bg-page mb-2" />
        <p className="whitespace-pre-wrap">
                insert description here
        </p>
        <hr className="h-px border-1 bg-page mb-3" />
        <p className="whitespace-pre-wrap"></p>
        <TicketProgress />
        <hr className="h-px border-0 bg-page mb-1" />
        <TicketStatus />
        <div className="ml-auto flex items-grow">

        </div>
        <p className="text-s"> insert timestamp here </p>
        
        </div>
    );
};

export default TicketInfo;