(function() {
    function SongPlayer () {
        var SongPlayer = {};
        return SongPlayer;
    }

    angular('blocJams')
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
