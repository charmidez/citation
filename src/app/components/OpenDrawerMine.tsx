interface OpenDrawerMineProps {
    componentInSideBar? : React.ReactNode;
    className?: string;
    id?: string;
}

export default function OpenDrawerMine({ componentInSideBar, className, id }: OpenDrawerMineProps) {
  return (
    <div className={`drawer ${className}`} id={id}>
      <input id="drawer-mine" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="drawer-mine" className="btn btn-primary drawer-button">
          Connexion
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer-mine"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {componentInSideBar}
        </ul>
      </div>
    </div>
  );
}
