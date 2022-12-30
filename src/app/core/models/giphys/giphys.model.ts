export class GiphyTrendingParam {
    limit?: number;
    rating?: GiphyRating;
}
export class GiphySearchParam {
    query: string;
    limit?: number;
    offset?: number;
    rating?: GiphyRating;
    lang?: string;
}

export enum GiphyRating {
    G = "g",
    PG = "pg",
    PG13 = "pg-13",
    R = "r",
}