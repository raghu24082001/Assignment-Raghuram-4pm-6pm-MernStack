const PartyDetails = ({ partyData }) => {
  return (
    <div className="p-6 grid gap-4">
      {partyData.map((p) => (
        <div key={p.name} className="border p-4">
          {p.name} {p.symbol}
        </div>
      ))}
    </div>
  );
};

export default PartyDetails;