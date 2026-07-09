import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { T as createComponent, f as renderTemplate, o as renderComponent, w as createAstro } from "./server_BB1eRw9J.mjs";
import { n as renderEntry, t as getCollection } from "./_astro_content_BiKg38K5.mjs";
import "./global_CEgpfgbJ.mjs";
import { t as $$BlogPost } from "./BlogPost_DIhrsjNl.mjs";
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://arashderakhshan.github.io");
async function getStaticPaths() {
	return (await getCollection("blog")).map((post) => ({
		params: { slug: post.id },
		props: post
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const post = Astro.props;
	const { Content } = await renderEntry(post);
	return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}`;
}, "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/blog/[...slug].astro", void 0);
var $$file = "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
