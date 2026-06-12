import { ArrowIcon } from './icons';

export default function GalleryCard({ item }) {
  return (
    <article className="card">
      <img src={item.image} alt={item.alt} />

      <div className="card-info">
        <div className="info-default">
          <div className="title">{item.title}</div>
          <div className="year">{item.year}</div>
        </div>

        <div className="info-hover">
          <div className="artist">{item.artist}</div>
          <div className="location">{item.location}</div>
        </div>
      </div>

      <div className="card-arrow">
        <ArrowIcon />
      </div>
    </article>
  );
}
