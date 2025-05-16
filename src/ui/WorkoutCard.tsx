import type { Workout } from '../types/workout';
import './WorkoutCard.css';
import { Link } from 'react-router-dom';

function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link to={`/workout/${workout.id}`} className="workout-card">
      <h3>{workout.name}</h3>
      <p>{new Date(workout.startDate).toLocaleDateString()}</p>
      <p>{workout.category}</p>
    </Link>
  );
}

export default WorkoutCard;
