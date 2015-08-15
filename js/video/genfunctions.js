function generate(event)
{
    var title = document.getElementById("title").value;
    var video = document.getElementById("video").value.substr(document.getElementById("video").value.indexOf("=") + 1);
    var textarea = document.getElementById("output");
    textarea.value = "{\n";
    textarea.value+= '  "title":'+'"'+title+'",\n';
    textarea.value+= '  "video":'+'"'+video+'"\n}';
    event.preventDefault();
}