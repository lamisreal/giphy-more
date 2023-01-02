import { nullAvatar, nullCreatorName, nullTitle } from "src/app/core/constant";
import { Giphy } from "src/app/core/models/giphys/giphys.model";
import { convertDate, convertDateTime } from "src/app/core/utils/common-function";

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
    giphy.image = gif?.images?.downsized?.url ? gif?.images?.downsized?.url : gif?.images?.downsized_large?.url;
    giphy.title = gif?.title || nullTitle;
    giphy.userName = gif?.user?.username;
    giphy.userAvatar = gif?.user?.avatar_url || nullAvatar;
    giphy.importDateTime = convertDateTime(gif?.import_datetime);
    giphy.uploadAt = convertDate(gif?.import_datetime);
    giphy.isVerified = gif?.user?.is_verified || false;
    giphy.displayName = gif?.user?.display_name || nullCreatorName;
    giphy.profileUrl = gif?.user?.profile_url;
    giphy.userDescription = gif?.user?.description;
    giphy.source = gif?.source;
    // giphy.sourceShort = gif?.source?.replace("http://", "").replace("https://", "").replace("www.", "").substring(0, 20).concat("...");
    giphy.sourceShort = "Original post";
    giphy.sourceGiphy = gif?.url;
    giphy.sourceGiphyShort = "Original ghipy post";

    return giphy;
}