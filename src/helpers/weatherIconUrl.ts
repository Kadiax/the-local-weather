export const weatherIconUrl = (weatherIcon?: string): string =>
  weatherIcon ? `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` : '';
