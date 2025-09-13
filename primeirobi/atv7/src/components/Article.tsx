import type { Post } from "../schemas/post";

interface ArticleProps {
  post: Post;
}

export default function Article({ post }: ArticleProps) {
  return (
    <article id="about" className="card">
      <h2 className="card__title">{post.title}</h2>
      <time className="card__date" dateTime="2025-07-30">
        {new Date().toLocaleString()}
      </time>
      <p className="card__text">{post.body}</p>

      <figure className="card__figure">
        <img
          className="card__image"
          src="https://picsum.photos/200/300"
          alt="Image Example"
        />
        <figcaption className="card__caption">Lorem 1</figcaption>
      </figure>
    </article>
  );
}
