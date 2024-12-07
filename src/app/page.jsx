import TicketInfo from "./(components)/TicketInfo";

const Dashboard = () => {
  return(
  <div className="p-5"> 
   <div className="grid gap-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"> 
      {[...Array(5)].map((_, i) => (
        <TicketInfo key={i} />
      ))}
    </div>
  </div>
    );
};

export default Dashboard;
