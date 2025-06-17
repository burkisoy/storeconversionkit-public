import { ComponentWithCustomization } from '../../types';

export const comparisonTable: ComponentWithCustomization = {
  id: 'comparison-table',
  title: 'Comparison Table',
  description: 'Display a feature comparison table with customizable columns',
  category: 'Product',
  tags: ['comparison', 'table', 'features', 'product'],
  free: true,
  code: `<div style="background: transparent; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #333;">
  <h2 style="text-align: center; margin-bottom: 30px;">
    <span style="font-size: 18px; color: #333;">{{ heading_prefix | default: 'Why Do Our Customers' }}</span>
    <span style="font-family: Pacifico, cursive; background: linear-gradient(135deg, {{ gradient_color_1 | default: '#24A06F' }}, {{ gradient_color_2 | default: '#1B774F' }}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 24px;">{{ heading_highlight | default: 'Choose Us' }}</span>
    <span style="color: {{ accent_color | default: '#24A06F' }}; font-size: 24px;">{{ heading_suffix | default: '?' }}</span>
  </h2>

  <table style="width: 100%; max-width: 800px; margin: 0 auto; border-spacing: 0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); background: #fff;">
    <thead style="background: linear-gradient(135deg, {{ gradient_color_1 | default: '#24A06F' }}, {{ gradient_color_2 | default: '#1B774F' }}); color: #fff; text-transform: uppercase;">
      <tr>
        <th style="padding: 16px; font-size: 14px; letter-spacing: 1px; text-align: left;">{{ features_column_title | default: 'Features' }}</th>
        <th style="padding: 16px; font-size: 14px; text-align: center;">{{ column_1_title | default: 'Morning Recovery' }}</th>
        <th style="padding: 16px; font-size: 14px; text-align: center;">{{ column_2_title | default: 'Hydration Powder' }}</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #ffffff;">
        <td style="padding: 14px; text-align: left; border-bottom: 1px solid #ddd; font-size: 15px;">{{ feature_1 | default: 'Clinically Proven**' }}</td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ check_color | default: '#34a853' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ x_color | default: '#ea4335' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
      </tr>
      <tr style="background: #f7f7f7;">
        <td style="padding: 14px; text-align: left; border-bottom: 1px solid #ddd; font-size: 15px;">{{ feature_2 | default: 'Electrolytes' }}</td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ check_color | default: '#34a853' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ x_color | default: '#ea4335' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
      </tr>
      <tr style="background: #ffffff;">
        <td style="padding: 14px; text-align: left; border-bottom: 1px solid #ddd; font-size: 15px;">{{ feature_3 | default: 'No Artificial Colors or Sweeteners' }}</td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ check_color | default: '#34a853' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ x_color | default: '#ea4335' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
      </tr>
      <tr style="background: #f7f7f7;">
        <td style="padding: 14px; text-align: left; border-bottom: 1px solid #ddd; font-size: 15px;">{{ feature_4 | default: 'Patent-Pending Technology' }}</td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ check_color | default: '#34a853' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ x_color | default: '#ea4335' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
      </tr>
      <tr style="background: #ffffff;">
        <td style="padding: 14px; text-align: left; border-bottom: 1px solid #ddd; font-size: 15px;">{{ feature_5 | default: 'Proprietary Herbal Blend' }}</td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ check_color | default: '#34a853' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
        <td style="padding: 14px; text-align: center; border-bottom: 1px solid #ddd;">
          <svg width="20" height="20" fill="{{ x_color | default: '#ea4335' }}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
          </svg>
        </td>
      </tr>
    </tbody>
  </table>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    @media (max-width: 600px) {
      table {
        font-size: 12px !important;
      }
      th, td {
        padding: 10px !important;
      }
    }
  </style>
</div>`,
  customizationOptions: [
    {
      id: 'heading_prefix',
      label: 'Heading Prefix',
      type: 'text',
      defaultValue: 'Why Do Our Customers'
    },
    {
      id: 'heading_highlight',
      label: 'Heading Highlight',
      type: 'text',
      defaultValue: 'Choose Us'
    },
    {
      id: 'heading_suffix',
      label: 'Heading Suffix',
      type: 'text',
      defaultValue: '?'
    },
    {
      id: 'features_column_title',
      label: 'Features Column Title',
      type: 'text',
      defaultValue: 'Features'
    },
    {
      id: 'column_1_title',
      label: 'Column 1 Title',
      type: 'text',
      defaultValue: 'Morning Recovery'
    },
    {
      id: 'column_2_title',
      label: 'Column 2 Title',
      type: 'text',
      defaultValue: 'Hydration Powder'
    },
    {
      id: 'feature_1',
      label: 'Feature 1',
      type: 'text',
      defaultValue: 'Clinically Proven**'
    },
    {
      id: 'feature_2',
      label: 'Feature 2',
      type: 'text',
      defaultValue: 'Electrolytes'
    },
    {
      id: 'feature_3',
      label: 'Feature 3',
      type: 'text',
      defaultValue: 'No Artificial Colors or Sweeteners'
    },
    {
      id: 'feature_4',
      label: 'Feature 4',
      type: 'text',
      defaultValue: 'Patent-Pending Technology'
    },
    {
      id: 'feature_5',
      label: 'Feature 5',
      type: 'text',
      defaultValue: 'Proprietary Herbal Blend'
    },
    {
      id: 'gradient_color_1',
      label: 'Gradient Color 1',
      type: 'color',
      defaultValue: '#24A06F'
    },
    {
      id: 'gradient_color_2',
      label: 'Gradient Color 2',
      type: 'color',
      defaultValue: '#1B774F'
    },
    {
      id: 'accent_color',
      label: 'Accent Color',
      type: 'color',
      defaultValue: '#24A06F'
    },
    {
      id: 'check_color',
      label: 'Check Icon Color',
      type: 'color',
      defaultValue: '#34a853'
    },
    {
      id: 'x_color',
      label: 'X Icon Color',
      type: 'color',
      defaultValue: '#ea4335'
    }
  ]
};