const Header = () => {
  return (
    <header className="flex h-24.25 shrink-0 items-center">
      <div className="border-lines-light flex w-75 items-center gap-4 self-stretch border-r border-b pl-8 text-[32px] font-bold">
        Kanban
      </div>
      <div className="border-lines-light flex flex-1 items-center justify-between self-stretch border-b pr-6 pl-6">
        Platform Launch
      </div>
    </header>
  );
};

export default Header;
