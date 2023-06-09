// server
const PORT = 3000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
// set target url
const url = // add url here;

// send get request to url
axios.get(url)
  .then(res => {
    // response data is page html
    const html = res.data;
    // load html data for parsing
    const $ = cheerio.load(html);
    // declare empty array to store scraped url data
    const urls = [];

    // look for links on page
    $('a', html).each(function() {
      // push links and titles to array
      urls.push({
        title: $(this).text(),
        url: $(this).attr('href')
      });
    });

    console.log(urls);
  });
