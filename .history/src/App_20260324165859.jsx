import Button from "./components/Button";
import DialogPrimitive from "./components/dialogPrimitive";
import DropdownPrimitive from "./components/DropDownPrimitive";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="font-jakarta text-heading-xl text-main-purple">
      <Button variant="destructive" size="lg">
        Hello World
      </Button>
      <TextField placeholder="test" isInvalid />
      <DropdownPrimitive
        triggerComponent={() => (
          <Button variant="secondary" size="sm">
            Open Dropdown
          </Button>
        )}
        items={{
          edit: {
            label: "Edit board",
            onClick: () => console.log("Edit clicked"),
          },
          delete: {
            label: "Delete board",
            onClick: () => console.log("Delete clicked"),
          },
        }}
      />
      <DialogPrimitive isOpen={false}>Hello world</DialogPrimitive>
    </div>
  );
}

export default App;
