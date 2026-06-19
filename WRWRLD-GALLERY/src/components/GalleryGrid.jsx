import GalleryCard from "./GalleryCard";

export default function GalleryGrid({ items }) {
  if (!items.length) {
    return (
      <section className="gallery gallery--empty">
        <p className="gallery-empty">No paintings match the selected filters.</p>
      </section>
    );
  }

  return (
    <section className="gallery">
      {items.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </section>
  );
}
