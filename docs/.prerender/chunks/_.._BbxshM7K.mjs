import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createComponent, f as renderTemplate, g as maybeRenderHead, o as renderComponent, w as createAstro } from "./server_BB1eRw9J.mjs";
import { n as renderEntry, t as getCollection } from "./_astro_content_BiKg38K5.mjs";
import "./global_CEgpfgbJ.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DnsbrifC.mjs";
//#region src/pages/fa/essays/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://arashderakhshan.github.io");
async function getStaticPaths() {
	return (await getCollection("essays", ({ id, data }) => {
		return id.startsWith("fa/") && data.lang === "fa";
	})).map((post) => ({
		params: { slug: post.id.replace("fa/", "") },
		props: { post }
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { post } = Astro.props;
	const { Content } = await renderEntry(post);
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": `${post.data.title} | آرش درخشان`,
		"description": post.data.description,
		"lang": "fa",
		"dir": "rtl"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<p><a href="/fa/">بازگشت به مقاله‌های فارسی ←</a></p><h1>${post.data.title}</h1><p class="date"><em>${post.data.pubDate.toLocaleDateString("fa-IR")}</em></p>${renderComponent($$result, "Content", Content, {})}` })}`;
}, "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/fa/essays/[...slug].astro", void 0);
var $$file = "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/fa/essays/[...slug].astro";
var $$url = "/fa/essays/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/fa/essays/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
