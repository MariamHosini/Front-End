import {Author} from"./Author.js";
 export function Book(_bookName="" , _bookPrice=0,_authorName="" , _authorEmail=""){
        this.bookName = _bookName;
        this.bookPrice = _bookPrice;
        this.author = new Author(_authorName,_authorEmail);
}