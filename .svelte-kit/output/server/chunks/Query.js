import { notifyManager, parseQueryArgs, QueryObserver } from "@tanstack/query-core";
import { r as readable, d as derived } from "./index.js";
import { u as useQueryClient, i as isRestoring } from "./_layout.js";
import { c as create_ssr_component, a as subscribe } from "./ssr.js";
function createBaseQuery(options, Observer) {
  const queryClient = useQueryClient();
  const defaultedOptions = queryClient.defaultQueryOptions(options);
  defaultedOptions._optimisticResults = "optimistic";
  let observer = new Observer(queryClient, defaultedOptions);
  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
  }
  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
  }
  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
  }
  readable(observer).subscribe(($observer) => {
    observer = $observer;
    observer.setOptions(defaultedOptions, { listeners: false });
  });
  const result = readable(observer.getCurrentResult(), (set) => {
    return observer.subscribe(notifyManager.batchCalls(set));
  });
  const { subscribe: subscribe2 } = derived(result, ($result) => {
    $result = observer.getOptimisticResult(defaultedOptions);
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult($result) : $result;
  });
  return { subscribe: subscribe2 };
}
function createQuery(arg1, arg2, arg3) {
  const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  const result = createBaseQuery(parsedOptions, QueryObserver);
  return result;
}
const Query = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isRestoring, $$unsubscribe_isRestoring;
  let $query, $$unsubscribe_query;
  $$unsubscribe_isRestoring = subscribe(isRestoring, (value) => $isRestoring = value);
  let { query } = $$props;
  $$unsubscribe_query = subscribe(query, (value) => $query = value);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  $$unsubscribe_isRestoring();
  $$unsubscribe_query();
  return `${!$isRestoring ? `${$query.isSuccess ? `${slots.default ? slots.default({ data: $query.data }) : ``}` : `${$query.isError ? `${slots.error ? slots.error({}) : ``}` : ``}`}` : ``}`;
});
export {
  Query as Q,
  createQuery as c
};
