import React from 'react';

function ErrorGest({name}: {name: string}) {
    return (
      <div>
        <p>Ereur {name} introuvable veuillez retenter plus tard.</p>
      </div>
    )
  }

  export default ErrorGest