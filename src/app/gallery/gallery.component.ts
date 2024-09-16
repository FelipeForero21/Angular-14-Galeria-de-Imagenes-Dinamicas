import { Component } from '@angular/core';
import { Image } from '../models/image.model';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  categories = ['Naturaleza', 'Animales', 'Ciudades', 'Personas'];
  selectedCategory = 'All';
  images: Image[] = [];
  favoriteImages: Image[] = [];
  selectedImage: Image | null = null;
  modal: string | null = null;

  constructor(private imageService: ImageService) {
    this.images = this.imageService.getImages();
  }

  showModal(modalType: string) {
    this.modal = modalType;
  }

  closeModal() {
    this.modal = null;
  }

  openImageModal(image: Image) {
    this.selectedImage = image;
    this.showModal('imageDetails');
  }

  selectCategory(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
  }

  toggleFavorite(image: Image) {
    image.isFavorite = !image.isFavorite;
    this.favoriteImages = this.images.filter((img) => img.isFavorite);
  }
  addNewImage(
    event: Event,
    title: string,
    description: string,
    category: string,
    url: string
  ) {
    event.preventDefault();
    console.log('Adding new image:', { title, description, category, url });

    const images = this.imageService.getImages();
    const newImage: Image = {
      id: images.length > 0 ? images[images.length - 1].id + 1 : 1,
      title,
      description,
      category,
      url,
      date: new Date().toLocaleDateString(),
      isFavorite: false,
    };

    this.imageService.addImage(newImage);
    this.images = this.imageService.getImages(); 
    this.closeModal(); 
  }

  filteredImages() {
    if (this.selectedCategory === 'All') {
      return this.images;
    }
    return this.images.filter(
      (image) => image.category === this.selectedCategory
    );
  }

}
