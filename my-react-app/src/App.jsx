import { useState } from 'react';
import './App.css';
import Card from './components/Card/card.jsx';

function App() {
  const [saved, setSaved] = useState([]);

  const handleSaveProduct = (product) => {
    setSaved((prev) => {
      const exists = prev.some((p) => p.title === product.title);
      return exists ? prev : [...prev, product];
    });
  };

  return (
    <>
      <section>
        <h1>Artistas</h1>
        <div className="grid">
          <Card title="Bad Bunny" description="This is a great product!"
                onSave={handleSaveProduct} />
          <Card title="J Balvin" description="This is a great product!"
                onSave={handleSaveProduct} />
          <Card title="Feid" description="This is a great product!"
                onSave={handleSaveProduct} />
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Guardados</h2>
        {saved.length === 0 ? (
          <p>Aún no has guardado nada.</p>
        ) : (
          <div className="grid">
            {saved.map((item) => (
              <Card
                key={item.title}                     
                title={item.title}
                description={item.description}
                onSave={() => {}}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default App;
