import { Link } from "react-router-dom";
function Soal4() {
  return (
    <div className="container" id="Soal4">
      <div className="containerChild header">
        <h2>Soal 4</h2>
        <h3>ChitChat - Express Your Feeling</h3>
      </div>
      <div className="containerChild body">
        <textarea name="" id="chatInput"></textarea>
        <button>Send</button>
      </div>
      <div className="containerChild footer">
        <Link id="browserLink" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Soal4;
