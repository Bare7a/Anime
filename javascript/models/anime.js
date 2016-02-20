var module = module || {};
(function (scope) {
    function Anime(title, image, downloadLinks) {
        this.title = title;
        this.image = 'images/' + image + '.jpg';
        this.downloadLinks = downloadLinks;
    }

    Anime.prototype.printDom = function () {
        var _this, doc, div, h1, hr, h2, ul, linkNumber, a, li, img;

        _this = this;
        doc = document.getElementById("wrapper");

        div = document.createElement('div');

        h1 = document.createElement('h1');
        h1.innerText = this.title;
        div.appendChild(h1);

        hr = document.createElement('hr');
        div.appendChild(hr);

        h2 = document.createElement('h2');
        ul = document.createElement('ul');

        linkNumber = 1;
        this.downloadLinks.forEach(function (downloadLink) {
            a = document.createElement('a');
            a.href = '#';
            a.addEventListener('click', function () {
                window.open(downloadLink, _this.title, 'width=1030px, height=600px');
            });

            li = document.createElement('li');
            li.innerText = linkNumber++;
            a.appendChild(li);
            ul.appendChild(a);
        });
        h2.appendChild(ul);
        div.appendChild(h2);

        img = document.createElement('img');
        img.src = this.image;
        div.appendChild(img);
        doc.appendChild(div);
    };

    scope.addAnime = function (title, image, downloadLinks) {
        return new Anime(title, image, downloadLinks);
    }
})(module);