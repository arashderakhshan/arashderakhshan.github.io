import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createComponent, f as renderTemplate, g as maybeRenderHead, o as renderComponent } from "./server_BB1eRw9J.mjs";
import "./global_CEgpfgbJ.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DnsbrifC.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Arash Derakhshan",
		"description": "Essays and notes by Arash Derakhshan."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Arash Derakhshan</h1><p>Essays, notes, and ideas on business, growth, discipline, analytics, and personal operating systems.</p><hr><h2>Languages</h2><ul><li><a href="/en/">English Essays</a></li><li><a href="/fa/">مقاله‌های فارسی</a></li></ul>` })}`;
}, "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/index.astro", void 0);
var $$file = "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
