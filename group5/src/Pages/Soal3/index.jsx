import { Link } from "react-router-dom";
function Soal3() {
  return (
    <div className="container">
      <div className="containerChild header">
        <h2>Soal 3</h2>
      </div>
      <div className="containerChild body">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          reiciendis itaque molestiae harum, alias enim expedita vel sit dolor
          deserunt.
        </p>
        <Link id="browserLink" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Soal3;
