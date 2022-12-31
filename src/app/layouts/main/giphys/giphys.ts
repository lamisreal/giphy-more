import { Giphy } from "src/app/core/models/giphys/giphys.model";
import { convertDateTime } from "src/app/core/utils/common-function";

export function renderGiphy(gifs: any[]) {
    let result: Giphy[] = [];

    for (let index = 0; index < gifs.length; index++) {
        const gif = gifs[index];

        let giphy = new Giphy();
        giphy.id = gif?.id;
        giphy.image = gif?.images?.downsized?.url;
        giphy.title = gif?.title;
        giphy.userName = gif?.user?.username;
        giphy.userAvatar = gif?.user?.avatar_url;
        giphy.importDateTime = convertDateTime(gif?.import_datetime);
        giphy.isVerified = gif?.is_verified;

        result.push(giphy);
    }

    return result;
}