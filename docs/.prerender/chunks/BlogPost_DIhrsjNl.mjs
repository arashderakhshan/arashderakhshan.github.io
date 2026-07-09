import { T as createComponent, _ as renderHead, f as renderTemplate, l as renderSlot, v as addAttribute, w as createAstro } from "./server_BB1eRw9J.mjs";
import "./global_CEgpfgbJ.mjs";
//#region src/layouts/BlogPost.astro
createAstro("https://arashderakhshan.github.io");
var $$BlogPost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPost;
	const { title = "Arash Derakhshan", description = "Essays and notes by Arash Derakhshan.", lang = "en", dir = "ltr" } = Astro.props;
	return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(dir, "dir")}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead($$result)}</head><body><main${addAttribute(dir === "rtl" ? "container rtl" : "container", "class")}>${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "C:/Users/Derakhshan/Documents/GitHub/arashderakhshan.github.io/src/layouts/BlogPost.astro", void 0);
//#endregion
export { $$BlogPost as t };
