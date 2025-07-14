import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-7">
              <div className="copyright-item">
                <p>Copyright &copy; 2023 Carrosserie Kris</p>
                <a href="./voorwaarden.pdf">Algemene Voorwaarden</a>
                <br />
                <a href="./privacy.pdf">Privacy policy</a>
                <br />
                <p>BE 0687.810.469</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
