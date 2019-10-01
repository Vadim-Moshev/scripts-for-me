// ==UserScript==
// @name         adFeedsRemover
// @version      1.2
// @description  try to take over the world!
// @author       Vadim Moshev
// @include      *vk.com/feed
// @downloadURL  https://github.com/Vadim-Moshev/scripts-for-me/raw/master/vk_addFeedRemover.user.js

// ==/UserScript==

(function() {
    'use strict';

    const PHRASES = [
      'Рекламная запись',
      'Promoted post',
      'Ad'
    ];

    function removeAdFeeds() {
      const adBlocks = document.querySelectorAll('[id^="ads_ad_box_ad_"]');

      for (let i = adBlocks.length - 1; i >= 0; i--) {
        adBlocks[i].remove()
      }
    }

    removeAdFeeds();
    setInterval(removeAdFeeds, 1000);
})();
