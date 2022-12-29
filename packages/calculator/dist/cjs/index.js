var $eVuXh$turboxecepadd = require("@turbo-xecep/add");
var $eVuXh$turboxecepsub = require("@turbo-xecep/sub");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $c38bf3b1bf3718d4$export$2e2bcd8739ae039);


function $c38bf3b1bf3718d4$var$calculator(a, b, o) {
    const operation = {
        add: ($parcel$interopDefault($eVuXh$turboxecepadd)),
        sub: ($parcel$interopDefault($eVuXh$turboxecepsub))
    }[o];
    return operation(a, b);
}
var $c38bf3b1bf3718d4$export$2e2bcd8739ae039 = $c38bf3b1bf3718d4$var$calculator;


//# sourceMappingURL=index.js.map
