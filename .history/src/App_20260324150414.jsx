import Button from "./components/Button";
import DropdownPrimitive from "./components/DropDownPrimitive";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="font-jakarta text-heading-xl text-main-purple">
      <Button variant="destructive" size="lg">
        Hello World
      </Button>
      <TextField placeholder="test" isInvalid />
      <DropdownPrimitive />
    </div>
  );
}

export default App;
