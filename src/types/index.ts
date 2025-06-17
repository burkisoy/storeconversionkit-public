export interface Component {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  code: string;
  previewImage?: string;
  popular?: boolean;
  bestValue?: boolean;
  free?: boolean;
}

export interface CustomizationOption {
  id: string;
  label: string;
  type: 'color' | 'text' | 'select';
  defaultValue: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export interface ComponentWithCustomization extends Component {
  customizationOptions: CustomizationOption[];
}