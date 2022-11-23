import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useToggle from "../hooks/useToggle";
export default function IconsPage() {
  const [toggleState, toggle] = useToggle(false);

  return (
    <>
      <Navbar handelClick={toggle} isOpen={toggleState} />
      <Sidebar isOpen={toggleState} />
      <h1 className="text">Serach Icons</h1>
    </>
  );
}
