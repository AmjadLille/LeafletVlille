import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class Search extends MapControl {

  createLeafletElement() {
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      providerOptions={{ region: "fr" }},
      style: 'bar',
      showMarker: true,
      showPopup: false,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: false,
      searchLabel: 'search'
    });
  }
}

export default Search;