import { Dialog } from "radix-ui";

/**
 * DialogPrimitive component
 * @param {Object} props
 * @param {string} props.title - The title of the dialog
 * @param {JSX.Element} props.triggerComponent - The component that triggers the dialog
 * @param {JSX.Element} props.children - The children components
 * @param {boolean} props.isOpen - A boolean to determine if the dialog is open
 * @param {Function} props.setOpen - A function to set the dialog state
 * @returns {JSX.Element}
 */

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
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="bg-gray1 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-125 -translate-x-1/2 -translate-y-1/2 rounded-md p-6.25 shadow-(--shadow-6) focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          {title}
        </Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogPrimitive;
