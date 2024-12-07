const data = await getTickets();

// Make sure we have tickets needed for production build.
if (!data?.tickets) {
  return <p>No tickets.</p>;
}

const tickets = data.tickets;