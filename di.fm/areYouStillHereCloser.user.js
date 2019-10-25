// ==UserScript==
// @name         Закрыватель панели 'Are you still here?' на DI.FM
// @namespace    https://www.di.fm/
// @version      1
// @updateURL    https://github.com/Vadim-Moshev/scripts-for-me/raw/master/di.fm/areYouStillHereCloser.user.js
// @description  Закрывает панель 'Are you still here?'
// @author       Vadim Moshev
// @include      https://www.di.fm/*
// @grant        none
// ==/UserScript==

(function() {
    function clickOverlay() {
      let overlay = document.getElementById('modal-region');
      if (overlay) {
        overlay.click();
      }

      let playButton = document.querySelector('a.ico.icon-play');
      if (playButton) {
        playButton.click();
      }
    }

    setInterval(clickOverlay, 1000);
})();
