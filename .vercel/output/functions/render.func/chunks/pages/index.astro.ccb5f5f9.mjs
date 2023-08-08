import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.f25fdf20.mjs';
import { g as getCollection, $ as $$ContactCTA } from './_...slug_.astro.bc9ebb48.mjs';
import { $ as $$Icon, b as $$Hero, c as $$Pill, a as $$BaseLayout } from './404.astro.21a4499e.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$2 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/Users/darth/Desktop/portfolio-website/src/components/Grid.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="box skills astro-AB4IHPZS">
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
    <h2 class="astro-AB4IHPZS">Get my hands dirty</h2>
    <p class="astro-AB4IHPZS">
      I am more than ready to roll up my sleeves and dive headfirst into the
      world of cybersecurity.
    </p>
  </div>
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${renderComponent($$result, "Icon", $$Icon, { "icon": "code", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
    <h2 class="astro-AB4IHPZS">Ready to learn</h2>
    <p class="astro-AB4IHPZS">My desire to learn and excel in cybersecurity is unmatched.</p>
  </div>
  <div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
    ${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
    <h2 class="astro-AB4IHPZS">Driven</h2>
    <p class="astro-AB4IHPZS">
      I am fueled by an insatiable drive to stay ahead of the curve in
      cybersecurity.
    </p>
  </div>
</section>`;
}, "/Users/darth/Desktop/portfolio-website/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
    <div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
      <header class="hero astro-J7PV25F6">
        ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, my name is David Arthur", "tagline": "I am an eager and driven cybersecurity enthusiast who is currently based in Ghana.", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
          <a href="about" class="roles astro-J7PV25F6">
            ${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.33em", "class": "astro-J7PV25F6" })}Learn more` })}
          </a>
        ` })}

        <img alt="Arthur David smiling in an African shirt and tortoise shell glasses" width="480" height="620" src="https://res.cloudinary.com/drup8mw79/image/upload/v1676856460/darthassan/posts/me_ziz1zf.jpg" class="astro-J7PV25F6">
      </header>

      ${renderComponent($$result2, "Skills", $$Skills, { "class": "astro-J7PV25F6" })}
    </div>

    <main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
      <!-- <section class="section with-background with-cta">
        <header class="section-header stack gap-2 lg:gap-4">
          <h3>Learning Journey</h3>
          <p>Take a look at what I have been up to.</p>
        </header>

        <div class="gallery">
          <Grid variant="offset">
            {
              projects.map((project) => (
                <li>
                  <PortfolioPreview project={project} />
                </li>
              ))
            }
          </Grid>
        </div>

        <div class="cta">
          <CallToAction href="/journey/">
            View All
            <Icon icon="arrow-right" size="1.2em" />
          </CallToAction>
        </div>
      </section> -->

      <section class="section with-background bg-variant astro-J7PV25F6">
        <header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
          <h3 class="astro-J7PV25F6">My Crib</h3>
          <p class="astro-J7PV25F6">
            Take a look below at some places I send time horning my
            Cybersecurity skills
          </p>
        </header>

        <div class="gallery astro-J7PV25F6">
          ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${[
    "TryHackMe",
    "PicoCTF",
    "TCM Academy",
    "INE (eJPTv2)",
    "daily.dev"
  ].map((brand) => renderTemplate`<li class="mention-card astro-J7PV25F6">
                  <p class="astro-J7PV25F6">${brand}</p>
                </li>`)}` })}
        </div>
      </section>
    </main>

    ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })}
  </div>
` })}`;
}, "/Users/darth/Desktop/portfolio-website/src/pages/index.astro", void 0);

const $$file = "/Users/darth/Desktop/portfolio-website/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, index as i };
