
export default function TextAreaNoBGMine() {
  return (
    <div className="text-area-no-bg">
      <textarea
        className="textarea textarea-ghost"
        placeholder="Écrivez votre texte ici..."
      ></textarea>
      <button className="btn btn-primary">Envoyer</button>
    </div>
  );
}