import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      "title": "My First Doc",
      "description": "asdfasdfasdf asdfd",
      "file_url": "http://google.com",
      "updated_at": "11/11/16",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg",
    },
    {
      "title": "My Second Doc",
      "description": "asdfasdfasdf asdfd",
      "file_url": "http://google.com",
      "updated_at": "11/11/16",
      "image_url": 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      "title": "My Last Doc",
      "description": "asdfasdfasdf asdfd",
      "file_url": "http://google.com",
      "updated_at": "11/11/16",
      "image_url": 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    }
  ]
}
