export default function Articles({ displayArticle }) {
  return (
    <div style={{ width: "700px" }} className="mb-20">
      <h1 className="mb-20">Liste des articles</h1>
      {displayArticle ? (
        <div className="card p-20">
          <h2 className="mb-10">Titre de l'article</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing. Molestias
            voluptatum necessitatibus ipsa voluptatem dicta iste. Tenetur, id
            magnam! Aut in vitae harum. Sit, nobis unde. Modi tenetur aut
            sapiente. A accusamus temporibus, cum nostrum doloremque autem?
            Omnis natus at eum dolores, incidunt alias? Magnam, porro numquam
            magni ut natus a! Quam adipisci minima consequatur accusantium
            incidunt iusto. Laboriosam odit cumque adipisci mollitia! Dicta,
            consectetur? Voluptas, sint ducimus repellendus minima hic neque.
            Fuga quibusdam reprehenderit, veritatis similique repudiandae qui.
            Temporibus dolor quia eveniet similique? Quis, doloribus?
          </p>
        </div>
      ) : (
        <p>Vous devez être connecté pour voir les articles</p>
      )}
    </div>
  );
}
