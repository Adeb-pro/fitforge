import StatCard from "../components/StatCard";
import WorkoutList from "../components/WorkoutList";
import ProgressChart from "../components/ProgressChart";
import workouts from "../data/dummyWorkouts";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-8 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Track your fitness journey and progress
        </p>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Workouts" value="5" subtitle="This month" />
          <StatCard title="Weekly Progress" value="+12%" subtitle="vs last week" positive />
          <StatCard title="Current Streak" value="5" subtitle="days in a row" danger />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Recent Workouts */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-semibold text-lg mb-1">Recent Workouts</h2>
            <p className="text-gray-500 text-sm mb-4">
              Your latest training sessions
            </p>

            <WorkoutList workouts={workouts} />
          </div>

          {/* Progress Chart */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-semibold text-lg mb-1">Progress</h2>
            <p className="text-gray-500 text-sm mb-4">
              Bench press over time
            </p>

            <ProgressChart data={workouts} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;