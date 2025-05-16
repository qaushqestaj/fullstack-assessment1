export type Category = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7';

export interface Workout {
  id: string;
  name: string;
  description: string;
  startDate: string;
  category: Category;
}
