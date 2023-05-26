import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment' 

const storedModalMode = browser
	? JSON.parse(localStorage.getItem('modalMode') || 'false')
	: false;

export const modalMode = writable(storedModalMode)

export function toggleModal() {
		if (browser) {
			modalMode.update((mode) => {
				const newMode = !mode;
				localStorage.setItem('modalMode', JSON.stringify(newMode));
				return newMode;
			});
		}
	}

const initialWidth = browser ? window.innerWidth : 1024;
export const windowWidth = writable(initialWidth);


export const breakOne = derived(
  windowWidth,
  $windowWidth => $windowWidth <= 1023 && $windowWidth > 768
);

export const breakTwo = derived(
  windowWidth,
  $windowWidth => $windowWidth <= 768
);

export const breakZero = derived(
	windowWidth,
	$windowWidth => $windowWidth > 1023
);

export const breakZeroOne = derived(
	windowWidth,
	$windowWidth => $windowWidth <= 1023
);

