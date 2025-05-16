/**
 * Category
 *
 * Defines the allowed category values for a workout.
 * These represent different workout classifications.
 */
export type Category = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7';

/**
 * Workout
 *
 * Represents a single workout item with its basic properties.
 */
export interface Workout {
  id: string;
  name: string;
  description: string;
  startDate: string;
  category: Category;
}
