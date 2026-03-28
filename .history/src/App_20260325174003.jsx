import Header from "@components/Header";
import SideMenu from "@components/SideMenu";
import WorkSpace from "@components/WorkSpace";
import data from "./data.json";
import { useState } from "react";
import { DataContext } from "./DataContext";

function App() {
  const [dataState, setDataState] = useState(data);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  return (
    <DataContext.Provider value={data:dataState, setData:setDataState}>
      <div className="font-jakarta flex h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <SideMenu
            data={dataState}
            selectedBoardIndex={selectedBoardIndex}
            setSelectedBoardIndex={setSelectedBoardIndex}
          />
          <WorkSpace columns={dataState[selectedBoardIndex]?.columns} />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
