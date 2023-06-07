import { component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const state = useStore({
    count: 0,
  });
  console.log(state.count);
  return (
    <>
      <h1>{$localize`Counter Example`}</h1>
      <div>
        {$localize`count: ${state.count}`}: {state.count}
      </div>
      {state.count > 1 ? "true" : "false"}
      <div>{state.count > 1 ? $localize`singular` : $localize`plural`}</div>
      <button onClick$={() => state.count++}>{$localize`increment`}</button>
    </>
  );
});

export const head: DocumentHead = () => {
  return {
    title: $localize`Counter Example`,
  };
};
