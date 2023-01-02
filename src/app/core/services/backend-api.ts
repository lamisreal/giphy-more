
import { environment } from '../../../environments/environment';

const giphyApiKey = `?api_key=${environment.giphyApiKey}`;
const baseGifs = 'https://api.giphy.com/v1';

const baseProxyGif = 'https://giphy.com/api/v1/proxy-gif';
const baseStickers = 'https://api.giphy.com/v1/stickers';

//Gifs
// Get All Trending Gifs
export const getAllTrendingGifsApi = `${baseGifs}/gifs/trending${giphyApiKey}`;
export const getGifByIDApi = `${baseGifs}/gifs/ID${giphyApiKey}`;
export const getSearchGifsApi = `${baseGifs}/gifs/search${giphyApiKey}`;
export const getViewCountGifApi = `${baseProxyGif}/ID/view-count`;

