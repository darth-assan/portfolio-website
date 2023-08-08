import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.f25fdf20.mjs';
import { g as getCollection, $ as $$ContactCTA } from './_...slug_.astro.bc9ebb48.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.21a4499e.mjs';
/* empty css                             */import { $ as $$Grid } from './index.astro.ccb5f5f9.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                           *//* empty css                               *//* empty css                         *//* empty css                           *//* empty css                         *//* empty css                         *//* empty css                           *//* empty css                           */
const $$Astro$1 = createAstro();
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card astro-LGKM4U2A"${addAttribute(`/journey/${slug}`, "href")}>
  <span class="title astro-LGKM4U2A">${data.title}</span>
  <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`;
}, "/Users/darth/Desktop/portfolio-website/src/components/PortfolioPreview.astro", void 0);

const $$Astro = createAstro();
const $$Journey = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Journey;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Journey | David Arthur [Assan]", "description": "See my recent learning adventures" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="stack gap-20">
    <main class="wrapper stack gap-8">
      ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Journey", "tagline": "See my recent learning adventures", "align": "start" })}
      ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>
              ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })}
            </li>`)}` })}
    </main>
    ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}
  </div>
` })}`;
}, "/Users/darth/Desktop/portfolio-website/src/pages/journey.astro", void 0);

const $$file = "/Users/darth/Desktop/portfolio-website/src/pages/journey.astro";
const $$url = "/journey";

export { $$Journey as default, $$file as file, $$url as url };
