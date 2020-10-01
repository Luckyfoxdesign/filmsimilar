import { writable } from "svelte/store"

export const filmFirstData = writable({
	id: "",
	title: "",
	src: "",
	kinopoiskRaiting: "",
	year: "",
	genres: [],
})
