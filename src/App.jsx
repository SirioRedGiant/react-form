import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import { useState } from "react";

export default function App() {
  const [articles, setArticles] = useState([
    { id: "1", title: "Sparatutto" },
    { id: "2", title: "Avventura" },
    { id: "3", title: "Real Time Strategies" },
  ]);

  const [formData, setFormData] = useState("");

  //note Funzione per gestire l'aggiunta
  const handleSubmit = (e) => {
    e.preventDefault();

    const maxId =
      articles.length > 0
        ? Math.max(...articles.map((a) => parseInt(a.id)))
        : 0;

    const newArticle = {
      id: (maxId + 1).toString(),
      title: formData,
    };

    setArticles([...articles, newArticle]);
    setFormData("");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="display-4 mb-4 text-center fw-bold text-primary">
            Articoli
          </h2>

          {/*//^   FORM   */}
          <form
            onSubmit={handleSubmit}
            className="mb-5 shadow-sm p-4 bg-light rounded border"
          >
            <label className="form-label fw-bold">Nuovo Articolo</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Inserisci il titolo..."
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
              />
              <button className="btn btn-primary px-4" type="submit">
                Aggiungi
              </button>
            </div>
          </form>

          {/*//^ LISTA ARTICOLI */}
          <ul className="list-group shadow-lg">
            {articles.map((article) => (
              <li
                key={article.id}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <span className="fs-5">{article.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
