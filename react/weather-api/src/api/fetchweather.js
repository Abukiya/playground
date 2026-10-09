export async function getWeather(city, signal) {
  const params = new URLSearchParams({
    key: import.meta.env.VITE_WEATHER_KEY,
    unitGroup: "metric",
    include: "current",
  });

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?${params}`;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    const message = await response.text();
    const error = new Error(message || `HTTP error: ${response.status}`);
    error.status = response.status;
    throw error;
  }

  return response.json();
}