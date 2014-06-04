setShareLinks(
(function(v, i, s, t, a) {
  for(i = v.length - 1; i >= 0; i--) {
    a = v[i].split(" ");
    t = s[decodeURIComponent(a[0])] = {};
    t.url = a[1].replace(/^(\w*\:\/\/)?(\.)?([^\/]+)(\.[on]?\/)/, function(v, i, s, t, a) {
      v = {"./":".com/", ".o/":".org/", ".n/":".net/"};
      return (i || "http://") + (s ? "www." : "") + t + (v[a] || a)
    });
    t.lang = a[2];
    t.size = a[3];
  }
  return s;
})([

//Each line contains info for one social website and follows the pattern:
//
//<escaped name> <url> <preferred locale> <preferred window size>
//
//1. <escaped name>     cannot directly contain spaces but allows spaces and other special 
//                      characters to be encoded.
//
//2. <url>              a url with the replacable keywords @u, @t and @s.
//                      The url is also compressed to have ".com" and "www" removed.
//                      You can replace ".com/" with "./", ".org/" with ".o/",
//                      ".net/" with ".n/", and "www." with "."
//
//                      e.g. ".facebook./" becomes "www.facebook.com/"
//                           "twitter./"   becomes "twitter.com/"
//
//3. <preferred locale> a [-+] separated list of locales e.g. en-US+en-CA
//
//4. <window size>      e.g. 300x200 or 300 for window.open()



"Facebook .facebook./share.php?u=@u&t=@t",
"Twitter twitter./home?status=@t%20-%20@u"
"Tumblr .tumblr./share?v=3&u=@u&t=@t&s=@s"

], 0, {})

);
