setShareLinks((function(v,i,s,t,a){for(i=v.length-1;i>=0;i--){
a=v[i].split(" ");t=s[decodeURIComponent(a[0])]={};
t.url=a[1].replace(/^(\w*\:\/\/)?(\.)?([^\/]+)(\.[on]?\/)/,function(v,i,s,t,a){
v={"./":".com/",".o/":".org/",".n/":".net/"};return(i||"http://")+(s?"www.":"")+t+(v[a]||a)
});t.lang=a[2];t.size=a[3]}return s})([

"Facebook .facebook./share.php?u=@u&t=@t",
"Twitter twitter./home?status=@t%20-%20@u"
"Tumblr .tumblr./share?v=3&u=@u&t=@t&s=@s",
"StumbleUpon .stumbleupon./submit?url=@u&title=@t",
"LinkedIn .linkedin./shareArticle?mini=true&url=@u&title=@t&summary=@s",
"Reddit reddit./submit?url=@u&title=@t",
"Technorati technorati./faves?add=@u",
"Digg digg./submit?phase=2&url=@u&title=@t&bodytext=@s",
"Delicious delicious./post?url=@u&title=@t&notes=@s",
"Fark cgi.fark./cgi/fark/farkit.pl?h=@t&u=@u",
"Friendfeed .friendfeed./share?title=@t&link=@u",
"MySpace .myspace./Modules/PostTo/Pages/?u=@u&t=@t",
"Mister%20Wong .mister-wong./addurl/?bm_url=@u&bm_description=@t",
"NetVibes .netvibes./share?title=@t&url=@u",
"NewsVine .newsvine./_tools/seed&save?u=@u&h=@t",

],0,{}));
