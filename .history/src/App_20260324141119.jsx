import Button from "./components/Button";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="font-jakarta text-heading-xl text-main-purple ">
      <Button variant="destructive" size="lg">
        Hello World
      </Button>
      <TextField defaultValue="test" isInvalid />
    </div>
  );
}

export default App;
