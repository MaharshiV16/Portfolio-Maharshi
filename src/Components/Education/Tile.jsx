export default function Tile(props) {
  return (
    <div className="timeline">
      <div className="icon"></div>
      <div className="date-content">
        <div className="date-outer">
          <span className="date">
            <span className="time">{props.time}</span>
            <br />
            <span>{props.interval}</span>
          </span>
        </div>
      </div>
      <div className="timeline-content">
        <h5 className="title">{props.title}</h5>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
