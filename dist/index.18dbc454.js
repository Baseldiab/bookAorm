// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gEwwu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
// GLOBAL FUNCTIONS ##########################
AOS.init();
// ========================
function getPromiseData(url) {
    return fetch(url).then((res)=>{
        if (!res.ok) {
            if (res.statusText === "Not Found") throw new Error("Something Wrong");
        }
        return res.json();
    }).catch((error)=>{
        console.log(error);
    });
}
// ========================
// ADD BOOKS DATA TO CARDS===========================================
function promiseToCard(promiseData, sectionHtml) {
    promiseData.then((data)=>{
        let itemsData = data.items;
        if (sectionHtml) itemsData.forEach((item)=>{
            let price = `EGP${item.saleInfo.listPrice?.amount.toFixed(2)}`;
            if (item.saleInfo.saleability === "NOT_FOR_SALE") price = "NOT AVAILABLE";
            if (item.saleInfo.saleability !== "NOT_FOR_SALE") {
                let addDataToCards = `<div class="col">
        <div class="card h-100">
        <a class="img-container"
         href="./singleBook.html?productId=${decodeURIComponent(item.id)}
        ">
          <img
            src=${item.volumeInfo.imageLinks?.thumbnail}
            class="card-img-top mx-auto "
            alt="book cover"
          />
         
          </a>
          <div class="card-body">
            <h5 class="card-title mb-3 "><a class="text-unstyled text-dark" href="./singleBook.html?productId=${decodeURIComponent(item.id)}
            " >${item.volumeInfo.title}</a></h5>
            <h6 class="card-author mb-3">${item.volumeInfo?.authors}</h6>
            <p class="card-text card-price">
              ${price}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary"
              >Last updated 3 days ago</small
            >
          </div>
        </div>
      </div>`;
                sectionHtml.innerHTML += addDataToCards;
            }
        });
    });
}
// ========================
// dark and light mode===============================================
let switchInput = document.querySelector(".top-nav__switch-input");
let themeText = document.querySelector(".top-nav__theme-text");
let themeIcon = document.querySelector(".top-nav__theme-icon");
switchInput.addEventListener("change", (e)=>{
    const isChecked = e.target.checked;
    const theme = isChecked ? "dark" : "light";
    setMode(theme);
});
const htmlElement = window.document.documentElement;
const themeMode = window.localStorage.getItem("theme");
if (themeMode) setMode(themeMode);
else {
    const systemTheme = getCurrentSystemMode();
    setMode(systemTheme);
}
function getCurrentSystemMode() {
    const isSystemModeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // console.log("isSystemModeDark => ", isSystemModeDark);
    const systemTheme = isSystemModeDark ? "dark" : "light";
    return systemTheme;
}
function setMode(theme) {
    window.localStorage.setItem("theme", theme);
    if (theme === "dark") {
        switchInput.checked = true;
        themeText.textContent = "Dark Mode";
        themeIcon.classList.replace("fa-sun", "fa-moon");
        htmlElement.dataset.theme = theme;
    } else {
        themeText.textContent = "Light Mode";
        themeIcon.classList.replace("fa-moon", "fa-sun");
        htmlElement.setAttribute("data-theme", theme);
    }
}
// ========================
//  FILTER DATA COMING FROM localSTORAGE==================================
// ===============================================================
function filterDataStorage(data, items) {
    let booksArray = [];
    for(let i = 0; i < items.length; i++){
        const item = data.items.filter((book, index)=>book.id == items[i]);
        return booksArray.push(item[0]);
    }
}
// ========================
//  ADD TO CART TO localSTORAGE==================================
let idCartArray = readFromStorage("cart") || [];
function addToCartBtn() {
    const addCartBtn = document.querySelectorAll(".add-carts");
    addCartBtn.forEach(function(button) {
        clickAddToLocalStorage(button, idCartArray, "cart");
    });
}
// ========================
// ADD TO WISH TO localSTORAGE==================================
let idWishArray = readFromStorage("wish") || [];
function addToWishBtn() {
    const addCartBtn = document.querySelectorAll(".add-wish");
    addCartBtn.forEach(function(button) {
        clickAddToLocalStorage(button, idWishArray, "wish");
    });
}
// ========================
function clickAddToLocalStorage(button, arrayName, localKeyName) {
    button.addEventListener("click", (e)=>{
        // e.target.classList.add("disabled");
        let dataId = e.target.dataset.id;
        let existingIndex = arrayName.findIndex((item)=>item.id === dataId);
        if (existingIndex !== -1) arrayName[existingIndex].count++;
        else arrayName.push({
            id: dataId,
            count: 1
        });
        writeToStorage(arrayName, localKeyName);
        updateCartAndWishCount();
    });
}
// ===============================
// update counts of wish and cart=================================
const cartLengthElement = document.querySelector(".cart-count");
const wishLengthElement = document.querySelector(".wish-count");
updateCartAndWishCount();
function updateCartAndWishCount() {
    let cartLengthNumber = [
        ...new Set(readFromStorage("cart"))
    ];
    let wishLengthNumber = [
        ...new Set(readFromStorage("wish"))
    ];
    cartLengthElement.innerText = cartLengthNumber.length || 0;
    wishLengthElement.innerText = wishLengthNumber.length || 0;
}
// ========================
// ========================
// DELETE ITEM FROM localSTORAGE==================================
function deleteTableBtn(updateLocalName) {
    let delCartBtn = document.querySelectorAll(".deleteBtn");
    delCartBtn.forEach((element)=>{
        deleteElement(element, updateLocalName);
    });
// window.location.reload();
}
// ========================================
function deleteElement(element, updateLocalName) {
    element.addEventListener("click", (e)=>{
        let dataId = e.target.dataset.id;
        let dataIndex = e.target.dataset.index;
        $("#" + updateLocalName + "-" + dataId).remove();
        let all = readFromStorage(updateLocalName);
        all.splice(dataIndex, 1);
        writeToStorage(all, updateLocalName);
        updateCartAndWishCount();
        window.location.reload();
    });
}
// ========================
function readFromStorage(key = "tasks") {
    return JSON.parse(localStorage.getItem(key)) || [];
}
// ========================
function writeToStorage(data, key = "tasks") {
    localStorage.setItem(key, JSON.stringify(data));
}
// ========================
function urlParam(name) {
    let results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href);
    if (results == null) return null;
    else return results[1] || 0;
}
// ========================
// adding year in footer======================================
const footerYear = document.querySelector(".footer-year");
if (footerYear) footerYear.textContent = new Date().getFullYear();
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// HOME PAGE ##################
// ===========================
// COUNT UP FOR STATICS SECTION=====================================
function countUp(elementId, target) {
    let element = document.getElementById(elementId);
    var current = parseInt(element.innerText);
    if (current < target) {
        current++;
        element.innerText = current;
        setTimeout(function() {
            countUp(elementId, target);
        }, 1); // Adjust the delay as needed
    }
}
const staticsSection = document.querySelector(".statics");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};
const callback = (entries, observer)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            countUp("statics__books", 642);
            countUp("statics__awards", 359);
            countUp("statics__recycle", 457);
            countUp("statics__customers", 554);
            countUp("statics-decimal1", 530);
            countUp("statics-decimal2", 327);
            countUp("statics-decimal3", 415);
            observer.unobserve(entry.target);
        }
    });
};
if (staticsSection) {
    const observer = new IntersectionObserver(callback, options);
    if (observer) observer.observe(staticsSection);
}
// ========================
// ADDING MONTH TO CAROUSEL SECTION============================================
const currentMonthElements = window.document.querySelectorAll(".current-month");
const currentMonth = new Date().toLocaleString("en-us", {
    month: "long"
});
currentMonthElements.forEach((ele)=>{
    ele.textContent = currentMonth;
});
// =========================
// ADDING BESTSELLERS CARDS=====================================================
const bestsellersCards = document.getElementById("bestsellers-cards");
function specificData(startIndex, maxNumber) {
    return getPromiseData(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyAkKEefa5iChTT8PGGZyMKfk_5Jy6kbu4A&startIndex=${startIndex}&maxResults=${maxNumber}`);
}
let bestsellersData = specificData(0, 30);
promiseToCard(bestsellersData, bestsellersCards);
// =========================
// ADDING NEW RELEASES CARDS=====================================================
const newReleases = document.getElementById("new-imgs");
let newImgsData = specificData(40, 8);
newImgsData.then((data)=>{
    let newData = data.items;
    if (newReleases) newData.forEach((item)=>{
        let addDataToimgs = `<div class="col">
      <div class="card h-100">
        <a class="img-container" href="./singleBook.html?productId=${decodeURIComponent(item.id)}">
        <img
        src=${item.volumeInfo.imageLinks?.thumbnail}
          class="card-img-top mx-auto"
          alt="book cover"
        />
      </a>
      </div>
    </div>`;
        newReleases.innerHTML += addDataToimgs;
    });
});
// ===============================
// SCROLL Y DIRECTIONS======================================================
const scrollButton = document.querySelector(".scroll-top");
if (scrollButton) {
    scrollButton.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", checkScroll);
    if (window.scrollY === 0) scrollButton.classList.add("d-none");
}
function checkScroll() {
    if (window.scrollY === 0) scrollButton.classList.add("d-none");
    else scrollButton.classList.remove("d-none");
}
function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
// ===============================
// SCROLL X DIRECTIONS======================================================
const scrollRightButton = document.querySelector(".scroll-right");
const scrollLeftButton = document.querySelector(".scroll-left");
const sectionCards = document.querySelector(".section__cards");
if (scrollRightButton || scrollLeftButton) {
    scrollRightButton.addEventListener("click", scrollToRight);
    scrollLeftButton.addEventListener("click", scrollToLeft);
    if (sectionCards.scrollLeft === 0) scrollLeftButton.classList.add("d-none");
}
let scrollValue = 100;
function scrollToLeft() {
    sectionCards.scrollBy({
        left: -scrollValue,
        behavior: "smooth"
    });
    scrollRightButton.classList.remove("d-none");
    if (sectionCards.scrollLeft === 0) scrollLeftButton.classList.add("d-none");
}
function scrollToRight() {
    sectionCards.scrollBy({
        left: scrollValue,
        behavior: "smooth"
    });
    scrollLeftButton.classList.remove("d-none");
    if (sectionCards.scrollLeft == sectionCards.scrollWidth - sectionCards.clientWidth) scrollRightButton.classList.add("d-none");
    else scrollRightButton.classList.remove("d-none");
}
// ========================
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ABOUT PAGE ##################
const ourTeamElement = document.querySelector(".team__members");
let promiseUserData = getPromiseData(`https://dummyjson.com/users`);
// console.log(promiseUserData);
let itemUserData = [];
if (ourTeamElement) promiseUserData.then((data)=>{
    itemUserData.push(...data.users);
    // console.log(itemUserData);
    let users = itemUserData.slice(0, 3);
    // console.log(users);
    createOurTeamSection(users);
});
// ===========================
function createOurTeamSection(data) {
    data.forEach((item)=>{
        ourTeamElement.innerHTML += `<figure
    class="col-md-4 col col-12"
    >
    <img src="${item.image}" class="img-fluid mx-auto" alt="person image" />
  <figcaption class="mt-4">
  <h6 class="team__name" > ${item.firstName} ${item.lastName} </h6>
  <p class="team__text text-primary">${item.company.title}</p>
  </figcaption>
  </figure>`;
    });
}
// ============================================================================================================================================
// ========================
const searchInput = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");
const searchXMark = document.querySelector(".search__xmark");
const authorOption = document.getElementById("author");
const showMoreBtn = document.getElementById("show-more");
const errorMessage = document.querySelector(".error-msg");
const imgContainer = document.querySelector(".img-container");
let itemsData = [];
let searchedBy = "author";
// =========================
if (searchBtn || searchXMark) {
    searchBtn.addEventListener("click", addSearchValue);
    searchXMark.addEventListener("click", deleteSearchInput);
}
// =========================
// search for input value author or book title===========================
function addSearchValue() {
    // errorMessage.classList.add("d-none");
    let inputValue = searchInput.value;
    if (authorOption.checked) searchedBy = "author";
    else searchedBy = "title";
    let promiseData = getPromiseData(`https://www.googleapis.com/books/v1/volumes?q=in${searchedBy}:${inputValue}&key=AIzaSyAkKEefa5iChTT8PGGZyMKfk_5Jy6kbu4A`);
    if (inputValue !== "") promiseData.then((data)=>{
        itemsData = data.items;
        if (itemsData != undefined) {
            booksCards.innerHTML = "";
            showMoreBtn.classList.add("d-none");
            createCards();
        } else {
            errorMessage.classList.remove("d-none");
            showMoreBtn.classList.remove("d-none");
        }
    });
}
// =========================
// ADDING BOOKS CARDS=====================================================
const booksCards = document.getElementById("book-cards");
let lastIndex = 8;
if (showMoreBtn) showMoreBtn.addEventListener("click", showMore);
let booksData = specificData(0, 40);
function showMore() {
    booksCards.innerHTML = "";
    lastIndex = lastIndex + 8;
    createCards();
}
// =======================================
allBooks();
function allBooks() {
    booksData.then((data)=>{
        itemsData = [];
        itemsData.push(...data.items);
        createCards();
    });
}
// =========================
// CLEAR SEARCH INPUT=====================================================
function deleteSearchInput() {
    searchInput.value = "";
    booksCards.innerHTML = "";
    errorMessage.classList.add("d-none");
    showMoreBtn.classList.remove("d-none");
    allBooks();
}
// ========================================
function createCards() {
    let showingData = itemsData.slice(0, lastIndex);
    if (showingData.length == 40) showMoreBtn.classList.add("d-none");
    if (booksCards) showingData.forEach((item)=>{
        // =======================
        let price = `EGP${item.saleInfo.listPrice?.amount.toFixed(2)}`;
        if (item.saleInfo.saleability == "NOT_FOR_SALE") price = "Not Available";
        // =======================
        let addDataCards = `<div class="col">
      <div class="card h-100">
      <a class="img-container"
       href="./singleBook.html?productId=${decodeURIComponent(item.id)}
      ">
        <img
          src=${item.volumeInfo.imageLinks?.thumbnail}
          class="card-img-top mx-auto "
          alt="book cover"
        />

        </a>
        <div class="card-body">
          <h5 class="card-title mb-3 "><a class="text-unstyled text-dark" href="./singleBook.html?productId=${decodeURIComponent(item.id)}
          " >${item.volumeInfo.title}</a></h5>
          <h6 class="card-author mb-3">${item.volumeInfo?.authors}</h6>
          <p class="card-text card-price">
            ${price}
          </p>
        </div>
        <div class="card-footer bg-transparent border-0 card__buttons d-flex flex-column ">

              <button type="button" data-id=${item.id} class="add-carts btn btn-primary text-light my-3 p-2">
                <i class="fa-solid fa-cart-arrow-down"></i> Add to cart
              </button>
              <button type="button" data-id=${item.id} class="add-wish btn btn-outline-primary my-3 p-2">
                <i class="fa-solid fa-heart"></i> Add to wish
              </button>

        </div>
      </div>
    </div>`;
        // ========================
        booksCards.innerHTML += addDataCards;
        addToCartBtn();
        addToWishBtn();
    });
}
// ========================================================================================================================================================================
// import { specificData, readFromStorage, deleteTableBtn } from "./main.js";
// ========================
let allData = specificData(0, 40);
// console.log(allData);
let totalPrice = 0;
let price = 0;
if ($("#cart")) allData.then((data)=>{
    const items = readFromStorage("cart");
    // console.log(items[0].id);
    let cartArray = [];
    for(let i = 0; i < items.length; i++){
        const item = data.items.filter((book, index)=>book.id == items[i].id);
        // console.log(item);
        if (item) item[0].count = items[i].count || 1;
        cartArray.push(item[0]);
    // console.log(cartArray);
    }
    $(cartArray).each((i, book)=>{
        let price;
        let dataPrice;
        let totPrice;
        let pound;
        if (book.saleInfo.saleability == "NOT_FOR_SALE") {
            pound = "";
            price = "Not Available";
            totPrice = 0;
            dataPrice = 0;
        } else {
            pound = "EGP";
            price = `EGP${book.saleInfo.listPrice?.amount.toFixed(2)}`;
            totPrice = `${(book.saleInfo.listPrice?.amount * book.count).toFixed(2)}`;
            dataPrice = `${book.saleInfo.listPrice?.amount.toFixed(0)}`;
        }
        // console.log(book.count);
        // =========================================================
        // let singlePrice = book[0].id;
        $(".cart__content").append(`<tr data-id="${book.id}" id="cart-${book.id}" class="cart-products table__products">
        <th  id="cart__closeButton" class="table__deleteIem"  scope="row">
          <button  class="border-0 bg-transparent" >
            <i data-index= ${i} data-id=${book.id}  class="deleteBtn fa-solid fa-circle-xmark fs-2"></i>
          </button>
        </th>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(book.id)}">
            <img src="${book.volumeInfo.imageLinks?.thumbnail}" class="table__img cart-img mx-auto " alt="book cover"/>
          </a>
        </td>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(book.id)}"
            class="text-decoration-none ">${book.volumeInfo.title}
          </a>
          <br/>
          <a
          href="../books.html"
            class="text-decoration-none "
            >${book.volumeInfo?.authors}</a>
        </td>
        <td class="product-price" colspan="1"><span class="cart__singlePrice">${price}</span>
          
        </td>
        <td class="quantity">
          <form>
            <input value=${book.count}  type="number" id="quantity"  name="quantity"
              min="1" data-price=".${dataPrice}"  data-singlePrice="${dataPrice}"
              class="cart__box border rounded border-dark text-dark  fw-bold text-center"
            />
          </form>
        </td>
        <td class="product-totalPric fw-bold"colspan="1"><span>${pound}</span><span class="product-totalPrice fw-bold ${dataPrice}" >${totPrice}</span>
        
        </td>
      </tr>`);
        if (book.saleInfo.saleability !== "NOT_FOR_SALE") totalPrice += Number(book.saleInfo.listPrice?.amount.toFixed(2));
    });
    filterNotForSale();
    deleteTableBtn("cart");
    calculateTotalPrice();
    updatePrice();
});
// ===============================================================
allData.then((data)=>{
    const itemsWish = readFromStorage("wish");
    let wishArray = [];
    for(let i = 0; i < itemsWish.length; i++){
        const item = data.items.filter((book, index)=>book.id == itemsWish[i].id);
        wishArray.push(item[0]);
    }
    // console.log(wishArray);
    let bookWishArray = [
        ...new Set(wishArray)
    ];
    console.log(bookWishArray);
    $(bookWishArray).each((i, book)=>{
        if (book.saleInfo.saleability == "NOT_FOR_SALE") price = "Not Available";
        else price = `EGP${book.saleInfo.listPrice?.amount.toFixed(2)}`;
        // =========================================================
        // let singlePrice = book[0].id;
        $(".wish__content").append(`<tr id="wish-${book.id}" class="wish-products table__products">
        <th  id="wish__closeButton" class="table__deleteIem"  scope="row">
          <button  class="border-0 bg-transparent" >
            <i data-index= ${i} data-id=${book.id}  class="deleteBtn fa-solid fa-circle-xmark fs-2"></i>
          </button>
        </th>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(book.id)}">
            <img src="${book.volumeInfo.imageLinks?.thumbnail}" class="table__img wish-img mx-auto " alt="book cover"/>
          </a>
        </td>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(book.id)}"
            class="text-decoration-none ">${book.volumeInfo.title}
          </a>
          <br/>
          <a
          href="../books.html"
            class="text-decoration-none "
            >${book.volumeInfo?.authors}</a>
        </td>
        <td class="product-price fw-bold" colspan="1"><span class="wish__singlePrice">${price}</span>
        </td>
        <td class="wish-btn fw-bold" colspan="1">
        <button class="add-carts btn btn-primary text-light" data-id=${book.id}>
              <i class="fa-solid fa-cart-plus"></i>
        </button>
        </td>
      </tr>`);
    });
    deleteTableBtn("wish");
    addToCartBtn();
});
// ===============================================================
function calculateTotalPrice() {
    // console.log(totalPrice);
    $(".sub-totalPrice__price").html("EGP" + totalPrice.toFixed(2));
}
// ===========================
// Update price by quantity============================
function updatePrice() {
    $(".cart__box").on("change", function(e) {
        let coun = $($(this).attr("data-price"));
        let singlePrice = $(this).attr("data-singlePrice");
        let count = Number($(this).val());
        let price = singlePrice * count;
        $(coun).html(price.toFixed(2));
        // ===========
        totalCartPrice();
    });
}
// ========================
// total price update===================================
function totalCartPrice() {
    let total = 0;
    let allPrices = $(".product-totalPrice");
    allPrices.each((i, el)=>{
        total += Number($(el).html());
    });
    $(".sub-totalPrice__price").html("EGP" + total.toFixed(2));
}
// ================================
function filterNotForSale() {
    $('input[data-singleprice="0"]').each(function() {
        $(this).prop("disabled", true).attr("min", 0).val(0);
    });
}
// ========================================================================================================================================================================
// import {
//   getPromiseData,
//   promiseToCard,
//   addToCartBtn,
//   addToWishBtn,
//   urlParam,
//   readFromStorage,
//   writeToStorage,
// } from "./main.js";
// console.log(urlParam("productId"));
// ========================
getSingleBook(urlParam("productId"));
const bookNameBreadcrumb = document.getElementById("book-name");
const bookImg = document.querySelector(".book__img");
const bookNameHeader = document.querySelector(".book__name");
const bookIsbn = document.querySelector(".book__isbn");
const bookIsbn13 = document.querySelector(".book__isbn13");
const bookAuthorHeader = document.querySelector(".book__author");
const bookPrice = document.querySelector(".book__price");
const bookAvailability = document.querySelector(".book__availability");
const bookDescription = document.querySelector(".book__description-text");
const bookDetails = document.querySelector(".information__details");
const bookButtons = document.querySelector(".book__buttons");
// console.log(bookButtons);
// getPromiseData(0, 20);
function getSingleBook(bookID) {
    getPromiseData(`https://www.googleapis.com/books/v1/volumes/${bookID}`).then((data)=>{
        let item = data;
        let price = `EGP${item?.saleInfo?.listPrice?.amount.toFixed(2)}`;
        if (item.saleInfo?.saleability == "NOT_FOR_SALE") price = "NOT AVAILABLE";
        if (bookNameBreadcrumb || bookImg || bookIsbn || bookNameHeader || bookIsbn13 || bookAuthorHeader || bookPrice || bookAvailability) {
            bookNameBreadcrumb.innerText = item.volumeInfo.title;
            // ===================
            bookImg.src = item.volumeInfo.imageLinks.small;
            // ===================
            let typeIsbn = item.volumeInfo.industryIdentifiers;
            typeIsbn.forEach((ele)=>{
                // ===================
                bookIsbn.innerHTML += `<p>${ele.type.toUpperCase()}:<span class="book__isbn ms-2 fw-bold">${ele.identifier}</span></p>`;
            });
            // ===================
            bookPrice.innerText = `${price}`;
            // ===================
            bookNameHeader.innerText = item.volumeInfo.title;
            // ===================
            bookAuthorHeader.innerText = item.volumeInfo.authors;
            // ===================
            if (item.saleInfo.saleability !== "NOT_FOR_SALE") {
                bookAvailability.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> Available`;
                bookAvailability.classList.add("text-success");
            } else {
                bookAvailability.innerHTML = `<i class="fa-solid fa-circle-xmark text-danger "></i> Not Available`;
                bookAvailability.classList.add("text-danger");
            }
        }
        // onclick="addToCart(${item.id})"
        // ===================
        if (bookButtons) bookButtons.innerHTML = `<button
        type="button" data-id=${item.id}
        class="add-carts add-cart-singleProduct btn btn-primary text-light my-3"
        >
        <i class="fa-solid fa-cart-arrow-down"></i> Add to cart
        </button>
        <button
        type="button" data-id=${item.id}
        class="add-wish btn btn-outline-primary my-3"
        >
        <i class="fa-solid fa-heart"></i> Add to wish
        </button>`;
        // ===================
        if (bookDescription || bookDetails) bookDescription.innerHTML = item.volumeInfo.description;
        // ===================
        bookDetails.innerHTML = `
       <p class="text-capitalize information__text text-secondary">
        price: <span class="information__price fw-bold">${price}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        publisher:
        <span class="information__publisher fw-bold">${item.volumeInfo?.publisher}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        publisher date:
        <span class="information__date fw-bold">${item.volumeInfo?.publishedDate}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        pages: <span class="information__pages fw-bold">${item.volumeInfo?.pageCount}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        language: <span class="information__language fw-bold">${item.volumeInfo?.language}</span>
        </p>`;
        // }
        // ===================
        // console.log(item.volumeInfo.imageLinks.large);
        // console.log(item.id);
        addToCartBtn(item);
        addToWishBtn(item);
    });
// ddd();
}
// =========================
// ADDING BESTSELLERS CARDS=====================================================
let randomNumber = Math.floor(Math.random() * 34);
const relatedCards = document.getElementById("related-cards");
let relatedData = specificData(randomNumber, randomNumber + 5);
promiseToCard(relatedData, relatedCards); // ========================================

},{}]},["gEwwu","1SICI"], "1SICI", "parcelRequire94c2")

//# sourceMappingURL=index.18dbc454.js.map
