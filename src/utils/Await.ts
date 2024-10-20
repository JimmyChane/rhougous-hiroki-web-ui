import { nextTick } from 'vue';

export async function wait(timeMs = 0) {
  await new Promise((r) => setTimeout(r, timeMs));
}
export async function waitFrame() {
  await new Promise((r) => requestAnimationFrame(r));
  await new Promise((r) => nextTick(() => r(undefined)));
  await wait();
}
