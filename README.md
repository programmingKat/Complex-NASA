# NASA Facilities Weather

A dashboard that lists NASA's facilities along with the current weather at each one, for space fans curious about conditions at sites across the country.

## Goal

I built this to practice working with a large dataset and chaining API calls. When the page loads, the app fetches NASA's list of roughly 400 facilities, then uses each facility's latitude and longitude to request its current weather. Each facility gets a card showing its center, facility name, and current conditions.

## Tech Stack

- **Front end:** HTML, CSS, JavaScript (Fetch API, promises, DOM manipulation)
- **APIs:** NASA facilities dataset (through a CORS proxy), [WeatherAPI](https://www.weatherapi.com/)
- **Hosting:** GitHub Pages

## How to Use the Live App

1. Open the [live app](https://programmingkat.github.io/Complex-NASA/).
2. Wait a moment while the facilities and their weather load.
3. Scroll through the cards to see each facility's center, name, and current weather.


| Facility List | Facility Card |
<img width="855" height="539" alt="image" src="https://github.com/user-attachments/assets/5b4f2c08-2212-44d3-aacf-89bac1622676" />


## Future Improvements

- Move the weather API key out of the front-end code so it is not public
- Add a dropdown to show facilities in batches of 100 instead of loading all of them at once
- Show a loading message while the data is fetched
- Display more weather details, such as temperature
