import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createComponent, f as renderTemplate, g as maybeRenderHead, o as renderComponent, v as addAttribute } from "./server_BB1eRw9J.mjs";
import { t as getCollection } from "./_astro_content_BiKg38K5.mjs";
import "./global_CEgpfgbJ.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DnsbrifC.mjs";
//#region src/pages/fa/index.astro
var fa_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => "/fa"
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = await getCollection("essays", ({ id, data }) => {
		return id.startsWith("fa/") && data.lang === "fa";
	});
	posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "مقاله‌های فارسی | آرش درخشان",
		"description": "مقاله‌ها و یادداشت‌های فارسی آرش درخشان.",
		"lang": "fa",
		"dir": "rtl"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<p><a href="/">خانه ←</a></p><h1>مقاله‌های فارسی</h1><ul>${posts.map((post) => renderTemplate`<li><a${addAttribute(`/fa/essays/${post.id.replace("fa/", "")}/`, "href")}>${post.data.title}</a>${" "}<small>${post.data.pubDate.toLocaleDateString("fa-IR")}</small></li>`)}</ul>` })}`;
}, "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/fa/index.astro", void 0);
var $$file = "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/fa/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/fa/index@_@astro
var page = () => fa_exports;
//#endregion
export { page };
