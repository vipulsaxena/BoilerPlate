// On ready
$(document).ready(function() {
  // FullPage Scroll
  $('#fullpage').fullpage({
    //Navigation
    menu: true,
    anchors:['anchor-head', 'anchor-1', 'anchor-2', 'anchor-3', 'anchor-4', 'anchor-5'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['anchor-head', 'anchor-1', 'anchor-2', 'anchor-3', 'anchor-4', 'anchor-5'],
    showActiveTooltip: true,

    //Scrolling
    css3: true,
    scrollingSpeed: 1200,
    autoScrolling: true,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: true,
    loopTop: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize : true,
    sectionsColor : ['white', 'red', 'green', 'blue', 'yellow', 'brown'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,

    //Custom selectors
    sectionSelector: '.fullpage-section',

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
  });
    
    // Big body parallax
    // Background
    $.stellar();
    // Elements
    $("#main_container").stellar({
        horizontalScrolling: true,
        scrollProperty: 'transform',
        positionProperty: 'transform',
        verticalOffset: -100
    }); 
});