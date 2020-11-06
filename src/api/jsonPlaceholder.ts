import Axios from "axios";
const axios = Axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export interface Album {
  userId: number;
  id: number;
  title: string;
  photos: Photo[];
}

export interface Photo {
  id: number;
  url: string;
  title: string;
  thumbnailUrl: string;
  albumId: number;
}

export async function getAlbums(): Promise<Album[]> {
  const albumsRes = await axios.get<
    { userId: number; id: number; title: string }[]
  >("/albums");
  let albums = [];
  const photos = await getAllPhotos();
  for (let albumRes of albumsRes.data) {
    const albumPhotos = photos.filter((photo) => photo.albumId === albumRes.id);
    albums.push({ ...albumRes, photos: albumPhotos });
  }
  return albums;
}

export async function getAllPhotos() {
  const res = await axios.get<Photo[]>(`/photos`);
  return res.data;
}
