import { SingleBook } from './shared/components/single-book/single-book.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Golden-Book';

  book1: SingleBook = {
    id: 1,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim dicta assumenda sapiente quam, dolorum eum ipsa voluptatem sed, consequatur eligendi perspiciatis, non soluta? Eum sequi, ab cupiditate omnis, animi doloremque amet modi natus rem, aperiam tempore laborum ipsa voluptatum?',
    category: 'Literary',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX375_BO1,204,203,200_.jpg',
    publishedDate: 1983,
  };
  book2: SingleBook = {
    id: 2,
    title: 'Verity',
    author: 'Colleen Hoover ',
    description:
      'Whose truth is the lie? Stay up all night reading the sensational psychological thriller that has readers obsessed, from the #1 New York Times bestselling author of It Ends With Us.  Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.',
    category: 'Literary',
    url: 'https://m.media-amazon.com/images/I/41ZLnc34EiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    publishedDate: 1983,
  };
  book3: SingleBook = {
    id: 3,
    title: 'Fairy Tale',
    author: 'Stephen King',
    description:
      'Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours.  Charlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a hit-and-run accident when he was seven, and grief drove his dad to drink. Charlie learned how to take care of himself—and his dad. When Charlie is seventeen, he meets a dog named Radar and her aging master, Howard Bowditch, a recluse in a big house at the top of a big hill, with a locked shed in the backyard. Sometimes strange sounds emerge from it.',
    category: 'Psychology',
    url: 'https://m.media-amazon.com/images/I/51ECRZXoGyL._SX327_BO1,204,203,200_.jpg',
    publishedDate: 1993,
  };
  book4: SingleBook = {
    id: 4,
    title: 'Curious Minds',
    author: 'Jordan Moore',
    description:
      'Interesting Facts For Curious Minds gives you the answer to all these and many, many more questions that I know have crossed your mind from time to time. This book is divided into 63 chapters by topic for your convenience, bringing you a nice mix of science, history, pop culture, and all sorts of stuff in between. Each chapter contains 25 concise yet engaging factoids that are sure to make you think and at times laugh. How you read this book is entirely up to you. I’m sure most of you will read it cover to cover at some point, but when you’re with friends and family you can pick the chapters out that most appeal to all of you.  However you read this book, I guarantee you’ll find it one of the best tools to pass some time, relax alone, or connect with others. So sit back, relax, and get ready to learn some truly interesting facts!',
    category: 'History, Science',
    url: 'https://m.media-amazon.com/images/I/518z5dvykPL._SX348_BO1,204,203,200_.jpg',
    publishedDate: 1975,
  };
  book5: SingleBook = {
    id: 5,
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J. K. Rowling',
    description:
      "The fifth book in the beloved, bestselling Harry Potter series, now illustrated in brilliant full color. There is a door at the end of a silent corridor. And it's haunting Harry Potter's dreams. Why else would he be waking in the middle of the night, screaming in terror? It's not just the upcoming O.W.L. exams; a new teacher with a personality like poisoned honey; a venomous, disgruntled house-elf; or even the growing threat of He-Who-Must-Not-Be-Named. Now Harry Potter is faced with the unreliability of the very government of the magical world and the impotence of the authorities at Hogwarts. Despite this (or perhaps because of it), he finds depth and strength in his friends, beyond what even he knew; boundless loyalty; and unbearable sacrifice.  This stunning illustrated edition brings together the talents of award-winning artists Jim Kay and Neil Packer in a visual feast, featuring iconic scenes and much loved characters -- Tonks, Luna Lovegood, and many more -- as the Order of the Phoenix keeps watch over Harry Potter’s fifth year at Hogwarts. With its oversized format, high-quality paper, ribbon bookmark, and color on nearly every page, this edition is the perfect gift for Harry Potter fans and book lovers of all ages.",
    category: "Children's Action",
    url: 'https://m.media-amazon.com/images/I/51bZujlJxlL._SX422_BO1,204,203,200_.jpg',
    publishedDate: 2022,
  };
  book6: SingleBook = {
    id: 6,
    title: 'Harry Potter: A Magical Year',
    author: 'J. K. Rowling',
    description:
      'This irresistible gift book takes readers on an unforgettable journey through the seasons at Hogwarts. Jim Kay’s captivating illustrations, paired with much-loved quotations from J.K. Rowling’s Harry Potter novels -- one moment, anniversary, or memory for every day of the year -- bring to life all of the magic, beauty, and wonder of the wizarding world.  Jim Kay has been enchanting readers since the publication of the Illustrated Edition of Harry Potter and the Sorcerer’s Stone in 2015. Now, in Harry Potter: A Magical Year, a selection of Kay’s most iconic illustrations are joined by previously unseen pencil sketches and preparatory pieces, offering unique and fascinating insight into the artist’s sketchbook.  From the snowy towers of Hogwarts, to the dancing eyes of Professor Albus Dumbledore, to the hustle and bustle of Diagon Alley, this visual feast is the perfect companion for readers of all ages, at any point on their Harry Potter journey, and a gift to cherish for years to come.',
    category: "Children's Action",
    url: 'https://m.media-amazon.com/images/I/51Teei26k+L._SX419_BO1,204,203,200_.jpg',
    publishedDate: 2006,
  };
}