import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import WorkoutList from './pages/WorkoutList';
import WorkoutDetail from './pages/WorkoutDetails';

/**
 * App Component
 *
 * Defines the main routes for the application:
 * - "/" shows the workout list
 * - "/workout/:id" shows workout details
 * - "*" redirects unknown routes back to "/"
 */

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WorkoutList />} />
        <Route path="/workout/:id" element={<WorkoutDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
