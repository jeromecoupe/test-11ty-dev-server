# Testing Eleventy dev server

Reduced test case for 11ty dev server. Both JS and CSS files are generated using NPM scripts.

Getting somewhere here. Thanks to Zach's help over on Mastodon, this looks like it is working as expected now. Seems I had a couple of problems / misunderstandings.

1. Builds are now triggered. Deleted `.eleventyignore` and moving the ignore entries to API as per the changes in [issue #893 over at @11ty/eleventy](https://github.com/11ty/eleventy/issues/893)
2. The other problem was that the builds seem to be faster than my asset pipelines (esbuild for JS and Sass for CSS). Adding `eleventyConfig.setWatchThrottleWaitTime(200);` seems to do the trick. Can see my CSS and JS changes now.
