import { FilterOption } from '../types';

export class FilterService {
  static generateFilterString(filters: FilterOption[]): string {
    return filters.map(filter => filter.filterValue).join(' ');
  }

  static getFiltersByIds(filterIds: string[], allFilters: FilterOption[]): FilterOption[] {
    return allFilters.filter(filter => filterIds.includes(filter.id));
  }
}