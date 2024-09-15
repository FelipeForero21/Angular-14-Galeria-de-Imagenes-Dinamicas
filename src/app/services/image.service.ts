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
      description: 'Cerro Tusa.',
      category: 'Naturaleza',
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJRW5sQEQSYwlxHHO1lDW_BesqCVB8APuLM-R8Zc42bW74L0lBtxELJ2nTqGQvUQ5BiC6Q2I6nMRyth0JxMuN3OrZwqyPppdT6Vi3N3uGfzz2oVB_tIg6yvFK6DvnMXevJC9k0TBKvSnp0i-K08cCYVZjZeIF_kTFU0aw-xF0MgQELOVY12iRjJJDm/s1920/DJI_0134-2.jpg',
      date: '2023-01-01',
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Bosque',
      description: 'Un bosque en el Amazonas.',
      category: 'Naturaleza',
      url: 'https://content.nationalgeographic.com.es/medio/2022/09/16/selva-tropical-amazonica-ecuador_135ea5a5_1280x853.jpg',
      date: '2023-01-02',
      isFavorite: false,
    },
    {
      id: 3,
      title: 'Cascada',
      description: 'Cascada de Termales de Santa Rosa',
      category: 'Naturaleza',
      url: 'https://fincaspanacah10.com/wp-content/uploads/2023/01/CASCADA.png',
      date: '2023-01-03',
      isFavorite: false,
    },
    {
      id: 4,
      title: 'Gato',
      description: 'Sticker de Gato.',
      category: 'Animales',
      url: 'https://ih1.redbubble.net/image.3524904060.3809/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
      date: '2023-02-01',
      isFavorite: false,
    },
    {
      id: 5,
      title: 'Perro',
      description: 'Perro Panzon',
      category: 'Animales',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUcUOtdQ5o5NAkosEYqR49xL8K5C-uNzBOA&s',
      date: '2023-02-02',
      isFavorite: false,
    },
    {
      id: 6,
      title: 'Pájaro',
      description: 'Piolin.',
      category: 'Animales',
      url: 'https://c1.klipartz.com/pngpicture/474/690/sticker-png-bird-line-drawing-tweety-looney-tunes-cartoon-sylvester-beak-smiley-yellow.png',
      date: '2023-02-03',
      isFavorite: false,
    },
    {
      id: 7,
      title: 'Retrato',
      description: 'Retrato de Albert Einstein.',
      category: 'Personas',
      url: 'https://culturafotografica.es/wp-content/uploads/2016/04/einstein-sasse.jpg',
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
      url: 'https://fotografias.larazon.es/clipping/cmsimages02/2020/10/01/2FC0A877-2237-47D5-A61E-3803FB7EA054/98.jpg?crop=5500,3094,x0,y289&width=1900&height=1069&optimize=low&format=webply',
      date: '2023-03-03',
      isFavorite: false,
    },
    {
      id: 10,
      title: 'Nueva York',
      description: 'Imagen de Nueva York.',
      category: 'Ciudades',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
      date: '2023-04-01',
      isFavorite: false,
    },
    {
      id: 11,
      title: 'París',
      description: 'La Torre Eiffel iluminada en la noche.',
      category: 'Ciudades',
      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/08/72/35/8b.jpg',
      date: '2023-04-02',
      isFavorite: false,
    },
    {
      id: 12,
      title: 'Tokio',
      description:
        'Una vista vibrante de Tokio con luces de neón y calles llenas de gente.',
      category: 'Ciudades',
      url: 'https://d0626f1e44.clvaw-cdnwnd.com/efd82a4c10d67d793c62b322158b9943/200002120-9d5669d568/shinjuku-8.jpeg?ph=d0626f1e44',
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
