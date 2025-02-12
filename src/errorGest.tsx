// Cette fonction va mettre en place gestion d'erreur type
function ErrorGest({name}: {name: string}) {
    return (
    <>
      <p>Ereur {name} introuvable veuillez retenter plus tard.</p>
    </>
    )
  }

  export default ErrorGest