export class GiphyParam {
    query?: string;
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

export class Giphy {
    id: string;
    image: string;
    title: string;
    userName: string;
    userAvatar: string;
    importDateTime: string;
    uploadAt: string;
    isVerified: boolean;
    displayName: string;
    profileUrl: string;
    userDescription: string;
    sourceGiphy: string;
    sourceGiphyShort: string;
    source: string;
    sourceShort: string;
    rating: string;
}