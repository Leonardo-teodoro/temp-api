export interface IWeatherDTO {
  q: string; // City name, state code and country code divided by comma
  appId: string;
  units?: string;
  mode?: string;
  lang?: string;
}
