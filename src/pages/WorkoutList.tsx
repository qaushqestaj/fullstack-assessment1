import { useState, useEffect } from 'react';
import type { Workout } from '../types/workout';
import workoutsData from '../data/workouts.json';
import './WorkoutList.css';
import Filters from '../ui/Filters';
import WorkoutCard from '../ui/WorkoutCard';
import Pagination from '../ui/Pagination';
import { PAGE_SIZE } from '../utils/constans';

/**
 * WorkoutList Component
 *
 * Displays a paginated, filterable list of workouts.
 * Filters by selected month and selected categories.
 */

function WorkoutList() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Load workouts data on first render
  useEffect(() => {
    setWorkouts(workoutsData as Workout[]);
  }, []);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMonth, selectedCategories]);

  // Filter workouts by selected month
  const monthFiltered = workouts.filter((w) => {
    if (!selectedMonth) return true;
    const [year, month] = selectedMonth.split('-').map(Number);
    const d = new Date(w.startDate);
    return d.getFullYear() === year && d.getMonth() + 1 === month;
  });

  // Further filter by selected categories
  const categoryFiltered = monthFiltered.filter((w) => {
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(w.category);
  });

  const total = categoryFiltered.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  // Paginate filtered workouts
  const pageWorkouts = categoryFiltered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div>
      <Filters
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
        selectedCategories={selectedCategories}
        onCategoriesChange={setSelectedCategories}
      />

      <div className="workout-list">
        {pageWorkouts.map((w) => (
          <WorkoutCard key={w.id} workout={w} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default WorkoutList;
