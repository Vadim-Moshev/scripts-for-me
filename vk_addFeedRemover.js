// ==UserScript==
// @name         adFeedsRemover
// @version      1
// @description  try to take over the world!
// @author       Vadim Moshev
// @include      *vk.com/feed
// ==/UserScript==

(function() {
    'use strict';

    const PHRASES = [
      'Рекламная запись',
      'Promoted post'
    ];

    function removeAdFeeds() {
      let feedRow = document.querySelectorAll('#feed_rows .feed_row');

      for (let i = 0; i < feedRow.length; i++) {
        let linkWithAdCaption = feedRow[i].querySelector('.post_date a');
        if (!linkWithAdCaption) {
          continue;
        }

        if (PHRASES.includes(linkWithAdCaption.innerHTML)) {
          feedRow[i].remove();
        }
      }
    }

    removeAdFeeds();
    setInterval(removeAdFeeds, 1000);
})();
