function printList()
{
    var current;
    var main = document.getElementById("wrapper");
    videos.forEach(function(e)
    {
        current= '<div><h1><a href="#" onclick="window.open(\''+'https://www.youtube.com/embed/'+ e.video +'\',\'\',\'width=800px, height=450px\')"/>'+ e.title+'</a></h1><hr><iframe width="412" height="232" src="https://www.youtube.com/embed/'+e.video+'" ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
        main.innerHTML+=current;
    })
}

function sortAs(bool)
{
    if(bool===0) 
	{
        videos.sort(function (x, y) {
            return y.title.localeCompare(x.title);
        });
    }
    else
    {
        videos.sort(function(x,y)
        {
            return x.title.localeCompare(y.title);
        });
    }
}