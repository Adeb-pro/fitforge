import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <header>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-16">

        {/* Left */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Track Your Workouts.
            <br />
            See Your Progress.
          </h2>

          <p className="text-gray-600 mb-8 text-lg max-w-lg">
            Track your fitness journey and progress with powerful insights.
            Log exercises, monitor streaks, and visualize strength gains.
          </p>

          <div className="flex gap-4">
            <Link
              to="/dashboard"
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/add"
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              Add Workout
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-gray-500 text-sm">Active Users</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">500K+</h3>
              <p className="text-gray-500 text-sm">Workouts Logged</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">4.9★</h3>
              <p className="text-gray-500 text-sm">User Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="flex-1">
          <div>
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
              alt="Gym"
              className="rounded-xl w-full h-[420px] object-cover"
            />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Landing;