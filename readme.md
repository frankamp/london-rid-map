london-rid-map
==============

London map of Regressive Imagery Dictionary categorized tweets by borough during the 2012 Olympics.

Try it live: http://london-rid-map.joshuafrankamp.com

Do some analysis yourself: http://github.com/frankamp/node-ridict

## Install
Load dependencies into your checked out directory with ```npm install```

~~Launch a redis instance pointed at the ```./redis/dump.rdb``` at the default port on localhost~~

Run ```node app.js``` and navigate to the page it is listening at, usually localhost:3000

## Usage

On the map page you can see each facet of the Regressive Imagery Dictionary.

There are features that only work if you have launched the optional redis and pointed it at the dump.

What is missing without redis is the per borough view with a chart for each, at /{boroughname}

Also missing generally is the source data that I used to generate the stats in dump.rdb, that is because I don't have redistribution rights for Tweets.

## Dataset

The dataset is greater London area tweets for the two weeks of the  2012 Olympics. 

The data has been broken up by OpenStreetMap boroughs (included in this project as GPX files). Some of the tweets fall outside of the boroughs of london proper and so were ignored and placed into 'unknown' borough.

There is a geojson created, with additional properties containing the rollup per RID facet at /features.json

With redis the features.json is dynamically created from the underlying stats, without, it is a static copy.

## Analysis

The tweets are each geocoded and placed within a London borough based on their lat/lon.

Then they are run through the RID (see the https://github.com/frankamp/node-ridict package) and the total number of tweets matching each facet are counted and stored in redis.

When they are returned to the features.json created for the map they are simply converted to a percentage based on the total number of tweets for that borough.

This offers a bit of normalization because otherwise large population boroughs would 'win' for each statistic.

The rates are what are used in the client side binning. Larger rates are dark blue, smaller rates are lighter going to white.

## Interpretation

What you can say with certainty is that different boroughs tweet with different rates of word imagery during the period in question. For example boroughs near the center of the city tweet with more words from the Glory facet than thier outer neighbors. On the other hand the outer ring is significantly higher in tweets containing Affection related words.

I think (not know) they exhibit this behavior all the time, although the rates would vary.

The characteristic of a "good" distribution for facet is a "high rate" borough being bordered by "medium rate" and a gradient being formed to "low rate" boroughs. I base that assumption on the idea that geographic distributions have similar gradients socioeconmically. Some of the RID facets (Affection and Glory) match this well, while others appear to be more random (rates for all boroughs for a facet may be close, not much can be said in that case). 

Note: The binning takes the variance between "high" and "low" for each borough and shows them with the same set and intensity of bin colors. This means that even for a facet with low variance (aka little difference between the max and min borough) there will nevertheless still appear to be just as dramatic high and low colors. This is definitely a weakness, so later I want to include a histogram on the same page to show distribution in a way that can be visually compared.

There are some interesting correlations to what are commonly thought of as "good" and "bad" neighborhoods, but any interpretation in this direction is fraught with assumptions. Since I don't have a firm grasp on those assumptions, I'll leave that to the viewer and instead close with some questions.

## Questions

Does word usage in tweets for a facet like Positive Affect imply happiness? (or Sadness actually being sad?)

Do any of these facets correlate with crime rates, wealth, or other measured stats reliably?

The RID is old and doesn't include modern slang, shorthand or tweet optimizations. What are the ramifications of that?

