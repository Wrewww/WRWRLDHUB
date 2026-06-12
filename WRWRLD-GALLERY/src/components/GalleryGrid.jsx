import GalleryCard from './GalleryCard';

export default function GalleryGrid({ items }) {
  return (
    <section className="gallery">
      {items.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </section>
  );
}
