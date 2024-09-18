export interface Cats {
	id: string;
	url: string;
	score: number
}

export interface ListCats {
	images: Cats []
}