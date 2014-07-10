setShareLinks(
(function(s, h, a, r, e) {
  for(h = 0; h < s.length; h++) {
    e = s[h].split(" ");
    r = decodeURIComponent(e[0]);
    r = a[r] = {name:r, code:e[0], lang:e[2], size:e[3]};
    r.url = e[1].replace(/^(\w*\:\/\/)?(\.)?([^\/]+)/, function(l, i, n, k) {
      return (i || "http://") + (n ? "www." : "") + k.replace(/(\.\w?)(\.\w{2,})?$/, function(n, o, w) {
        return (o ? ({".":".com", ".o":".org", ".n":".net"})[o] : "") + (w || "");
      });
    });
    a._list[h] = r;
  }
  return a;
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
//                      e.g. ".facebook./"     becomes "www.facebook.com/"
//                           "twitter./"       becomes "twitter.com/"
//                           "miracleshare.o/" becomes "miracleshare.org/"
//
//3. <preferred locale> a [-+] separated list of locales e.g. en_US+en_CA
//
//4. <window size>      e.g. 300x200 or 300 for window.open()



"Facebook .facebook./share.php?u=@u&t=@t",
"Twitter twitter./home?status=@t%20-%20@u",
"Tumblr .tumblr./share?v=3&u=@u&t=@t&s=@s"

], 0, {_list:[]})

);
