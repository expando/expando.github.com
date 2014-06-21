setShareLinks((function(s,h,a,r,e){for(h=0;h<s.length;h++){
e=s[h].split(" ");r=a[decodeURIComponent(e[0])]={};
r.url=e[1].replace(/^(\w*\:\/\/)?(\.)?([^\/]+)/,function(l,i,n,k){
return(i||"http://")+(n?"www.":"")+k.replace(/(\.\w?)(\.\w{2,})?$/,function(n,o,w){
return(o?({".":".com",".o":".org",".n":".net"})[o]:"")+(w||"")})
});r.lang=e[2];r.size=e[3];a.list[h]=r}return a})([

"Facebook .facebook./share.php?u=@u&t=@t",
"Twitter twitter./home?status=@t%20-%20@u",
"Tumblr .tumblr./share?v=3&u=@u&t=@t&s=@s",
"StumbleUpon .stumbleupon./submit?url=@u&title=@t",
"LinkedIn .linkedin./shareArticle?mini=true&url=@u&title=@t&summary=@s",
"Reddit reddit./submit?url=@u&title=@t",
"Technorati technorati./faves?add=@u",
"Blogger .blogger./blog_this.pyra?t=@t&u=@u",
"Digg digg./submit?phase=2&url=@u&title=@t&bodytext=@s",
"Delicious delicious./post?url=@u&title=@t&notes=@s",
"Fark cgi.fark./cgi/fark/farkit.pl?h=@t&u=@u",
"Friendfeed .friendfeed./share?title=@t&link=@u",
"MySpace .myspace./Modules/PostTo/Pages/?u=@u&t=@t",
"Mister%20Wong .mister-wong./addurl/?bm_url=@u&bm_description=@t",
"NetVibes .netvibes./share?title=@t&url=@u",
"NewsVine .newsvine./_tools/seed&save?u=@u&h=@t",
"Evernote .evernote./clip.action?url=@u&title=@t",
"Wanelo wanelo./p/post?bookmarklet=&source=toolbar&title=@t&url=@u"

],0,{}));
