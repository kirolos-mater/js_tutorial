"use strict";
const base = "%c",
    colorStr = "color: ",
    bgStr = "background-color: ",
    colors = {
        A: "#FFD700;",
        B: "#0000FF;",
        C: "#00FFFF;",
        G: "#00FF00;",
        K: "#000000;",
        M: "#FF00FF;",
        N: "#A52A2A;",
        O: "#FFA500;",
        P: "#FFC0CB;",
        R: "#FF0000;",
        U: "#800080;",
        W: "#FFFFFF;",
        Y: "#FFFF00;"
    },
    styles = {
        b: "font-weight: bold;",
        u: "text-decoration: underline;",
        t: "text-decoration: line-through;",
        i: "font-style: italic;",
        s: "font-size: 200%;"
    },
    c = {
        a: (...a) => console.assert(...a),
        cl: () => console.clear(),
        c: a => a ? console.count(a) : console.count(),
        d: (a, ...b) => console.debug(a, ...b),
        dir: a => console.dir(a),
        dx: a => console.dirxml(a),
        e: (a, ...b) => console.error(a, ...b),
        g: () => console.group(),
        gc: () => console.groupCollapsed(),
        ge: () => console.groupEnd(),
        i: (a, ...b) => console.info(a, ...b),
        l: (a, ...b) => console.log(a, ...b),
        p: a => a ? console.profile(a) : console.profile(),
        pe: () => console.profileEnd(),
        tb: a => console.table(a),
        t: a => a ? console.time(a) : console.time(),
        te: a => a ? console.timeEnd(a) : console.timeEnd(),
        ts: a => a ? console.timeStamp(a) : console.timeStamp(),
        tr: () => console.trace(),
        w: (a, ...b) => console.warn(a, ...b),
        j: (a, b = 4) => console.log(JSON.stringify(a, null, b))
    };
for (const [a, b] of Object.entries(styles)) c[`l${a}`] = (d, ...f) => console.log(base + d, b, ...f);
for (const [a, b] of Object.entries(colors)) c[`l${a}`] = (d, ...f) => console.log(base + d, colorStr + b, ...f), c[`lb${a}`] = (d, ...f) => console.log(base + d, colorStr + b + styles.b, ...f), c[`lu${a}`] = (d, ...f) => console.log(base + d, colorStr + b + styles.b + styles.u, ...f), c[`lt${a}`] = (d, ...f) => console.log(base + d, colorStr + b + styles.b + styles.t, ...f), c[`li${a}`] = (d, ...f) => console.log(base + d, colorStr + b + styles.b + styles.i, ...f), c[`ls${a}`] = (d, ...f) => console.log(base + d, colorStr + b + styles.b + styles.s, ...f);
for (const [a, b] of Object.entries(colors)) {
    let d = bgStr + b + styles.b;
    ("B" === a || "K" === a || "N" === a || "U" === a) && (d += colorStr + colors.W), c[`l${a}BG`] = (f, ...g) => console.log(base + f, d, ...g), c[`ls${a}BG`] = (f, ...g) => console.log(base + f, d + styles.s, ...g)
}
const p = {
    m: a => performance.mark(a),
    n: () => performance.now(),
    t: performance.timing
};