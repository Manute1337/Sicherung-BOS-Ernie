// ==UserScript==
// @name        * Silentium
// @namespace   bos-ernie.leitstellenspiel.de
// @version     1.0.0
// @license     BSD-3-Clause
// @author      BOS-Ernie
// @description Entfernt den Chat-Button aus der Karte
// @match       https://www.leitstellenspiel.de/
// @icon        https://www.google.com/s2/favicons?sz=64&domain=leitstellenspiel.de
// @run-at      document-idle
// @grant       none
// @downloadURL https://update.greasyfork.org/scripts/461459/%2A%20Silentium.user.js
// @updateURL https://update.greasyfork.org/scripts/461459/%2A%20Silentium.meta.js
// ==/UserScript==

(function () {
  "use strict";

  document.getElementById("bigMapMenuChatButton").remove();
})();
