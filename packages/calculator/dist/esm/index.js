import $7lerj$turboxecepadd from "@turbo-xecep/add";
import $7lerj$turboxecepsub from "@turbo-xecep/sub";



function $c38a778fa493a840$var$calculator(a, b, o) {
    const operation = {
        add: $7lerj$turboxecepadd,
        sub: $7lerj$turboxecepsub
    }[o];
    return operation(a, b);
}
var $c38a778fa493a840$export$2e2bcd8739ae039 = $c38a778fa493a840$var$calculator;


export {$c38a778fa493a840$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.js.map
