const WorkoutItem = ({ workout }) => {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl mb-4 border">
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
          🏋️
        </div>

        <div>
          <h4 className="font-semibold">{workout.exercise}</h4>
          <p className="text-gray-500 text-sm">
            {workout.sets} sets × {workout.reps} reps @ {workout.weight}lbs
          </p>
        </div>
      </div>

      <span className="text-gray-500 text-sm">{workout.date}</span>
    </div>
  );
};

export default WorkoutItem;