import { c as create_ssr_component, e as escape, b as add_attribute, f as each, v as validate_component } from "./ssr.js";
const JsonLd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValid;
  let json;
  let { output = "head" } = $$props;
  let { schema = void 0 } = $$props;
  const createSchema = (schema2) => {
    const addContext = (context) => ({
      "@context": "https://schema.org",
      ...context
    });
    return Array.isArray(schema2) ? schema2.map((context) => addContext(context)) : addContext(schema2);
  };
  if ($$props.output === void 0 && $$bindings.output && output !== void 0)
    $$bindings.output(output);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  isValid = schema && typeof schema === "object";
  json = `${'<script type="application/ld+json">'}${JSON.stringify(createSchema(schema))}${"<\/script>"}`;
  return `${$$result.head += `<!-- HEAD_svelte-1rghca7_START -->${isValid && output === "head" ? `<!-- HTML_TAG_START -->${json}<!-- HTML_TAG_END -->` : ``}<!-- HEAD_svelte-1rghca7_END -->`, ""} ${isValid && output === "body" ? `<!-- HTML_TAG_START -->${json}<!-- HTML_TAG_END -->` : ``}`;
});
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let { title: _title = "" } = $$props;
  let { description = "Continuing the legacy of Vanced." } = $$props;
  let { schemas } = $$props;
  if ($$props.title === void 0 && $$bindings.title && _title !== void 0)
    $$bindings.title(_title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.schemas === void 0 && $$bindings.schemas && schemas !== void 0)
    $$bindings.schemas(schemas);
  title = _title === "" ? "ReVanced" : `ReVanced - ${_title}`;
  return `${$$result.head += `<!-- HEAD_svelte-1oxw5ir_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="theme-color" content="#9FD5FF"><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}>${schemas ? `${each(schemas, (schema) => {
    return `${validate_component(JsonLd, "JsonLd").$$render($$result, { schema }, {}, {})}`;
  })}` : ``}<!-- HEAD_svelte-1oxw5ir_END -->`, ""}`;
});
export {
  Head as H
};
