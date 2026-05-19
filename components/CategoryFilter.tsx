'use client';

import { CATEGORIES } from '@/lib/data';
import { useFilter } from '@/context/FilterContext';

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useFilter();

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
