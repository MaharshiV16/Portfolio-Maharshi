import Tile from "../Education/Tile";

export default function Experience() {
  return (
    <div className="container-fluid">
      <div className="main-timeline">
        <Tile
          time="2020"
          interval="1 Year"
          title="Volunteer"
          description="Team .exe"
        />
        <Tile
          time="2020"
          interval="1 Year"
          title="Volunteer"
          description="Team Public Relations"
        />
        <Tile
          time="2020"
          interval="1 Year"
          title="Volunteer"
          description="CSEC - Computer Science Engineers Community"
        />
      </div>
    </div>
  );
}
