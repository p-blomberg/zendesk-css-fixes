// ==UserScript==
// @name        Larger attachment dropped warning for Zendesk
// @namespace   https://github.com/p-blomberg/zendesk-css-fixes
// @include     https://*.zendesk.com/*
// @version     1.0.3
// ==/UserScript==
console.info("Loading Larger attachment dropped warning for Zendesk");
(function() {
var css = ".event .header .meta .comment_menu button .untrusted_flag { background-size: 100% !important; height: 100px !important; width: 100px !important; }\n.event .header .meta { position: static !important; float: right !important; right: 0 !important; }\n";
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
console.info("Larger attachment dropped warning for Zendesk has been loaded.");
