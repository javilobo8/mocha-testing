import { setTimeout } from 'node:timers/promises';

export function add(a: number, b: number): number {
  return a + b;
}

export async function delay(ms: number): Promise<void> {
  await setTimeout(ms);
}