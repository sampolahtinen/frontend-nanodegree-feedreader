# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

##How to Install?
1. Download or clone this repository.
2. Navigate to the project folder.
3. Launch "index.html"

## Tests to be passed in order to run the application smoothly
### Test suite: "RSS Feeds"
This suite tests that:
- allFeeds variable has been defined and that it is not empty
- each feed entry in allFeeds has a URL defined and that the URL is not empty
- each feed entry in allFeeds has a name property defined and that the name is not empty
### Test suite: "The Menu"
This suite tests that:
- the hamburger-menu is not visible when page loads
- the hamburger-menu becomes visible after clicking the menu icon
- the hamburger-menu disappears when clicking the menu icon again
### Test suite: "Initial Entries"
This suite tests that:
- Tests that the loadFeed function works and that the lenght of the .feed container is greater than 0 after calling the function
### Tes suite: "New Feed Selection"
This suite tests that:
- When a new feed is loaded by calling loadFeed, the content actually changes.
