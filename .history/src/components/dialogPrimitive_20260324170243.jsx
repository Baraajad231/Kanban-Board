import { Dialog } from "radix-ui";

const DialogPrimitive = ({
  title,
  triggerComponent,
  children,
  isOpen,
  setOpen,
}) => (
  <Dialog.Root open={isOpen} onOpenChange={setOpen}>
    <Dialog.Trigger asChild>{triggerComponent}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow bg-blackA6 fixed inset-0" />
      <Dialog.Content className="bg-gray1 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-md p-6.25 shadow-(--shadow-6) focus:outline-none">
        <Dialog.Title className="text-heading-l">{title}</Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogPrimitive;
