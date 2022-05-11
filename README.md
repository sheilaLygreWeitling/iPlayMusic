# iPlayMusic

## medlemmer

- Marcus
- Sheila
- Aske
- özlem

## opgave beskrivelse

- https://github.com/rts-cmk-opgaver/IPlayMusic
- kun til mobilen

## noter

formler
https://codepen.io/lhz516/pen/dyGpmgP?editors=1010

husk Featured (index) skal senere integrere lazyload
MVP:
  hent playliste / afspille musik, byg videre derfra
  afspille musik, søge efter kunstnere og hente playlister
  pages:
    intro page
    all songs
    music player

## spotify api

spotify endpoints
  https://developer.spotify.com/console/get-search-item/

spotify with oauth login
  https://developer.spotify.com/documentation/web-api/quick-start/
    prøv at lave dette
  https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn
spotify playlists ?
  https://developer.spotify.com/documentation/general/guides/working-with-playlists/
https://developer.spotify.com/documentation/web-api/
https://github.com/Pau1fitz/react-spotify

https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa
https://api.spotify.com/v1/recommendations
https://api.spotify.com/v1/search
https://api.spotify.com/v1/albums

ed sheeran track
https://open.spotify.com/embed/track/2UN0lp72LAusrXi8LLVomt?utm_source=generator
https://open.spotify.com/track/2UN0lp72LAusrXi8LLVomt?si=52bba963de764946
curl --request GET --url https://api.spotify.com/v1/track/2UN0lp72LAusrXi8LLVomt --header 'Authorization: ' --header 'Content-Type: application/json'

https://api.spotify.com/v1/search?q=testshot+starfish&type=artist


curl --request GET 'https://api.spotify.com/v1/track/2UN0lp72LAusrXi8LLVomt' --header 'Accept: application/json' --header 'Authorization: Bearer'
curl --request GET 'https://api.spotify.com/v1/track/2UN0lp72LAusrXi8LLVomt' --header 'Accept: application/json' --header 'Authorization: Bearer 9d4b16ee4a594036945fc243b00d1491'

curl --request GET --url https://api.spotify.com/v1/recommendations/available-genre-seeds --header 'Authorization: ' --header 'Content-Type: application/json' seed_artists '4NHQUGzhtTLFvgF5SZesLK' seed_genres 'classical,country' seed_tracks '0c6xIDDpzE81m2q797ordA'

curl --request GET --url https://api.spotify.com/v1/recommendations --header 'Authorization: ' --header 'Content-Type: application/json' seed_artists '4NHQUGzhtTLFvgF5SZesLK' seed_genres 'classical,country' seed_tracks '0c6xIDDpzE81m2q797ordA'

## dependencies

- yup ??
- prettier (vscode)

npm install -D tailwindcss
npx tailwindcss init

npm i framer-motion
npm i react-carousel-light
npm i react-router
npm i react-icons
npm i react-icons --save
npm i axios
