import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import { useState } from "react";

import ArticleList from "./assets/components/ArticleList";
import ArticleForm from "./assets/components/ArticleForm";

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

  //note Funzione per cancellare l'articolo
  const deleteArticle = (idToDelete) => {
    const updatedArticles = articles.filter(
      (article) => article.id !== idToDelete,
    );
    setArticles(updatedArticles);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="display-4 mb-4 text-center fw-bold text-primary">
            Articoli
          </h2>

          {/*//^   FORM   */}
          <ArticleForm
            formData={formData}
            onFormChange={setFormData}
            onSubmit={handleSubmit}
          />

          {/*//^ LISTA ARTICOLI */}
          <ArticleList listeDiArticle={articles} onDelete={deleteArticle} />
        </div>
      </div>
    </div>
  );
}
