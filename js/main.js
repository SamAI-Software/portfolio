$(function() {

	new WOW().init();

	var time = 600;

	$(".arrow-down").click(function() {
		console.log("arrow-down pressed");
		console.log($(".projects").offset().top);
        $("html,body").animate({
            scrollTop: $(".projects").offset().top + 5
        }, time)
        //, $(".arrow-down").hide()
    });

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

 	ga('create', 'UA-76535929-1', 'auto');
 	ga('send', 'pageview');


});