!function(){var t;t=function(){function t(){this.source=$("#photo-template").html(),this.template=Handlebars.compile(this.source)}return t.prototype.get_photos=function(){var t,o=this;return t="http://api.meetup.com/2/photos/?group_id=8825222&order=time&desc=True&offset=0&format=json&page=200&fields=&sig_id=9228642&sig=05f5138c0ffcee4bbbbd69a33edb6e591f6bcc0b&callback=loadPhotos",$.ajax(t,{dataType:"jsonp",success:function(t){var e,s,n,p,r;for(p=t.results,r=[],s=0,n=p.length;n>s;s++)e=p[s],r.push(o.add_photo(e));return r}})},t.prototype.add_photo=function(t){return $("#photos").append(this.template(t))},t}(),$(function(){var o;return $("#photos").length>0?(o=new t,o.get_photos()):void 0})}.call(this);