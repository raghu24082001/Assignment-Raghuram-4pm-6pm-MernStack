const Results = ({ partyData }) => {
  return (
    <div className="p-6">
      {partyData.map((p) => (
        <div key={p.name}>
          {p.name}: {p.votes}
        </div>
      ))}
    </div>
  );
};

export default Results;