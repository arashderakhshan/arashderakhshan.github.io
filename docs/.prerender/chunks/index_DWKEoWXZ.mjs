import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createComponent, f as renderTemplate, g as maybeRenderHead, o as renderComponent, v as addAttribute } from "./server_BB1eRw9J.mjs";
import { t as getCollection } from "./_astro_content_BiKg38K5.mjs";
import "./global_CEgpfgbJ.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DnsbrifC.mjs";
//#region src/pages/en/index.astro
var en_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => "/en"
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = await getCollection("essays", ({ id, data }) => {
		return id.startsWith("en/") && data.lang === "en";
	});
	posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "English Essays | Arash Derakhshan",
		"description": "English essays by Arash Derakhshan.",
		"lang": "en",
		"dir": "ltr"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<p><a href="/">← Home</a></p><h1>English Essays</h1><ul>${posts.map((post) => renderTemplate`<li><a${addAttribute(`/en/essays/${post.id.replace("en/", "")}/`, "href")}>${post.data.title}</a>${" "}<small>${post.data.pubDate.toLocaleDateString("en-US")}</small></li>`)}</ul>` })}`;
}, "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/en/index.astro", void 0);
var $$file = "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/en/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/en/index@_@astro
var page = () => en_exports;
//#endregion
export { page };
