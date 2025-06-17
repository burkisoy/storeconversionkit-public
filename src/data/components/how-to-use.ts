import { ComponentWithCustomization } from '../../types';

export const howToUse: ComponentWithCustomization = {
  id: 'how-to-use',
  title: 'How to Use 2',
  description: 'Display step-by-step instructions with images in a scrollable format',
  category: 'Product',
  tags: ['instructions', 'steps', 'guide', 'how to use'],
  free: true,
  code: `<div style="background: {{ background | default: 'linear-gradient(to bottom, #e6f6ff, #ffffff)' }}; padding: {{ container_padding | default: '60px 20px' }};">
  <div style="max-width: {{ max_width | default: '1200px' }}; margin: 0 auto; text-align: center;">

    <!-- Heading -->
    <h2 style="font-size: {{ heading_font_size | default: '32px' }}; font-weight: {{ heading_font_weight | default: '800' }}; margin-bottom: 10px; color: {{ heading_color | default: '#1a3d6d' }};">{{ heading_text | default: 'How to Use' }}</h2>
    <p style="font-size: {{ subheading_font_size | default: '16px' }}; color: {{ subheading_color | default: '#4a4a4a' }}; margin-bottom: 40px;">{{ subheading_text | default: 'Follow these 3 simple steps to get the best experience.' }}</p>

    <!-- Scrollable Wrapper (allows center align on desktop, scroll on mobile) -->
    <div style="overflow-x: auto;">
      <div style="
        display: flex;
        gap: {{ step_gap | default: '20px' }};
        padding-bottom: 10px;
        scroll-snap-type: x mandatory;
        justify-content: center;
        min-width: max-content;
      ">

        <!-- Step 1 -->
        <div style="flex: 0 0 {{ step_width | default: '280px' }}; scroll-snap-align: start;">
          <div style="background: {{ step_bg | default: '#fff' }}; border: {{ step_border | default: '1px dashed #94c3ff' }}; border-radius: {{ step_border_radius | default: '12px' }}; overflow: hidden; position: relative;">
            <div style="position: absolute; top: 12px; left: 12px; background-color: {{ step_number_bg | default: '#3b82f6' }}; color: {{ step_number_color | default: 'white' }}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">1</div>
            <img src="{{ step_1_image | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" alt="{{ step_1_alt | default: 'Step 1' }}" style="width: 100%; height: auto;">
            <div style="padding: 20px; text-align: left;">
              <h3 style="font-size: {{ step_title_font_size | default: '18px' }}; font-weight: {{ step_title_font_weight | default: '700' }}; color: {{ step_title_color | default: '#1a3d6d' }}; margin-bottom: 8px;">{{ step_1_title | default: 'Place the Pillow' }}</h3>
              <p style="font-size: {{ step_text_font_size | default: '14px' }}; color: {{ step_text_color | default: '#4a4a4a' }};">{{ step_1_text | default: 'Place the pillow on your bed. Its unique shape supports your neck and head naturally.' }}</p>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div style="flex: 0 0 {{ step_width | default: '280px' }}; scroll-snap-align: start;">
          <div style="background: {{ step_bg | default: '#fff' }}; border: {{ step_border | default: '1px dashed #94c3ff' }}; border-radius: {{ step_border_radius | default: '12px' }}; overflow: hidden; position: relative;">
            <div style="position: absolute; top: 12px; left: 12px; background-color: {{ step_number_bg | default: '#3b82f6' }}; color: {{ step_number_color | default: 'white' }}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">2</div>
            <img src="{{ step_2_image | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" alt="{{ step_2_alt | default: 'Step 2' }}" style="width: 100%; height: auto;">
            <div style="padding: 20px; text-align: left;">
              <h3 style="font-size: {{ step_title_font_size | default: '18px' }}; font-weight: {{ step_title_font_weight | default: '700' }}; color: {{ step_title_color | default: '#1a3d6d' }}; margin-bottom: 8px;">{{ step_2_title | default: 'Feel the Memory Foam' }}</h3>
              <p style="font-size: {{ step_text_font_size | default: '14px' }}; color: {{ step_text_color | default: '#4a4a4a' }};">{{ step_2_text | default: 'Gently press down and feel the foam adjust to your hand—just like it will to your head.' }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div style="flex: 0 0 {{ step_width | default: '280px' }}; scroll-snap-align: start;">
          <div style="background: {{ step_bg | default: '#fff' }}; border: {{ step_border | default: '1px dashed #94c3ff' }}; border-radius: {{ step_border_radius | default: '12px' }}; overflow: hidden; position: relative;">
            <div style="position: absolute; top: 12px; left: 12px; background-color: {{ step_number_bg | default: '#3b82f6' }}; color: {{ step_number_color | default: 'white' }}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">3</div>
            <img src="{{ step_3_image | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" alt="{{ step_3_alt | default: 'Step 3' }}" style="width: 100%; height: auto;">
            <div style="padding: 20px; text-align: left;">
              <h3 style="font-size: {{ step_title_font_size | default: '18px' }}; font-weight: {{ step_title_font_weight | default: '700' }}; color: {{ step_title_color | default: '#1a3d6d' }}; margin-bottom: 8px;">{{ step_3_title | default: 'Enjoy Better Sleep' }}</h3>
              <p style="font-size: {{ step_text_font_size | default: '14px' }}; color: {{ step_text_color | default: '#4a4a4a' }};">{{ step_3_text | default: 'Lay your head down and relax. Wake up refreshed, aligned, and pain-free.' }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>`,
  customizationOptions: [
    {
      id: 'background',
      label: 'Background',
      type: 'text',
      defaultValue: 'linear-gradient(to bottom, #e6f6ff, #ffffff)'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '60px 20px'
    },
    {
      id: 'max_width',
      label: 'Max Width',
      type: 'text',
      defaultValue: '1200px'
    },
    {
      id: 'heading_text',
      label: 'Heading Text',
      type: 'text',
      defaultValue: 'How to Use'
    },
    {
      id: 'heading_color',
      label: 'Heading Color',
      type: 'color',
      defaultValue: '#1a3d6d'
    },
    {
      id: 'heading_font_size',
      label: 'Heading Font Size',
      type: 'text',
      defaultValue: '32px'
    },
    {
      id: 'heading_font_weight',
      label: 'Heading Font Weight',
      type: 'text',
      defaultValue: '800'
    },
    {
      id: 'subheading_text',
      label: 'Subheading Text',
      type: 'text',
      defaultValue: 'Follow these 3 simple steps to get the best experience.'
    },
    {
      id: 'subheading_color',
      label: 'Subheading Color',
      type: 'color',
      defaultValue: '#4a4a4a'
    },
    {
      id: 'subheading_font_size',
      label: 'Subheading Font Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'step_gap',
      label: 'Gap Between Steps',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'step_width',
      label: 'Step Width',
      type: 'text',
      defaultValue: '280px'
    },
    {
      id: 'step_bg',
      label: 'Step Background',
      type: 'color',
      defaultValue: '#fff'
    },
    {
      id: 'step_border',
      label: 'Step Border',
      type: 'text',
      defaultValue: '1px dashed #94c3ff'
    },
    {
      id: 'step_border_radius',
      label: 'Step Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'step_number_bg',
      label: 'Step Number Background',
      type: 'color',
      defaultValue: '#3b82f6'
    },
    {
      id: 'step_number_color',
      label: 'Step Number Color',
      type: 'color',
      defaultValue: 'white'
    },
    {
      id: 'step_title_color',
      label: 'Step Title Color',
      type: 'color',
      defaultValue: '#1a3d6d'
    },
    {
      id: 'step_title_font_size',
      label: 'Step Title Font Size',
      type: 'text',
      defaultValue: '18px'
    },
    {
      id: 'step_title_font_weight',
      label: 'Step Title Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'step_text_color',
      label: 'Step Text Color',
      type: 'color',
      defaultValue: '#4a4a4a'
    },
    {
      id: 'step_text_font_size',
      label: 'Step Text Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'step_1_title',
      label: 'Step 1 Title',
      type: 'text',
      defaultValue: 'Place the Pillow'
    },
    {
      id: 'step_1_text',
      label: 'Step 1 Text',
      type: 'text',
      defaultValue: 'Place the pillow on your bed. Its unique shape supports your neck and head naturally.'
    },
    {
      id: 'step_1_image',
      label: 'Step 1 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'step_1_alt',
      label: 'Step 1 Image Alt Text',
      type: 'text',
      defaultValue: 'Step 1'
    },
    {
      id: 'step_2_title',
      label: 'Step 2 Title',
      type: 'text',
      defaultValue: 'Feel the Memory Foam'
    },
    {
      id: 'step_2_text',
      label: 'Step 2 Text',
      type: 'text',
      defaultValue: 'Gently press down and feel the foam adjust to your hand—just like it will to your head.'
    },
    {
      id: 'step_2_image',
      label: 'Step 2 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'step_2_alt',
      label: 'Step 2 Image Alt Text',
      type: 'text',
      defaultValue: 'Step 2'
    },
    {
      id: 'step_3_title',
      label: 'Step 3 Title',
      type: 'text',
      defaultValue: 'Enjoy Better Sleep'
    },
    {
      id: 'step_3_text',
      label: 'Step 3 Text',
      type: 'text',
      defaultValue: 'Lay your head down and relax. Wake up refreshed, aligned, and pain-free.'
    },
    {
      id: 'step_3_image',
      label: 'Step 3 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'step_3_alt',
      label: 'Step 3 Image Alt Text',
      type: 'text',
      defaultValue: 'Step 3'
    }
  ]
};