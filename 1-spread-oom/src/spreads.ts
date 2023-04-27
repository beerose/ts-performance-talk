// A real-world version of this example crashed the compiler in my 2nd job.
// https://github.com/microsoft/TypeScript/issues/34599
function parseWithSpread(config: Config) {
  return {
    ...(config.a && { a: config.a.toString() }),
    ...(config.b && { b: config.b.toString() }),
    ...(config.c && { c: config.c.toString() }),
    ...(config.d && { d: config.d.toString() }),
    ...(config.e && { e: config.e.toString() }),
    ...(config.f && { f: config.f.toString() }),
    ...(config.g && { g: config.g.toString() }),
    ...(config.h && { h: config.h.toString() }),
    ...(config.i && { i: config.i.toString() }),
    ...(config.j && { j: config.j.toString() }),
    ...(config.k && { k: config.k.toString() }),
    ...(config.l && { l: config.l.toString() }),
    ...(config.m && { m: config.m.toString() }),
    ...(config.n && { n: config.n.toString() }),
    ...(config.o && { o: config.o.toString() }),
    ...(config.p && { p: config.p.toString() }),
    ...(config.q && { q: config.q.toString() }),
    ...(config.r && { r: config.r.toString() }),
    ...(config.s && { s: config.s.toString() }),
    ...(config.t && { t: config.t.toString() }),
    ...(config.u && { u: config.u.toString() }),
    ...(config.v && { v: config.v.toString() }),
    ...(config.w && { w: config.w.toString() }),
    ...(config.x && { x: config.x.toString() }),
    ...(config.y && { y: config.y.toString() }),
    ...(config.z && { z: config.z.toString() }),
  };
}

const parsed = parseWithSpread({ a: 1, b: 2, z: 26 });
//    ^?

interface Config {
  readonly a?: number;
  readonly b?: number;
  readonly c?: number;
  readonly d?: number;
  readonly e?: number;
  readonly f?: number;
  readonly g?: number;
  readonly h?: number;
  readonly i?: number;
  readonly j?: number;
  readonly k?: number;
  readonly l?: number;
  readonly m?: number;
  readonly n?: number;
  readonly o?: number;
  readonly p?: number;
  readonly q?: number;
  readonly r?: number;
  readonly s?: number;
  readonly t?: number;
  readonly u?: number;
  readonly v?: number;
  readonly w?: number;
  readonly x?: number;
  readonly y?: number;
  readonly z?: number;
}

export {};
