(function(b){var a=function(c){this.options=b.extend({},b.i18n.parser.defaults,c);this.language=b.i18n.languages[String.locale]||b.i18n.languages["default"];this.emitter=b.i18n.parser.emitter};a.prototype={constructor:a,simpleParse:function(d,c){return d.replace(/\$(\d+)/g,function(g,f){var e=parseInt(f,10)-1;return c[e]!==undefined?c[e]:"$"+f})},parse:function(d,c){if(d.indexOf("{{")<0){return this.simpleParse(d,c)}this.emitter.language=b.i18n.languages[b.i18n().locale]||b.i18n.languages["default"];return this.emitter.emit(this.ast(d),c)},ast:function(t){var D,G,J,r,f,u,I,m,l,F,q,z,j,C,x,y,e,s,k=0;function p(L){return function(){var N,M;for(N=0;N<L.length;N++){M=L[N]();if(M!==null){return M}}return null}}function o(P){var O,N,M=k,L=[];for(O=0;O<P.length;O++){N=P[O]();if(N===null){k=M;return null}L.push(N)}return L}function H(M,L){return function(){var O=k,N=[],P=L();while(P!==null){N.push(P);P=L()}if(N.length<M){k=O;return null}return N}}function B(M){var L=M.length;return function(){var N=null;if(t.substr(k,L)===M){N=M;k+=L}return N}}function c(L){return function(){var M=t.substr(k).match(L);if(M===null){return null}k+=M[0].length;return M[0]}}D=B("|");G=B(":");J=B("\\");r=c(/^./);f=B("$");u=c(/^\d+/);I=c(/^[^{}\[\]$\\]/);m=c(/^[^{}\[\]$\\|]/);l=c(/^[^{}\[\]$\s]/);function v(M,L){return function(){var N=M();return N===null?null:L(N)}}function n(){var L=H(1,F)();return L===null?null:L.join("")}function E(){var L=H(1,q)();return L===null?null:L.join("")}function w(){var L=o([J,r]);return L===null?null:L[1]}p([w,l]);F=p([w,m]);q=p([w,I]);function A(){var L=o([f,u]);if(L===null){return null}return["REPLACE",parseInt(L[1],10)-1]}j=v(c(/^[ !"$&'()*,.\/0-9;=?@A-Z\^_`a-z~\x80-\xFF+\-]+/),function(L){return L.toString()});function d(){var M,L=o([D,H(0,e)]);if(L===null){return null}M=L[1];return M.length>1?["CONCAT"].concat(M):M[0]}function g(){var L=o([j,G,A]);return L===null?null:[L[0],L[2]]}function i(){var L=o([j,G,e]);return L===null?null:[L[0],L[2]]}z=p([function(){var L=o([p([g,i]),H(0,d)]);return L===null?null:L[0].concat(L[1])},function(){var L=o([j,H(0,d)]);if(L===null){return null}return[L[0]].concat(L[1])}]);C=B("{{");x=B("}}");function K(){var L=o([C,z,x]);return L===null?null:L[1]}y=p([K,A,E]);e=p([K,A,n]);function h(){var L=H(0,y)();if(L===null){return null}return["CONCAT"].concat(L)}s=h();if(s===null||k!==t.length){throw new Error("Parse error at position "+k.toString()+" in input: "+t)}return s}};b.extend(b.i18n.parser,new a())}(jQuery));