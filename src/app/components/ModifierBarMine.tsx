export default function ModifierBarMine() {
  return (
    <div className="flex flex-col lg:gap-8 md:gap-4 gap-2 lg:px-128 md:px-8 px-4 lg:py-8 md:py-4 py-2">
      <div className="flex flex-col lg:gap-8 md:gap-4 gap-2 bg-base-200 rounded-box shadow-sm p-4">
        <div className="flex flex-col lg:flex-row md:flex-row gap-4">
          <button className="btn btn-primary">Modifier</button>
          <button className="btn btn-secondary">Supprimer</button>
        </div>
      </div>
    </div>
  );
}