import Header from "@components/Header";
import SideMenu from "@components/SideMenu";
import WorkSpace from "@components/WorkSpace";
import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

function App() {
let INITIAL_DATA =   localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [],
  const [dataState, setDataState] = useState(
  
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dataState));
  }, [dataState]);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  return (
    <DataContext.Provider
      value={{
        data: dataState,
        setData: setDataState,
        selectedBoardIndex,
        setSelectedBoardIndex,
      }}
    >
      <div className="font-jakarta flex h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <SideMenu />
          <WorkSpace columns={dataState[selectedBoardIndex]?.columns} />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
