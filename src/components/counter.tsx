import { component$, useStore } from "@builder.io/qwik";

export const Counter = component$(() => {
  const state = useStore({
    count: 0,
  });
  const countVar = 11;

  return (
    <div key={state.count}> {/* note `key` attribute */}
      <h1>{$localize`Counter Example`} (with key attribute)</h1> {/* translates correctly */}
      <div>{$localize`count: ${countVar}`} (without state)</div> {/* translates correctly */}
      <div>
        {$localize`count: ${state.count}`}: {state.count} {/* doesn't translate on first render */}
      </div>
      <div>{state.count > 1 ? `singular` : `plural`} (normal string)</div> {/* translated correctly */}
      <div>
        {state.count > 1 ? $localize`singular` : $localize`plural`} ($localize string) {/* doesn't translate on first render */}
      </div>
      <button onClick$={() => state.count++}>{$localize`increment`}</button> {/* translates correctly */}
    </div>
  );
});

export const CounterWithoutKey = component$(() => {
  const state = useStore({
    count: 0,
  });
  const countVar = 11;

  return (
    <div>
      <h1>{$localize`Counter Example`} (without key attribute)</h1> {/* translates correctly */}
      <div>{$localize`count: ${countVar}`} (without state)</div> {/* translates correctly */}
      <div>
        {$localize`count: ${state.count}`}: {state.count} {/* doesn't translate or update on state change */}
      </div>
      <div>{state.count > 1 ? `singular` : `plural`} (normal string)</div> {/* translated correctly */}
      <div>
        {state.count > 1 ? $localize`singular` : $localize`plural`} ($localize string) {/* doesn't translate or update on state change */}
      </div>
      <button onClick$={() => state.count++}>{$localize`increment`}</button> {/* translates correctly */}
    </div>
  );
});
