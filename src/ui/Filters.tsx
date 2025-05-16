import './Filters.css';

interface FiltersProps {
  selectedMonth: string;
  onMonthChange: (value: string) => void;
  selectedCategories: string[];
  onCategoriesChange: (value: string[]) => void;
}

const categories = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

/**
 * Filters Component
 *
 * Allows users to filter workouts by:
 * - Start month (dropdown)
 * - Categories (multi-select checkboxes)
 */

function Filters({
  selectedMonth,
  onMonthChange,
  selectedCategories,
  onCategoriesChange,
}: FiltersProps) {
  // Generate the next 12 months as dropdown options
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() + i);
    return {
      label: date.toLocaleString('default', { month: 'long', year: 'numeric' }),
      value: `${date.getFullYear()}-${date.getMonth() + 1}`,
    };
  });

  // Toggle category in/out of selectedCategories
  const handleCategoryToggle = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      onCategoriesChange(selectedCategories.filter((c) => c !== cat));
    } else {
      onCategoriesChange([...selectedCategories, cat]);
    }
  };

  return (
    <div className="filters">
      <select
        value={selectedMonth}
        onChange={(e) => onMonthChange(e.target.value)}
      >
        <option value="">All Dates</option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>

      <div className="categories">
        {categories.map((cat) => (
          <label key={cat} className="category">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryToggle(cat)}
            />
            {cat}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filters;
