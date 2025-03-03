export default function Home() {
  return (
    <div className="imglayout">
      <div className="textlayout">
        <div className="nametext">
          <h1>Hi, I am</h1>
          <div className="animtext">
            <ol>
              <li><span>Arnold.</span></li>
              <li><span>a Developer.</span></li>
            </ol>
          </div>
          <h2>
            I am a Developer who is proficient in multiple programming
            languages, with particular expertise in Java and C++. I graduated in
            2023 with a Bachelors degree in Science majoring in Computer
            Science.
          </h2>
        </div>
        <div className="buttonL">
          <button className="resume">Resume</button>
          <button className="contactButton">Contact</button>
        </div>
      </div>
      <div className="im">
        <img src={"/newme.png"} />
      </div>
    </div>
  );
}
