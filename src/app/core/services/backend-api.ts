
import { environment } from '../../../environments/environment';

const giphyApiKey = `?api_key=${environment.giphyApiKey}&`;

const baseGifs = 'https://api.giphy.com/v1/gifs';
const baseStickers = 'https://api.giphy.com/v1/stickers';

//Gifs
// Get All Trending Gifs
export const getAllTrendingGifsApi = `${baseGifs}/trending${giphyApiKey}`;
export const getGifByIDApi = `${baseGifs}${giphyApiKey}`;
export const getSearchGifsApi = `${baseGifs}/search${giphyApiKey}`;

