var module = module || {};

(function (scope) {

    var count = 0;

    function downloadLinksGenerator() {
        if (count < 5) {
            count++;
            var div, textField, buttonAdd, buttonRemove;

            div = document.createElement('div');

            textField = document.createElement('input');
            textField.type = 'text';
            textField.setAttribute('required', 'required');
            textField.setAttribute('placeholder', 'Download Link ' + count);
            textField.id = 'download_' + count;
            div.appendChild(textField);


            buttonRemove = document.createElement('input');
            buttonRemove.className = 'button';
            buttonRemove.setAttribute('type', 'button');
            buttonRemove.setAttribute('value', '-');
            buttonRemove.addEventListener('click', function (event) {
                if (count > 1) {
                    var last = document.getElementById('generator').lastChild;
                    document.getElementById('generator').removeChild(last);
                    count--;
                }
                event.preventDefault();
            });
            div.appendChild(buttonRemove);

            buttonAdd = document.createElement('input');
            buttonAdd.className = 'button';
            buttonAdd.setAttribute('type', 'button');
            buttonAdd.setAttribute('value', '+');
            buttonAdd.addEventListener('click', function (event) {
                downloadLinksGenerator();
                event.preventDefault();
            });

            div.appendChild(buttonAdd);

            document.getElementById('generator').appendChild(div);
        }
    }

    scope.animeGenerator = function () {
        var button = document.getElementById('generateButton');
        downloadLinksGenerator();

        button.addEventListener('click', function (event) {
            var title, image, downloadLinks, textArea;
            title = document.getElementById("title").value;
            image = document.getElementById("image").value;
            downloadLinks = [];
            for (var i = 1; i <= 5; i++) {
                if (document.getElementById("download_" + i)) {
                    downloadLinks.push(document.getElementById("download_" + i).value);
                }
            }
            textArea = document.getElementById("output");
            textArea.value = "{\n";
            textArea.value += '  "title" : ' + '"' + title + '",\n';
            textArea.value += '  "download" : [' + '\n';

            downloadLinks.forEach(function (downloadLink) {
                if(downloadLink) {
                    textArea.value += '      "' + downloadLink + '",\n';
                }
            });

            textArea.value = textArea.value.substring(0, textArea.value.length - 2);
            textArea.value += '\n  ],' + '\n';
            textArea.value += '  "image" : ' + '"' + image + '"\n}';
            event.preventDefault();
        });
    };

    scope.videoGenerator = function () {
        var button = document.getElementById('generateButton');

        button.addEventListener('click', function (event) {
            var title, video, textArea;
            title = document.getElementById("title").value;
            video = document.getElementById("video").value.substr(document.getElementById("video").value.indexOf("=") + 1);
            textArea = document.getElementById("output");
            textArea.value = "{\n";
            textArea.value += '  "title" : ' + '"' + title + '",\n';
            textArea.value += '  "video" : ' + '"' + video + '"\n}';
            event.preventDefault();
        });
    };

    scope.navbarGenerator = function () {
        var div, ul, a, li;
        div = document.createElement('div');
        div.setAttribute("id", "navbar");
        ul = document.createElement('ul');
        navbarCollection.forEach(function (link) {
            a = document.createElement('a');
            a.href = link.url;
            li = document.createElement('li');
            li.innerText = link.name;
            a.appendChild(li);
            ul.appendChild(a);
        });
        div.appendChild(ul);
        document.body.insertBefore(div, document.body.firstChild);
    };
})(module);