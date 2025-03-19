export interface FilterOption {
  id: string;
  label: string;
  filterValue: string;
}

export const FILTER_OPTIONS: FilterOption[] = [
  { id: 'grayscale', label: 'Grayscale', filterValue: 'grayscale(1)' },
  { id: 'sepia', label: 'Sepia', filterValue: 'sepia(1)' },
  { id: 'invert', label: 'Invert', filterValue: 'invert(1)' },
  { id: 'blur', label: 'Blur', filterValue: 'blur(2px)' },
  { id: 'contrast', label: 'High Contrast', filterValue: 'contrast(2)' },
  { id: 'hue-rotate', label: 'Color Shift', filterValue: 'hue-rotate(180deg)' },
];