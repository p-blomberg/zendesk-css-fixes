// ==UserScript==
// @name        Alarming Ticket Collisions for Zendesk
// @version     1.1.4
// @namespace   https://github.com/p-blomberg/zendesk-css-fixes
// @include     https://*.zendesk.com/*
// @grant       none
// ==/UserScript==
console.info("Loading Alarming Ticket Collisions for Zendesk");
(function() {
var css = ".ticket_collision p { color: red !important; font-size: 16pt !important; }\n";
var node = document.createElement("style");
node.type = "text/css";
node.appendChild(document.createTextNode(css));
var heads = document.getElementsByTagName("head");
if (heads.length > 0) {
	heads[0].appendChild(node); 
} else {
	// no head yet, stick it whereever
	document.documentElement.appendChild(node);
}
})();
console.info("Alarming Ticket Collisions for Zendesk has been loaded.");
