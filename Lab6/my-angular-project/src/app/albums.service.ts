import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any> {
    return this.http.get<any>(this.albumsUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.albumsUrl}/${id}`);
  }

  updateAlbum(album: any): Observable<any> {
    return this.http.put<any>(`${this.albumsUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.albumsUrl}/${id}`);
  }

  getPhotos(albumId: number): Observable<any> {
    return this.http.get<any>(`${this.photosUrl}?albumId=${albumId}`);
  }

}
