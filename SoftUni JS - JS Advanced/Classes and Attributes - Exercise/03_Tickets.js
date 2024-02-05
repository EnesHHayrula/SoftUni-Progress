function solve(data, crit) {
  class Ticket {
    constructor(d, p, s) {
      this.destination = d;
      this.price = p;
      this.status = s;
    }
  }

  const clonedData = [...data];
  const splittedArrOfStr = clonedData.map((x) => x.split("|"));
  const ticketsLists = splittedArrOfStr.map(
    ([d, p, s]) => new Ticket(d, Number(p), s)
  );
  const sortedTickets = ticketsLists.sort((a, b) => {
    return typeof a[crit] === "number"
      ? a[crit] - b[crit]
      : a[crit].localeCompare(b[crit]);
  });
  return sortedTickets;
}

console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
console.log("-----------------------");
console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
