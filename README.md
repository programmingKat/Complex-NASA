# NASA Facilities Weather

A dashboard that lists NASA's facilities along with the current weather at each one, for space fans curious about conditions at sites across the country.

**Live app:** [https://your-link-here](https://your-link-here)

![Screenshot of the main screen](./screenshots/main.png)

## Goal

I built this to practice working with a large dataset and chaining API calls. When the page loads, the app fetches NASA's list of roughly 400 facilities, then uses each facility's latitude and longitude to request its current weather. Each facility gets a card showing its center, facility name, and current conditions.

## Tech Stack

- **Front end:** HTML, CSS, JavaScript (Fetch API, promises, DOM manipulation)
- **APIs:** NASA facilities dataset (through a CORS proxy), [WeatherAPI](https://www.weatherapi.com/)
- **Hosting:** [GitHub Pages / Netlify / Vercel / Render]

## How to Use

1. Open the [live app](https://your-link-here).
2. Wait a moment while the facilities and their weather load.
3. Scroll through the cards to see each facility's center, name, and current weather.

## Live App

**Link:** [https://your-link-here](https://your-link-here)

| Facility List | Facility Card |
| --- | --- |
| ![List of NASA facilities](./screenshots/one.png) | ![Facility card with current weather](./screenshots/two.png) |

## Future Improvements

- Move the weather API key out of the front-end code so it is not public
- Add a dropdown to show facilities in batches of 100 instead of loading all of them at once
- Show a loading message while the data is fetched
- Display more weather details, such as temperature
