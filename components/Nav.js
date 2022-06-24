import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav className="m-5 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <NavItem title="HOME" /> 
        <NavItem title="REVIEW" />
        <NavItem title="ABOUT" />
        <NavItem title="CONTACT" />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-red-700 font-bold md:font-semibold cursor-pointer md:pr-16">
        FUDO
      </h1>
    </nav>
  );
};

export default Nav;
