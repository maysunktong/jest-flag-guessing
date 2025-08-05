import Subtitle from "./Subtitle";

const Header = () => {
  return (
    <header className="text-center">
      <h1 className="font-bold uppercase text-5xl p-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
        Flags of the world
      </h1>
      <Subtitle text="beautiful" />
    </header>
  );
};
export default Header;
