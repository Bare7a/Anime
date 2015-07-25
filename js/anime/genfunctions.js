function generate(event)
{
    var title = document.getElementById("title").value;
    var image = document.getElementById("image").value;
    var download = [];
    for(var i = 1; i<=5;i++)
    {
        if(document.getElementById("download_"+i))
        {
            download.push(document.getElementById("download_" + i).value);
        }
    }
    var textarea = document.getElementById("output");
    textarea.value = "{\n";
    textarea.value+= '  "title":'+'"'+title+'",\n';
    textarea.value+= '  "download":'+'\n';
    textarea.value+= '  ['+'\n';
    for(var j in download)
    {
        textarea.value+= '      "'+ download[j] +'",\n';
    }
    textarea.value = textarea.value.substring(0,textarea.value.length-2);
    textarea.value+= '\n  ],'+'\n';
    textarea.value+= '  "image":'+'"'+image+'"\n}';
    event.preventDefault();
}

var count = 0;
function addDownload()
{
    if(count<5)
    {
        count++;
        var div = document.createElement('div');
        div.innerHTML = '<input type="text" required="required" placeholder="Download Link '+count+' " id="download_'+count+'"><input class="button" type="button" onClick="addDownload()" value="+" /><input class="button" type="button" value="-" onclick="removeDownload()">';
        document.getElementById('generator').appendChild(div);
    }
}

function removeDownload()
{
    var last = document.getElementById('generator').lastChild;
    if(count>1)
    {
        document.getElementById('generator').removeChild( last );
        count--;
    }
}