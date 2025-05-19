function Card({ book }) {
  return (
    <article className="card" style={{ maxWidth: "300px" }}>
      <img src="https://picsum.photos/200/300" alt={`Copertina di ${book.title}`} style={{ width: "100%", borderRadius: "0.5rem" }} />
      <h3>{book.title}</h3>
      <p>
        <strong>Autore:</strong> {book.authors.map(a => a.name).join(", ")}
      </p>
      <footer>
        <a href="#" role="button">Scopri di più</a>
      </footer>
    </article>
  );
}


export default Card;