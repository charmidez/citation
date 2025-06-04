import OpenDrawerMine from "./OpenDrawerMine";

export default function NavBarMine() {
  return (
    <div className="navbar shadow-sm bg-base-300 rounded-box px-4">
      <h1 className="text-2xl font-bold navbar-start">XITAT1ON</h1>
      <OpenDrawerMine className="navbar-end" />
    </div>
  );
}
