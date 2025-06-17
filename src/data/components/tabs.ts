import { ComponentWithCustomization } from '../../types';

export const tabs: ComponentWithCustomization = {
  id: 'tabs',
  title: 'Tabs Component',
  description: 'Interactive tabs with customizable styles',
  category: 'Navigation',
  tags: ['tabs', 'navigation', 'content'],
  code: `<div class="tabs-container">
  <div class="tabs-header">
    <div class="tab-item active" onclick="showTabContent(this, 'tab1')">
      {{ tab_1_title | default: "Tab 1" }}
    </div>
    <div class="tab-item" onclick="showTabContent(this, 'tab2')">
      {{ tab_2_title | default: "Tab 2" }}
    </div>
    <div class="tab-item" onclick="showTabContent(this, 'tab3')">
      {{ tab_3_title | default: "Tab 3" }}
    </div>
  </div>

  <div id="tab1" class="tab-content active">
    <p>{{ tab_1_content | default: "Content for Tab 1 goes here." }}</p>
  </div>
  <div id="tab2" class="tab-content">
    <p>{{ tab_2_content | default: "Content for Tab 2 goes here." }}</p>
  </div>
  <div id="tab3" class="tab-content">
    <p>{{ tab_3_content | default: "Content for Tab 3 goes here." }}</p>
  </div>

  {% style %}
  :root {
    --tab-font-size: {{ tab_font_size | default: '13px' }};
    --tab-font-weight: {{ tab_font_weight | default: 'bold' }};
    --tab-text-color: {{ tab_text_color | default: '#ffffff' }};
    --tab-background-color: {{ tab_background_color | default: '#1cbcc3' }};
    --tab-active-text-color: {{ tab_active_text_color | default: '#1b3a57' }};
    --tab-active-background-color: {{ tab_active_background_color | default: '#ffffff' }};
    --tab-border-radius: {{ tab_border_radius | default: '10px' }};
    --tab-padding: {{ tab_padding | default: '10px 0' }};
    --tab-gap: {{ tab_gap | default: '0' }};
    --content-font-size: {{ content_font_size | default: '13px' }};
    --content-background-color: {{ content_background_color | default: '#ffffff' }};
    --content-text-color: {{ content_text_color | default: '#333333' }};
  }

  .tabs-container {
    max-width: 500px;
    margin: 30px auto;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    border-radius: var(--tab-border-radius);
    overflow: hidden;
  }

  .tabs-header {
    display: flex;
    gap: var(--tab-gap);
  }

  .tab-item {
    flex: 1;
    padding: var(--tab-padding);
    text-align: center;
    font-size: var(--tab-font-size);
    font-weight: var(--tab-font-weight);
    color: var(--tab-text-color);
    background-color: var(--tab-background-color);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .tab-item:first-child {
    border-top-left-radius: var(--tab-border-radius);
  }

  .tab-item:last-child {
    border-top-right-radius: var(--tab-border-radius);
  }

  .tab-item.active {
    background-color: var(--tab-active-background-color);
    color: var(--tab-active-text-color);
  }

  .tab-content {
    display: none;
    padding: 15px;
    font-size: var(--content-font-size);
    background-color: var(--content-background-color);
    color: var(--content-text-color);
    border-bottom-left-radius: var(--tab-border-radius);
    border-bottom-right-radius: var(--tab-border-radius);
  }

  .tab-content.active {
    display: block;
  }
  {% endstyle %}
</div>

<script>
function showTabContent(clickedTab, tabId) {
  const allTabs = document.querySelectorAll('.tab-item');
  const allContents = document.querySelectorAll('.tab-content');

  allTabs.forEach(tab => tab.classList.remove('active'));
  allContents.forEach(content => content.classList.remove('active'));

  clickedTab.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}
</script>`,
  customizationOptions: [
    {
      id: 'tab_1_title',
      label: 'Tab 1 Title',
      type: 'text',
      defaultValue: 'Tab 1'
    },
    {
      id: 'tab_2_title',
      label: 'Tab 2 Title',
      type: 'text',
      defaultValue: 'Tab 2'
    },
    {
      id: 'tab_3_title',
      label: 'Tab 3 Title',
      type: 'text',
      defaultValue: 'Tab 3'
    },
    {
      id: 'tab_1_content',
      label: 'Tab 1 Content',
      type: 'text',
      defaultValue: 'Content for Tab 1 goes here.'
    },
    {
      id: 'tab_2_content',
      label: 'Tab 2 Content',
      type: 'text',
      defaultValue: 'Content for Tab 2 goes here.'
    },
    {
      id: 'tab_3_content',
      label: 'Tab 3 Content',
      type: 'text',
      defaultValue: 'Content for Tab 3 goes here.'
    },
    {
      id: 'tab_font_size',
      label: 'Tab Font Size',
      type: 'text',
      defaultValue: '13px'
    },
    {
      id: 'tab_font_weight',
      label: 'Tab Font Weight',
      type: 'text',
      defaultValue: 'bold'
    },
    {
      id: 'tab_text_color',
      label: 'Tab Text Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'tab_background_color',
      label: 'Tab Background Color',
      type: 'color',
      defaultValue: '#1cbcc3'
    },
    {
      id: 'tab_active_text_color',
      label: 'Active Tab Text Color',
      type: 'color',
      defaultValue: '#1b3a57'
    },
    {
      id: 'tab_active_background_color',
      label: 'Active Tab Background Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'tab_border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'tab_padding',
      label: 'Tab Padding',
      type: 'text',
      defaultValue: '10px 0'
    },
    {
      id: 'tab_gap',
      label: 'Gap Between Tabs',
      type: 'text',
      defaultValue: '0'
    },
    {
      id: 'content_font_size',
      label: 'Content Font Size',
      type: 'text',
      defaultValue: '13px'
    },
    {
      id: 'content_background_color',
      label: 'Content Background Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'content_text_color',
      label: 'Content Text Color',
      type: 'color',
      defaultValue: '#333333'
    }
  ]
};