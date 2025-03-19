import { Pokemon } from './pokemon';
import { FilterOption } from './filters';

export interface PokemonDisplayProps {
  pokemon: Pokemon;
  opacity: any;
  activeFilters: FilterOption[];
}

export interface FilterButtonsProps {
  activeFilters: string[];
  onToggleFilter: (filterId: string) => void;
}

export interface FilterButtonProps {
  filter: FilterOption;
  isActive: boolean;
  onToggle: (id: string) => void;
}

export interface GoButtonProps {
  onPress: () => void;
}