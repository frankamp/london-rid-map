london-rid-map
==============

London map of Regressive Imagery Dictionary categorized tweets by borough during the Olympics.

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

The dataset is greater London tweets for the two weeks of the olympics. There is no time element to these rollup stats however.

The data has been broken up by OpenStreetMap boroughs (included in this project as GPX files)

There is a standard geojson created, with additional properties containing the rollup per RID facet at /features.json

With redis the features.json is dynamically created from the underlying stats, without, it is a static copy served back.

## Analysis

The tweets are each geocoded and placed in "unknown" borough or within a London borough based on their lat/lon.

Then they are run through the RID (see the https://github.com/frankamp/node-ridict package) and the total number of tweets matching each facet are counted and stored in redis.

When they are returned to the features.json created for the map they are simply converted to a rate based on the total number of tweets for that borough.

This offers a bit of normalization (because otherwise large population boroughs would 'win' for each statistic).

The rates are what are used in the client side binning. Larger rates are dark blue, smaller rates are lighter going to white.

## Interpretation

What you can say with certainty is that different boroughs tweet with different sets of words during the period in question.

I think (not know) they exhibit this behavior all the time, although the rates would vary.

The characteristic of a "good" distribution is a "high rate" borough being bordered by "medium rate" and a gradient being formed to "low rate" boroughs. Some of the RID facets (Aggression and Glory) match this well, while others appear to be more random (rates for all boroughs for that facet are close perhaps, not much can be said in that case). I base that assumption on the idea that geographic distributions have similar gradients socioeconmically.

Note: The binning takes the variance between "high" and "low" for each borough and shows them with the same set and intensity of bins. This means that even for a facet with low variance (aka little difference between boroughs) there will nevertheless still appear to be just as dramatic high and low colors. This is definitely a weakness, so later I want to include a histogram on the same page to show distribution in a way that can be visually compared.

There are some interesting correlations to what are commonly thought of as "good" and "bad" neighborhoods, but any interpretation in this direction is fraught with assumptions. Since I don't have a firm grasp on those assumptions, I'll leave that to the viewer.

## Questions

Does word usage in tweets for a facet like Positive Affect imply happiness? (or Sadness actually being sad?)

Do any of these facets correlate with crime rates, wealth, or other measured stats reliably?

The RID is old and doesn't include modern slang, shorthand or tweet optimizations. What are the ramifications of that?

