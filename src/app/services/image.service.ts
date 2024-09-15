import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imagesKey = 'images';

  private defaultImages: Image[] = [
    {
      id: 1,
      title: 'Montaña',
      description: 'Montaña Nevada.',
      category: 'Naturaleza',
      url: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-01-01',
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Bosque',
      description: 'Un bosque poco Poblado.',
      category: 'Naturaleza',
      url: 'https://images.pexels.com/photos/1083342/pexels-photo-1083342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-01-02',
      isFavorite: false,
    },
    {
      id: 3,
      title: 'Cascada',
      description: 'Una cascada en medio del rio,',
      category: 'Naturaleza',
      url: 'https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-01-03',
      isFavorite: false,
    },
    {
      id: 4,
      title: 'Gato',
      description: 'Gato gris Jugueton.',
      category: 'Animales',
      url: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-02-01',
      isFavorite: false,
    },
    {
      id: 5,
      title: 'Perro',
      description: 'Pareja de Cachorros',
      category: 'Animales',
      url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s',
      date: '2023-02-02',
      isFavorite: false,
    },
    {
      id: 6,
      title: 'Pájaro',
      description: 'Un colibri.',
      category: 'Animales',
      url: 'https://images.pexels.com/photos/1309862/pexels-photo-1309862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-02-03',
      isFavorite: false,
    },
    {
      id: 7,
      title: 'Retrato',
      description: 'Retrato de una persona con flores.',
      category: 'Personas',
      url: 'https://images.pexels.com/photos/6957184/pexels-photo-6957184.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-03-01',
      isFavorite: false,
    },
    {
      id: 8,
      title: 'Foto Grupal',
      description: 'Grupo De Riwi.',
      category: 'Personas',
      url: 'https://lh3.googleusercontent.com/pw/AP1GczMktmvpZu4hprRlo3UrGLMVpqQgTWLHLRg-gf1qsKKcmEmOCBpHZp1cvCG1F_Eg3HbZu6Vy9utT9olsZfXfET2P3IZR_TQuFtQZAHswn80EB7zsNA9O6EijSi1ot24ogxL8Tna_Tsv7lLPolyF4Eyfx4g=w853-h639-s-no-gm?authuser=0',
      date: '2023-03-02',
      isFavorite: false,
    },
    {
      id: 9,
      title: 'Reunion de Amigos',
      description: 'Amigos tomando Cerveza.',
      category: 'Personas',
      url: 'https://images.pexels.com/photos/5531894/pexels-photo-5531894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-03-03',
      isFavorite: false,
    },
    {
      id: 10,
      title: 'Nueva York',
      description: 'Imagen de Nueva York.',
      category: 'Ciudades',
      url: 'https://images.pexels.com/photos/28277492/pexels-photo-28277492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-04-01',
      isFavorite: false,
    },
    {
      id: 11,
      title: 'París',
      description: 'La Torre Eiffel de dia.',
      category: 'Ciudades',
      url: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-04-02',
      isFavorite: false,
    },
    {
      id: 12,
      title: 'Tokio',
      description:
        'Una vista vibrante de Tokio con luces de neón y calles llenas de gente.',
      category: 'Ciudades',
      url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-04-03',
      isFavorite: false,
    },
  ];

  constructor() {
    this.ensureDefaultImages();
  }

  private ensureDefaultImages(): void {
    const existingImages = this.getImages();
    const newImages = this.defaultImages.filter(
      (defaultImage) =>
        !existingImages.some(
          (existingImage) => existingImage.id === defaultImage.id
        )
    );

    if (newImages.length > 0) {
      const updatedImages = [...existingImages, ...newImages];
      localStorage.setItem(this.imagesKey, JSON.stringify(updatedImages));
    }
  }

  getImages(): Image[] {
    const images = localStorage.getItem(this.imagesKey);
    return images ? JSON.parse(images) : [];
  }
  addImage(image: Image): void {
    const images = this.getImages(); 
    images.push(image);
    localStorage.setItem(this.imagesKey, JSON.stringify(images));
  }
}
