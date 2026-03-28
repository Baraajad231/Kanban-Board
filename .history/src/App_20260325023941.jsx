import Header from "@components/Header";
import SideMenu from "@components/SideMenu";
import WorkSpace from "@components/WorkSpace";

function App() {
  return (
    <div className="font-jakarta flex flex-col">
      <Header />
      <div className="felx flex-1"></div>
      <SideMenu />
      <WorkSpace />
    </div>
  );
}

export default App;
