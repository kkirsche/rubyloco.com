!function(){var e;e=function(){function e(){this.source=$("#event-template").html(),this.template=Handlebars.compile(this.source)}return e.prototype.get_events=function(){var e,t=this;return e="http://api.meetup.com//2/events/?group_id=8825222&status=upcoming&order=time&limited_events=False&desc=false&offset=0&format=json&page=200&fields=&sig_id=9228642&sig=7e9df3f8cdbe03c41cb42ee8aa90def04e71bf68&callback=loadEvents",$.ajax(e,{dataType:"jsonp",success:function(e){var n,o,s,a,i;for(a=e.results,i=[],o=0,s=a.length;s>o;o++)n=a[o],t.coming_soon(n.time)&&i.push(t.add_event(n));return i}})},e.prototype.add_event=function(e){return e.date=moment(e.time).format("MM/DD/YYYY h:mma"),e.description=new Handlebars.SafeString(e.description),$("#events").append(this.template(e))},e.prototype.coming_soon=function(e){return moment(e).isBefore(moment().add("months",2))},e}(),$(function(){var t;return t=new e,t.get_events()})}.call(this);