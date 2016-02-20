var module = module || {};

(function (scope) {
    function Video(title, youtubeLink) {
        this.title = title;
        this.youtubeLink = 'https://www.youtube.com/embed/' + youtubeLink;
    }

    Video.prototype.printDom = function() {
        var _this, doc, div, h1, a, hr, iframe;
        _this = this;
        doc = document.getElementById('wrapper');

        div = document.createElement('div');
        h1 = document.createElement('h1');

        a = document.createElement('a');
        a.href = '#';
        a.innerText = this.title;
        a.addEventListener('click',function(){
            window.open(_this.youtubeLink, _this.title, 'width=800px, height=450px');
        });

        h1.appendChild(a);
        div.appendChild(h1);

        hr = document.createElement('hr');
        div.appendChild(hr);

        iframe = document.createElement("iframe");
        iframe.setAttribute("src", this.youtubeLink);
        iframe.setAttribute("width", "412");
        iframe.setAttribute("height", "232");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("fullscreen", "true");

        div.appendChild(iframe);
        doc.appendChild(div);

    };

    scope.addVideo = function (title, link) {
        return new Video(title, link);
    }
})(module);
