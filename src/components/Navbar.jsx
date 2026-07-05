function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
          CL
        </div>

        <ul className="flex gap-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-700">About</a></li>
          <li><a href="#skills" className="hover:text-blue-700">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-700">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-700">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;