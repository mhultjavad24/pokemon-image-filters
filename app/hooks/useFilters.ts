import { useState, useMemo } from 'react';
import { FilterOption, FILTER_OPTIONS } from '../types';
import { FilterService } from '../services/filterService';

interface UseFiltersReturn {
  activeFilterIds: string[];
  activeFilters: FilterOption[];
  toggleFilter: (filterId: string) => void;
}

export function useFilters(): UseFiltersReturn {
  const [activeFilterIds, setActiveFilterIds] = useState<string[]>([]);
  
  const activeFilters = useMemo(() => {
    return FilterService.getFiltersByIds(activeFilterIds, FILTER_OPTIONS);
  }, [activeFilterIds]);
  
  const toggleFilter = (filterId: string) => {
    setActiveFilterIds(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };
  
  return {
    activeFilterIds,
    activeFilters,
    toggleFilter,
  };
}