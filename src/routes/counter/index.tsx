import { component$ } from "@builder.io/qwik";
import { Counter, CounterWithoutKey } from "~/components/counter";

export default component$(() => (
  <div>
    <Counter />
    <hr />
    <CounterWithoutKey />
  </div>
));
