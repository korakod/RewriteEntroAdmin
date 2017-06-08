import { Injectable } from '@angular/core';

@Injectable()
export class ArticleServicesService {

  articleArray = [
    // tslint:disable-next-line:max-line-length
    {nameArticle: 'Dragonball', detailArticle: 'action' , age: '18' , picArt: 'http://www.daisuki.net/content/dam/Daisuki/contents/dbs/top/images/mainvisual_img_universe.jpg' },
    {nameArticle: 'ONE Piece', detailArticle: 'RPG', age: '6' , picArt: 'https://de7i3bh7bgh0d.cloudfront.net/2016/07/05/16/50/17/0ce17b10-565d-4284-a9d0-617d26ee339b/VizBlog_OnePiece.jpg' },
    // tslint:disable-next-line:max-line-length
    {nameArticle: 'NAruto', detailArticle: 'Fantasy', age: '10', picArt: 'https://images2.alphacoders.com/718/thumb-1920-71840.jpg' }
  ]


  constructor() { }

}
