# Helsinki bike rental status

Start back-end with: npm run server

Start front-end with: npm start (inside directory bike-client)

Back-end service: 
- Get all stations: [POST/graphql] http://localhost:5000/stations
- Get a station: [POST/graphql] http://localhost:5000/station
- Save home station: [POST] http://localhost:5000/home-station

Front-end service:
- Using React-Leaflet library
- Using Context API in Context/index.js
- Routing with BrowserRouter
- 2 pages: Mainpage, StationPage
- App components : Header, Mainpage, StationPage 
- Mainpage components: SearchBar, StationListForMap, MapStation
- StationPage components: StationList (a table listing stations)
