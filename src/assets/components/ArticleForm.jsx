/*//note  riceve  il valore formData, la funzione per aggiornare lo stato setFormData e la funzione che aggiunge onSubmit
 */
export default function ArticleForm({ formData, onFormChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-5 shadow-sm p-4 bg-light rounded border"
    >
      <label className="form-label fw-bold">Nuovo Articolo</label>
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Inserisci il titolo..."
          value={formData}
          onChange={(e) => onFormChange(e.target.value)}
        />
        <button className="btn btn-primary px-4" type="submit">
          Aggiungi
        </button>
      </div>
    </form>
  );
}

//! RICORDA:
// chiedere se si possono lasciare le props col nome identico
