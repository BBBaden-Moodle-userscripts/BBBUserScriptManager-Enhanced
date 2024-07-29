// ==UserScript==
// @name         BBBUserScriptManager
// @description  Manage your BBBaden userscripts with ease.
// @namespace    BBBaden-Moodle-userscripts
// @version      1.0.0
// @author       black-backdoor
// @match        *://*/*
// @grant        GM_info
// @grant        GM.info
// @note         MODULES: [bridge.lib.js]
// @require      https://github.com/BBBaden-Moodle-userscripts/BBBUserScriptManager/raw/main/bridge.lib.js
// ==/UserScript==

const connection = new Manager();

connection.fetchInstalledUserscripts().then((userscripts) => {
    console.log('Installed Userscripts:', userscripts);
});