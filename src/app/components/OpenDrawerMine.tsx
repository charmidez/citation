interface OpenDrawerMineProps {
    componentInSideBar : React.ReactNode;
  // Define any props if needed
  // For example, you might want to pass a title or some content
}

export default function OpenDrawerMine({ componentInSideBar }: OpenDrawerMineProps) {
  return (
    <div className="drawer">
      <input id="drawer-mine" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="drawer-mine" className="btn btn-primary drawer-button">
          Open drawer
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
