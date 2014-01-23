var tw_username_regexp = /([^a-zA-Z0-9_]|^|RT:?)([@＠]+)([a-zA-Z0-9_]{1,20})/g;
var tw_hashtag_regexp = /#([a-zA-Z0-9]+)/g;


function linkUsernames(text) {
    return text.replace(
    tw_username_regexp,
        '@<a class="username" href="http://twitter.com/$3">$3</a>');
}

function linkHashtags(text) {
    return text.replace(
        tw_hashtag_regexp,
        '<a class="hashtag" href="http://twitter.com/search?q=$1">#$1</a>'
    );
}

$(document).ready(function () {
    $('p').each(function () {
        $(this).html(linkUsernames($(this).html()));
        //$(this).html(linkHashtags($(this).html()));
    });
});

