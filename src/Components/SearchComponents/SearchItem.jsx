function SearchItem({ group }) {
  return (
    <div className="group-card">
      <div className="group-avatar">
        {group.Líder.split(" ")
          .map((word) => word[0])
          .join("")}
      </div>
      <div className="group-info">
        <h3 className="group-day-time">{`${group.Dias} a las ${group.Tiempo} (UTC -8)`}</h3>
        <div>{group.Líder}</div>
        <div>{group.Grupo}</div>
        <div>{group.Demográfico}</div>
      </div>
    </div>
  );
}

export default SearchItem;
