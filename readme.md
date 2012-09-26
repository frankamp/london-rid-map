london-rid-map
==============

London map of Regressive Imagery Dictionary tweets

## Install
Load dependencies into your checked out directory with ```npm install```

~~Launch a redis instance pointed at the ```./redis/dump.rdb``` at the default port on localhost~~

Run ```node app.js``` and navigate to the page it is listening at, usually localhost:3000

## Usage

On the map page you can see each facet of the Regressive Imagery Dictionary.

There are features that only work if you have launched the optional redis and pointed it at the dump.

What is missing is the per borough view with a chart for each.