import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.f25fdf20.mjs';
import { $ as $$Icon, a as $$BaseLayout, b as $$Hero, c as $$Pill } from './404.astro.21a4499e.mjs';
/* empty css                           *//* empty css                               */
// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/aws-cpp.md": () => import('../aws-cpp.8a6905a0.mjs'),"/src/content/work/peh/blackpearl.md": () => import('../blackpearl.c046d62e.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"aws-cpp":"/src/content/work/aws-cpp.md","peh/blackpearl":"/src/content/work/peh/blackpearl.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/aws-cpp.md": () => import('../aws-cpp.cb6d28b2.mjs'),"/src/content/work/peh/blackpearl.md": () => import('../blackpearl.075ca12e.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="astro-BALV45LP">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/darth/Desktop/portfolio-website/src/components/CallToAction.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead()}<aside class="astro-RCDZUQ3A">
  <div class="astro-RCDZUQ3A">
    <h2 class="astro-RCDZUQ3A">Let's connect and make it happen!</h2>
    <p class="astro-RCDZUQ3A">I'm ready and excited to see what you have in store for me.</p>
  </div>

  ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:darthassan@skiff.com", "class": "astro-RCDZUQ3A" }, { "default": ($$result2) => renderTemplate`
    Contact me
    ${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "class": "astro-RCDZUQ3A" })}
  ` })}
</aside>`;
}, "/Users/darth/Desktop/portfolio-website/src/components/ContactCTA.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const journey = await getCollection("work");
  return journey.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "class": "astro-IGFJMSB2" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="stack gap-20 astro-IGFJMSB2">
    <div class="stack gap-15 astro-IGFJMSB2">
      <header class="astro-IGFJMSB2">
        <div class="wrapper stack gap-2 astro-IGFJMSB2">
          <a class="back-link astro-IGFJMSB2" href="/journey/">${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "class": "astro-IGFJMSB2" })} Journey</a>
          ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "class": "astro-IGFJMSB2" }, { "default": ($$result3) => renderTemplate`
            <div class="details astro-IGFJMSB2">
              <div class="tags astro-IGFJMSB2">
                ${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-IGFJMSB2" }, { "default": ($$result4) => renderTemplate`${t}` })}`)}
              </div>
              <p class="description astro-IGFJMSB2">${entry.data.description}</p>
            </div>
          ` })}
        </div>
      </header>
      <main class="wrapper astro-IGFJMSB2">
        <div class="stack gap-10 content astro-IGFJMSB2">
          ${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} class="astro-IGFJMSB2">`}
          <div class="content astro-IGFJMSB2">
            ${renderComponent($$result2, "Content", Content, { "class": "astro-IGFJMSB2" })}
          </div>
        </div>
      </main>
    </div>
    ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-IGFJMSB2" })}
  </div>
` })}`;
}, "/Users/darth/Desktop/portfolio-website/src/pages/journey/[...slug].astro", void 0);

const $$file = "/Users/darth/Desktop/portfolio-website/src/pages/journey/[...slug].astro";
const $$url = "/journey/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactCTA as $, ____slug_ as _, getCollection as g };
