function printList()
{
    var current;
    var main = document.getElementById("wrapper");
    anime.forEach(function(e)
    {
        var dl = e.download;
        current= '<div><h1>'+ e.title+'</h1><hr>';
        current+= '<h2><ul>';
        for(var i in dl)
        {
        current+= '<a href="#" onclick="window.open(\''+ dl[i] +'\',\'\',\'width=1030px, height=600px\')"/><li>'+(Number(i)+1)+'</li></a> ';
        }
        current+='</ul></h2><img src="images/'+ e.image+'.jpg"/></div>';
        main.innerHTML+=current;
    })
}

function sortAs(bool)
{
    if(bool===0) 
	{
        anime.sort(function (x, y) {
            return y.title.localeCompare(x.title);
        });
    }
    else
    {
        anime.sort(function(x,y)
        {
            return x.title.localeCompare(y.title);
        });
    }
}