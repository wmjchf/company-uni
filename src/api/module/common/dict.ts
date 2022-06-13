import {
  HttpRequestAbstract,
  HttpRequestConfig,
} from "uview-ui/libs/luch-request";
// @ts-ignoreå
const http: HttpRequestAbstract = uni.$u.http;

export const GetCategoryPlaylist = (
  data: HttpRequestConfig<UniApp.RequestTask>
) => http.get("/playlist/catlist", data);

export const GetTopPlaylist = (data: HttpRequestConfig<UniApp.RequestTask>) =>
  http.get("/top/playlist", data);
