import Header from "@components/Header";
import SideMenu from "@components/SideMenu";
import WorkSpace from "@components/WorkSpace";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [dataState, setDataState] = useState(data);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  return (
    <div className="font-jakarta flex h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <SideMenu
          data={dataState}
          selectedBoardIndex={selectedBoardIndex}
          setSelectedBoardIndex={setSelectedBoardIndex}
        />
        <WorkSpace data={dataState[selectedBoardIndex]} />
      </div>
    </div>
  );
}

export default App;
