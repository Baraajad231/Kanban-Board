import Header from "@components/Header";
import SideMenu from "@components/SideMenu";
import WorkSpace from "@components/WorkSpace";

function App() {
  return (
    <div className="font-jakarta flex h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <SideMenu />
        <WorkSpace />
      </div>
    </div>
  );
}

export default App;
