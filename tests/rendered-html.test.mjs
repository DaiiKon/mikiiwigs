import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the MikiiWigs landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]+lang="es"/i);
  assert.match(html, /<title>MikiiWigs \| Estilado de pelucas en Mérida<\/title>/i);
  assert.match(html, /Tu personaje\./);
  assert.match(html, /Tu estilo\./);
  assert.match(html, /Cotiza por Instagram/);
  assert.match(html, /Mérida, Yucatán/);
  assert.match(html, /instagram\.com\/mikiiwigs/);
  assert.match(html, /href="#servicios"/);
  assert.match(html, /href="#trabajos"/);
  assert.match(html, /href="#proceso"/);
});

test("ships the portfolio and social preview assets", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /const portfolio = \[/);
  assert.match(page, /\/portfolio\/pink-waves\.jpeg/);
  assert.match(page, /\/portfolio\/teal-ears\.jpeg/);
  assert.match(page, /alt: "Peluca/);

  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/portfolio/pink-waves.jpeg", import.meta.url)),
    access(new URL("../public/portfolio/blonde-long.jpeg", import.meta.url)),
    access(new URL("../public/portfolio/teal-ears.jpeg", import.meta.url)),
  ]);
});
