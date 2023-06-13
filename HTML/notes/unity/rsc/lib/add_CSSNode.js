let basic_styleNode = document.createElement('style');
let basic_styleDoc = "*{border:none;outline:none;margin:0;padding:0;cursor:default;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;/*系统默认菜单被禁用*/-webkit-user-select:none;/*webkit浏览器*/-khtml-user-select:none;/*早期浏览器*/-moz-user-select:none;/*火狐*/-ms-user-select:none;/*IE10*/user-select:none;}::selection{background-color:rgba(189,198,198,0.4);color:#234234;}::-webkit-scrollbar{position:absolute;background-color:rgba(189,198,198,0.4);width:0.25rem;height:0.25rem}::-webkit-scrollbar-track{background-color:transparent;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}::-webkit-scrollbar-thumb{/*background-color:#3549ff3b;*/background-image:linear-gradient(0deg,rgba(134,84,226,0.205),rgba(150,90,218,0.199));-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}li{position:relative;list-style-type:none;}";
let head = document.getElementsByTagName('head')[0];

(function () {
    head.appendChild(basic_styleNode);
    basic_styleNode.innerText = basic_styleDoc;
})();