import { component$, useStore } from "@builder.io/qwik";

export const Counter = component$(() => {
  const state = useStore({
    count: 0,
  });
  return (
    <div key={state.count}>
      <h1>{$localize`Counter Example`} (with key attribute)</h1>
      <div>
        {$localize`count: ${state.count}`}: {state.count}
      </div>
      <div>{state.count > 1 ? `singular` : `plural`} (normal string)</div>
      <div>
        {state.count > 1 ? $localize`singular` : $localize`plural`} ($localize
        string)
      </div>
      <button onClick$={() => state.count++}>{$localize`increment`}</button>
    </div>
  );
});

export const CounterWithoutKey = component$(() => {
  const state = useStore({
    count: 0,
  });
  return (
    <div>
      <h1>{$localize`Counter Example`} (without key attribute)</h1>
      <div>
        {$localize`count: ${state.count}`}: {state.count}
      </div>
      <div>{state.count > 1 ? `singular` : `plural`} (normal string)</div>
      <div>
        {state.count > 1 ? $localize`singular` : $localize`plural`} ($localize
        string)
      </div>
      <button onClick$={() => state.count++}>{$localize`increment`}</button>
    </div>
  );
});
