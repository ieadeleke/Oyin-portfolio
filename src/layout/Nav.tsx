const Navigation = () => {
  return (
    <nav className="flex md:grid grid-cols-3 items-center py-6 px-24 fixed top-0 left-0 w-full z-20">
      <div className="text-2xl font-bold text-white uppercase">Oyin</div>
      <ul className="flex space-x-12 uppercase text-sm">
        <li>
          <a href="#" className="text-white/60 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white/60 hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white/60 hover:text-white">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-white/60 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
      <div>
        <button className="py-3 px-5 w-max ml-auto block cursor-pointer bg-white text-black text-sm">
          Start a Project
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
