export interface BookRaw {
  isbn: string;
  title: string;
  authors: string[];
  published: string;
  rating?: number;
  thumbnails?: ThumbnailRaw[];
  description?: string;
}

export interface ThumbnailRaw {
  url: string;
  title?: string;
}
