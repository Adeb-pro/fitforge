import Navbar from "../components/Navbar";

const AddWorkout = () => {
  return (
    <>
      

      <div className="bg-gray-100 min-h-screen py-12 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Page Header */}
          <h1 className="text-3xl font-bold mb-2">Add Workout</h1>
          <p className="text-gray-600 mb-8">
            Log your training session
          </p>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-lg font-semibold mb-1">
              Workout Details
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Enter the details of your exercise
            </p>

            {/* Exercise */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Exercise
              </label>

              <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select an exercise</option>
                <option>Bench Press</option>
                <option>Squat</option>
                <option>Deadlift</option>
                <option>Overhead Press</option>
              </select>
            </div>

            {/* Sets Reps Weight */}
            <div className="grid grid-cols-3 gap-4 mb-8">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Sets
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Reps
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Weight (lbs)
                </label>
                <input
                  type="number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button className="px-5 py-2 rounded-lg border hover:bg-gray-100 transition">
                Cancel
              </button>

              <button className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
                Save Workout
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AddWorkout;