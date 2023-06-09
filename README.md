# Simple Web Scraper implementation
This repo contains a simple example of a web scraper.
## Table of contents
- Dependencies
- Getting started


### Dependencies:
  node.js: package handling
  axios: sends requests and get responses
  cheerio: parses HTML and provide API for traversing/manipulating the resulting data
  express: routes requests


### Getting Started:
Once you've cloned the repo, be sure to run `npm install` to install the required dependencies

Then, navigate to the index.js file and replace `// add url here` on line 9 with your target url as a string

Next, open a terminal and run `npm run start` to start the server and send the request to your target

After a moment you should see a console log with all of the server-side rendered links and their associated titles/text blocks


### Potential Improvements
Currently the scraper only gets URLs and attached text. This could be changed to look for any other html elemnts you are interested in collecting. 

It could also be refactored to send requests to sites that it scrapes from the target.
