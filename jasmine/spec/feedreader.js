/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
/* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. 
         */
    describe('RSS Feeds', function() {
        function isUrl(url) {
            if(typeof url === 'string') {
                if(url.includes('http://')) {
                    return true;
                }
            }
        }
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Testing that URLs are defined and URLs are not empty
        it('have URLs defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).not.toBe(0);
                expect(isUrl(feed.url)).toBe(true);
            });
        });

        //Tests if allFeeds objects have names defined and those are not empty
        it('have names defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });
    //Second test suite testing "The Mnu"
    describe('The menu',function(){
        
        //Testing that the menu element is hidden when page loads
        let menuIcon = $('.menu-icon-link');

        it('hidden by default (onload)', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         //Testing that the menu changes visibility when clicking the menu-icon
         it('opens when menu-icon is clicked', function(){
            //menuIcon.on('click', function (){});
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });
           it('closes when menu-icon is clicked again',function(){
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* Third test suite testing the "Initial Entries" */
        describe('Initial Entries', function(){
            
            //Invoke loadFeed function and wait until it is
            beforeEach(function(done){
                loadFeed(0,done);
            });
            //Tests loadFeed function, that it actually loads at least one entry.
            it('loadFeed works and it loaded one entry',function(){
                const entries = $('.feed').children();
                expect(entries.size()).toBeGreaterThan(0);
            });
        });

        //Fourth test suite for "New Feed Selection"
        describe('New Feed Selection',function(){
            let firstFeed, secondFeed;
            //Tests whether the content actually changes when using loadFeed() function
           beforeEach(function(done){
                loadFeed(0, function(){
                    firstFeed = $('.feed').text();
                    loadFeed(1, function(){
                        secondFeed = $('.feed').text();
                        done();
                    });
                });
            });

            it('check that the content actually changes when using loadFeed',function(){
                expect(firstFeed).not.toBe(secondFeed);
                });
        });
        
}());
