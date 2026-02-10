import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

export default function App() {
  const articles = [
    { id: "1", title: "Sparatutto" },
    { id: "2", title: "Avventura" },
    { id: "3", title: "Real Time Strategies" },
  ];
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="display-4 mb-4 text-center fw-bold text-primary">
            Articoli
          </h2>

          <ul className="list-group shadow-lg">
            {articles.map((article) => (
              <li
                key={article.id}
                className="list-group-item list-group-item-action "
              >
                {article.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
