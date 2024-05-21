import "./Welcome.css";
import PostIt from "../assets/notes.png";
import Logo from "../assets/logo.png";

const Welcome = () => {
  return (
    <main className="welcome-box">
      <img alt="post-it picture" className="notes-image" src={PostIt} />
      <div className="Noteworthy-box">
        <img alt="logo" className="logo-icon" src={Logo} />
        <h1 className="welcome-title">
          Ready to embark on a note-taking journey? <br /> Log in now to get
          started!
        </h1>
        <button className="log-in-button">Log in</button>
      </div>
    </main>
  );
};

export default Welcome;
