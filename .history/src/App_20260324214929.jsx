import Button from "./components/Button";
import DialogPrimitive from "./components/dialogPrimitive";
import DropdownPrimitive from "./components/DropDownPrimitive";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="font-jakarta text-heading-xl text-main-purple">
      <DialogPrimitive isOpen={true}>Hello world</DialogPrimitive>
    </div>
  );
}

export default App;
