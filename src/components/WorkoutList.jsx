import WorkoutItem from "./WorkoutItem";

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      {workouts.map((w, index) => (
        <WorkoutItem key={index} workout={w} />
      ))}
    </div>
  );
};

export default WorkoutList;