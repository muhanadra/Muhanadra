!function(e){"use strict";function i(){$(".toggle-social").on("click",function(){console.log("icon clicked!"),$(".social-wrapper").toggle()})}function t(){"block"==$(".social-icons").css("display")?$(".social-wrapper").hide():$(".social-wrapper").show()}var n=[{projects:[{title:"Feedreader Unit Testing",link:"http://neo0rabie.github.io/frontend-nanodegree-feedreader/",github:"https://github.com/neo0rabie/frontend-nanodegree-feedreader",imgSrc:"images/feedreader.png",bp:["Test Driven Development","Unit Testing","Google Reader API","Jasmine"],description:"A web-based application that reads RSS feeds using Google Feed API, This application is part of Udacity Front-end nano-degree program. As A student I wrote all the required tests to test the funactionality of this app using Jasmine liberary"},{title:"Filming locations",link:"http://neo0rabie.github.io/neighborhood-map/",github:"https://github.com/neo0rabie/eighborhood-map/",imgSrc:"images/location.png",bp:["Google Map Api","KnockOut liberary","Data Binding","Javascript Design Patterns","Seperation of concern","MVC"],description:"An Application that uses Google Maps Api to show the filming locations of Richard Linklater Before Sunrise trilogy."},{title:"Frogger Arcade Game",link:"http://neo0rabie.github.io/frontend-nanodegree-arcade-game/",github:"https://github.com/neo0rabie/frontend-nanodegree-arcade-game",imgSrc:"images/frogger.png",bp:["Object Oriented Programming","Git","HTML5 Canvas"],description:"A remake of the classic arcade game to test my skills in Object Oriented Programming as part of Udacity Front-end nano-degree program"},{title:"Mobile Website Optimization",link:"http://neo0rabie.github.io/frontend-nanodegree-mobile-portfolio/",github:"https://github.com/neo0rabie/frontend-nanodegree-mobile-portfolio",imgSrc:"images/udacity.png",bp:["Web Optimization","Critical Rendering Path","Optimize JavaScript Execution","Simplify paint complexity and reduce paint areas"],description:"A Mobile Portfolio, Optimized to have a score of 96 in Google PageSpeed, and a framerate of 60hz for animation"},{title:"Azm Technologies",link:"http://www.azmtech.org/",github:"https://github.com/neo0rabie",imgSrc:"images/azm.png",status:"Under Development",description:"AZM is an Innovative IT Saudi company That provides professional IT services in the Fields of networking infrastructure, Data Center and DRC solutions, Security, Software Development, Integration, Consultation and Manpower Supply."}]},{games:[{title:"Minesweaper",link:"Rue Saint-Julien le Pauvre 75005 Paris, France",github:"Beginner",imgSrc:"images/interative-design.svg",status:"Under Development",description:"1-A fair description of the scene and why you personally connect with it"},{title:"Frogger Arcade Game",link:"Rue Saint-Julien le Pauvre 75005 Paris, France",github:"Beginner",imgSrc:"images/frogger.png",status:"New",description:"1-A fair description of the scene and why you personally connect with it"},{title:"Rubik Cube",link:"Rue Saint-Julien le Pauvre 75005 Paris, France",github:"Beginner",imgSrc:"images/interative-design.svg",status:"Under Development",description:"1-A fair description of the scene and why you personally connect with it"}]},{skills:[{title:"Javascript",Year:"2012",level:"Very Good","class":"cc-symbol cc-symbol-icon-javascript",imgSrc:"img/javascript.jpg",description:"Celine give Jesse the finger"},{title:"HTML5",Year:"2011",level:"Very Good","class":"cc-symbol cc-symbol-icon-html",imgSrc:"img/html.jpg",description:"Celine give Jesse the finger"},{title:"CSS3",Year:"2011",level:"Very Good","class":"cc-symbol cc-symbol-icon-css",imgSrc:"img/css3.jpg",description:"Celine give Jesse the finger"},{title:"PHP",Year:"2012",level:"Beginner","class":"cc-symbol cc-symbol-icon-php",imgSrc:"img/php.jpg",description:"Celine give Jesse the finger"},{title:"Python",Year:"2014",level:"Beginner","class":"cc-symbol cc-symbol-icon-python",imgSrc:"img/python.jpg",description:"Celine give Jesse the finger"},{title:"Polymer",Year:"2014",level:"Good",icon:"polymer",imgSrc:"img/polymer.jpg",description:"Celine give Jesse the finger"},{title:"Angular JS",Year:"2014",level:"Good",imgIcon:"images/angularjs.svg",imgSrc:"images/angularjs.svg",description:"Celine give Jesse the finger"},{title:"Drupal",Year:"2012",level:"Very Good","class":"fa fa-drupal",imgSrc:"img/drupal.jpg",description:"Celine give Jesse the finger"},{title:"Git",Year:"2014",level:"Good","class":"fa fa-git-square",imgSrc:"img/git.jpg",description:"Celine give Jesse the finger"},{title:"Gulp",Year:"2014",level:"Good",imgIcon:"images/gulp.svg",imgSrc:"img/git.jpg",description:"Celine give Jesse the finger"},{title:"Adobe Illustrator",Year:"2014",level:"Good",imgIcon:"images/illustrator.svg",imgSrc:"img/git.jpg",description:"Celine give Jesse the finger"},{title:"Adobe Photoshop",Year:"2006",level:"Very Good",imgIcon:"images/photoshop.svg",imgSrc:"img/photoshop.jpg",description:"Celine give Jesse the finger"}]},{home:[{title:"Skills",imgSrc:"img/scene01.jpg",link:"Add link here",icon:"code"},{title:"Contact",imgSrc:"img/scene01.jpg",link:"Add link here",icon:"mail"},{title:"About",imgSrc:"img/scene01.jpg",link:"Add link here",icon:"account-circle"},{title:"Projects",imgSrc:"img/scene01.jpg",link:"Add link here",icon:"work"},{title:"Games",imgSrc:"img/scene01.jpg",link:"Add link here",icon:"hardware:gamepad"},{title:"Frogger",imgSrc:"images/frogger.png",link:"Add link here",icon:"bug-report"},{title:"Services",imgSrc:"img/scene01.jpg",link:"Add link here",icon:"gesture"},{title:"Blog",imgSrc:"img/scene01.jpg",link:"Add link here",icon:"create"}]}],o=e.querySelector("#app");o.projects=n[0].projects,o.games=n[1].games,o.skills=n[2].skills,o.home=n[3].home,o.displayInstalledToast=function(){e.querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!"),setTimeout(r,100),i(),t()}),$(window).resize(t);var r=function(){var e=".category-item:nth-child(7)",i=".category-item:nth-child(2)",t=$(e).height(),n=$(i).height();if(t==n)$(e).css("top",0),$(".category-list").css("overflow","auto");else{var o=$(e).height()/-2;$(e).css("top",o),$(".category-list").scrollTop(0),$(".category-list").css("overflow","hidden")}};setTimeout(r,100),$(window).resize(r),page("/",function(){o.route="home",r()}),window.addEventListener("WebComponentsReady",function(){}),o.onMenuSelect=function(){var i=e.querySelector("#paperDrawerPanel");i.narrow&&i.closeDrawer()}}(document);