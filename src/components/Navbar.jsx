import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-green-500 text-2xl">🧪</span>
          <h1 className="font-bold text-lg">Fit Tracker</h1>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-gray-600">
          <Link to="/dashboard" className="hover:text-black">Dashboard</Link>
          <Link to="/add" className="hover:text-black">Workouts</Link>
          <Link to="/progress" className="hover:text-black">Progress</Link>
        </div>

        {/* Button */}
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
         <Link to="/add"> +Add Workout</Link>
        </button>

      </div>
    </div>
  );
};

export default Navbar;