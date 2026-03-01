import Navbar from "../components/Navbar";
import ProgressChart from "../components/ProgressChart";
import workouts from "../data/dummyWorkouts";

const Progress = () => {
  return (
    <>
      

      <div className="bg-gray-100 min-h-screen px-8 py-10">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl font-bold mb-2">Progress</h1>
          <p className="text-gray-600 mb-8">
            Track your strength improvements over time
          </p>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <ProgressChart data={workouts} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Progress;