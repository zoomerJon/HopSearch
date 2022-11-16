function SearchItem({ group }) {
  return (
    <div className="group-card">
      <div className="group-avatar">
        {group.Leader.split(" ")
          .map((word) => word[0])
          .join("")}
      </div>
      <div className="group-info">
        <h3 className="group-day-time">{`${group.Days}s at ${group.Time} (UTC -8)`}</h3>
        <div>{group.Leader}</div>
        <div>{group.Group}</div>
        <div>{group.Demographic}</div>
      </div>
    </div>
  );
}

export default SearchItem;
