AOS.init({
    // sets a minimum for everything
    delay: 200, //values from 0 - 3000, with step 50ms
    duration: 800, //values from 0 - 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, //whether animation should happen only once whilst scrolling down
    mirror: false, // whether elements should animate out whilst scrolling past
  });

// default flies:
new BugController({'minBugs':2, 'maxBugs':2, 'mouseOver':'die'});
// default spiders:
// new SpiderController({'minBugs':0, 'maxBugs':0});

