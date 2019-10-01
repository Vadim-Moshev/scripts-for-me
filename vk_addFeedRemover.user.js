// ==UserScript==
// @name         adFeedsRemover
// @version      1.3
// @description  try to take over the world!
// @author       Vadim Moshev
// @include      *vk.com*
// @downloadURL  https://github.com/Vadim-Moshev/scripts-for-me/raw/master/vk_addFeedRemover.user.js

// ==/UserScript==

(function() {
    'use strict';

    const PHRASES = [
      'Рекламная запись',
      'Promoted post',
      'Ad',
      'Advertisement'
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

    removeAdFeeds();
    setInterval(removeAdFeeds, 1000);
})();
