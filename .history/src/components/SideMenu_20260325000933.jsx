const DATA = [
  {
    title: "Home",
    id: "1",
  },
  {
    title: "About",
    id: "2",
  },
  {
    title: "Contact",
    id: "3",
  },
];

const SideMenu = () => {
  return (
    <aside className="side-menu border-lines-light -mt-px h-screen w-75 border-r bg-white">
      <p className="text-heading-s px-8 py-4">ALL BOARDS {DATA.length}</p>
    </aside>
  );
};
export default SideMenu;
