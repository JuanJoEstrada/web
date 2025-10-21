const Header = () => {
  return (
    <header
      className={`
      flex items-center justify-between
      px-[47px] h-[70px]
      bg-[linear-gradient(90deg,#00B5CC1A_0%,#00B5CC0D_50%,#00B5CC00_100%)]
    `}
    >
      <h1 className="text-2xl font-bold">Rick & Morty Browser</h1>
      <nav className="flex items-center gap-1">
        <button className="px-4 py-3 bg-[#00B5CC] text-white text-[16px] rounded-[10px]">
          All Characters
        </button>
        <button className="text-[16px] px-4">Favorites (0)</button>
      </nav>
    </header>
  );
};

export default Header;
