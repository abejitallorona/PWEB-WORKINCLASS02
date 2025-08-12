import { useState } from 'react';

const Card = ({ title, description, onSave }) => {
  const [added, setAdded] = useState(false);

  const handleBuy = () => {
    onSave?.({ title, description });
    setAdded(true);
    console.log(`You saved: ${title}`);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleBuy} disabled={added}>
        {added ? 'Guardado ✔' : 'Guardar'}
      </button>
    </div>
  );
};

export default Card;
