// ==UserScript==
// @name         adFeedsRemover
// @version      1.4
// @description  try to take over the world!
// @author       Vadim Moshev
// @include      *vk.com*
// @downloadURL  https://github.com/Vadim-Moshev/scripts-for-me/raw/master/vk_addFeedRemover.user.js

// ==/UserScript==

(function() {
    'use strict';

    var PHRASES = [
      'Рекламная запись',
      'Promoted post',
      'Ad',
      'Advertisement',
    ];

    function removeAdFeeds() {
      const posts = document.querySelectorAll('._post_content');

      for (let i = posts.length - 1; i >= 0; i--) {
        let curr = posts[i];

        let secondLink = curr.querySelectorAll('.post_header a')[2];
        if (secondLink === undefined) {
          continue
        }

        let phrase = secondLink.textContent;
        if (PHRASES.includes(phrase)) {
          curr.remove()
        }
      }
    }

    function removeAdFeedRows() {
      const feedRows = document.querySelectorAll('.feed_row ');

      for (let i = feedRows.length - 1; i >= 0; i--) {
        let curr = feedRows[i];

        let descriptionBlock = curr.querySelector('div.ads_ad_explain');

        if (!descriptionBlock) {
          continue
        }

        let phrase = descriptionBlock.textContent;
        if (PHRASES.includes(phrase)) {
          curr.remove()
        }
      }
    }

    removeAdFeedRows();
    removeAdFeeds();
    setInterval(removeAdFeeds, 1000);
    setInterval(removeAdFeedRows, 1000);
})();
