export interface WeatherData {
  dt?: number;
  currentTime?: number;
  main?: WeatherMain;
  wind?: WeatherWind;
  weather?: {
    icon?: string;
  }[];
  sys?: {
    sunrise?: number;
    sunset?: number;
    dayLength?: string;
  };
}

interface WeatherMain {
  temp?: number;
  pressure?: number;
  humidity?: number;
}

interface WeatherWind {
  speed?: number;
}

export interface PolluantData {
  list?: {
    components?: Record<string, number>;
    main?: {
      aqi?: number;
    };
  }[];
}
