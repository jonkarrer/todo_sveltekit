import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const toggleFormComponent: Writable<string> = writable('closed');

export function setFormType(formType: string) {
	toggleFormComponent.update(() => formType);
}
