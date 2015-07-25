function navbar()
{
	var links =
	[
		{
			"name" : "Anime",
			"url" : "index.html"
		},
		{
			"name" : "Videos",
			"url" : "videos.html"
		},
		{
			"name" : "Anime Generator",
			"url" : "animegen.html"
		},
		{
			"name" : "Video Generator",
			"url" : "videogen.html"
		}
	];

	var div = document.createElement('div');
	div.setAttribute("id", "navbar");
	var nav='<ul>';
	links.forEach(function (e)
	{
			nav+='<a href="'+e.url+'"><li>'+e.name+'</li></a>'
	});
	nav += '</ul>';
	div.innerHTML=nav;
	document.body.insertBefore(div,document.body.firstChild);
}