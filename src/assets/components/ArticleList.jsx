//note riceve la lista e la funzione per cancellare
export default function ArticleList({ listeDiArticle, onDelete }) {
  return (
    <ul className="list-group shadow-lg">
      {listeDiArticle.map((article) => (
        <li
          key={article.id}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <span className="fs-5">{article.title}</span>

          {/*//^ bottone che cancella */}
          <button
            className="btn btn-danger btm-sm"
            onClick={() => onDelete(article.id)}
          >
            Cancella
          </button>
        </li>
      ))}
    </ul>
  );
}

/*  Lo Stato => risiede nel "Padre" (App.jsx)
    I Dati => passano al "Figlio" (ArticleList) tramite la prop listeDiArticle
    L'Azione => (cancellazione) risale dal figlio al padre tramite la callback onDelete
*/
