import { ComponentWithCustomization } from '../../../types';

export interface PreviewPanelProps {
  component: ComponentWithCustomization;
  customValues: Record<string, string>;
}

export interface PreviewWrapperProps {
  previewHTML: string;
}