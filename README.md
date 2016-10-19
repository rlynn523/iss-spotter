# International Space Station Spotter
[![Build Status](https://travis-ci.org/rlynn523/iss-spotter.svg?branch=mvp-staging)](https://travis-ci.org/rlynn523/iss-spotter)

##Link
https://rlynn523.github.io/iss-spotter/build/#/?_k=50p1r6

##Table of Contents
<li><a href='#purpose'>Purpose</a></li>
<li><a href='#landing-page'>Landing Page</a></li>
<li><a href='#map-view'>Map View</a></li>
<li><a href='#iss-live-feed>ISS Live Feed</a></li>
<li><a href='#tech-used'>Tech Used</a></li>
<li><a href='#what-does-the-future-hold'>What Does The Future Hold?</a></li>

##Purpose
The purpose of this app is to allow a user to see the current position of the International Space Station on Google Maps, as well as see updated coordinates

##Use

###Landing Page
<img src='https://github.com/rlynn523/iss-spotter/blob/master/src/images/home.png?raw=true' width='750'>
<img src=https://github.com/rlynn523/iss-spotter/blob/master/src/images/mobile-home.png?raw=true' height='400'>
<img src=https://github.com/rlynn523/iss-spotter/blob/master/src/images/main-mobile-two.png?raw=true' height='400'>
<br>
<br>
This is the Landing Page for the app. The user has the option of either navigating to the Google Map view or the ISS Live Stream via icon buttons. The top navigation also allows users to navigate to either as well. React Router was used to link  icon buttons to different routes, which allows for different React componenets to render based on the route.

###Map View
<img src='https://github.com/rlynn523/iss-spotter/blob/master/src/images/map.png?raw=true' width='750'>
<img src=https://github.com/rlynn523/iss-spotter/blob/master/src/images/map-mobile.png?raw=true' height='400'>
<img src=https://github.com/rlynn523/iss-spotter/blob/master/src/images/coordinates-mobile.png?raw=true' height='400'>
<br>
<br>
This is the Map Page, which displays the current coordinates of the ISS on Google Maps. The coordinates are fetched from the Where The ISS At? API. The current coordinates of the ISS are displayed on an adjacent component, which is updated every 10 seconds. The location of the Google Marker representing the ISS is also updated every 10 seconds, which allows the user to see the movement of the ISS on the map.

###ISS Live Feed
<img src='https://github.com/rlynn523/iss-spotter/blob/master/src/images/stream.png?raw=true' width='750'>
<img src=https://github.com/rlynn523/iss-spotter/blob/master/src/images/stream-mobile.png?raw=true' height='400'>
<img src=https://github.com/rlynn523/iss-spotter/blob/master/src/images/stats-mobile.png?raw=true' height='400'>
<br>
<br>
This is the Live Stream Page, which displays a component that holds a live stream of the Earth from the ISS. This stream is made available courtesy of Ustream ISS HD Earth Viewing Experiment. On desktop computers, the stream is started automatically once the user has navigated to this page. There is also a Current Stats component which displays the current velocity of the ISS (data from Where the ISS At API), as well as a current visiliby stat. Visibility is denoted as either eclipsed or daylight when fetched from the Where the ISS At API, which I decided to denote with icons.

##Tech Used
<li>HTML5</li>
<li>CSS3</li>
<li>ReactJS</li>
<li>React Router</li>
<li>Redux</li>
<li>webpack</li>
<li>npm</li>
<li>less</li>
<li>Mocha</li>
<li>Chai</li>
<li>Travis CI</li>
<li>Where The ISS At? API</li>
<li>Google Maps API</li>

##What Does The Future Hold?
I would like to have the markers for each coordinate render stay on the map, to allow the user to track the path of the ISS. 

