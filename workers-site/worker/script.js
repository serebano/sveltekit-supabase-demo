!(function (t) {
  var e = {};
  function n(a) {
    if (e[a]) return e[a].exports;
    var i = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, a) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          n.d(
            a,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return a;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function (t, e, n) {
    (function (t) {
      var e = Object.create,
        n = Object.defineProperty,
        a = Object.getOwnPropertyDescriptor,
        i = Object.getOwnPropertyNames,
        o = Object.getPrototypeOf,
        s = Object.prototype.hasOwnProperty,
        r = (t, e) =>
          function () {
            return e || (0, t[Object.keys(t)[0]])((e = { exports: {} }).exports, e), e.exports;
          },
        p = (t) => {
          return ((t, e, o) => {
            if ((e && 'object' == typeof e) || 'function' == typeof e)
              for (let r of i(e))
                s.call(t, r) ||
                  'default' === r ||
                  n(t, r, { get: () => e[r], enumerable: !(o = a(e, r)) || o.enumerable });
            return t;
          })(
            ((r = n(
              null != t ? e(o(t)) : {},
              'default',
              t && t.__esModule && 'default' in t
                ? { get: () => t.default, enumerable: !0 }
                : { value: t, enumerable: !0 }
            )),
            n(r, '__esModule', { value: !0 })),
            t
          );
          var r;
        },
        l = (t, e, n) => {
          if (!e.has(t)) throw TypeError('Cannot ' + n);
        },
        c = (t, e, n) => (l(t, e, 'read from private field'), n ? n.call(t) : e.get(t)),
        d = r({
          'node_modules/cookie/index.js'(t) {
            'use strict';
            (t.parse = function (t, n) {
              if ('string' != typeof t) throw new TypeError('argument str must be a string');
              for (
                var i = {}, s = n || {}, r = t.split(a), p = s.decode || e, l = 0;
                l < r.length;
                l++
              ) {
                var c = r[l],
                  d = c.indexOf('=');
                if (!(d < 0)) {
                  var A = c.substr(0, d).trim(),
                    m = c.substr(++d, c.length).trim();
                  '"' == m[0] && (m = m.slice(1, -1)), null == i[A] && (i[A] = o(m, p));
                }
              }
              return i;
            }),
              (t.serialize = function (t, e, a) {
                var o = a || {},
                  s = o.encode || n;
                if ('function' != typeof s) throw new TypeError('option encode is invalid');
                if (!i.test(t)) throw new TypeError('argument name is invalid');
                var r = s(e);
                if (r && !i.test(r)) throw new TypeError('argument val is invalid');
                var p = t + '=' + r;
                if (null != o.maxAge) {
                  var l = o.maxAge - 0;
                  if (isNaN(l) || !isFinite(l)) throw new TypeError('option maxAge is invalid');
                  p += '; Max-Age=' + Math.floor(l);
                }
                if (o.domain) {
                  if (!i.test(o.domain)) throw new TypeError('option domain is invalid');
                  p += '; Domain=' + o.domain;
                }
                if (o.path) {
                  if (!i.test(o.path)) throw new TypeError('option path is invalid');
                  p += '; Path=' + o.path;
                }
                if (o.expires) {
                  if ('function' != typeof o.expires.toUTCString)
                    throw new TypeError('option expires is invalid');
                  p += '; Expires=' + o.expires.toUTCString();
                }
                o.httpOnly && (p += '; HttpOnly');
                o.secure && (p += '; Secure');
                if (o.sameSite) {
                  switch ('string' == typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
                    case !0:
                      p += '; SameSite=Strict';
                      break;
                    case 'lax':
                      p += '; SameSite=Lax';
                      break;
                    case 'strict':
                      p += '; SameSite=Strict';
                      break;
                    case 'none':
                      p += '; SameSite=None';
                      break;
                    default:
                      throw new TypeError('option sameSite is invalid');
                  }
                }
                return p;
              });
            var e = decodeURIComponent,
              n = encodeURIComponent,
              a = /; */,
              i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
            function o(t, e) {
              try {
                return e(t);
              } catch (e) {
                return t;
              }
            }
          }
        }),
        A = r({
          '.svelte-kit/cloudflare-workers/node_modules/mime/Mime.js'(t, e) {
            'use strict';
            function n() {
              (this._types = Object.create(null)), (this._extensions = Object.create(null));
              for (let t = 0; t < arguments.length; t++) this.define(arguments[t]);
              (this.define = this.define.bind(this)),
                (this.getType = this.getType.bind(this)),
                (this.getExtension = this.getExtension.bind(this));
            }
            (n.prototype.define = function (t, e) {
              for (let n in t) {
                let a = t[n].map(function (t) {
                  return t.toLowerCase();
                });
                n = n.toLowerCase();
                for (let t = 0; t < a.length; t++) {
                  const i = a[t];
                  if ('*' !== i[0]) {
                    if (!e && i in this._types)
                      throw new Error(
                        'Attempt to change mapping for "' +
                          i +
                          '" extension from "' +
                          this._types[i] +
                          '" to "' +
                          n +
                          '". Pass `force=true` to allow this, otherwise remove "' +
                          i +
                          '" from the list of extensions for "' +
                          n +
                          '".'
                      );
                    this._types[i] = n;
                  }
                }
                if (e || !this._extensions[n]) {
                  const t = a[0];
                  this._extensions[n] = '*' !== t[0] ? t : t.substr(1);
                }
              }
            }),
              (n.prototype.getType = function (t) {
                let e = (t = String(t)).replace(/^.*[/\\]/, '').toLowerCase(),
                  n = e.replace(/^.*\./, '').toLowerCase(),
                  a = e.length < t.length;
                return ((n.length < e.length - 1 || !a) && this._types[n]) || null;
              }),
              (n.prototype.getExtension = function (t) {
                return (
                  ((t = /^\s*([^;\s]*)/.test(t) && RegExp.$1) &&
                    this._extensions[t.toLowerCase()]) ||
                  null
                );
              }),
              (e.exports = n);
          }
        }),
        m = r({
          '.svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js'(t, e) {
            e.exports = {
              'application/andrew-inset': ['ez'],
              'application/applixware': ['aw'],
              'application/atom+xml': ['atom'],
              'application/atomcat+xml': ['atomcat'],
              'application/atomdeleted+xml': ['atomdeleted'],
              'application/atomsvc+xml': ['atomsvc'],
              'application/atsc-dwd+xml': ['dwd'],
              'application/atsc-held+xml': ['held'],
              'application/atsc-rsat+xml': ['rsat'],
              'application/bdoc': ['bdoc'],
              'application/calendar+xml': ['xcs'],
              'application/ccxml+xml': ['ccxml'],
              'application/cdfx+xml': ['cdfx'],
              'application/cdmi-capability': ['cdmia'],
              'application/cdmi-container': ['cdmic'],
              'application/cdmi-domain': ['cdmid'],
              'application/cdmi-object': ['cdmio'],
              'application/cdmi-queue': ['cdmiq'],
              'application/cu-seeme': ['cu'],
              'application/dash+xml': ['mpd'],
              'application/davmount+xml': ['davmount'],
              'application/docbook+xml': ['dbk'],
              'application/dssc+der': ['dssc'],
              'application/dssc+xml': ['xdssc'],
              'application/ecmascript': ['ecma', 'es'],
              'application/emma+xml': ['emma'],
              'application/emotionml+xml': ['emotionml'],
              'application/epub+zip': ['epub'],
              'application/exi': ['exi'],
              'application/fdt+xml': ['fdt'],
              'application/font-tdpfr': ['pfr'],
              'application/geo+json': ['geojson'],
              'application/gml+xml': ['gml'],
              'application/gpx+xml': ['gpx'],
              'application/gxf': ['gxf'],
              'application/gzip': ['gz'],
              'application/hjson': ['hjson'],
              'application/hyperstudio': ['stk'],
              'application/inkml+xml': ['ink', 'inkml'],
              'application/ipfix': ['ipfix'],
              'application/its+xml': ['its'],
              'application/java-archive': ['jar', 'war', 'ear'],
              'application/java-serialized-object': ['ser'],
              'application/java-vm': ['class'],
              'application/javascript': ['js', 'mjs'],
              'application/json': ['json', 'map'],
              'application/json5': ['json5'],
              'application/jsonml+json': ['jsonml'],
              'application/ld+json': ['jsonld'],
              'application/lgr+xml': ['lgr'],
              'application/lost+xml': ['lostxml'],
              'application/mac-binhex40': ['hqx'],
              'application/mac-compactpro': ['cpt'],
              'application/mads+xml': ['mads'],
              'application/manifest+json': ['webmanifest'],
              'application/marc': ['mrc'],
              'application/marcxml+xml': ['mrcx'],
              'application/mathematica': ['ma', 'nb', 'mb'],
              'application/mathml+xml': ['mathml'],
              'application/mbox': ['mbox'],
              'application/mediaservercontrol+xml': ['mscml'],
              'application/metalink+xml': ['metalink'],
              'application/metalink4+xml': ['meta4'],
              'application/mets+xml': ['mets'],
              'application/mmt-aei+xml': ['maei'],
              'application/mmt-usd+xml': ['musd'],
              'application/mods+xml': ['mods'],
              'application/mp21': ['m21', 'mp21'],
              'application/mp4': ['mp4s', 'm4p'],
              'application/mrb-consumer+xml': ['*xdf'],
              'application/mrb-publish+xml': ['*xdf'],
              'application/msword': ['doc', 'dot'],
              'application/mxf': ['mxf'],
              'application/n-quads': ['nq'],
              'application/n-triples': ['nt'],
              'application/node': ['cjs'],
              'application/octet-stream': [
                'bin',
                'dms',
                'lrf',
                'mar',
                'so',
                'dist',
                'distz',
                'pkg',
                'bpk',
                'dump',
                'elc',
                'deploy',
                'exe',
                'dll',
                'deb',
                'dmg',
                'iso',
                'img',
                'msi',
                'msp',
                'msm',
                'buffer'
              ],
              'application/oda': ['oda'],
              'application/oebps-package+xml': ['opf'],
              'application/ogg': ['ogx'],
              'application/omdoc+xml': ['omdoc'],
              'application/onenote': ['onetoc', 'onetoc2', 'onetmp', 'onepkg'],
              'application/oxps': ['oxps'],
              'application/p2p-overlay+xml': ['relo'],
              'application/patch-ops-error+xml': ['*xer'],
              'application/pdf': ['pdf'],
              'application/pgp-encrypted': ['pgp'],
              'application/pgp-signature': ['asc', 'sig'],
              'application/pics-rules': ['prf'],
              'application/pkcs10': ['p10'],
              'application/pkcs7-mime': ['p7m', 'p7c'],
              'application/pkcs7-signature': ['p7s'],
              'application/pkcs8': ['p8'],
              'application/pkix-attr-cert': ['ac'],
              'application/pkix-cert': ['cer'],
              'application/pkix-crl': ['crl'],
              'application/pkix-pkipath': ['pkipath'],
              'application/pkixcmp': ['pki'],
              'application/pls+xml': ['pls'],
              'application/postscript': ['ai', 'eps', 'ps'],
              'application/provenance+xml': ['provx'],
              'application/pskc+xml': ['pskcxml'],
              'application/raml+yaml': ['raml'],
              'application/rdf+xml': ['rdf', 'owl'],
              'application/reginfo+xml': ['rif'],
              'application/relax-ng-compact-syntax': ['rnc'],
              'application/resource-lists+xml': ['rl'],
              'application/resource-lists-diff+xml': ['rld'],
              'application/rls-services+xml': ['rs'],
              'application/route-apd+xml': ['rapd'],
              'application/route-s-tsid+xml': ['sls'],
              'application/route-usd+xml': ['rusd'],
              'application/rpki-ghostbusters': ['gbr'],
              'application/rpki-manifest': ['mft'],
              'application/rpki-roa': ['roa'],
              'application/rsd+xml': ['rsd'],
              'application/rss+xml': ['rss'],
              'application/rtf': ['rtf'],
              'application/sbml+xml': ['sbml'],
              'application/scvp-cv-request': ['scq'],
              'application/scvp-cv-response': ['scs'],
              'application/scvp-vp-request': ['spq'],
              'application/scvp-vp-response': ['spp'],
              'application/sdp': ['sdp'],
              'application/senml+xml': ['senmlx'],
              'application/sensml+xml': ['sensmlx'],
              'application/set-payment-initiation': ['setpay'],
              'application/set-registration-initiation': ['setreg'],
              'application/shf+xml': ['shf'],
              'application/sieve': ['siv', 'sieve'],
              'application/smil+xml': ['smi', 'smil'],
              'application/sparql-query': ['rq'],
              'application/sparql-results+xml': ['srx'],
              'application/srgs': ['gram'],
              'application/srgs+xml': ['grxml'],
              'application/sru+xml': ['sru'],
              'application/ssdl+xml': ['ssdl'],
              'application/ssml+xml': ['ssml'],
              'application/swid+xml': ['swidtag'],
              'application/tei+xml': ['tei', 'teicorpus'],
              'application/thraud+xml': ['tfi'],
              'application/timestamped-data': ['tsd'],
              'application/toml': ['toml'],
              'application/ttml+xml': ['ttml'],
              'application/ubjson': ['ubj'],
              'application/urc-ressheet+xml': ['rsheet'],
              'application/urc-targetdesc+xml': ['td'],
              'application/voicexml+xml': ['vxml'],
              'application/wasm': ['wasm'],
              'application/widget': ['wgt'],
              'application/winhlp': ['hlp'],
              'application/wsdl+xml': ['wsdl'],
              'application/wspolicy+xml': ['wspolicy'],
              'application/xaml+xml': ['xaml'],
              'application/xcap-att+xml': ['xav'],
              'application/xcap-caps+xml': ['xca'],
              'application/xcap-diff+xml': ['xdf'],
              'application/xcap-el+xml': ['xel'],
              'application/xcap-error+xml': ['xer'],
              'application/xcap-ns+xml': ['xns'],
              'application/xenc+xml': ['xenc'],
              'application/xhtml+xml': ['xhtml', 'xht'],
              'application/xliff+xml': ['xlf'],
              'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
              'application/xml-dtd': ['dtd'],
              'application/xop+xml': ['xop'],
              'application/xproc+xml': ['xpl'],
              'application/xslt+xml': ['*xsl', 'xslt'],
              'application/xspf+xml': ['xspf'],
              'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
              'application/yang': ['yang'],
              'application/yin+xml': ['yin'],
              'application/zip': ['zip'],
              'audio/3gpp': ['*3gpp'],
              'audio/adpcm': ['adp'],
              'audio/amr': ['amr'],
              'audio/basic': ['au', 'snd'],
              'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
              'audio/mobile-xmf': ['mxmf'],
              'audio/mp3': ['*mp3'],
              'audio/mp4': ['m4a', 'mp4a'],
              'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
              'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
              'audio/s3m': ['s3m'],
              'audio/silk': ['sil'],
              'audio/wav': ['wav'],
              'audio/wave': ['*wav'],
              'audio/webm': ['weba'],
              'audio/xm': ['xm'],
              'font/collection': ['ttc'],
              'font/otf': ['otf'],
              'font/ttf': ['ttf'],
              'font/woff': ['woff'],
              'font/woff2': ['woff2'],
              'image/aces': ['exr'],
              'image/apng': ['apng'],
              'image/avif': ['avif'],
              'image/bmp': ['bmp'],
              'image/cgm': ['cgm'],
              'image/dicom-rle': ['drle'],
              'image/emf': ['emf'],
              'image/fits': ['fits'],
              'image/g3fax': ['g3'],
              'image/gif': ['gif'],
              'image/heic': ['heic'],
              'image/heic-sequence': ['heics'],
              'image/heif': ['heif'],
              'image/heif-sequence': ['heifs'],
              'image/hej2k': ['hej2'],
              'image/hsj2': ['hsj2'],
              'image/ief': ['ief'],
              'image/jls': ['jls'],
              'image/jp2': ['jp2', 'jpg2'],
              'image/jpeg': ['jpeg', 'jpg', 'jpe'],
              'image/jph': ['jph'],
              'image/jphc': ['jhc'],
              'image/jpm': ['jpm'],
              'image/jpx': ['jpx', 'jpf'],
              'image/jxr': ['jxr'],
              'image/jxra': ['jxra'],
              'image/jxrs': ['jxrs'],
              'image/jxs': ['jxs'],
              'image/jxsc': ['jxsc'],
              'image/jxsi': ['jxsi'],
              'image/jxss': ['jxss'],
              'image/ktx': ['ktx'],
              'image/ktx2': ['ktx2'],
              'image/png': ['png'],
              'image/sgi': ['sgi'],
              'image/svg+xml': ['svg', 'svgz'],
              'image/t38': ['t38'],
              'image/tiff': ['tif', 'tiff'],
              'image/tiff-fx': ['tfx'],
              'image/webp': ['webp'],
              'image/wmf': ['wmf'],
              'message/disposition-notification': ['disposition-notification'],
              'message/global': ['u8msg'],
              'message/global-delivery-status': ['u8dsn'],
              'message/global-disposition-notification': ['u8mdn'],
              'message/global-headers': ['u8hdr'],
              'message/rfc822': ['eml', 'mime'],
              'model/3mf': ['3mf'],
              'model/gltf+json': ['gltf'],
              'model/gltf-binary': ['glb'],
              'model/iges': ['igs', 'iges'],
              'model/mesh': ['msh', 'mesh', 'silo'],
              'model/mtl': ['mtl'],
              'model/obj': ['obj'],
              'model/stl': ['stl'],
              'model/vrml': ['wrl', 'vrml'],
              'model/x3d+binary': ['*x3db', 'x3dbz'],
              'model/x3d+fastinfoset': ['x3db'],
              'model/x3d+vrml': ['*x3dv', 'x3dvz'],
              'model/x3d+xml': ['x3d', 'x3dz'],
              'model/x3d-vrml': ['x3dv'],
              'text/cache-manifest': ['appcache', 'manifest'],
              'text/calendar': ['ics', 'ifb'],
              'text/coffeescript': ['coffee', 'litcoffee'],
              'text/css': ['css'],
              'text/csv': ['csv'],
              'text/html': ['html', 'htm', 'shtml'],
              'text/jade': ['jade'],
              'text/jsx': ['jsx'],
              'text/less': ['less'],
              'text/markdown': ['markdown', 'md'],
              'text/mathml': ['mml'],
              'text/mdx': ['mdx'],
              'text/n3': ['n3'],
              'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
              'text/richtext': ['rtx'],
              'text/rtf': ['*rtf'],
              'text/sgml': ['sgml', 'sgm'],
              'text/shex': ['shex'],
              'text/slim': ['slim', 'slm'],
              'text/spdx': ['spdx'],
              'text/stylus': ['stylus', 'styl'],
              'text/tab-separated-values': ['tsv'],
              'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
              'text/turtle': ['ttl'],
              'text/uri-list': ['uri', 'uris', 'urls'],
              'text/vcard': ['vcard'],
              'text/vtt': ['vtt'],
              'text/xml': ['*xml'],
              'text/yaml': ['yaml', 'yml'],
              'video/3gpp': ['3gp', '3gpp'],
              'video/3gpp2': ['3g2'],
              'video/h261': ['h261'],
              'video/h263': ['h263'],
              'video/h264': ['h264'],
              'video/iso.segment': ['m4s'],
              'video/jpeg': ['jpgv'],
              'video/jpm': ['*jpm', 'jpgm'],
              'video/mj2': ['mj2', 'mjp2'],
              'video/mp2t': ['ts'],
              'video/mp4': ['mp4', 'mp4v', 'mpg4'],
              'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
              'video/ogg': ['ogv'],
              'video/quicktime': ['qt', 'mov'],
              'video/webm': ['webm']
            };
          }
        }),
        u = r({
          '.svelte-kit/cloudflare-workers/node_modules/mime/types/other.js'(t, e) {
            e.exports = {
              'application/prs.cww': ['cww'],
              'application/vnd.1000minds.decision-model+xml': ['1km'],
              'application/vnd.3gpp.pic-bw-large': ['plb'],
              'application/vnd.3gpp.pic-bw-small': ['psb'],
              'application/vnd.3gpp.pic-bw-var': ['pvb'],
              'application/vnd.3gpp2.tcap': ['tcap'],
              'application/vnd.3m.post-it-notes': ['pwn'],
              'application/vnd.accpac.simply.aso': ['aso'],
              'application/vnd.accpac.simply.imp': ['imp'],
              'application/vnd.acucobol': ['acu'],
              'application/vnd.acucorp': ['atc', 'acutc'],
              'application/vnd.adobe.air-application-installer-package+zip': ['air'],
              'application/vnd.adobe.formscentral.fcdt': ['fcdt'],
              'application/vnd.adobe.fxp': ['fxp', 'fxpl'],
              'application/vnd.adobe.xdp+xml': ['xdp'],
              'application/vnd.adobe.xfdf': ['xfdf'],
              'application/vnd.ahead.space': ['ahead'],
              'application/vnd.airzip.filesecure.azf': ['azf'],
              'application/vnd.airzip.filesecure.azs': ['azs'],
              'application/vnd.amazon.ebook': ['azw'],
              'application/vnd.americandynamics.acc': ['acc'],
              'application/vnd.amiga.ami': ['ami'],
              'application/vnd.android.package-archive': ['apk'],
              'application/vnd.anser-web-certificate-issue-initiation': ['cii'],
              'application/vnd.anser-web-funds-transfer-initiation': ['fti'],
              'application/vnd.antix.game-component': ['atx'],
              'application/vnd.apple.installer+xml': ['mpkg'],
              'application/vnd.apple.keynote': ['key'],
              'application/vnd.apple.mpegurl': ['m3u8'],
              'application/vnd.apple.numbers': ['numbers'],
              'application/vnd.apple.pages': ['pages'],
              'application/vnd.apple.pkpass': ['pkpass'],
              'application/vnd.aristanetworks.swi': ['swi'],
              'application/vnd.astraea-software.iota': ['iota'],
              'application/vnd.audiograph': ['aep'],
              'application/vnd.balsamiq.bmml+xml': ['bmml'],
              'application/vnd.blueice.multipass': ['mpm'],
              'application/vnd.bmi': ['bmi'],
              'application/vnd.businessobjects': ['rep'],
              'application/vnd.chemdraw+xml': ['cdxml'],
              'application/vnd.chipnuts.karaoke-mmd': ['mmd'],
              'application/vnd.cinderella': ['cdy'],
              'application/vnd.citationstyles.style+xml': ['csl'],
              'application/vnd.claymore': ['cla'],
              'application/vnd.cloanto.rp9': ['rp9'],
              'application/vnd.clonk.c4group': ['c4g', 'c4d', 'c4f', 'c4p', 'c4u'],
              'application/vnd.cluetrust.cartomobile-config': ['c11amc'],
              'application/vnd.cluetrust.cartomobile-config-pkg': ['c11amz'],
              'application/vnd.commonspace': ['csp'],
              'application/vnd.contact.cmsg': ['cdbcmsg'],
              'application/vnd.cosmocaller': ['cmc'],
              'application/vnd.crick.clicker': ['clkx'],
              'application/vnd.crick.clicker.keyboard': ['clkk'],
              'application/vnd.crick.clicker.palette': ['clkp'],
              'application/vnd.crick.clicker.template': ['clkt'],
              'application/vnd.crick.clicker.wordbank': ['clkw'],
              'application/vnd.criticaltools.wbs+xml': ['wbs'],
              'application/vnd.ctc-posml': ['pml'],
              'application/vnd.cups-ppd': ['ppd'],
              'application/vnd.curl.car': ['car'],
              'application/vnd.curl.pcurl': ['pcurl'],
              'application/vnd.dart': ['dart'],
              'application/vnd.data-vision.rdz': ['rdz'],
              'application/vnd.dbf': ['dbf'],
              'application/vnd.dece.data': ['uvf', 'uvvf', 'uvd', 'uvvd'],
              'application/vnd.dece.ttml+xml': ['uvt', 'uvvt'],
              'application/vnd.dece.unspecified': ['uvx', 'uvvx'],
              'application/vnd.dece.zip': ['uvz', 'uvvz'],
              'application/vnd.denovo.fcselayout-link': ['fe_launch'],
              'application/vnd.dna': ['dna'],
              'application/vnd.dolby.mlp': ['mlp'],
              'application/vnd.dpgraph': ['dpg'],
              'application/vnd.dreamfactory': ['dfac'],
              'application/vnd.ds-keypoint': ['kpxx'],
              'application/vnd.dvb.ait': ['ait'],
              'application/vnd.dvb.service': ['svc'],
              'application/vnd.dynageo': ['geo'],
              'application/vnd.ecowin.chart': ['mag'],
              'application/vnd.enliven': ['nml'],
              'application/vnd.epson.esf': ['esf'],
              'application/vnd.epson.msf': ['msf'],
              'application/vnd.epson.quickanime': ['qam'],
              'application/vnd.epson.salt': ['slt'],
              'application/vnd.epson.ssf': ['ssf'],
              'application/vnd.eszigno3+xml': ['es3', 'et3'],
              'application/vnd.ezpix-album': ['ez2'],
              'application/vnd.ezpix-package': ['ez3'],
              'application/vnd.fdf': ['fdf'],
              'application/vnd.fdsn.mseed': ['mseed'],
              'application/vnd.fdsn.seed': ['seed', 'dataless'],
              'application/vnd.flographit': ['gph'],
              'application/vnd.fluxtime.clip': ['ftc'],
              'application/vnd.framemaker': ['fm', 'frame', 'maker', 'book'],
              'application/vnd.frogans.fnc': ['fnc'],
              'application/vnd.frogans.ltf': ['ltf'],
              'application/vnd.fsc.weblaunch': ['fsc'],
              'application/vnd.fujitsu.oasys': ['oas'],
              'application/vnd.fujitsu.oasys2': ['oa2'],
              'application/vnd.fujitsu.oasys3': ['oa3'],
              'application/vnd.fujitsu.oasysgp': ['fg5'],
              'application/vnd.fujitsu.oasysprs': ['bh2'],
              'application/vnd.fujixerox.ddd': ['ddd'],
              'application/vnd.fujixerox.docuworks': ['xdw'],
              'application/vnd.fujixerox.docuworks.binder': ['xbd'],
              'application/vnd.fuzzysheet': ['fzs'],
              'application/vnd.genomatix.tuxedo': ['txd'],
              'application/vnd.geogebra.file': ['ggb'],
              'application/vnd.geogebra.tool': ['ggt'],
              'application/vnd.geometry-explorer': ['gex', 'gre'],
              'application/vnd.geonext': ['gxt'],
              'application/vnd.geoplan': ['g2w'],
              'application/vnd.geospace': ['g3w'],
              'application/vnd.gmx': ['gmx'],
              'application/vnd.google-apps.document': ['gdoc'],
              'application/vnd.google-apps.presentation': ['gslides'],
              'application/vnd.google-apps.spreadsheet': ['gsheet'],
              'application/vnd.google-earth.kml+xml': ['kml'],
              'application/vnd.google-earth.kmz': ['kmz'],
              'application/vnd.grafeq': ['gqf', 'gqs'],
              'application/vnd.groove-account': ['gac'],
              'application/vnd.groove-help': ['ghf'],
              'application/vnd.groove-identity-message': ['gim'],
              'application/vnd.groove-injector': ['grv'],
              'application/vnd.groove-tool-message': ['gtm'],
              'application/vnd.groove-tool-template': ['tpl'],
              'application/vnd.groove-vcard': ['vcg'],
              'application/vnd.hal+xml': ['hal'],
              'application/vnd.handheld-entertainment+xml': ['zmm'],
              'application/vnd.hbci': ['hbci'],
              'application/vnd.hhe.lesson-player': ['les'],
              'application/vnd.hp-hpgl': ['hpgl'],
              'application/vnd.hp-hpid': ['hpid'],
              'application/vnd.hp-hps': ['hps'],
              'application/vnd.hp-jlyt': ['jlt'],
              'application/vnd.hp-pcl': ['pcl'],
              'application/vnd.hp-pclxl': ['pclxl'],
              'application/vnd.hydrostatix.sof-data': ['sfd-hdstx'],
              'application/vnd.ibm.minipay': ['mpy'],
              'application/vnd.ibm.modcap': ['afp', 'listafp', 'list3820'],
              'application/vnd.ibm.rights-management': ['irm'],
              'application/vnd.ibm.secure-container': ['sc'],
              'application/vnd.iccprofile': ['icc', 'icm'],
              'application/vnd.igloader': ['igl'],
              'application/vnd.immervision-ivp': ['ivp'],
              'application/vnd.immervision-ivu': ['ivu'],
              'application/vnd.insors.igm': ['igm'],
              'application/vnd.intercon.formnet': ['xpw', 'xpx'],
              'application/vnd.intergeo': ['i2g'],
              'application/vnd.intu.qbo': ['qbo'],
              'application/vnd.intu.qfx': ['qfx'],
              'application/vnd.ipunplugged.rcprofile': ['rcprofile'],
              'application/vnd.irepository.package+xml': ['irp'],
              'application/vnd.is-xpr': ['xpr'],
              'application/vnd.isac.fcs': ['fcs'],
              'application/vnd.jam': ['jam'],
              'application/vnd.jcp.javame.midlet-rms': ['rms'],
              'application/vnd.jisp': ['jisp'],
              'application/vnd.joost.joda-archive': ['joda'],
              'application/vnd.kahootz': ['ktz', 'ktr'],
              'application/vnd.kde.karbon': ['karbon'],
              'application/vnd.kde.kchart': ['chrt'],
              'application/vnd.kde.kformula': ['kfo'],
              'application/vnd.kde.kivio': ['flw'],
              'application/vnd.kde.kontour': ['kon'],
              'application/vnd.kde.kpresenter': ['kpr', 'kpt'],
              'application/vnd.kde.kspread': ['ksp'],
              'application/vnd.kde.kword': ['kwd', 'kwt'],
              'application/vnd.kenameaapp': ['htke'],
              'application/vnd.kidspiration': ['kia'],
              'application/vnd.kinar': ['kne', 'knp'],
              'application/vnd.koan': ['skp', 'skd', 'skt', 'skm'],
              'application/vnd.kodak-descriptor': ['sse'],
              'application/vnd.las.las+xml': ['lasxml'],
              'application/vnd.llamagraphics.life-balance.desktop': ['lbd'],
              'application/vnd.llamagraphics.life-balance.exchange+xml': ['lbe'],
              'application/vnd.lotus-1-2-3': ['123'],
              'application/vnd.lotus-approach': ['apr'],
              'application/vnd.lotus-freelance': ['pre'],
              'application/vnd.lotus-notes': ['nsf'],
              'application/vnd.lotus-organizer': ['org'],
              'application/vnd.lotus-screencam': ['scm'],
              'application/vnd.lotus-wordpro': ['lwp'],
              'application/vnd.macports.portpkg': ['portpkg'],
              'application/vnd.mcd': ['mcd'],
              'application/vnd.medcalcdata': ['mc1'],
              'application/vnd.mediastation.cdkey': ['cdkey'],
              'application/vnd.mfer': ['mwf'],
              'application/vnd.mfmp': ['mfm'],
              'application/vnd.micrografx.flo': ['flo'],
              'application/vnd.micrografx.igx': ['igx'],
              'application/vnd.mif': ['mif'],
              'application/vnd.mobius.daf': ['daf'],
              'application/vnd.mobius.dis': ['dis'],
              'application/vnd.mobius.mbk': ['mbk'],
              'application/vnd.mobius.mqy': ['mqy'],
              'application/vnd.mobius.msl': ['msl'],
              'application/vnd.mobius.plc': ['plc'],
              'application/vnd.mobius.txf': ['txf'],
              'application/vnd.mophun.application': ['mpn'],
              'application/vnd.mophun.certificate': ['mpc'],
              'application/vnd.mozilla.xul+xml': ['xul'],
              'application/vnd.ms-artgalry': ['cil'],
              'application/vnd.ms-cab-compressed': ['cab'],
              'application/vnd.ms-excel': ['xls', 'xlm', 'xla', 'xlc', 'xlt', 'xlw'],
              'application/vnd.ms-excel.addin.macroenabled.12': ['xlam'],
              'application/vnd.ms-excel.sheet.binary.macroenabled.12': ['xlsb'],
              'application/vnd.ms-excel.sheet.macroenabled.12': ['xlsm'],
              'application/vnd.ms-excel.template.macroenabled.12': ['xltm'],
              'application/vnd.ms-fontobject': ['eot'],
              'application/vnd.ms-htmlhelp': ['chm'],
              'application/vnd.ms-ims': ['ims'],
              'application/vnd.ms-lrm': ['lrm'],
              'application/vnd.ms-officetheme': ['thmx'],
              'application/vnd.ms-outlook': ['msg'],
              'application/vnd.ms-pki.seccat': ['cat'],
              'application/vnd.ms-pki.stl': ['*stl'],
              'application/vnd.ms-powerpoint': ['ppt', 'pps', 'pot'],
              'application/vnd.ms-powerpoint.addin.macroenabled.12': ['ppam'],
              'application/vnd.ms-powerpoint.presentation.macroenabled.12': ['pptm'],
              'application/vnd.ms-powerpoint.slide.macroenabled.12': ['sldm'],
              'application/vnd.ms-powerpoint.slideshow.macroenabled.12': ['ppsm'],
              'application/vnd.ms-powerpoint.template.macroenabled.12': ['potm'],
              'application/vnd.ms-project': ['mpp', 'mpt'],
              'application/vnd.ms-word.document.macroenabled.12': ['docm'],
              'application/vnd.ms-word.template.macroenabled.12': ['dotm'],
              'application/vnd.ms-works': ['wps', 'wks', 'wcm', 'wdb'],
              'application/vnd.ms-wpl': ['wpl'],
              'application/vnd.ms-xpsdocument': ['xps'],
              'application/vnd.mseq': ['mseq'],
              'application/vnd.musician': ['mus'],
              'application/vnd.muvee.style': ['msty'],
              'application/vnd.mynfc': ['taglet'],
              'application/vnd.neurolanguage.nlu': ['nlu'],
              'application/vnd.nitf': ['ntf', 'nitf'],
              'application/vnd.noblenet-directory': ['nnd'],
              'application/vnd.noblenet-sealer': ['nns'],
              'application/vnd.noblenet-web': ['nnw'],
              'application/vnd.nokia.n-gage.ac+xml': ['*ac'],
              'application/vnd.nokia.n-gage.data': ['ngdat'],
              'application/vnd.nokia.n-gage.symbian.install': ['n-gage'],
              'application/vnd.nokia.radio-preset': ['rpst'],
              'application/vnd.nokia.radio-presets': ['rpss'],
              'application/vnd.novadigm.edm': ['edm'],
              'application/vnd.novadigm.edx': ['edx'],
              'application/vnd.novadigm.ext': ['ext'],
              'application/vnd.oasis.opendocument.chart': ['odc'],
              'application/vnd.oasis.opendocument.chart-template': ['otc'],
              'application/vnd.oasis.opendocument.database': ['odb'],
              'application/vnd.oasis.opendocument.formula': ['odf'],
              'application/vnd.oasis.opendocument.formula-template': ['odft'],
              'application/vnd.oasis.opendocument.graphics': ['odg'],
              'application/vnd.oasis.opendocument.graphics-template': ['otg'],
              'application/vnd.oasis.opendocument.image': ['odi'],
              'application/vnd.oasis.opendocument.image-template': ['oti'],
              'application/vnd.oasis.opendocument.presentation': ['odp'],
              'application/vnd.oasis.opendocument.presentation-template': ['otp'],
              'application/vnd.oasis.opendocument.spreadsheet': ['ods'],
              'application/vnd.oasis.opendocument.spreadsheet-template': ['ots'],
              'application/vnd.oasis.opendocument.text': ['odt'],
              'application/vnd.oasis.opendocument.text-master': ['odm'],
              'application/vnd.oasis.opendocument.text-template': ['ott'],
              'application/vnd.oasis.opendocument.text-web': ['oth'],
              'application/vnd.olpc-sugar': ['xo'],
              'application/vnd.oma.dd2+xml': ['dd2'],
              'application/vnd.openblox.game+xml': ['obgx'],
              'application/vnd.openofficeorg.extension': ['oxt'],
              'application/vnd.openstreetmap.data+xml': ['osm'],
              'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['pptx'],
              'application/vnd.openxmlformats-officedocument.presentationml.slide': ['sldx'],
              'application/vnd.openxmlformats-officedocument.presentationml.slideshow': ['ppsx'],
              'application/vnd.openxmlformats-officedocument.presentationml.template': ['potx'],
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['xlsx'],
              'application/vnd.openxmlformats-officedocument.spreadsheetml.template': ['xltx'],
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['docx'],
              'application/vnd.openxmlformats-officedocument.wordprocessingml.template': ['dotx'],
              'application/vnd.osgeo.mapguide.package': ['mgp'],
              'application/vnd.osgi.dp': ['dp'],
              'application/vnd.osgi.subsystem': ['esa'],
              'application/vnd.palm': ['pdb', 'pqa', 'oprc'],
              'application/vnd.pawaafile': ['paw'],
              'application/vnd.pg.format': ['str'],
              'application/vnd.pg.osasli': ['ei6'],
              'application/vnd.picsel': ['efif'],
              'application/vnd.pmi.widget': ['wg'],
              'application/vnd.pocketlearn': ['plf'],
              'application/vnd.powerbuilder6': ['pbd'],
              'application/vnd.previewsystems.box': ['box'],
              'application/vnd.proteus.magazine': ['mgz'],
              'application/vnd.publishare-delta-tree': ['qps'],
              'application/vnd.pvi.ptid1': ['ptid'],
              'application/vnd.quark.quarkxpress': ['qxd', 'qxt', 'qwd', 'qwt', 'qxl', 'qxb'],
              'application/vnd.rar': ['rar'],
              'application/vnd.realvnc.bed': ['bed'],
              'application/vnd.recordare.musicxml': ['mxl'],
              'application/vnd.recordare.musicxml+xml': ['musicxml'],
              'application/vnd.rig.cryptonote': ['cryptonote'],
              'application/vnd.rim.cod': ['cod'],
              'application/vnd.rn-realmedia': ['rm'],
              'application/vnd.rn-realmedia-vbr': ['rmvb'],
              'application/vnd.route66.link66+xml': ['link66'],
              'application/vnd.sailingtracker.track': ['st'],
              'application/vnd.seemail': ['see'],
              'application/vnd.sema': ['sema'],
              'application/vnd.semd': ['semd'],
              'application/vnd.semf': ['semf'],
              'application/vnd.shana.informed.formdata': ['ifm'],
              'application/vnd.shana.informed.formtemplate': ['itp'],
              'application/vnd.shana.informed.interchange': ['iif'],
              'application/vnd.shana.informed.package': ['ipk'],
              'application/vnd.simtech-mindmapper': ['twd', 'twds'],
              'application/vnd.smaf': ['mmf'],
              'application/vnd.smart.teacher': ['teacher'],
              'application/vnd.software602.filler.form+xml': ['fo'],
              'application/vnd.solent.sdkm+xml': ['sdkm', 'sdkd'],
              'application/vnd.spotfire.dxp': ['dxp'],
              'application/vnd.spotfire.sfs': ['sfs'],
              'application/vnd.stardivision.calc': ['sdc'],
              'application/vnd.stardivision.draw': ['sda'],
              'application/vnd.stardivision.impress': ['sdd'],
              'application/vnd.stardivision.math': ['smf'],
              'application/vnd.stardivision.writer': ['sdw', 'vor'],
              'application/vnd.stardivision.writer-global': ['sgl'],
              'application/vnd.stepmania.package': ['smzip'],
              'application/vnd.stepmania.stepchart': ['sm'],
              'application/vnd.sun.wadl+xml': ['wadl'],
              'application/vnd.sun.xml.calc': ['sxc'],
              'application/vnd.sun.xml.calc.template': ['stc'],
              'application/vnd.sun.xml.draw': ['sxd'],
              'application/vnd.sun.xml.draw.template': ['std'],
              'application/vnd.sun.xml.impress': ['sxi'],
              'application/vnd.sun.xml.impress.template': ['sti'],
              'application/vnd.sun.xml.math': ['sxm'],
              'application/vnd.sun.xml.writer': ['sxw'],
              'application/vnd.sun.xml.writer.global': ['sxg'],
              'application/vnd.sun.xml.writer.template': ['stw'],
              'application/vnd.sus-calendar': ['sus', 'susp'],
              'application/vnd.svd': ['svd'],
              'application/vnd.symbian.install': ['sis', 'sisx'],
              'application/vnd.syncml+xml': ['xsm'],
              'application/vnd.syncml.dm+wbxml': ['bdm'],
              'application/vnd.syncml.dm+xml': ['xdm'],
              'application/vnd.syncml.dmddf+xml': ['ddf'],
              'application/vnd.tao.intent-module-archive': ['tao'],
              'application/vnd.tcpdump.pcap': ['pcap', 'cap', 'dmp'],
              'application/vnd.tmobile-livetv': ['tmo'],
              'application/vnd.trid.tpt': ['tpt'],
              'application/vnd.triscape.mxs': ['mxs'],
              'application/vnd.trueapp': ['tra'],
              'application/vnd.ufdl': ['ufd', 'ufdl'],
              'application/vnd.uiq.theme': ['utz'],
              'application/vnd.umajin': ['umj'],
              'application/vnd.unity': ['unityweb'],
              'application/vnd.uoml+xml': ['uoml'],
              'application/vnd.vcx': ['vcx'],
              'application/vnd.visio': ['vsd', 'vst', 'vss', 'vsw'],
              'application/vnd.visionary': ['vis'],
              'application/vnd.vsf': ['vsf'],
              'application/vnd.wap.wbxml': ['wbxml'],
              'application/vnd.wap.wmlc': ['wmlc'],
              'application/vnd.wap.wmlscriptc': ['wmlsc'],
              'application/vnd.webturbo': ['wtb'],
              'application/vnd.wolfram.player': ['nbp'],
              'application/vnd.wordperfect': ['wpd'],
              'application/vnd.wqd': ['wqd'],
              'application/vnd.wt.stf': ['stf'],
              'application/vnd.xara': ['xar'],
              'application/vnd.xfdl': ['xfdl'],
              'application/vnd.yamaha.hv-dic': ['hvd'],
              'application/vnd.yamaha.hv-script': ['hvs'],
              'application/vnd.yamaha.hv-voice': ['hvp'],
              'application/vnd.yamaha.openscoreformat': ['osf'],
              'application/vnd.yamaha.openscoreformat.osfpvg+xml': ['osfpvg'],
              'application/vnd.yamaha.smaf-audio': ['saf'],
              'application/vnd.yamaha.smaf-phrase': ['spf'],
              'application/vnd.yellowriver-custom-menu': ['cmp'],
              'application/vnd.zul': ['zir', 'zirz'],
              'application/vnd.zzazz.deck+xml': ['zaz'],
              'application/x-7z-compressed': ['7z'],
              'application/x-abiword': ['abw'],
              'application/x-ace-compressed': ['ace'],
              'application/x-apple-diskimage': ['*dmg'],
              'application/x-arj': ['arj'],
              'application/x-authorware-bin': ['aab', 'x32', 'u32', 'vox'],
              'application/x-authorware-map': ['aam'],
              'application/x-authorware-seg': ['aas'],
              'application/x-bcpio': ['bcpio'],
              'application/x-bdoc': ['*bdoc'],
              'application/x-bittorrent': ['torrent'],
              'application/x-blorb': ['blb', 'blorb'],
              'application/x-bzip': ['bz'],
              'application/x-bzip2': ['bz2', 'boz'],
              'application/x-cbr': ['cbr', 'cba', 'cbt', 'cbz', 'cb7'],
              'application/x-cdlink': ['vcd'],
              'application/x-cfs-compressed': ['cfs'],
              'application/x-chat': ['chat'],
              'application/x-chess-pgn': ['pgn'],
              'application/x-chrome-extension': ['crx'],
              'application/x-cocoa': ['cco'],
              'application/x-conference': ['nsc'],
              'application/x-cpio': ['cpio'],
              'application/x-csh': ['csh'],
              'application/x-debian-package': ['*deb', 'udeb'],
              'application/x-dgc-compressed': ['dgc'],
              'application/x-director': [
                'dir',
                'dcr',
                'dxr',
                'cst',
                'cct',
                'cxt',
                'w3d',
                'fgd',
                'swa'
              ],
              'application/x-doom': ['wad'],
              'application/x-dtbncx+xml': ['ncx'],
              'application/x-dtbook+xml': ['dtb'],
              'application/x-dtbresource+xml': ['res'],
              'application/x-dvi': ['dvi'],
              'application/x-envoy': ['evy'],
              'application/x-eva': ['eva'],
              'application/x-font-bdf': ['bdf'],
              'application/x-font-ghostscript': ['gsf'],
              'application/x-font-linux-psf': ['psf'],
              'application/x-font-pcf': ['pcf'],
              'application/x-font-snf': ['snf'],
              'application/x-font-type1': ['pfa', 'pfb', 'pfm', 'afm'],
              'application/x-freearc': ['arc'],
              'application/x-futuresplash': ['spl'],
              'application/x-gca-compressed': ['gca'],
              'application/x-glulx': ['ulx'],
              'application/x-gnumeric': ['gnumeric'],
              'application/x-gramps-xml': ['gramps'],
              'application/x-gtar': ['gtar'],
              'application/x-hdf': ['hdf'],
              'application/x-httpd-php': ['php'],
              'application/x-install-instructions': ['install'],
              'application/x-iso9660-image': ['*iso'],
              'application/x-java-archive-diff': ['jardiff'],
              'application/x-java-jnlp-file': ['jnlp'],
              'application/x-keepass2': ['kdbx'],
              'application/x-latex': ['latex'],
              'application/x-lua-bytecode': ['luac'],
              'application/x-lzh-compressed': ['lzh', 'lha'],
              'application/x-makeself': ['run'],
              'application/x-mie': ['mie'],
              'application/x-mobipocket-ebook': ['prc', 'mobi'],
              'application/x-ms-application': ['application'],
              'application/x-ms-shortcut': ['lnk'],
              'application/x-ms-wmd': ['wmd'],
              'application/x-ms-wmz': ['wmz'],
              'application/x-ms-xbap': ['xbap'],
              'application/x-msaccess': ['mdb'],
              'application/x-msbinder': ['obd'],
              'application/x-mscardfile': ['crd'],
              'application/x-msclip': ['clp'],
              'application/x-msdos-program': ['*exe'],
              'application/x-msdownload': ['*exe', '*dll', 'com', 'bat', '*msi'],
              'application/x-msmediaview': ['mvb', 'm13', 'm14'],
              'application/x-msmetafile': ['*wmf', '*wmz', '*emf', 'emz'],
              'application/x-msmoney': ['mny'],
              'application/x-mspublisher': ['pub'],
              'application/x-msschedule': ['scd'],
              'application/x-msterminal': ['trm'],
              'application/x-mswrite': ['wri'],
              'application/x-netcdf': ['nc', 'cdf'],
              'application/x-ns-proxy-autoconfig': ['pac'],
              'application/x-nzb': ['nzb'],
              'application/x-perl': ['pl', 'pm'],
              'application/x-pilot': ['*prc', '*pdb'],
              'application/x-pkcs12': ['p12', 'pfx'],
              'application/x-pkcs7-certificates': ['p7b', 'spc'],
              'application/x-pkcs7-certreqresp': ['p7r'],
              'application/x-rar-compressed': ['*rar'],
              'application/x-redhat-package-manager': ['rpm'],
              'application/x-research-info-systems': ['ris'],
              'application/x-sea': ['sea'],
              'application/x-sh': ['sh'],
              'application/x-shar': ['shar'],
              'application/x-shockwave-flash': ['swf'],
              'application/x-silverlight-app': ['xap'],
              'application/x-sql': ['sql'],
              'application/x-stuffit': ['sit'],
              'application/x-stuffitx': ['sitx'],
              'application/x-subrip': ['srt'],
              'application/x-sv4cpio': ['sv4cpio'],
              'application/x-sv4crc': ['sv4crc'],
              'application/x-t3vm-image': ['t3'],
              'application/x-tads': ['gam'],
              'application/x-tar': ['tar'],
              'application/x-tcl': ['tcl', 'tk'],
              'application/x-tex': ['tex'],
              'application/x-tex-tfm': ['tfm'],
              'application/x-texinfo': ['texinfo', 'texi'],
              'application/x-tgif': ['*obj'],
              'application/x-ustar': ['ustar'],
              'application/x-virtualbox-hdd': ['hdd'],
              'application/x-virtualbox-ova': ['ova'],
              'application/x-virtualbox-ovf': ['ovf'],
              'application/x-virtualbox-vbox': ['vbox'],
              'application/x-virtualbox-vbox-extpack': ['vbox-extpack'],
              'application/x-virtualbox-vdi': ['vdi'],
              'application/x-virtualbox-vhd': ['vhd'],
              'application/x-virtualbox-vmdk': ['vmdk'],
              'application/x-wais-source': ['src'],
              'application/x-web-app-manifest+json': ['webapp'],
              'application/x-x509-ca-cert': ['der', 'crt', 'pem'],
              'application/x-xfig': ['fig'],
              'application/x-xliff+xml': ['*xlf'],
              'application/x-xpinstall': ['xpi'],
              'application/x-xz': ['xz'],
              'application/x-zmachine': ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8'],
              'audio/vnd.dece.audio': ['uva', 'uvva'],
              'audio/vnd.digital-winds': ['eol'],
              'audio/vnd.dra': ['dra'],
              'audio/vnd.dts': ['dts'],
              'audio/vnd.dts.hd': ['dtshd'],
              'audio/vnd.lucent.voice': ['lvp'],
              'audio/vnd.ms-playready.media.pya': ['pya'],
              'audio/vnd.nuera.ecelp4800': ['ecelp4800'],
              'audio/vnd.nuera.ecelp7470': ['ecelp7470'],
              'audio/vnd.nuera.ecelp9600': ['ecelp9600'],
              'audio/vnd.rip': ['rip'],
              'audio/x-aac': ['aac'],
              'audio/x-aiff': ['aif', 'aiff', 'aifc'],
              'audio/x-caf': ['caf'],
              'audio/x-flac': ['flac'],
              'audio/x-m4a': ['*m4a'],
              'audio/x-matroska': ['mka'],
              'audio/x-mpegurl': ['m3u'],
              'audio/x-ms-wax': ['wax'],
              'audio/x-ms-wma': ['wma'],
              'audio/x-pn-realaudio': ['ram', 'ra'],
              'audio/x-pn-realaudio-plugin': ['rmp'],
              'audio/x-realaudio': ['*ra'],
              'audio/x-wav': ['*wav'],
              'chemical/x-cdx': ['cdx'],
              'chemical/x-cif': ['cif'],
              'chemical/x-cmdf': ['cmdf'],
              'chemical/x-cml': ['cml'],
              'chemical/x-csml': ['csml'],
              'chemical/x-xyz': ['xyz'],
              'image/prs.btif': ['btif'],
              'image/prs.pti': ['pti'],
              'image/vnd.adobe.photoshop': ['psd'],
              'image/vnd.airzip.accelerator.azv': ['azv'],
              'image/vnd.dece.graphic': ['uvi', 'uvvi', 'uvg', 'uvvg'],
              'image/vnd.djvu': ['djvu', 'djv'],
              'image/vnd.dvb.subtitle': ['*sub'],
              'image/vnd.dwg': ['dwg'],
              'image/vnd.dxf': ['dxf'],
              'image/vnd.fastbidsheet': ['fbs'],
              'image/vnd.fpx': ['fpx'],
              'image/vnd.fst': ['fst'],
              'image/vnd.fujixerox.edmics-mmr': ['mmr'],
              'image/vnd.fujixerox.edmics-rlc': ['rlc'],
              'image/vnd.microsoft.icon': ['ico'],
              'image/vnd.ms-dds': ['dds'],
              'image/vnd.ms-modi': ['mdi'],
              'image/vnd.ms-photo': ['wdp'],
              'image/vnd.net-fpx': ['npx'],
              'image/vnd.pco.b16': ['b16'],
              'image/vnd.tencent.tap': ['tap'],
              'image/vnd.valve.source.texture': ['vtf'],
              'image/vnd.wap.wbmp': ['wbmp'],
              'image/vnd.xiff': ['xif'],
              'image/vnd.zbrush.pcx': ['pcx'],
              'image/x-3ds': ['3ds'],
              'image/x-cmu-raster': ['ras'],
              'image/x-cmx': ['cmx'],
              'image/x-freehand': ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
              'image/x-icon': ['*ico'],
              'image/x-jng': ['jng'],
              'image/x-mrsid-image': ['sid'],
              'image/x-ms-bmp': ['*bmp'],
              'image/x-pcx': ['*pcx'],
              'image/x-pict': ['pic', 'pct'],
              'image/x-portable-anymap': ['pnm'],
              'image/x-portable-bitmap': ['pbm'],
              'image/x-portable-graymap': ['pgm'],
              'image/x-portable-pixmap': ['ppm'],
              'image/x-rgb': ['rgb'],
              'image/x-tga': ['tga'],
              'image/x-xbitmap': ['xbm'],
              'image/x-xpixmap': ['xpm'],
              'image/x-xwindowdump': ['xwd'],
              'message/vnd.wfa.wsc': ['wsc'],
              'model/vnd.collada+xml': ['dae'],
              'model/vnd.dwf': ['dwf'],
              'model/vnd.gdl': ['gdl'],
              'model/vnd.gtw': ['gtw'],
              'model/vnd.mts': ['mts'],
              'model/vnd.opengex': ['ogex'],
              'model/vnd.parasolid.transmit.binary': ['x_b'],
              'model/vnd.parasolid.transmit.text': ['x_t'],
              'model/vnd.usdz+zip': ['usdz'],
              'model/vnd.valve.source.compiled-map': ['bsp'],
              'model/vnd.vtu': ['vtu'],
              'text/prs.lines.tag': ['dsc'],
              'text/vnd.curl': ['curl'],
              'text/vnd.curl.dcurl': ['dcurl'],
              'text/vnd.curl.mcurl': ['mcurl'],
              'text/vnd.curl.scurl': ['scurl'],
              'text/vnd.dvb.subtitle': ['sub'],
              'text/vnd.fly': ['fly'],
              'text/vnd.fmi.flexstor': ['flx'],
              'text/vnd.graphviz': ['gv'],
              'text/vnd.in3d.3dml': ['3dml'],
              'text/vnd.in3d.spot': ['spot'],
              'text/vnd.sun.j2me.app-descriptor': ['jad'],
              'text/vnd.wap.wml': ['wml'],
              'text/vnd.wap.wmlscript': ['wmls'],
              'text/x-asm': ['s', 'asm'],
              'text/x-c': ['c', 'cc', 'cxx', 'cpp', 'h', 'hh', 'dic'],
              'text/x-component': ['htc'],
              'text/x-fortran': ['f', 'for', 'f77', 'f90'],
              'text/x-handlebars-template': ['hbs'],
              'text/x-java-source': ['java'],
              'text/x-lua': ['lua'],
              'text/x-markdown': ['mkd'],
              'text/x-nfo': ['nfo'],
              'text/x-opml': ['opml'],
              'text/x-org': ['*org'],
              'text/x-pascal': ['p', 'pas'],
              'text/x-processing': ['pde'],
              'text/x-sass': ['sass'],
              'text/x-scss': ['scss'],
              'text/x-setext': ['etx'],
              'text/x-sfv': ['sfv'],
              'text/x-suse-ymp': ['ymp'],
              'text/x-uuencode': ['uu'],
              'text/x-vcalendar': ['vcs'],
              'text/x-vcard': ['vcf'],
              'video/vnd.dece.hd': ['uvh', 'uvvh'],
              'video/vnd.dece.mobile': ['uvm', 'uvvm'],
              'video/vnd.dece.pd': ['uvp', 'uvvp'],
              'video/vnd.dece.sd': ['uvs', 'uvvs'],
              'video/vnd.dece.video': ['uvv', 'uvvv'],
              'video/vnd.dvb.file': ['dvb'],
              'video/vnd.fvt': ['fvt'],
              'video/vnd.mpegurl': ['mxu', 'm4u'],
              'video/vnd.ms-playready.media.pyv': ['pyv'],
              'video/vnd.uvvu.mp4': ['uvu', 'uvvu'],
              'video/vnd.vivo': ['viv'],
              'video/x-f4v': ['f4v'],
              'video/x-fli': ['fli'],
              'video/x-flv': ['flv'],
              'video/x-m4v': ['m4v'],
              'video/x-matroska': ['mkv', 'mk3d', 'mks'],
              'video/x-mng': ['mng'],
              'video/x-ms-asf': ['asf', 'asx'],
              'video/x-ms-vob': ['vob'],
              'video/x-ms-wm': ['wm'],
              'video/x-ms-wmv': ['wmv'],
              'video/x-ms-wmx': ['wmx'],
              'video/x-ms-wvx': ['wvx'],
              'video/x-msvideo': ['avi'],
              'video/x-sgi-movie': ['movie'],
              'video/x-smv': ['smv'],
              'x-conference/x-cooltalk': ['ice']
            };
          }
        }),
        v = r({
          '.svelte-kit/cloudflare-workers/node_modules/mime/index.js'(t, e) {
            'use strict';
            var n = A();
            e.exports = new n(m(), u());
          }
        }),
        C = r({
          '.svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js'(
            t
          ) {
            'use strict';
            var e,
              n =
                (t && t.__extends) ||
                ((e = function (t, n) {
                  return (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    })(t, n);
                }),
                function (t, n) {
                  function a() {
                    this.constructor = t;
                  }
                  e(t, n),
                    (t.prototype =
                      null === n ? Object.create(n) : ((a.prototype = n.prototype), new a()));
                });
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.InternalError = t.NotFoundError = t.MethodNotAllowedError = t.KVError = void 0);
            var a = (function (t) {
              function e(n, a) {
                var i = this.constructor;
                void 0 === a && (a = 500);
                var o = t.call(this, n) || this;
                return Object.setPrototypeOf(o, i.prototype), (o.name = e.name), (o.status = a), o;
              }
              return n(e, t), e;
            })(Error);
            t.KVError = a;
            var i = (function (t) {
              function e(e, n) {
                return (
                  void 0 === e && (e = 'Not a valid request method'),
                  void 0 === n && (n = 405),
                  t.call(this, e, n) || this
                );
              }
              return n(e, t), e;
            })(a);
            t.MethodNotAllowedError = i;
            var o = (function (t) {
              function e(e, n) {
                return (
                  void 0 === e && (e = 'Not Found'),
                  void 0 === n && (n = 404),
                  t.call(this, e, n) || this
                );
              }
              return n(e, t), e;
            })(a);
            t.NotFoundError = o;
            var s = (function (t) {
              function e(e, n) {
                return (
                  void 0 === e && (e = 'Internal Error in KV Asset Handler'),
                  void 0 === n && (n = 500),
                  t.call(this, e, n) || this
                );
              }
              return n(e, t), e;
            })(a);
            t.InternalError = s;
          }
        }),
        f = r({
          '.svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js'(
            t
          ) {
            'use strict';
            var e =
                (t && t.__awaiter) ||
                function (t, e, n, a) {
                  return new (n || (n = Promise))(function (i, o) {
                    function s(t) {
                      try {
                        p(a.next(t));
                      } catch (t) {
                        o(t);
                      }
                    }
                    function r(t) {
                      try {
                        p(a.throw(t));
                      } catch (t) {
                        o(t);
                      }
                    }
                    function p(t) {
                      var e;
                      t.done
                        ? i(t.value)
                        : ((e = t.value),
                          e instanceof n
                            ? e
                            : new n(function (t) {
                                t(e);
                              })).then(s, r);
                    }
                    p((a = a.apply(t, e || [])).next());
                  });
                },
              n =
                (t && t.__generator) ||
                function (t, e) {
                  var n,
                    a,
                    i,
                    o,
                    s = {
                      label: 0,
                      sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                      },
                      trys: [],
                      ops: []
                    };
                  return (
                    (o = { next: r(0), throw: r(1), return: r(2) }),
                    'function' == typeof Symbol &&
                      (o[Symbol.iterator] = function () {
                        return this;
                      }),
                    o
                  );
                  function r(o) {
                    return function (r) {
                      return (function (o) {
                        if (n) throw new TypeError('Generator is already executing.');
                        for (; s; )
                          try {
                            if (
                              ((n = 1),
                              a &&
                                (i =
                                  2 & o[0]
                                    ? a.return
                                    : o[0]
                                    ? a.throw || ((i = a.return) && i.call(a), 0)
                                    : a.next) &&
                                !(i = i.call(a, o[1])).done)
                            )
                              return i;
                            switch (((a = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                              case 0:
                              case 1:
                                i = o;
                                break;
                              case 4:
                                return s.label++, { value: o[1], done: !1 };
                              case 5:
                                s.label++, (a = o[1]), (o = [0]);
                                continue;
                              case 7:
                                (o = s.ops.pop()), s.trys.pop();
                                continue;
                              default:
                                if (
                                  !((i = s.trys),
                                  (i = i.length > 0 && i[i.length - 1]) ||
                                    (6 !== o[0] && 2 !== o[0]))
                                ) {
                                  s = 0;
                                  continue;
                                }
                                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                  s.label = o[1];
                                  break;
                                }
                                if (6 === o[0] && s.label < i[1]) {
                                  (s.label = i[1]), (i = o);
                                  break;
                                }
                                if (i && s.label < i[2]) {
                                  (s.label = i[2]), s.ops.push(o);
                                  break;
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue;
                            }
                            o = e.call(t, s);
                          } catch (t) {
                            (o = [6, t]), (a = 0);
                          } finally {
                            n = i = 0;
                          }
                        if (5 & o[0]) throw o[1];
                        return { value: o[0] ? o[1] : void 0, done: !0 };
                      })([o, r]);
                    };
                  }
                };
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.InternalError =
                t.NotFoundError =
                t.MethodNotAllowedError =
                t.serveSinglePageApp =
                t.mapRequestToAsset =
                t.getAssetFromKV =
                  void 0);
            var a = v(),
              i = C();
            Object.defineProperty(t, 'MethodNotAllowedError', {
              enumerable: !0,
              get: function () {
                return i.MethodNotAllowedError;
              }
            }),
              Object.defineProperty(t, 'NotFoundError', {
                enumerable: !0,
                get: function () {
                  return i.NotFoundError;
                }
              }),
              Object.defineProperty(t, 'InternalError', {
                enumerable: !0,
                get: function () {
                  return i.InternalError;
                }
              });
            var o = function (t) {
              var e = new URL(t.url),
                n = e.pathname;
              return (
                n.endsWith('/')
                  ? (n = n.concat('index.html'))
                  : a.getType(n) || (n = n.concat('/index.html')),
                (e.pathname = n),
                new Request(e.toString(), t)
              );
            };
            (t.mapRequestToAsset = o),
              (t.serveSinglePageApp = function (t) {
                t = o(t);
                var e = new URL(t.url);
                return e.pathname.endsWith('.html') ? new Request(e.origin + '/index.html', t) : t;
              });
            var s = { browserTTL: null, edgeTTL: 172800, bypassCache: !1 };
            t.getAssetFromKV = function (t, r) {
              return e(void 0, void 0, void 0, function () {
                var e, p, l, c, d, A, m, u, v, C, f, h, x, g, b, w, y, k;
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (
                        ((r = Object.assign(
                          {
                            ASSET_NAMESPACE: __STATIC_CONTENT,
                            ASSET_MANIFEST: __STATIC_CONTENT_MANIFEST,
                            mapRequestToAsset: o,
                            cacheControl: s,
                            defaultMimeType: 'text/plain'
                          },
                          r
                        )),
                        (e = t.request),
                        (p = r.ASSET_NAMESPACE),
                        (l =
                          'string' == typeof r.ASSET_MANIFEST
                            ? JSON.parse(r.ASSET_MANIFEST)
                            : r.ASSET_MANIFEST),
                        void 0 === p)
                      )
                        throw new i.InternalError('there is no KV namespace bound to the script');
                      if (!['GET', 'HEAD'].includes(e.method))
                        throw new i.MethodNotAllowedError(
                          e.method + ' is not a valid request method'
                        );
                      return (
                        (c = new URL(e.url).pathname.replace(/^\/+/, '')),
                        (d = !1),
                        l[c]
                          ? (A = e)
                          : l[decodeURIComponent(c)]
                          ? ((d = !0), (A = e))
                          : (A = r.mapRequestToAsset(e)),
                        (m = new URL(A.url)),
                        (u = d ? decodeURIComponent(m.pathname) : m.pathname),
                        (v = u.replace(/^\/+/, '')),
                        (C = caches.default),
                        (f = a.getType(v) || r.defaultMimeType).startsWith('text') &&
                          (f += '; charset=utf-8'),
                        (h = !1),
                        void 0 !== l && l[v] && ((v = l[v]), (h = !0)),
                        (x = new Request(m.origin + '/' + v, e)),
                        (g = (function () {
                          switch (typeof r.cacheControl) {
                            case 'function':
                              return r.cacheControl(e);
                            case 'object':
                              return r.cacheControl;
                            default:
                              return s;
                          }
                        })()),
                        (r.cacheControl = Object.assign({}, s, g)),
                        (r.cacheControl.bypassCache ||
                          null === r.cacheControl.edgeTTL ||
                          'HEAD' == e.method) &&
                          (h = !1),
                        (b = 'number' == typeof r.cacheControl.browserTTL),
                        (w = null),
                        h ? [4, C.match(x)] : [3, 2]
                      );
                    case 1:
                      (w = n.sent()), (n.label = 2);
                    case 2:
                      return w
                        ? ((y = new Headers(w.headers)),
                          !1,
                          [
                            !0 !== e.headers.has('range'),
                            e.headers.has('if-none-match'),
                            w.headers.has('etag'),
                            e.headers.get('if-none-match') === '' + v
                          ].every(Boolean)
                            ? (w.body && 'cancel' in Object.getPrototypeOf(w.body)
                                ? (w.body.cancel(),
                                  console.log(
                                    'Body exists and environment supports readable streams. Body cancelled'
                                  ))
                                : console.log('Environment doesnt support readable streams'),
                              y.set('cf-cache-status', 'REVALIDATED'),
                              (w = new Response(null, {
                                status: 304,
                                headers: y,
                                statusText: 'Not Modified'
                              })))
                            : (y.set('CF-Cache-Status', 'HIT'),
                              (w = new Response(w.body, { headers: y }))),
                          [3, 5])
                        : [3, 3];
                    case 3:
                      return [4, p.get(v, 'arrayBuffer')];
                    case 4:
                      if (null === (k = n.sent()))
                        throw new i.NotFoundError(
                          'could not find ' + v + ' in your content namespace'
                        );
                      (w = new Response(k)),
                        h &&
                          (w.headers.set('Accept-Ranges', 'bytes'),
                          w.headers.set('Content-Length', k.length),
                          w.headers.has('etag') || w.headers.set('etag', '' + v),
                          w.headers.set('Cache-Control', 'max-age=' + r.cacheControl.edgeTTL),
                          t.waitUntil(C.put(x, w.clone())),
                          w.headers.set('CF-Cache-Status', 'MISS')),
                        (n.label = 5);
                    case 5:
                      return (
                        w.headers.set('Content-Type', f),
                        b
                          ? w.headers.set('Cache-Control', 'max-age=' + r.cacheControl.browserTTL)
                          : w.headers.delete('Cache-Control'),
                        [2, w]
                      );
                  }
                });
              });
            };
          }
        }),
        h = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$',
        x = /[<>\b\f\n\r\t\0\u2028\u2029]/g,
        g =
          /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/,
        b = {
          '<': '\\u003C',
          '>': '\\u003E',
          '/': '\\u002F',
          '\\': '\\\\',
          '\b': '\\b',
          '\f': '\\f',
          '\n': '\\n',
          '\r': '\\r',
          '\t': '\\t',
          '\0': '\\0',
          '\u2028': '\\u2028',
          '\u2029': '\\u2029'
        },
        w = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
      function y(t) {
        var e = new Map();
        !(function t(n) {
          if ('function' == typeof n) throw new Error('Cannot stringify a function');
          if (e.has(n)) e.set(n, e.get(n) + 1);
          else if ((e.set(n, 1), !k(n)))
            switch (j(n)) {
              case 'Number':
              case 'String':
              case 'Boolean':
              case 'Date':
              case 'RegExp':
                return;
              case 'Array':
                n.forEach(t);
                break;
              case 'Set':
              case 'Map':
                Array.from(n).forEach(t);
                break;
              default:
                var a = Object.getPrototypeOf(n);
                if (
                  a !== Object.prototype &&
                  null !== a &&
                  Object.getOwnPropertyNames(a).sort().join('\0') !== w
                )
                  throw new Error('Cannot stringify arbitrary non-POJOs');
                if (Object.getOwnPropertySymbols(n).length > 0)
                  throw new Error('Cannot stringify POJOs with symbolic keys');
                Object.keys(n).forEach(function (e) {
                  return t(n[e]);
                });
            }
        })(t);
        var n = new Map();
        function a(t) {
          if (n.has(t)) return n.get(t);
          if (k(t)) return E(t);
          var e = j(t);
          switch (e) {
            case 'Number':
            case 'String':
            case 'Boolean':
              return 'Object(' + a(t.valueOf()) + ')';
            case 'RegExp':
              return 'new RegExp(' + I(t.source) + ', "' + t.flags + '")';
            case 'Date':
              return 'new Date(' + t.getTime() + ')';
            case 'Array':
              var i = t.map(function (e, n) {
                  return n in t ? a(e) : '';
                }),
                o = 0 === t.length || t.length - 1 in t ? '' : ',';
              return '[' + i.join(',') + o + ']';
            case 'Set':
            case 'Map':
              return 'new ' + e + '([' + Array.from(t).map(a).join(',') + '])';
            default:
              var s =
                '{' +
                Object.keys(t)
                  .map(function (e) {
                    return (
                      (function (t) {
                        return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(t) ? t : _(JSON.stringify(t));
                      })(e) +
                      ':' +
                      a(t[e])
                    );
                  })
                  .join(',') +
                '}';
              return null === Object.getPrototypeOf(t)
                ? Object.keys(t).length > 0
                  ? 'Object.assign(Object.create(null),' + s + ')'
                  : 'Object.create(null)'
                : s;
          }
        }
        Array.from(e)
          .filter(function (t) {
            return t[1] > 1;
          })
          .sort(function (t, e) {
            return e[1] - t[1];
          })
          .forEach(function (t, e) {
            n.set(
              t[0],
              (function (t) {
                var e = '';
                do {
                  (e = h[t % h.length] + e), (t = ~~(t / h.length) - 1);
                } while (t >= 0);
                return g.test(e) ? e + '_' : e;
              })(e)
            );
          });
        var i = a(t);
        if (n.size) {
          var o = [],
            s = [],
            r = [];
          return (
            n.forEach(function (t, e) {
              if ((o.push(t), k(e))) r.push(E(e));
              else
                switch (j(e)) {
                  case 'Number':
                  case 'String':
                  case 'Boolean':
                    r.push('Object(' + a(e.valueOf()) + ')');
                    break;
                  case 'RegExp':
                    r.push(e.toString());
                    break;
                  case 'Date':
                    r.push('new Date(' + e.getTime() + ')');
                    break;
                  case 'Array':
                    r.push('Array(' + e.length + ')'),
                      e.forEach(function (e, n) {
                        s.push(t + '[' + n + ']=' + a(e));
                      });
                    break;
                  case 'Set':
                    r.push('new Set'),
                      s.push(
                        t +
                          '.' +
                          Array.from(e)
                            .map(function (t) {
                              return 'add(' + a(t) + ')';
                            })
                            .join('.')
                      );
                    break;
                  case 'Map':
                    r.push('new Map'),
                      s.push(
                        t +
                          '.' +
                          Array.from(e)
                            .map(function (t) {
                              var e = t[0],
                                n = t[1];
                              return 'set(' + a(e) + ', ' + a(n) + ')';
                            })
                            .join('.')
                      );
                    break;
                  default:
                    r.push(null === Object.getPrototypeOf(e) ? 'Object.create(null)' : '{}'),
                      Object.keys(e).forEach(function (n) {
                        s.push(
                          '' +
                            t +
                            (function (t) {
                              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(t)
                                ? '.' + t
                                : '[' + _(JSON.stringify(t)) + ']';
                            })(n) +
                            '=' +
                            a(e[n])
                        );
                      });
                }
            }),
            s.push('return ' + i),
            '(function(' + o.join(',') + '){' + s.join(';') + '}(' + r.join(',') + '))'
          );
        }
        return i;
      }
      function k(t) {
        return Object(t) !== t;
      }
      function E(t) {
        if ('string' == typeof t) return I(t);
        if (void 0 === t) return 'void 0';
        if (0 === t && 1 / t < 0) return '-0';
        var e = String(t);
        return 'number' == typeof t ? e.replace(/^(-)?0\./, '$1.') : e;
      }
      function j(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      function M(t) {
        return b[t] || t;
      }
      function _(t) {
        return t.replace(x, M);
      }
      function I(t) {
        for (var e = '"', n = 0; n < t.length; n += 1) {
          var a = t.charAt(n),
            i = a.charCodeAt(0);
          if ('"' === a) e += '\\"';
          else if (a in b) e += b[a];
          else if (i >= 55296 && i <= 57343) {
            var o = t.charCodeAt(n + 1);
            e +=
              i <= 56319 && o >= 56320 && o <= 57343
                ? a + t[++n]
                : '\\u' + i.toString(16).toUpperCase();
          } else e += a;
        }
        return (e += '"');
      }
      function B() {}
      var O = [];
      function z(t, e = B) {
        let n;
        const a = [];
        function i(e) {
          if (
            ((o = e),
            ((i = t) != i
              ? o == o
              : i !== o || (i && 'object' == typeof i) || 'function' == typeof i) && ((t = e), n))
          ) {
            const e = !O.length;
            for (let e = 0; e < a.length; e += 1) {
              const n = a[e];
              n[1](), O.push(n, t);
            }
            if (e) {
              for (let t = 0; t < O.length; t += 2) O[t][0](O[t + 1]);
              O.length = 0;
            }
          }
          var i, o;
        }
        return {
          set: i,
          update: function (e) {
            i(e(t));
          },
          subscribe: function (o, s = B) {
            const r = [o, s];
            return (
              a.push(r),
              1 === a.length && (n = e(i) || B),
              o(t),
              () => {
                const t = a.indexOf(r);
                -1 !== t && a.splice(t, 1), 0 === a.length && (n(), (n = null));
              }
            );
          }
        };
      }
      function S(t) {
        let e = 5381,
          n = t.length;
        if ('string' == typeof t) for (; n; ) e = (33 * e) ^ t.charCodeAt(--n);
        else for (; n; ) e = (33 * e) ^ t[--n];
        return (e >>> 0).toString(36);
      }
      var q = JSON.stringify;
      async function $({
        options: t,
        $session: e,
        page_config: n,
        status: a,
        error: i,
        branch: o,
        page: s
      }) {
        const r = new Set(t.entry.css),
          p = new Set(t.entry.js),
          l = new Set(),
          c = [];
        let d,
          A,
          m = !1;
        if ((i && (i.stack = t.get_stack(i)), o)) {
          o.forEach(({ node: t, loaded: e, fetched: a, uses_credentials: i }) => {
            t.css && t.css.forEach((t) => r.add(t)),
              t.js && t.js.forEach((t) => p.add(t)),
              t.styles && t.styles.forEach((t) => l.add(t)),
              a && n.hydrate && c.push(...a),
              i && (m = !0),
              (A = e.maxage);
          });
          const a = z(e),
            i = {
              stores: { page: z(null), navigating: z(null), session: a },
              page: s,
              components: o.map(({ node: t }) => t.module.default)
            };
          for (let t = 0; t < o.length; t += 1) i['props_' + t] = await o[t].loaded.props;
          let u = !1;
          const v = a.subscribe(() => {
            u && (m = !0);
          });
          u = !0;
          try {
            d = t.root.render(i);
          } finally {
            v();
          }
        } else d = { head: '', html: '', css: { code: '', map: null } };
        const u = n.router || n.hydrate;
        u || p.clear();
        const v = t.amp
          ? l.size > 0 || d.css.code.length > 0
            ? `<style amp-custom>${Array.from(l).concat(d.css.code).join('\n')}</style>`
            : ''
          : [
              ...Array.from(p).map((t) => `<link rel="modulepreload" href="${t}">`),
              ...Array.from(r).map((t) => `<link rel="stylesheet" href="${t}">`)
            ].join('\n\t\t');
        let C = '';
        t.amp
          ? (C =
              '\n\t\t<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>\n\t\t<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>\n\t\t<script async src="https://cdn.ampproject.org/v0.js"></script>')
          : u &&
            (C = `<script type="module">\n\t\t\timport { start } from ${q(
              t.entry.file
            )};\n\t\t\tstart({\n\t\t\t\ttarget: ${
              t.target ? `document.querySelector(${q(t.target)})` : 'document.body'
            },\n\t\t\t\tpaths: ${q(t.paths)},\n\t\t\t\tsession: ${G(e, (t) => {
              throw new Error('Failed to serialize session data: ' + t.message);
            })},\n\t\t\t\thost: ${
              s && s.host ? q(s.host) : 'location.host'
            },\n\t\t\t\troute: ${!!n.router},\n\t\t\t\tspa: ${!n.ssr},\n\t\t\t\ttrailing_slash: ${q(
              t.trailing_slash
            )},\n\t\t\t\thydrate: ${
              n.ssr && n.hydrate
                ? `{\n\t\t\t\t\tstatus: ${a},\n\t\t\t\t\terror: ${(function (t) {
                    if (!t) return null;
                    let e = G(t);
                    if (!e) {
                      const { name: n, message: a, stack: i } = t;
                      e = G({ name: n, message: a, stack: i });
                    }
                    e || (e = '{}');
                    return e;
                  })(i)},\n\t\t\t\t\tnodes: [\n\t\t\t\t\t\t${o
                    .map(({ node: t }) => `import(${q(t.entry)})`)
                    .join(',\n\t\t\t\t\t\t')}\n\t\t\t\t\t],\n\t\t\t\t\tpage: {\n\t\t\t\t\t\thost: ${
                    s.host ? q(s.host) : 'location.host'
                  }, // TODO this is redundant\n\t\t\t\t\t\tpath: ${q(
                    s.path
                  )},\n\t\t\t\t\t\tquery: new URLSearchParams(${q(
                    s.query.toString()
                  )}),\n\t\t\t\t\t\tparams: ${q(s.params)}\n\t\t\t\t\t}\n\t\t\t\t}`
                : 'null'
            }\n\t\t\t});\n\t\t<\/script>`);
        const f = [
            d.head,
            l.size && !t.amp ? `<style data-svelte>${Array.from(l).join('\n')}</style>` : '',
            v,
            C
          ].join('\n\n\t\t'),
          h = t.amp
            ? d.html
            : `${d.html}\n\n\t\t\t${c
                .map(({ url: t, body: e, json: n }) =>
                  e
                    ? `<script type="svelte-data" url="${t}" body="${S(e)}">${n}<\/script>`
                    : `<script type="svelte-data" url="${t}">${n}<\/script>`
                )
                .join('\n\n\t\t\t')}\n\t\t`.replace(/^\t{2}/gm, ''),
          x = { 'content-type': 'text/html' };
        return (
          A && (x['cache-control'] = `${m ? 'private' : 'public'}, max-age=${A}`),
          t.floc || (x['permissions-policy'] = 'interest-cohort=()'),
          { status: a, headers: x, body: t.template({ head: f, body: h }) }
        );
      }
      function G(t, e) {
        try {
          return y(t);
        } catch (t) {
          return e && e(t), null;
        }
      }
      function K(t) {
        if (t.error) {
          const e = 'string' == typeof t.error ? new Error(t.error) : t.error,
            n = t.status;
          return e instanceof Error
            ? !n || n < 400 || n > 599
              ? (console.warn(
                  '"error" returned from load() without a valid status code — defaulting to 500'
                ),
                { status: 500, error: e })
              : { status: n, error: e }
            : {
                status: 500,
                error: new Error(
                  `"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`
                )
              };
        }
        if (t.redirect) {
          if (!t.status || 3 !== Math.floor(t.status / 100))
            return {
              status: 500,
              error: new Error(
                '"redirect" property returned from load() must be accompanied by a 3xx status code'
              )
            };
          if ('string' != typeof t.redirect)
            return {
              status: 500,
              error: new Error('"redirect" property returned from load() must be a string')
            };
        }
        return t;
      }
      var T = JSON.stringify;
      async function U({
        request: t,
        options: e,
        state: n,
        route: a,
        page: i,
        node: o,
        $session: s,
        context: r,
        is_leaf: p,
        is_error: l,
        status: c,
        error: d
      }) {
        const { module: A } = o;
        let m = !1;
        const u = [];
        let v;
        if (A.load) {
          const o = {
            page: i,
            get session() {
              return (m = !0), s;
            },
            fetch: async (o, s = {}) => {
              let r, p;
              if (
                ('string' == typeof o
                  ? (r = o)
                  : ((r = o.url),
                    (s = {
                      method: o.method,
                      headers: o.headers,
                      body: o.body,
                      mode: o.mode,
                      credentials: o.credentials,
                      cache: o.cache,
                      redirect: o.redirect,
                      referrer: o.referrer,
                      integrity: o.integrity,
                      ...s
                    })),
                e.read && r.startsWith(e.paths.assets) && (r = r.replace(e.paths.assets, '')),
                r.startsWith('//'))
              )
                throw new Error(`Cannot request protocol-relative URL (${r}) in server-side fetch`);
              if (/^[a-zA-Z]+:/.test(r)) p = await fetch(r, s);
              else {
                const [o, l] = r.split('?'),
                  c = (function (t, e) {
                    const n = '/' === e[0] ? [] : t.slice(1).split('/'),
                      a = '/' === e[0] ? e.slice(1).split('/') : e.split('/');
                    n.pop();
                    for (let t = 0; t < a.length; t += 1) {
                      const e = a[t];
                      '.' !== e && ('..' === e ? n.pop() : n.push(e));
                    }
                    return '/' + n.join('/');
                  })(t.path, o),
                  d = c.slice(1),
                  A = d + '/index.html',
                  u = e.manifest.assets.find((t) => t.file === d || t.file === A);
                if (
                  (u &&
                    (p = e.read
                      ? new Response(e.read(u.file), { headers: { 'content-type': u.type } })
                      : await fetch(`http://${i.host}/${u.file}`, s)),
                  !p)
                ) {
                  const i = { ...s.headers };
                  if (
                    ('omit' !== s.credentials &&
                      ((m = !0),
                      (i.cookie = t.headers.cookie),
                      i.authorization || (i.authorization = t.headers.authorization)),
                    s.body && 'string' != typeof s.body)
                  )
                    throw new Error('Request body must be a string');
                  const o = await Y(
                    {
                      host: t.host,
                      method: s.method || 'GET',
                      headers: i,
                      path: c,
                      rawBody: s.body,
                      query: new URLSearchParams(l)
                    },
                    e,
                    { fetched: r, initiator: a }
                  );
                  o &&
                    (n.prerender && n.prerender.dependencies.set(c, o),
                    (p = new Response(o.body, { status: o.status, headers: o.headers })));
                }
              }
              if (p) {
                return new Proxy(p, {
                  get(t, e, n) {
                    async function a() {
                      const e = await t.text(),
                        n = {};
                      for (const [e, a] of t.headers)
                        'etag' !== e && 'set-cookie' !== e && (n[e] = a);
                      return (
                        (s.body && 'string' != typeof s.body) ||
                          u.push({
                            url: r,
                            body: s.body,
                            json: `{"status":${t.status},"statusText":${T(
                              t.statusText
                            )},"headers":${T(n)},"body":${N(e)}}`
                          }),
                        e
                      );
                    }
                    return 'text' === e
                      ? a
                      : 'json' === e
                      ? async () => JSON.parse(await a())
                      : Reflect.get(t, e, t);
                  }
                });
              }
              return p || new Response('Not found', { status: 404 });
            },
            context: { ...r }
          };
          l && ((o.status = c), (o.error = d)), (v = await A.load.call(null, o));
        } else v = {};
        if (v || !p || l)
          return {
            node: o,
            loaded: K(v),
            context: v.context || r,
            fetched: u,
            uses_credentials: m
          };
      }
      var D,
        Q = {
          '<': '\\u003C',
          '>': '\\u003E',
          '/': '\\u002F',
          '\\': '\\\\',
          '\b': '\\b',
          '\f': '\\f',
          '\n': '\\n',
          '\r': '\\r',
          '\t': '\\t',
          '\0': '\\0',
          '\u2028': '\\u2028',
          '\u2029': '\\u2029'
        };
      function N(t) {
        let e = '"';
        for (let n = 0; n < t.length; n += 1) {
          const a = t.charAt(n),
            i = a.charCodeAt(0);
          if ('"' === a) e += '\\"';
          else if (a in Q) e += Q[a];
          else if (i >= 55296 && i <= 57343) {
            const o = t.charCodeAt(n + 1);
            e +=
              i <= 56319 && o >= 56320 && o <= 57343
                ? a + t[++n]
                : '\\u' + i.toString(16).toUpperCase();
          } else e += a;
        }
        return (e += '"'), e;
      }
      async function P({ request: t, options: e, state: n, $session: a, status: i, error: o }) {
        const s = await e.load_component(e.manifest.layout),
          r = await e.load_component(e.manifest.error),
          p = { host: t.host, path: t.path, query: t.query, params: {} },
          l = await U({
            request: t,
            options: e,
            state: n,
            route: null,
            page: p,
            node: s,
            $session: a,
            context: {},
            is_leaf: !1,
            is_error: !1
          }),
          c = [
            l,
            await U({
              request: t,
              options: e,
              state: n,
              route: null,
              page: p,
              node: r,
              $session: a,
              context: l.context,
              is_leaf: !1,
              is_error: !0,
              status: i,
              error: o
            })
          ];
        try {
          return await $({
            options: e,
            $session: a,
            page_config: { hydrate: e.hydrate, router: e.router, ssr: e.ssr },
            status: i,
            error: o,
            branch: c,
            page: p
          });
        } catch (t) {
          return e.handle_error(t), { status: 500, headers: {}, body: t.stack };
        }
      }
      async function L(t, e, n, a) {
        if (a.initiator === e) return { status: 404, headers: {}, body: 'Not found: ' + t.path };
        const i = await n.hooks.getSession(t);
        if (!e)
          return await P({
            request: t,
            options: n,
            state: a,
            $session: i,
            status: 404,
            error: new Error('Not found: ' + t.path)
          });
        {
          const o = await (async function ({
            request: t,
            options: e,
            state: n,
            $session: a,
            route: i
          }) {
            const o = i.pattern.exec(t.path),
              s = i.params(o),
              r = { host: t.host, path: t.path, query: t.query, params: s };
            let p;
            try {
              p = await Promise.all(i.a.map((t) => t && e.load_component(t)));
            } catch (i) {
              return (
                e.handle_error(i),
                await P({ request: t, options: e, state: n, $session: a, status: 500, error: i })
              );
            }
            const l = p[p.length - 1].module,
              c = {
                ssr: 'ssr' in l ? l.ssr : e.ssr,
                router: 'router' in l ? l.router : e.router,
                hydrate: 'hydrate' in l ? l.hydrate : e.hydrate
              };
            if (!l.prerender && n.prerender && !n.prerender.all)
              return { status: 204, headers: {}, body: null };
            let d,
              A,
              m = 200;
            t: if (c.ssr) {
              let o = {};
              d = [];
              for (let s = 0; s < p.length; s += 1) {
                const l = p[s];
                let c;
                if (l) {
                  try {
                    if (
                      ((c = await U({
                        request: t,
                        options: e,
                        state: n,
                        route: i,
                        page: r,
                        node: l,
                        $session: a,
                        context: o,
                        is_leaf: s === p.length - 1,
                        is_error: !1
                      })),
                      !c)
                    )
                      return;
                    if (c.loaded.redirect)
                      return {
                        status: c.loaded.status,
                        headers: { location: encodeURI(c.loaded.redirect) }
                      };
                    c.loaded.error && ({ status: m, error: A } = c.loaded);
                  } catch (t) {
                    e.handle_error(t), (m = 500), (A = t);
                  }
                  if (A) {
                    for (; s--; )
                      if (i.b[s]) {
                        const o = await e.load_component(i.b[s]);
                        let p,
                          l,
                          c = s;
                        for (; !(l = d[c]); ) c -= 1;
                        try {
                          if (
                            ((p = await U({
                              request: t,
                              options: e,
                              state: n,
                              route: i,
                              page: r,
                              node: o,
                              $session: a,
                              context: l.context,
                              is_leaf: !1,
                              is_error: !0,
                              status: m,
                              error: A
                            })),
                            p.loaded.error)
                          )
                            continue;
                          d = d.slice(0, c + 1).concat(p);
                          break t;
                        } catch (t) {
                          e.handle_error(t);
                          continue;
                        }
                      }
                    return await P({
                      request: t,
                      options: e,
                      state: n,
                      $session: a,
                      status: m,
                      error: A
                    });
                  }
                }
                d.push(c), c && c.loaded.context && (o = { ...o, ...c.loaded.context });
              }
            }
            try {
              return await $({
                options: e,
                $session: a,
                page_config: c,
                status: m,
                error: A,
                branch: d && d.filter(Boolean),
                page: r
              });
            } catch (i) {
              return (
                e.handle_error(i),
                await P({ request: t, options: e, state: n, $session: a, status: 500, error: i })
              );
            }
          })({ request: t, options: n, state: a, $session: i, route: e });
          if (o) return o;
          if (a.fetched)
            return {
              status: 500,
              headers: {},
              body: 'Bad request in load function: failed to fetch ' + a.fetched
            };
        }
      }
      function R(t) {
        const e = {};
        for (const n in t) e[n.toLowerCase()] = t[n];
        return e;
      }
      function W(t) {
        return { status: 500, body: t, headers: {} };
      }
      async function H(t, e) {
        const n = (await e.load())[t.method.toLowerCase().replace('delete', 'del')];
        if (n) {
          const a = e.pattern.exec(t.path),
            i = e.params(a),
            o = await n({ ...t, params: i });
          if (o) {
            if ('object' != typeof o)
              return W(
                `Invalid response from route ${t.path}: expected an object, got ${typeof o}`
              );
            let { status: e = 200, body: n, headers: a = {} } = o;
            a = R(a);
            const i = a['content-type'];
            if ('application/octet-stream' === i && !(n instanceof Uint8Array))
              return W(
                `Invalid response from route ${t.path}: body must be an instance of Uint8Array if content type is application/octet-stream`
              );
            if (n instanceof Uint8Array && 'application/octet-stream' !== i)
              return W(
                `Invalid response from route ${t.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`
              );
            let s;
            return (
              'object' != typeof n || (i && 'application/json' !== i)
                ? (s = n)
                : ((a = { ...a, 'content-type': 'application/json' }), (s = JSON.stringify(n))),
              { status: e, body: s, headers: a }
            );
          }
        }
      }
      function V() {
        const t = new Map();
        return {
          append(e, n) {
            t.has(e) ? t.get(e).push(n) : t.set(e, [n]);
          },
          data: new Z(t)
        };
      }
      var Z = class {
        constructor(t) {
          var e, n, a, i;
          ((t, e, n) => {
            if (e.has(t)) throw TypeError('Cannot add the same private member more than once');
            e instanceof WeakSet ? e.add(t) : e.set(t, n);
          })(this, D, void 0),
            (a = t),
            l((e = this), (n = D), 'write to private field'),
            i ? i.call(e, a) : n.set(e, a);
        }
        get(t) {
          const e = c(this, D).get(t);
          return e && e[0];
        }
        getAll(t) {
          return c(this, D).get(t);
        }
        has(t) {
          return c(this, D).has(t);
        }
        *[Symbol.iterator]() {
          for (const [t, e] of c(this, D)) for (let n = 0; n < e.length; n += 1) yield [t, e[n]];
        }
        *entries() {
          for (const [t, e] of c(this, D)) for (let n = 0; n < e.length; n += 1) yield [t, e[n]];
        }
        *keys() {
          for (const [t, e] of c(this, D)) for (let n = 0; n < e.length; n += 1) yield t;
        }
        *values() {
          for (const [, t] of c(this, D)) for (let e = 0; e < t.length; e += 1) yield t;
        }
      };
      function F(t, e) {
        if (!t) return t;
        const [n, ...a] = e['content-type'].split(/;\s*/);
        if ('string' == typeof t)
          switch (n) {
            case 'text/plain':
              return t;
            case 'application/json':
              return JSON.parse(t);
            case 'application/x-www-form-urlencoded':
              return (function (t) {
                const { data: e, append: n } = V();
                return (
                  t
                    .replace(/\+/g, ' ')
                    .split('&')
                    .forEach((t) => {
                      const [e, a] = t.split('=');
                      n(decodeURIComponent(e), decodeURIComponent(a));
                    }),
                  e
                );
              })(t);
            case 'multipart/form-data': {
              const e = a.find((t) => t.startsWith('boundary='));
              if (!e) throw new Error('Missing boundary');
              return (function (t, e) {
                const n = t.split('--' + e),
                  a = () => {
                    throw new Error('Malformed form data');
                  };
                ('' === n[0] && '--' === n[n.length - 1].trim()) || a();
                const { data: i, append: o } = V();
                return (
                  n.slice(1, -1).forEach((t) => {
                    const e = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(t),
                      n = e[1],
                      i = e[2].trim();
                    let s;
                    n.split('\r\n').forEach((t) => {
                      const [e, ...n] = t.split('; ');
                      let [i, o] = e.split(': ');
                      i = i.toLowerCase();
                      const r = {};
                      if (
                        (n.forEach((t) => {
                          const [e, n] = t.split('=');
                          r[e] = JSON.parse(n);
                        }),
                        'content-disposition' === i)
                      ) {
                        if (('form-data' !== o && a(), r.filename))
                          throw new Error('File upload is not yet implemented');
                        r.name && (s = r.name);
                      }
                    }),
                      s || a(),
                      o(s, i);
                  }),
                  i
                );
              })(t, e.slice('boundary='.length));
            }
            default:
              throw new Error('Invalid Content-Type ' + n);
          }
        return t;
      }
      async function Y(t, e, n = {}) {
        if ('/' !== t.path && 'ignore' !== e.trailing_slash) {
          const n = t.path.endsWith('/');
          if (
            (n && 'never' === e.trailing_slash) ||
            (!n && 'always' === e.trailing_slash && !t.path.split('/').pop().includes('.'))
          ) {
            const e = n ? t.path.slice(0, -1) : t.path + '/',
              a = t.query.toString();
            return { status: 301, headers: { location: encodeURI(e + (a ? '?' + a : '')) } };
          }
        }
        try {
          const a = R(t.headers);
          return await e.hooks.handle({
            request: { ...t, headers: a, body: F(t.rawBody, a), params: null, locals: {} },
            resolve: async (t) => {
              if (n.prerender && n.prerender.fallback)
                return await $({
                  options: e,
                  $session: await e.hooks.getSession(t),
                  page_config: { ssr: !1, router: !0, hydrate: !0 },
                  status: 200,
                  error: null,
                  branch: [],
                  page: null
                });
              for (const a of e.manifest.routes) {
                if (!a.pattern.test(t.path)) continue;
                const i = 'endpoint' === a.type ? await H(t, a) : await L(t, a, e, n);
                if (i) {
                  if (
                    200 === i.status &&
                    !/(no-store|immutable)/.test(i.headers['cache-control'])
                  ) {
                    const e = `"${S(i.body)}"`;
                    if (t.headers['if-none-match'] === e)
                      return { status: 304, headers: {}, body: null };
                    i.headers.etag = e;
                  }
                  return i;
                }
              }
              return await L(t, null, e, n);
            }
          });
        } catch (t) {
          return e.handle_error(t), { status: 500, headers: {}, body: e.dev ? t.stack : t.message };
        }
      }
      function J() {}
      function X(t) {
        return t();
      }
      function tt(t) {
        t.forEach(X);
      }
      function et(t) {
        return 'function' == typeof t;
      }
      function nt(t, ...e) {
        if (null == t) return J;
        const n = t.subscribe(...e);
        return n.unsubscribe ? () => n.unsubscribe() : n;
      }
      D = new WeakMap();
      var at = 'undefined' != typeof window,
        it = at ? () => window.performance.now() : () => Date.now(),
        ot = at ? (t) => requestAnimationFrame(t) : J,
        st = new Set();
      function rt(t) {
        st.forEach((e) => {
          e.c(t) || (st.delete(e), e.f());
        }),
          0 !== st.size && ot(rt);
      }
      var pt;
      new Set();
      function lt(t) {
        pt = t;
      }
      function ct() {
        if (!pt) throw new Error('Function called outside component initialization');
        return pt;
      }
      Promise.resolve(),
        new Set(),
        new Set(),
        'undefined' != typeof window ? window : 'undefined' != typeof globalThis && globalThis,
        new Set([
          'allowfullscreen',
          'allowpaymentrequest',
          'async',
          'autofocus',
          'autoplay',
          'checked',
          'controls',
          'default',
          'defer',
          'disabled',
          'formnovalidate',
          'hidden',
          'ismap',
          'loop',
          'multiple',
          'muted',
          'nomodule',
          'novalidate',
          'open',
          'playsinline',
          'readonly',
          'required',
          'reversed',
          'selected'
        ]);
      var dt = { '"': '&quot;', "'": '&#39;', '&': '&amp;', '<': '&lt;', '>': '&gt;' };
      function At(t) {
        return String(t).replace(/["'&<>]/g, (t) => dt[t]);
      }
      var mt,
        ut = { $$render: () => '' };
      function vt(t, e) {
        if (!t || !t.$$render)
          throw (
            ('svelte:component' === e && (e += ' this={...}'),
            new Error(
              `<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`
            ))
          );
        return t;
      }
      function Ct(t) {
        function e(e, n, a, i, o) {
          const s = pt;
          lt({
            $$: {
              on_destroy: mt,
              context: new Map(s ? s.$$.context : o || []),
              on_mount: [],
              before_update: [],
              after_update: [],
              callbacks: Object.create(null)
            }
          });
          const r = t(e, n, a, i);
          return lt(s), r;
        }
        return {
          render: (t = {}, { $$slots: n = {}, context: a = new Map() } = {}) => {
            mt = [];
            const i = { title: '', head: '', css: new Set() },
              o = e(i, t, {}, n, a);
            return (
              tt(mt),
              {
                html: o,
                css: {
                  code: Array.from(i.css)
                    .map((t) => t.code)
                    .join('\n'),
                  map: null
                },
                head: i.title + i.head
              }
            );
          },
          $$render: e
        };
      }
      function ft(t, e, n) {
        return null == e || (n && !e)
          ? ''
          : ` ${t}${
              !0 === e ? '' : '=' + ('string' == typeof e ? JSON.stringify(At(e)) : `"${e}"`)
            }`;
      }
      'function' == typeof HTMLElement && HTMLElement;
      for (var ht, xt = p(d()), gt = 256, bt = []; gt--; )
        bt[gt] = (gt + 256).toString(16).substring(1);
      var wt = [];
      function yt(t) {
        return '[object Date]' === Object.prototype.toString.call(t);
      }
      function kt(t, e = {}) {
        const n = (function (t, e = J) {
            let n;
            const a = [];
            function i(e) {
              if (
                ((o = e),
                ((i = t) != i
                  ? o == o
                  : i !== o || (i && 'object' == typeof i) || 'function' == typeof i) &&
                  ((t = e), n))
              ) {
                const e = !wt.length;
                for (let e = 0; e < a.length; e += 1) {
                  const n = a[e];
                  n[1](), wt.push(n, t);
                }
                if (e) {
                  for (let t = 0; t < wt.length; t += 2) wt[t][0](wt[t + 1]);
                  wt.length = 0;
                }
              }
              var i, o;
            }
            return {
              set: i,
              update: function (e) {
                i(e(t));
              },
              subscribe: function (o, s = J) {
                const r = [o, s];
                return (
                  a.push(r),
                  1 === a.length && (n = e(i) || J),
                  o(t),
                  () => {
                    const t = a.indexOf(r);
                    -1 !== t && a.splice(t, 1), 0 === a.length && (n(), (n = null));
                  }
                );
              }
            };
          })(t),
          { stiffness: a = 0.15, damping: i = 0.8, precision: o = 0.01 } = e;
        let s,
          r,
          p,
          l = t,
          c = t,
          d = 1,
          A = 0,
          m = !1;
        function u(e, a = {}) {
          c = e;
          const i = (p = {});
          if (null == t || a.hard || (v.stiffness >= 1 && v.damping >= 1))
            return (m = !0), (s = it()), (l = e), n.set((t = c)), Promise.resolve();
          if (a.soft) {
            const t = !0 === a.soft ? 0.5 : +a.soft;
            (A = 1 / (60 * t)), (d = 0);
          }
          return (
            r ||
              ((s = it()),
              (m = !1),
              (r = (function (t) {
                let e;
                return (
                  0 === st.size && ot(rt),
                  {
                    promise: new Promise((n) => {
                      st.add((e = { c: t, f: n }));
                    }),
                    abort() {
                      st.delete(e);
                    }
                  }
                );
              })((e) => {
                if (m) return (m = !1), (r = null), !1;
                d = Math.min(d + A, 1);
                const a = { inv_mass: d, opts: v, settled: !0, dt: (60 * (e - s)) / 1e3 },
                  i = (function t(e, n, a, i) {
                    if ('number' == typeof a || yt(a)) {
                      const t = i - a,
                        o = (a - n) / (e.dt || 1 / 60),
                        s = (o + (e.opts.stiffness * t - e.opts.damping * o) * e.inv_mass) * e.dt;
                      return Math.abs(s) < e.opts.precision && Math.abs(t) < e.opts.precision
                        ? i
                        : ((e.settled = !1), yt(a) ? new Date(a.getTime() + s) : a + s);
                    }
                    if (Array.isArray(a)) return a.map((o, s) => t(e, n[s], a[s], i[s]));
                    if ('object' == typeof a) {
                      const o = {};
                      for (const s in a) o[s] = t(e, n[s], a[s], i[s]);
                      return o;
                    }
                    throw new Error(`Cannot spring ${typeof a} values`);
                  })(a, l, t, c);
                return (s = e), (l = t), n.set((t = i)), a.settled && (r = null), !a.settled;
              }))),
            new Promise((t) => {
              r.promise.then(() => {
                i === p && t();
              });
            })
          );
        }
        const v = {
          set: u,
          update: (e, n) => u(e(c, t), n),
          subscribe: n.subscribe,
          stiffness: a,
          damping: i,
          precision: o
        };
        return v;
      }
      var Et = {
          code: '#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}',
          map: '{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["\x3c!-- This file is generated by @sveltejs/kit — do not edit it! --\x3e\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from \'svelte\';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext(\'__svelte__\', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || \'untitled page\';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}'
        },
        jt = Ct((t, e, n, a) => {
          let { stores: i } = e,
            { page: o } = e,
            { components: s } = e,
            { props_0: r = null } = e,
            { props_1: p = null } = e,
            { props_2: l = null } = e;
          var c, d, A;
          (c = '__svelte__'),
            (d = i),
            ct().$$.context.set(c, d),
            (A = i.page.notify),
            ct().$$.after_update.push(A);
          let m = !1,
            u = !1,
            v = null;
          return (
            (function (t) {
              ct().$$.on_mount.push(t);
            })(() => {
              const t = i.page.subscribe(() => {
                m && ((u = !0), (v = document.title || 'untitled page'));
              });
              return (m = !0), t;
            }),
            void 0 === e.stores && n.stores && void 0 !== i && n.stores(i),
            void 0 === e.page && n.page && void 0 !== o && n.page(o),
            void 0 === e.components && n.components && void 0 !== s && n.components(s),
            void 0 === e.props_0 && n.props_0 && void 0 !== r && n.props_0(r),
            void 0 === e.props_1 && n.props_1 && void 0 !== p && n.props_1(p),
            void 0 === e.props_2 && n.props_2 && void 0 !== l && n.props_2(l),
            t.css.add(Et),
            i.page.set(o),
            `\n\n\n${vt(s[0] || ut, 'svelte:component').$$render(
              t,
              Object.assign(r || {}),
              {},
              {
                default: () =>
                  '' +
                  (s[1]
                    ? '' +
                      vt(s[1] || ut, 'svelte:component').$$render(
                        t,
                        Object.assign(p || {}),
                        {},
                        {
                          default: () =>
                            '' +
                            (s[2]
                              ? '' +
                                vt(s[2] || ut, 'svelte:component').$$render(
                                  t,
                                  Object.assign(l || {}),
                                  {},
                                  {}
                                )
                              : '')
                        }
                      )
                    : '')
              }
            )}\n\n${
              m
                ? `<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" class="svelte-1j55zn5">${
                    u ? '' + At(v) : ''
                  }</div>`
                : ''
            }`
          );
        });
      var Mt = Object.freeze({
          __proto__: null,
          [Symbol.toStringTag]: 'Module',
          handle: async ({ request: t, resolve: e }) => {
            const n = xt.default.parse(t.headers.cookie || '');
            (t.locals.userid =
              n.userid ||
              (function () {
                var t,
                  e = 0,
                  n = '';
                if (!ht || gt + 16 > 256) {
                  for (ht = Array((e = 256)); e--; ) ht[e] = (256 * Math.random()) | 0;
                  e = gt = 0;
                }
                for (; e < 16; e++)
                  (t = ht[gt + e]),
                    (n += 6 == e ? bt[(15 & t) | 64] : 8 == e ? bt[(63 & t) | 128] : bt[t]),
                    1 & e && e > 1 && e < 11 && (n += '-');
                return gt++, n;
              })()),
              t.query.has('_method') && (t.method = t.query.get('_method').toUpperCase());
            const a = await e(t);
            return (
              n.userid || (a.headers['set-cookie'] = `userid=${t.locals.userid}; Path=/; HttpOnly`),
              a
            );
          }
        }),
        _t = ({ head: t, body: e }) =>
          '<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<link rel="icon" href="/favicon.png" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n\t\t' +
          t +
          '\n\t</head>\n\t<body>\n\t\t<div id="svelte">' +
          e +
          '</div>\n\t</body>\n</html>\n',
        It = null;
      var Bt,
        Ot = decodeURIComponent,
        zt = () => ({}),
        St = {
          assets: [
            { file: 'favicon.png', size: 1571, type: 'image/png' },
            { file: 'robots.txt', size: 67, type: 'text/plain' },
            { file: 'svelte-welcome.png', size: 360807, type: 'image/png' },
            { file: 'svelte-welcome.webp', size: 115470, type: 'image/webp' }
          ],
          layout: 'src/routes/__layout.svelte',
          error: '.svelte-kit/build/components/error.svelte',
          routes: [
            {
              type: 'page',
              pattern: /^\/$/,
              params: zt,
              a: ['src/routes/__layout.svelte', 'src/routes/index.svelte'],
              b: ['.svelte-kit/build/components/error.svelte']
            },
            {
              type: 'page',
              pattern: /^\/about\/?$/,
              params: zt,
              a: ['src/routes/__layout.svelte', 'src/routes/about.svelte'],
              b: ['.svelte-kit/build/components/error.svelte']
            },
            {
              type: 'endpoint',
              pattern: /^\/todos\.json$/,
              params: zt,
              load: () =>
                Promise.resolve().then(function () {
                  return Ut;
                })
            },
            {
              type: 'page',
              pattern: /^\/todos\/?$/,
              params: zt,
              a: ['src/routes/__layout.svelte', 'src/routes/todos/index.svelte'],
              b: ['.svelte-kit/build/components/error.svelte']
            },
            {
              type: 'endpoint',
              pattern: /^\/todos\/([^/]+?)\.json$/,
              params: (t) => ({ uid: Ot(t[1]) }),
              load: () =>
                Promise.resolve().then(function () {
                  return Dt;
                })
            }
          ]
        },
        qt = (t) => ({
          getSession: t.getSession || (() => ({})),
          handle: t.handle || (({ request: t, resolve: e }) => e(t))
        }),
        $t = {
          'src/routes/__layout.svelte': () =>
            Promise.resolve().then(function () {
              return Ht;
            }),
          '.svelte-kit/build/components/error.svelte': () =>
            Promise.resolve().then(function () {
              return Zt;
            }),
          'src/routes/index.svelte': () =>
            Promise.resolve().then(function () {
              return te;
            }),
          'src/routes/about.svelte': () =>
            Promise.resolve().then(function () {
              return ae;
            }),
          'src/routes/todos/index.svelte': () =>
            Promise.resolve().then(function () {
              return se;
            })
        },
        Gt = {
          'src/routes/__layout.svelte': {
            entry: '/./_app/pages/__layout.svelte-176944a0.js',
            css: ['/./_app/assets/pages/__layout.svelte-d4883a00.css'],
            js: ['/./_app/pages/__layout.svelte-176944a0.js', '/./_app/chunks/vendor-2f7c43bc.js'],
            styles: null
          },
          '.svelte-kit/build/components/error.svelte': {
            entry: '/./_app/error.svelte-9614ef2b.js',
            css: [],
            js: ['/./_app/error.svelte-9614ef2b.js', '/./_app/chunks/vendor-2f7c43bc.js'],
            styles: null
          },
          'src/routes/index.svelte': {
            entry: '/./_app/pages/index.svelte-02afcd2e.js',
            css: ['/./_app/assets/pages/index.svelte-078f1a0b.css'],
            js: ['/./_app/pages/index.svelte-02afcd2e.js', '/./_app/chunks/vendor-2f7c43bc.js'],
            styles: null
          },
          'src/routes/about.svelte': {
            entry: '/./_app/pages/about.svelte-f4f53345.js',
            css: ['/./_app/assets/pages/about.svelte-4db5be0d.css'],
            js: ['/./_app/pages/about.svelte-f4f53345.js', '/./_app/chunks/vendor-2f7c43bc.js'],
            styles: null
          },
          'src/routes/todos/index.svelte': {
            entry: '/./_app/pages/todos/index.svelte-faeed37c.js',
            css: ['/./_app/assets/pages/todos/index.svelte-ef0435f2.css'],
            js: [
              '/./_app/pages/todos/index.svelte-faeed37c.js',
              '/./_app/chunks/vendor-2f7c43bc.js'
            ],
            styles: null
          }
        };
      async function Kt(t) {
        return { module: await $t[t](), ...Gt[t] };
      }
      (Bt = { paths: { base: '', assets: '/.' } }),
        Bt.prerendering,
        (It = {
          amp: !1,
          dev: !1,
          entry: {
            file: '/./_app/start-5e9da5cb.js',
            css: ['/./_app/assets/start-a8cd1609.css'],
            js: ['/./_app/start-5e9da5cb.js', '/./_app/chunks/vendor-2f7c43bc.js']
          },
          fetched: void 0,
          floc: !1,
          get_component_path: (t) => '/./_app/' + entry_lookup[t],
          get_stack: (t) => String(t),
          handle_error: (t) => {
            console.error(t.stack), (t.stack = It.get_stack(t));
          },
          hooks: qt(Mt),
          hydrate: !0,
          initiator: void 0,
          load_component: Kt,
          manifest: St,
          paths: Bt.paths,
          read: Bt.read,
          root: jt,
          router: !0,
          ssr: !0,
          target: '#svelte',
          template: _t,
          trailing_slash: 'never'
        });
      async function Tt(t, e, n) {
        if (!t.locals.userid) return { status: 401 };
        const a = await fetch('https://api.svelte.dev/' + e, {
          method: t.method,
          headers: { 'content-type': 'application/json' },
          body: n && JSON.stringify(n)
        });
        return a.ok && 'GET' !== t.method && 'application/json' !== t.headers.accept
          ? { status: 303, headers: { location: '/todos' } }
          : { status: a.status, body: await a.json() };
      }
      var Ut = Object.freeze({
          __proto__: null,
          [Symbol.toStringTag]: 'Module',
          get: async (t) => {
            const e = await Tt(t, 'todos/' + t.locals.userid);
            return 404 === e.status ? { body: [] } : e;
          },
          post: async (t) => await Tt(t, 'todos/' + t.locals.userid, { text: t.body.get('text') })
        }),
        Dt = Object.freeze({
          __proto__: null,
          [Symbol.toStringTag]: 'Module',
          patch: async (t) =>
            Tt(t, `todos/${t.locals.userid}/${t.params.uid}`, {
              text: t.body.get('text'),
              done: t.body.has('done') ? !!t.body.get('done') : void 0
            }),
          del: async (t) => Tt(t, `todos/${t.locals.userid}/${t.params.uid}`)
        }),
        Qt = () => {
          const t = ((e = '__svelte__'), ct().$$.context.get(e));
          var e;
          return {
            page: { subscribe: t.page.subscribe },
            navigating: { subscribe: t.navigating.subscribe },
            get preloading() {
              return (
                console.error('stores.preloading is deprecated; use stores.navigating instead'),
                { subscribe: t.navigating.subscribe }
              );
            },
            session: t.session
          };
        },
        Nt = { subscribe: (t) => Qt().page.subscribe(t) },
        Pt = {
          code: "header.svelte-1twf6mk.svelte-1twf6mk{display:flex;justify-content:space-between}.corner.svelte-1twf6mk.svelte-1twf6mk{width:3em;height:3em}.corner.svelte-1twf6mk a.svelte-1twf6mk{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-1twf6mk img.svelte-1twf6mk{width:2em;height:2em;object-fit:contain}nav.svelte-1twf6mk.svelte-1twf6mk{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1twf6mk.svelte-1twf6mk{width:2em;height:3em;display:block}path.svelte-1twf6mk.svelte-1twf6mk{fill:var(--background)}ul.svelte-1twf6mk.svelte-1twf6mk{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1twf6mk.svelte-1twf6mk{position:relative;height:100%}li.active.svelte-1twf6mk.svelte-1twf6mk::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1twf6mk a.svelte-1twf6mk{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:10%;text-decoration:none;transition:color 0.2s linear}a.svelte-1twf6mk.svelte-1twf6mk:hover{color:var(--accent-color)}",
          map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n\\timport { page } from \'$app/stores\';\\n\\timport logo from \'./svelte-logo.svg\';\\n</script>\\n\\n<header>\\n\\t<div class=\\"corner\\">\\n\\t\\t<a href=\\"https://kit.svelte.dev\\">\\n\\t\\t\\t<img src={logo} alt=\\"SvelteKit\\" />\\n\\t\\t</a>\\n\\t</div>\\n\\n\\t<nav>\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\n\\t\\t\\t<path d=\\"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z\\" />\\n\\t\\t</svg>\\n\\t\\t<ul>\\n\\t\\t\\t<li class:active={$page.path === \'/\'}><a sveltekit:prefetch href=\\"/\\">Home</a></li>\\n\\t\\t\\t<li class:active={$page.path === \'/about\'}><a sveltekit:prefetch href=\\"/about\\">About</a></li>\\n\\t\\t\\t<li class:active={$page.path === \'/todos\'}><a sveltekit:prefetch href=\\"/todos\\">Todos</a></li>\\n\\t\\t</ul>\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\n\\t\\t\\t<path d=\\"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\\" />\\n\\t\\t</svg>\\n\\t</nav>\\n\\n\\t<div class=\\"corner\\">\\n\\t\\t\x3c!-- TODO put something else here? github link? --\x3e\\n\\t</div>\\n</header>\\n\\n<style>\\n\\theader {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\\n\\t.corner {\\n\\t\\twidth: 3em;\\n\\t\\theight: 3em;\\n\\t}\\n\\n\\t.corner a {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t.corner img {\\n\\t\\twidth: 2em;\\n\\t\\theight: 2em;\\n\\t\\tobject-fit: contain;\\n\\t}\\n\\n\\tnav {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\t--background: rgba(255, 255, 255, 0.7);\\n\\t}\\n\\n\\tsvg {\\n\\t\\twidth: 2em;\\n\\t\\theight: 3em;\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\tpath {\\n\\t\\tfill: var(--background);\\n\\t}\\n\\n\\tul {\\n\\t\\tposition: relative;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\theight: 3em;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tlist-style: none;\\n\\t\\tbackground: var(--background);\\n\\t\\tbackground-size: contain;\\n\\t}\\n\\n\\tli {\\n\\t\\tposition: relative;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\tli.active::before {\\n\\t\\t--size: 6px;\\n\\t\\tcontent: \'\';\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: calc(50% - var(--size));\\n\\t\\tborder: var(--size) solid transparent;\\n\\t\\tborder-top: var(--size) solid var(--accent-color);\\n\\t}\\n\\n\\tnav a {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 1em;\\n\\t\\tcolor: var(--heading-color);\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 0.8rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 10%;\\n\\t\\ttext-decoration: none;\\n\\t\\ttransition: color 0.2s linear;\\n\\t}\\n\\n\\ta:hover {\\n\\t\\tcolor: var(--accent-color);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgCC,MAAM,8BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,AAC/B,CAAC,AAED,OAAO,8BAAC,CAAC,AACR,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC,AAED,sBAAO,CAAC,CAAC,eAAC,CAAC,AACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC,AAED,sBAAO,CAAC,GAAG,eAAC,CAAC,AACZ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,OAAO,AACpB,CAAC,AAED,GAAG,8BAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,YAAY,CAAE,wBAAwB,AACvC,CAAC,AAED,GAAG,8BAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,KAAK,AACf,CAAC,AAED,IAAI,8BAAC,CAAC,AACL,IAAI,CAAE,IAAI,YAAY,CAAC,AACxB,CAAC,AAED,EAAE,8BAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,eAAe,CAAE,OAAO,AACzB,CAAC,AAED,EAAE,8BAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,AACb,CAAC,AAED,EAAE,qCAAO,QAAQ,AAAC,CAAC,AAClB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAC7B,MAAM,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,WAAW,CACrC,UAAU,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,IAAI,cAAc,CAAC,AAClD,CAAC,AAED,kBAAG,CAAC,CAAC,eAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,MAAM,AAC9B,CAAC,AAED,+BAAC,MAAM,AAAC,CAAC,AACR,KAAK,CAAE,IAAI,cAAc,CAAC,AAC3B,CAAC"}'
        },
        Lt = Ct((t, e, n, a) => {
          let i, o;
          return (
            (o = nt(Nt, (t) => (i = t))),
            t.css.add(Pt),
            o(),
            `<header class="svelte-1twf6mk"><div class="corner svelte-1twf6mk"><a href="https://kit.svelte.dev" class="svelte-1twf6mk"><img${ft(
              'src',
              '/_app/assets/svelte-logo.87df40b8.svg',
              0
            )} alt="SvelteKit" class="svelte-1twf6mk"></a></div>\n\n\t<nav class="svelte-1twf6mk"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1twf6mk"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1twf6mk"></path></svg>\n\t\t<ul class="svelte-1twf6mk"><li class="${[
              'svelte-1twf6mk',
              '/' === i.path ? 'active' : ''
            ]
              .join(' ')
              .trim()}"><a sveltekit:prefetch href="/" class="svelte-1twf6mk">Home</a></li>\n\t\t\t<li class="${[
              'svelte-1twf6mk',
              '/about' === i.path ? 'active' : ''
            ]
              .join(' ')
              .trim()}"><a sveltekit:prefetch href="/about" class="svelte-1twf6mk">About</a></li>\n\t\t\t<li class="${[
              'svelte-1twf6mk',
              '/todos' === i.path ? 'active' : ''
            ]
              .join(' ')
              .trim()}"><a sveltekit:prefetch href="/todos" class="svelte-1twf6mk">Todos</a></li></ul>\n\t\t<svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1twf6mk"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1twf6mk"></path></svg></nav>\n\n\t<div class="corner svelte-1twf6mk"></div>\n</header>`
          );
        }),
        Rt = {
          code: 'main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}',
          map: '{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script>\\n\\timport Header from \'$lib/Header/index.svelte\';\\n\\timport \'../app.css\';\\n</script>\\n\\n<Header />\\n\\n<main>\\n\\t<slot />\\n</main>\\n\\n<footer>\\n\\t<p>visit <a href=\\"https://kit.svelte.dev\\">kit.svelte.dev</a> to learn SvelteKit</p>\\n</footer>\\n\\n<style>\\n\\tmain {\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 1rem;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 1024px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 40px;\\n\\t}\\n\\n\\tfooter a {\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\tfooter {\\n\\t\\t\\tpadding: 40px 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgBC,IAAI,8BAAC,CAAC,AACL,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC,AAED,MAAM,8BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,AACd,CAAC,AAED,qBAAM,CAAC,CAAC,eAAC,CAAC,AACT,WAAW,CAAE,IAAI,AAClB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,MAAM,8BAAC,CAAC,AACP,OAAO,CAAE,IAAI,CAAC,CAAC,AAChB,CAAC,AACF,CAAC"}'
        },
        Wt = Ct(
          (t, e, n, a) => (
            t.css.add(Rt),
            `${vt(Lt, 'Header').$$render(t, {}, {}, {})}\n\n<main class="svelte-1izrdc8">${
              a.default ? a.default({}) : ''
            }</main>\n\n<footer class="svelte-1izrdc8"><p>visit <a href="https://kit.svelte.dev" class="svelte-1izrdc8">kit.svelte.dev</a> to learn SvelteKit</p>\n</footer>`
          )
        ),
        Ht = Object.freeze({ __proto__: null, [Symbol.toStringTag]: 'Module', default: Wt });
      var Vt = Ct((t, e, n, a) => {
          let { status: i } = e,
            { error: o } = e;
          return (
            void 0 === e.status && n.status && void 0 !== i && n.status(i),
            void 0 === e.error && n.error && void 0 !== o && n.error(o),
            `<h1>${At(i)}</h1>\n\n<p>${At(o.message)}</p>\n\n\n${
              o.stack ? `<pre>${At(o.stack)}</pre>` : ''
            }`
          );
        }),
        Zt = Object.freeze({
          __proto__: null,
          [Symbol.toStringTag]: 'Module',
          default: Vt,
          load: function ({ error: t, status: e }) {
            return { props: { error: t, status: e } };
          }
        }),
        Ft = {
          code: '.counter.svelte-ltn89m.svelte-ltn89m{display:flex;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);margin:1rem 0}.counter.svelte-ltn89m button.svelte-ltn89m{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;color:var(--text-color);font-size:2rem}.counter.svelte-ltn89m button.svelte-ltn89m:hover{background-color:var(--secondary-color)}svg.svelte-ltn89m.svelte-ltn89m{width:25%;height:25%}path.svelte-ltn89m.svelte-ltn89m{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-ltn89m.svelte-ltn89m{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-ltn89m strong.svelte-ltn89m{position:absolute;display:block;width:100%;height:100%;font-weight:400;color:var(--accent-color);font-size:4rem;display:flex;align-items:center;justify-content:center}.counter-digits.svelte-ltn89m.svelte-ltn89m{position:absolute;width:100%;height:100%}',
          map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n\\timport { spring } from \'svelte/motion\';\\n\\n\\tlet count = 0;\\n\\n\\tconst displayed_count = spring();\\n\\t$: displayed_count.set(count);\\n\\t$: offset = modulo($displayed_count, 1);\\n\\n\\tfunction modulo(n, m) {\\n\\t\\t// handle negative numbers\\n\\t\\treturn ((n % m) + m) % m;\\n\\t}\\n</script>\\n\\n<div class=\\"counter\\">\\n\\t<button on:click={() => (count -= 1)} aria-label=\\"Decrease the counter by one\\">\\n\\t\\t<svg aria-hidden=\\"true\\" viewBox=\\"0 0 1 1\\">\\n\\t\\t\\t<path d=\\"M0,0.5 L1,0.5\\" />\\n\\t\\t</svg>\\n\\t</button>\\n\\n\\t<div class=\\"counter-viewport\\">\\n\\t\\t<div class=\\"counter-digits\\" style=\\"transform: translate(0, {100 * offset}%)\\">\\n\\t\\t\\t<strong style=\\"top: -100%\\" aria-hidden=\\"true\\">{Math.floor($displayed_count + 1)}</strong>\\n\\t\\t\\t<strong>{Math.floor($displayed_count)}</strong>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<button on:click={() => (count += 1)} aria-label=\\"Increase the counter by one\\">\\n\\t\\t<svg aria-hidden=\\"true\\" viewBox=\\"0 0 1 1\\">\\n\\t\\t\\t<path d=\\"M0,0.5 L1,0.5 M0.5,0 L0.5,1\\" />\\n\\t\\t</svg>\\n\\t</button>\\n</div>\\n\\n<style>\\n\\t.counter {\\n\\t\\tdisplay: flex;\\n\\t\\tborder-top: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tmargin: 1rem 0;\\n\\t}\\n\\n\\t.counter button {\\n\\t\\twidth: 2em;\\n\\t\\tpadding: 0;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tborder: 0;\\n\\t\\tbackground-color: transparent;\\n\\t\\tcolor: var(--text-color);\\n\\t\\tfont-size: 2rem;\\n\\t}\\n\\n\\t.counter button:hover {\\n\\t\\tbackground-color: var(--secondary-color);\\n\\t}\\n\\n\\tsvg {\\n\\t\\twidth: 25%;\\n\\t\\theight: 25%;\\n\\t}\\n\\n\\tpath {\\n\\t\\tvector-effect: non-scaling-stroke;\\n\\t\\tstroke-width: 2px;\\n\\t\\tstroke: var(--text-color);\\n\\t}\\n\\n\\t.counter-viewport {\\n\\t\\twidth: 8em;\\n\\t\\theight: 4em;\\n\\t\\toverflow: hidden;\\n\\t\\ttext-align: center;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.counter-viewport strong {\\n\\t\\tposition: absolute;\\n\\t\\tdisplay: block;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tfont-weight: 400;\\n\\t\\tcolor: var(--accent-color);\\n\\t\\tfont-size: 4rem;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.counter-digits {\\n\\t\\tposition: absolute;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAqCC,QAAQ,4BAAC,CAAC,AACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,MAAM,CAAE,IAAI,CAAC,CAAC,AACf,CAAC,AAED,sBAAQ,CAAC,MAAM,cAAC,CAAC,AAChB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,AAChB,CAAC,AAED,sBAAQ,CAAC,oBAAM,MAAM,AAAC,CAAC,AACtB,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,AACzC,CAAC,AAED,GAAG,4BAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC,AAED,IAAI,4BAAC,CAAC,AACL,aAAa,CAAE,kBAAkB,CACjC,YAAY,CAAE,GAAG,CACjB,MAAM,CAAE,IAAI,YAAY,CAAC,AAC1B,CAAC,AAED,iBAAiB,4BAAC,CAAC,AAClB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,QAAQ,AACnB,CAAC,AAED,+BAAiB,CAAC,MAAM,cAAC,CAAC,AACzB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,cAAc,CAAC,CAC1B,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AACxB,CAAC,AAED,eAAe,4BAAC,CAAC,AAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC"}'
        };
      var Yt = Ct((t, e, n, a) => {
          let i, o, s;
          const r = kt();
          var p;
          return (
            (s = nt(r, (t) => (o = t))),
            t.css.add(Ft),
            r.set(0),
            (i = ((o % (p = 1)) + p) % p),
            s(),
            `<div class="counter svelte-ltn89m"><button aria-label="Decrease the counter by one" class="svelte-ltn89m"><svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-ltn89m"><path d="M0,0.5 L1,0.5" class="svelte-ltn89m"></path></svg></button>\n\n\t<div class="counter-viewport svelte-ltn89m"><div class="counter-digits svelte-ltn89m" style="${
              'transform: translate(0, ' + At(100 * i) + '%)'
            }"><strong style="top: -100%" aria-hidden="true" class="svelte-ltn89m">${At(
              Math.floor(o + 1)
            )}</strong>\n\t\t\t<strong class="svelte-ltn89m">${At(
              Math.floor(o)
            )}</strong></div></div>\n\n\t<button aria-label="Increase the counter by one" class="svelte-ltn89m"><svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-ltn89m"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-ltn89m"></path></svg></button>\n</div>`
          );
        }),
        Jt = {
          code: 'section.svelte-mjk9ig.svelte-mjk9ig{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-mjk9ig.svelte-mjk9ig{width:100%}.welcome.svelte-mjk9ig.svelte-mjk9ig{position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-mjk9ig img.svelte-mjk9ig{position:absolute;width:100%;height:100%;top:0;display:block}',
          map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport const prerender = true;\\n</script>\\n\\n<script>\\n\\timport Counter from \'$lib/Counter/index.svelte\';\\n</script>\\n\\n<svelte:head>\\n\\t<title>Home</title>\\n</svelte:head>\\n\\n<section>\\n\\t<h1>\\n\\t\\t<div class=\\"welcome\\">\\n\\t\\t\\t<picture>\\n\\t\\t\\t\\t<source srcset=\\"svelte-welcome.webp\\" type=\\"image/webp\\" />\\n\\t\\t\\t\\t<img src=\\"svelte-welcome.png\\" alt=\\"Welcome\\" />\\n\\t\\t\\t</picture>\\n\\t\\t</div>\\n\\n\\t\\tto your new<br />SvelteKit app\\n\\t</h1>\\n\\n\\t<h2>\\n\\t\\ttry editing <strong>src/routes/index.svelte</strong>\\n\\t</h2>\\n\\n\\t<Counter />\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\th1 {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.welcome {\\n\\t\\tposition: relative;\\n\\t\\twidth: 100%;\\n\\t\\theight: 0;\\n\\t\\tpadding: 0 0 calc(100% * 495 / 2048) 0;\\n\\t}\\n\\n\\t.welcome img {\\n\\t\\tposition: absolute;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\ttop: 0;\\n\\t\\tdisplay: block;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgCC,OAAO,4BAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,IAAI,CAAE,CAAC,AACR,CAAC,AAED,EAAE,4BAAC,CAAC,AACH,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,QAAQ,4BAAC,CAAC,AACT,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,AACvC,CAAC,AAED,sBAAQ,CAAC,GAAG,cAAC,CAAC,AACb,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,KAAK,AACf,CAAC"}'
        },
        Xt = Ct(
          (t, e, n, a) => (
            t.css.add(Jt),
            `${
              ((t.head += '' + ((t.title = '<title>Home</title>'), '')), '')
            }\n\n<section class="svelte-mjk9ig"><h1 class="svelte-mjk9ig"><div class="welcome svelte-mjk9ig"><picture><source srcset="svelte-welcome.webp" type="image/webp">\n\t\t\t\t<img src="svelte-welcome.png" alt="Welcome" class="svelte-mjk9ig"></picture></div>\n\n\t\tto your new<br>SvelteKit app\n\t</h1>\n\n\t<h2>try editing <strong>src/routes/index.svelte</strong></h2>\n\n\t${vt(
              Yt,
              'Counter'
            ).$$render(t, {}, {}, {})}\n</section>`
          )
        ),
        te = Object.freeze({
          __proto__: null,
          [Symbol.toStringTag]: 'Module',
          default: Xt,
          prerender: !0
        }),
        ee = {
          code: '.content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}',
          map: '{"version":3,"file":"about.svelte","sources":["about.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\timport { browser, dev } from \'$app/env\';\\n\\n\\t// we don\'t need any JS on this page, though we\'ll load\\n\\t// it in dev so that we get hot module replacement...\\n\\texport const hydrate = dev;\\n\\n\\t// ...but if the client-side router is already loaded\\n\\t// (i.e. we came here from elsewhere in the app), use it\\n\\texport const router = browser;\\n\\n\\t// since there\'s no dynamic data here, we can prerender\\n\\t// it so that it gets served as a static asset in prod\\n\\texport const prerender = true;\\n</script>\\n\\n<svelte:head>\\n\\t<title>About</title>\\n</svelte:head>\\n\\n<div class=\\"content\\">\\n\\t<h1>About this app</h1>\\n\\n\\t<p>\\n\\t\\tThis is a <a href=\\"https://kit.svelte.dev\\">SvelteKit</a> app. You can make your own by typing the\\n\\t\\tfollowing into your command line and following the prompts:\\n\\t</p>\\n\\n\\t\x3c!-- TODO lose the @next! --\x3e\\n\\t<pre>npm init svelte@next</pre>\\n\\n\\t<p>\\n\\t\\tThe page you\'re looking at is purely static HTML, with no client-side interactivity needed.\\n\\t\\tBecause of that, we don\'t need to load any JavaScript. Try viewing the page\'s source, or opening\\n\\t\\tthe devtools network panel and reloading.\\n\\t</p>\\n\\n\\t<p>\\n\\t\\tThe <a href=\\"/todos\\">TODOs</a> page illustrates SvelteKit\'s data loading and form handling. Try using\\n\\t\\tit with JavaScript disabled!\\n\\t</p>\\n</div>\\n\\n<style>\\n\\t.content {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: var(--column-width);\\n\\t\\tmargin: var(--column-margin-top) auto 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4CC,QAAQ,cAAC,CAAC,AACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AAC7C,CAAC"}'
        },
        ne = Ct(
          (t, e, n, a) => (
            t.css.add(ee),
            ((t.head += '' + ((t.title = '<title>About</title>'), '')), '') +
              '\n\n<div class="content svelte-cf77e8"><h1>About this app</h1>\n\n\t<p>This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the\n\t\tfollowing into your command line and following the prompts:\n\t</p>\n\n\t\n\t<pre>npm init svelte@next</pre>\n\n\t<p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.\n\t\tBecause of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening\n\t\tthe devtools network panel and reloading.\n\t</p>\n\n\t<p>The <a href="/todos">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using\n\t\tit with JavaScript disabled!\n\t</p>\n</div>'
          )
        ),
        ae = Object.freeze({
          __proto__: null,
          [Symbol.toStringTag]: 'Module',
          default: ne,
          hydrate: !1,
          router: !1,
          prerender: !0
        }),
        ie = {
          code: ".todos.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;line-height:1}.new.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{margin:0 0 0.5rem 0}input.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{border:1px solid transparent}input.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd:focus-visible{box-shadow:inset 1px 1px 6px rgba(0, 0, 0, 0.1);border:1px solid #ff3e00 !important;outline:none}.new.svelte-dmxqmd input.svelte-dmxqmd.svelte-dmxqmd{font-size:28px;width:100%;padding:0.5em 1em 0.3em 1em;box-sizing:border-box;background:rgba(255, 255, 255, 0.05);border-radius:8px;text-align:center}.todo.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{display:grid;grid-template-columns:2rem 1fr 2rem;grid-gap:0.5rem;align-items:center;margin:0 0 0.5rem 0;padding:0.5rem;background-color:white;border-radius:8px;filter:drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));transform:translate(-1px, -1px);transition:filter 0.2s, transform 0.2s}.done.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{transform:none;opacity:0.4;filter:drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1))}form.text.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{position:relative;display:flex;align-items:center;flex:1}.todo.svelte-dmxqmd input.svelte-dmxqmd.svelte-dmxqmd{flex:1;padding:0.5em 2em 0.5em 0.8em;border-radius:3px}.todo.svelte-dmxqmd button.svelte-dmxqmd.svelte-dmxqmd{width:2em;height:2em;border:none;background-color:transparent;background-position:50% 50%;background-repeat:no-repeat}button.toggle.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{border:1px solid rgba(0, 0, 0, 0.2);border-radius:50%;box-sizing:border-box;background-size:1em auto}.done.svelte-dmxqmd .toggle.svelte-dmxqmd.svelte-dmxqmd{background-image:url(\"data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")}.delete.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{background-image:url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A\");opacity:0.2}.delete.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd:hover,.delete.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd:focus{transition:opacity 0.2s;opacity:1}.save.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd{position:absolute;right:0;opacity:0;background-image:url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A\")}.todo.svelte-dmxqmd input.svelte-dmxqmd:focus+.save.svelte-dmxqmd,.save.svelte-dmxqmd.svelte-dmxqmd.svelte-dmxqmd:focus{transition:opacity 0.2s;opacity:1}",
          map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\timport { enhance } from '$lib/form';\\n\\n\\t// see https://kit.svelte.dev/docs#loading\\n\\texport const load = async ({ fetch }) => {\\n\\t\\tconst res = await fetch('/todos.json');\\n\\n\\t\\tif (res.ok) {\\n\\t\\t\\tconst todos = await res.json();\\n\\n\\t\\t\\treturn {\\n\\t\\t\\t\\tprops: { todos }\\n\\t\\t\\t};\\n\\t\\t}\\n\\n\\t\\tconst { message } = await res.json();\\n\\n\\t\\treturn {\\n\\t\\t\\terror: new Error(message)\\n\\t\\t};\\n\\t};\\n</script>\\n\\n<script>\\n\\timport { scale } from 'svelte/transition';\\n\\timport { flip } from 'svelte/animate';\\n\\n\\texport let todos;\\n\\n\\tasync function patch(res) {\\n\\t\\tconst todo = await res.json();\\n\\n\\t\\ttodos = todos.map((t) => {\\n\\t\\t\\tif (t.uid === todo.uid) return todo;\\n\\t\\t\\treturn t;\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<svelte:head>\\n\\t<title>Todos</title>\\n</svelte:head>\\n\\n<div class=\\\"todos\\\">\\n\\t<h1>Todos</h1>\\n\\n\\t<form\\n\\t\\tclass=\\\"new\\\"\\n\\t\\taction=\\\"/todos.json\\\"\\n\\t\\tmethod=\\\"post\\\"\\n\\t\\tuse:enhance={{\\n\\t\\t\\tresult: async (res, form) => {\\n\\t\\t\\t\\tconst created = await res.json();\\n\\t\\t\\t\\ttodos = [...todos, created];\\n\\n\\t\\t\\t\\tform.reset();\\n\\t\\t\\t}\\n\\t\\t}}\\n\\t>\\n\\t\\t<input name=\\\"text\\\" aria-label=\\\"Add todo\\\" placeholder=\\\"+ tap to add a todo\\\" />\\n\\t</form>\\n\\n\\t{#each todos as todo (todo.uid)}\\n\\t\\t<div\\n\\t\\t\\tclass=\\\"todo\\\"\\n\\t\\t\\tclass:done={todo.done}\\n\\t\\t\\ttransition:scale|local={{ start: 0.7 }}\\n\\t\\t\\tanimate:flip={{ duration: 200 }}\\n\\t\\t>\\n\\t\\t\\t<form\\n\\t\\t\\t\\taction=\\\"/todos/{todo.uid}.json?_method=patch\\\"\\n\\t\\t\\t\\tmethod=\\\"post\\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tpending: (data) => {\\n\\t\\t\\t\\t\\t\\ttodo.done = !!data.get('done');\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\tresult: patch\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<input type=\\\"hidden\\\" name=\\\"done\\\" value={todo.done ? '' : 'true'} />\\n\\t\\t\\t\\t<button class=\\\"toggle\\\" aria-label=\\\"Mark todo as {todo.done ? 'not done' : 'done'}\\\" />\\n\\t\\t\\t</form>\\n\\n\\t\\t\\t<form\\n\\t\\t\\t\\tclass=\\\"text\\\"\\n\\t\\t\\t\\taction=\\\"/todos/{todo.uid}.json?_method=patch\\\"\\n\\t\\t\\t\\tmethod=\\\"post\\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tresult: patch\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<input aria-label=\\\"Edit todo\\\" type=\\\"text\\\" name=\\\"text\\\" value={todo.text} />\\n\\t\\t\\t\\t<button class=\\\"save\\\" aria-label=\\\"Save todo\\\" />\\n\\t\\t\\t</form>\\n\\n\\t\\t\\t<form\\n\\t\\t\\t\\taction=\\\"/todos/{todo.uid}.json?_method=delete\\\"\\n\\t\\t\\t\\tmethod=\\\"post\\\"\\n\\t\\t\\t\\tuse:enhance={{\\n\\t\\t\\t\\t\\tresult: () => {\\n\\t\\t\\t\\t\\t\\ttodos = todos.filter((t) => t.uid !== todo.uid);\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<button class=\\\"delete\\\" aria-label=\\\"Delete todo\\\" />\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.todos {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: var(--column-width);\\n\\t\\tmargin: var(--column-margin-top) auto 0 auto;\\n\\t\\tline-height: 1;\\n\\t}\\n\\n\\t.new {\\n\\t\\tmargin: 0 0 0.5rem 0;\\n\\t}\\n\\n\\tinput {\\n\\t\\tborder: 1px solid transparent;\\n\\t}\\n\\n\\tinput:focus-visible {\\n\\t\\tbox-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);\\n\\t\\tborder: 1px solid #ff3e00 !important;\\n\\t\\toutline: none;\\n\\t}\\n\\n\\t.new input {\\n\\t\\tfont-size: 28px;\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 0.5em 1em 0.3em 1em;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tbackground: rgba(255, 255, 255, 0.05);\\n\\t\\tborder-radius: 8px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.todo {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: 2rem 1fr 2rem;\\n\\t\\tgrid-gap: 0.5rem;\\n\\t\\talign-items: center;\\n\\t\\tmargin: 0 0 0.5rem 0;\\n\\t\\tpadding: 0.5rem;\\n\\t\\tbackground-color: white;\\n\\t\\tborder-radius: 8px;\\n\\t\\tfilter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));\\n\\t\\ttransform: translate(-1px, -1px);\\n\\t\\ttransition: filter 0.2s, transform 0.2s;\\n\\t}\\n\\n\\t.done {\\n\\t\\ttransform: none;\\n\\t\\topacity: 0.4;\\n\\t\\tfilter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));\\n\\t}\\n\\n\\tform.text {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tflex: 1;\\n\\t}\\n\\n\\t.todo input {\\n\\t\\tflex: 1;\\n\\t\\tpadding: 0.5em 2em 0.5em 0.8em;\\n\\t\\tborder-radius: 3px;\\n\\t}\\n\\n\\t.todo button {\\n\\t\\twidth: 2em;\\n\\t\\theight: 2em;\\n\\t\\tborder: none;\\n\\t\\tbackground-color: transparent;\\n\\t\\tbackground-position: 50% 50%;\\n\\t\\tbackground-repeat: no-repeat;\\n\\t}\\n\\n\\tbutton.toggle {\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.2);\\n\\t\\tborder-radius: 50%;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tbackground-size: 1em auto;\\n\\t}\\n\\n\\t.done .toggle {\\n\\t\\tbackground-image: url(\\\"data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\\\");\\n\\t}\\n\\n\\t.delete {\\n\\t\\tbackground-image: url(\\\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A\\\");\\n\\t\\topacity: 0.2;\\n\\t}\\n\\n\\t.delete:hover,\\n\\t.delete:focus {\\n\\t\\ttransition: opacity 0.2s;\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\t.save {\\n\\t\\tposition: absolute;\\n\\t\\tright: 0;\\n\\t\\topacity: 0;\\n\\t\\tbackground-image: url(\\\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A\\\");\\n\\t}\\n\\n\\t.todo input:focus + .save,\\n\\t.save:focus {\\n\\t\\ttransition: opacity 0.2s;\\n\\t\\topacity: 1;\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA+GC,MAAM,0CAAC,CAAC,AACP,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAC5C,WAAW,CAAE,CAAC,AACf,CAAC,AAED,IAAI,0CAAC,CAAC,AACL,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,AACrB,CAAC,AAED,KAAK,0CAAC,CAAC,AACN,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,AAC9B,CAAC,AAED,+CAAK,cAAc,AAAC,CAAC,AACpB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAChD,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAAC,UAAU,CACpC,OAAO,CAAE,IAAI,AACd,CAAC,AAED,kBAAI,CAAC,KAAK,4BAAC,CAAC,AACX,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAAC,GAAG,CAC5B,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACrC,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,KAAK,0CAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CACpC,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,OAAO,CAAE,MAAM,CACf,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACnD,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,UAAU,CAAE,MAAM,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,AACxC,CAAC,AAED,KAAK,0CAAC,CAAC,AACN,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AACpD,CAAC,AAED,IAAI,KAAK,0CAAC,CAAC,AACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,IAAI,CAAE,CAAC,AACR,CAAC,AAED,mBAAK,CAAC,KAAK,4BAAC,CAAC,AACZ,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CAAC,KAAK,CAC9B,aAAa,CAAE,GAAG,AACnB,CAAC,AAED,mBAAK,CAAC,MAAM,4BAAC,CAAC,AACb,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,WAAW,CAC7B,mBAAmB,CAAE,GAAG,CAAC,GAAG,CAC5B,iBAAiB,CAAE,SAAS,AAC7B,CAAC,AAED,MAAM,OAAO,0CAAC,CAAC,AACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,GAAG,CAAC,IAAI,AAC1B,CAAC,AAED,mBAAK,CAAC,OAAO,4BAAC,CAAC,AACd,gBAAgB,CAAE,IAAI,uQAAuQ,CAAC,AAC/R,CAAC,AAED,OAAO,0CAAC,CAAC,AACR,gBAAgB,CAAE,IAAI,yrBAAyrB,CAAC,CAChtB,OAAO,CAAE,GAAG,AACb,CAAC,AAED,iDAAO,MAAM,CACb,iDAAO,MAAM,AAAC,CAAC,AACd,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,OAAO,CAAE,CAAC,AACX,CAAC,AAED,KAAK,0CAAC,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,IAAI,gpBAAgpB,CAAC,AACxqB,CAAC,AAED,mBAAK,CAAC,mBAAK,MAAM,CAAG,mBAAK,CACzB,+CAAK,MAAM,AAAC,CAAC,AACZ,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,OAAO,CAAE,CAAC,AACX,CAAC\"}"
        },
        oe = Ct((t, e, n, a) => {
          let { todos: i } = e;
          return (
            void 0 === e.todos && n.todos && void 0 !== i && n.todos(i),
            t.css.add(ie),
            `${
              ((t.head += '' + ((t.title = '<title>Todos</title>'), '')), '')
            }\n\n<div class="todos svelte-dmxqmd"><h1>Todos</h1>\n\n\t<form class="new svelte-dmxqmd" action="/todos.json" method="post"><input name="text" aria-label="Add todo" placeholder="+ tap to add a todo" class="svelte-dmxqmd"></form>\n\n\t${(function (
              t,
              e
            ) {
              let n = '';
              for (let a = 0; a < t.length; a += 1) n += e(t[a], a);
              return n;
            })(
              i,
              (t) =>
                `<div class="${['todo svelte-dmxqmd', t.done ? 'done' : '']
                  .join(' ')
                  .trim()}"><form action="${
                  '/todos/' + At(t.uid) + '.json?_method=patch'
                }" method="post"><input type="hidden" name="done"${ft(
                  'value',
                  t.done ? '' : 'true',
                  0
                )} class="svelte-dmxqmd">\n\t\t\t\t<button class="toggle svelte-dmxqmd" aria-label="${
                  'Mark todo as ' + At(t.done ? 'not done' : 'done')
                }"></button></form>\n\n\t\t\t<form class="text svelte-dmxqmd" action="${
                  '/todos/' + At(t.uid) + '.json?_method=patch'
                }" method="post"><input aria-label="Edit todo" type="text" name="text"${ft(
                  'value',
                  t.text,
                  0
                )} class="svelte-dmxqmd">\n\t\t\t\t<button class="save svelte-dmxqmd" aria-label="Save todo"></button></form>\n\n\t\t\t<form action="${
                  '/todos/' + At(t.uid) + '.json?_method=delete'
                }" method="post"><button class="delete svelte-dmxqmd" aria-label="Delete todo"></button></form>\n\t\t</div>`
            )}\n</div>`
          );
        }),
        se = Object.freeze({
          __proto__: null,
          [Symbol.toStringTag]: 'Module',
          default: oe,
          load: async ({ fetch: t }) => {
            const e = await t('/todos.json');
            if (e.ok) {
              return { props: { todos: await e.json() } };
            }
            const { message: n } = await e.json();
            return { error: new Error(n) };
          }
        }),
        re = p(f());
      async function pe(t) {
        return (t.headers.get('content-type') || '').includes('application/octet-stream')
          ? new Uint8Array(await t.arrayBuffer())
          : t.text();
      }
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ addEventListener(
        'fetch',
        (t) => {
          t.respondWith(
            (async function (t) {
              if ('GET' == t.request.method)
                try {
                  return await (0, re.getAssetFromKV)(t);
                } catch (t) {
                  if (!(t instanceof re.NotFoundError))
                    return new Response(
                      'Error loading static asset:' + (t.message || t.toString()),
                      { status: 500 }
                    );
                }
              const e = t.request,
                n = new URL(e.url);
              try {
                const t = await (function (t, { prerender: e } = {}) {
                  const n = t.headers.host;
                  return Y({ ...t, host: n }, It, { prerender: e });
                })({
                  host: n.host,
                  path: n.pathname,
                  query: n.searchParams,
                  rawBody: e.body ? await pe(e) : null,
                  headers: Object.fromEntries(e.headers),
                  method: e.method
                });
                if (t) return new Response(t.body, { status: t.status, headers: t.headers });
              } catch (t) {
                return new Response('Error rendering route:' + (t.message || t.toString()), {
                  status: 500
                });
              }
              return new Response({ status: 404, statusText: 'Not Found' });
            })(t)
          );
        }
      );
    }.call(this, n(1)));
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  }
]);
