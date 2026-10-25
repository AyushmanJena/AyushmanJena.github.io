import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageSlideshowComponent } from "./image-slideshow/image-slideshow.component";

@Component({
  selector: 'app-interests-page',
  imports: [CommonModule, ImageSlideshowComponent],
  templateUrl: './interests-page.component.html',
  styleUrl: './interests-page.component.css'
})
export class InterestsPageComponent {

  aboutImages: string[] = [
    '/beyond-code-images/1.png', '/beyond-code-images/2.jpg', '/beyond-code-images/3.jpg', '/beyond-code-images/4.png', 
    '/beyond-code-images/5.jpg', '/beyond-code-images/6.jpg', '/beyond-code-images/7.jpg', '/beyond-code-images/8.jpg',  
  ];

  marqueeItems: string[] = [
    'Space', 'Smartphones', 'Video Games', 'Music', 'Productivity', 'Minecraft', 'Valorant', 'Emulation', 'Side Quests', 'Self Improvement', 'Cinema',
    'Hip Hop', 'Anime', 'Science Fiction', 'Marvel', 'Philosophy', 'Tech Gadgets', 'Mechanical Keyboards', 'Art', 'UI Design', 'Gym', 'Books',
  ];

  movies: InterestCard[] = [
    { imageUrl: '/favourite-images/the-prestige.jpg', title: 'The Prestige' },
    { imageUrl: '/favourite-images/whiplash.jpg', title: 'Whiplash' },
    { imageUrl: '/favourite-images/spiderverse.jpg', title: 'Spider-Verse' },
    { imageUrl: '/favourite-images/the-social-network.jpg', title: 'The Social Network' },
    { imageUrl: '/favourite-images/cars.jpg', title: 'Cars' },
    { imageUrl: '/favourite-images/captain-america-civil-war.jpg', title: 'Captain America: Civil War' },
  ];

  books: InterestCard[] = [
    { imageUrl: '/favourite-images/the-alchemist.jpg', title: 'The Alchemist' },
    { imageUrl: '/favourite-images/the-kite-runner.jpg', title: 'The Kite Runner' },
    { imageUrl: '/favourite-images/what-young-india-wants.jpg', title: 'What Young India Wants' }
  ];

}

export interface InterestCard {
  imageUrl: string;
  title: string;
}