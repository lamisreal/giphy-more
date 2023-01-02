import { nullAvatar, nullCreatorName, nullTitle } from "src/app/core/constant";
import { Giphy } from "src/app/core/models/giphys/giphys.model";
import { convertDateTime } from "src/app/core/utils/common-function";

export function renderGiphy(gifs: any[]) {
    let result: Giphy[] = [];

    for (let index = 0; index < gifs.length; index++) {
        const gif = gifs[index];

        let giphy = new Giphy();
        giphy = renderGifDetail(gif);
        result.push(giphy);
    }

    return result;
}

export function renderGifDetail(gif: any): Giphy {
    let giphy: Giphy = new Giphy();

    giphy.id = gif?.id;
    giphy.image = gif?.images?.downsized?.url;
    giphy.title = gif?.title || nullTitle;
    giphy.userName = gif?.user?.username || nullCreatorName;
    giphy.userAvatar = gif?.user?.avatar_url || nullAvatar;
    giphy.importDateTime = convertDateTime(gif?.import_datetime);
    giphy.isVerified = gif?.is_verified;

    return giphy;
}