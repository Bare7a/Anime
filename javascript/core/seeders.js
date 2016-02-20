var module = module || {};

(function (scope) {
    var animeList = [], videoList = [];

    function seedAnime(animeCollection) {
        animeCollection.forEach(function (animeObject) {
            var anime = module.addAnime(animeObject['title'], animeObject['image'], animeObject['download']);
            animeList.push(anime);
        });
    }

    function seedVideo(videoCollection) {
        videoCollection.forEach(function (videoObject) {
            var video = module.addVideo(videoObject['title'], videoObject['link']);
            videoList.push(video);
        });
    }

    function sortAs(bool, object) {
        if (bool) {
            object.sort(function (x, y) {
                return x.title.localeCompare(y.title);
            });
        }
        else {
            object.sort(function (x, y) {
                return y.title.localeCompare(x.title);
            });
        }
    }

    scope.printAnime = function (bool) {
        seedAnime(animeCollection);
        sortAs(bool, animeList);
        animeList.forEach(function (anime) {
            anime.printDom();
        });
    };

    scope.printVideo = function (bool) {
        seedVideo(videoCollection);
        sortAs(bool, videoList);
        videoList.forEach(function (video) {
            video.printDom();
        });
    };
})(module);