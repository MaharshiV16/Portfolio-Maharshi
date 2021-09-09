import Tile from "./Tile";

export default function Education() {
  return (
    <div className="container-fluid">
      <div className="main-timeline">
        <Tile
          time="2020"
          interval="4 Years"
          title="BTech. at NIT Hamirpur"
          description="Bachelor of Technology in Computer Science"
        />
        <Tile
          time="2014"
          interval="6 Years"
          title="7th - 12th"
          description="Secondary education at JPHS"
        />
        <Tile
          time="2007"
          interval="7 Years"
          title="Early Education"
          description="Numerous Schools across Rajasthan"
        />
      </div>
    </div>
  );
}
