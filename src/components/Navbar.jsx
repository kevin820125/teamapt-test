import logo from 'assets/logo.png';
import cal from 'assets/cal.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 lg:px-10 py-10">
      <div>
        <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
      </div>
      <div className="flex items-center space-x-3">
        <img src={cal} alt="logo" />
        <div>
          <h1 className="text-lg font-bold">Day 1</h1>
          <p className="text-whiteG text-sm">of 5</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
