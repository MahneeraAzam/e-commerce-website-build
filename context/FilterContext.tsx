'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { FilterContextType } from '@/lib/types';

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSetCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return (
    <FilterContext.Provider value={{ selectedCategory, setSelectedCategory: handleSetCategory }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}
