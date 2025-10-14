export const $ = (sel, ctx = document) => ctx.querySelector(sel);
export const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

export async function apiHello() {
  const res = await fetch('/api/hello');
  return res.json();
}

export async function apiHi() {
  const res = await fetch('/api/hi');
  return res.json();
}
