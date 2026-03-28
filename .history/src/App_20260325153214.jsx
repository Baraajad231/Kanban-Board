import Header from "@components/Header";
import SideMenu from "@components/SideMenu";
import WorkSpace from "@components/WorkSpace";
import data from "./data.json";

function App() {
  const [data, setData] = useState(data);
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
