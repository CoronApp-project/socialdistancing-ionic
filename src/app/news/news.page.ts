import { Component, OnInit, Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { FeedService, AzureNewsApiResultItem } from './feed.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  providers: [FeedService]
})
export class NewsPage implements OnInit {
  constructor(private feedService: FeedService) {}

  private articles: AzureNewsApiResultItem[];

  private getMarketForLanguage(lang: string) {
    switch (lang.toLowerCase()) {
      case 'nl':
      case 'nl-nl':
        return 'nl-NL';
      case 'nl-be':
        return 'nl-BE';
      case 'es':
      case 'es-es':
        return 'es-ES';
      case 'en-uk':
        return 'en-UK';
      default:
        return 'en-US';
    }
  }

  async ngOnInit() {
    const market = this.getMarketForLanguage(navigator.language);
    this.articles = await this.feedService.getNews(market);
    console.log(this.articles);
  }

  async openUrl(article) {
    window.open(article.url, '_blank');
  }
}
