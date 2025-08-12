import { useState } from 'react';

const Card = ({ title, description, onAddToFavorites }) => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const handleAddArtistToFavorites = () => {
    onAddToFavorites?.({ title, description });
    setIsAddedToFavorites(true);
    console.log(`Artista agregado a favoritos: ${title}`);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleAddArtistToFavorites} disabled={isAddedToFavorites}>
        {isAddedToFavorites ? 'En Favoritos ⭐' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default Card;