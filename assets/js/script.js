function UnCryptMailto( s )
{
    var n = 0;
    var r = "";
    for( var i = 0; i < s.length; i++)
    {
        n = s.charCodeAt( i );
        if( n >= 8364 )
        {
            n = 128;
        }
        r += String.fromCharCode( n - 1 );
    }
    return r;
}

function linkTo_UnCryptMailto( s )
{
    location.href=UnCryptMailto( s );
}

(function ($) {

    'use strict';

    let anchors = document.getElementsByClassName("show-list-anchor");
    for (var i = 0; i < anchors.length; i++) {
        let pid = anchors.item(i).getAttribute('data-project-id');
        anchors.item(i).onclick = function(e) {
            if (e.srcElement.innerHTML == "Show More...") {
                e.srcElement.innerHTML = "Show Less";
            } else {
                e.srcElement.innerHTML = "Show More...";
            }

            let items = document.querySelectorAll(".list-item-truncated[data-project-id='" + pid + "']");
            for (var f = 0; f < items.length; f++) {
                if (items.item(f).classList.contains("hidden")) {
                    items.item(f).classList.remove("hidden");
                } else {
                    items.item(f).classList.add("hidden");
                }
            }
            return false;
        };
    }
})();
