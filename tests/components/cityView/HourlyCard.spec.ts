import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import HourlyCard from '@/components/cityView/HourlyCard.vue';
import messages from '@/assets/localization/messages.json';

// Create i18n instance using the application's messages
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

describe('HourlyCard', () => {
  it('displays hourly forecast correctly', () => {
    // Prepare test data
    const mockForecastData = {
      list: [
        {
          dt: 1621512000, // Example timestamp
          currentTime: 1621512000000,
          weather: [{ icon: '01d' }],
          main: { temp: 20.5 }
        }
      ]
    };

    // Mount component with test data and i18n
    const wrapper = mount(HourlyCard, {
      props: {
        forecastData: mockForecastData
      },
      global: {
        plugins: [i18n]
      }
    });

    // Verify rendering
    expect(wrapper.find('.weather-card').exists()).toBe(true);
    expect(wrapper.find('.weather-temp').text()).toContain('21'); // rounded temperature
  });
});
