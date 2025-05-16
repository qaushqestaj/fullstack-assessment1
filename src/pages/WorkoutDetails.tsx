import { useParams, useNavigate } from 'react-router-dom';
import workoutsData from '../data/workouts.json';
import type { Workout } from '../types/workout';
import HideText from '../features/HideText';
import './WorkoutDetails.css';

function WorkoutDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const workout = (workoutsData as Workout[]).find((w) => w.id === id);

  if (!workout) {
    return (
      <div className="detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <p>Workout not found.</p>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-card">
        <h2 className="detail-title">{workout.name}</h2>
        <div className="detail-field">
          <strong>Description:</strong>
          <HideText text={workout.description} maxChars={200} />
        </div>
        <p className="detail-field">
          <strong>Start Date:</strong>
          <br />
          {new Date(workout.startDate).toLocaleString()}
        </p>
        <p className="detail-field">
          <strong>Category:</strong> {workout.category}
        </p>
      </div>
    </div>
  );
}

export default WorkoutDetail;
