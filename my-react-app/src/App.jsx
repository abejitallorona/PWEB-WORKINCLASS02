import { useState } from 'react';
import './App.css';
import Card from './components/Card/card.jsx';

function App() {
  const [favoriteArtists, setFavoriteArtists] = useState([]);

  const addArtistToFavorites = (artist) => {
    setFavoriteArtists((previousFavorites) => {
      const artistAlreadyExists = previousFavorites.some((a) => a.title === artist.title);
      return artistAlreadyExists ? previousFavorites : [...previousFavorites, artist];
    });
  };

  return (
    <>
      <section>
        <h1>Artistas</h1>
        <div className="grid">
          <Card 
            title="Bad Bunny" 
            description="Reggaeton y trap latino!" 
            onAddToFavorites={addArtistToFavorites} 
          />
          <Card 
            title="J Balvin" 
            description="El príncipe del reggaeton!" 
            onAddToFavorites={addArtistToFavorites} 
          />
          <Card 
            title="Feid" 
            description="Urban y reggaeton colombiano!" 
            onAddToFavorites={addArtistToFavorites} 
          />
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Artistas Favoritos</h2>
        {favoriteArtists.length === 0 ? (
          <p>Aún no tienes artistas favoritos.</p>
        ) : (
          <div className="grid">
            {favoriteArtists.map((favoriteArtist) => (
              <Card
                key={favoriteArtist.title}                     
                title={favoriteArtist.title}
                description={favoriteArtist.description}
                onAddToFavorites={() => {}}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default App;