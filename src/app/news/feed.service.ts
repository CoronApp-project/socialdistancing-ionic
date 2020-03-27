import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface AzureNewsApiResultItemImage {
  thumbnail: {
    contentUrl: string;
    width: number;
    height: number;
  };
}

export interface AzureNewsApiResultItemProvider {
  _type: string;
  name: string;
  url: string;
  image: AzureNewsApiResultItemImage;
  description: string;
}

export interface AzureNewsApiResultItem {
  name: string;
  url: string;
  image: AzureNewsApiResultItemImage;
  description: string;
  provider: AzureNewsApiResultItemProvider[];
  datePublished: string;
}

export interface AzureNewsApiResult {
  _type: string;
  readLink: string;
  value: AzureNewsApiResultItem[];
}

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient) {}

  public async getNews(
    market = 'en-us',
    query = 'coronavirus',
    count = 25
  ): Promise<AzureNewsApiResultItem[]> {
    const data = await this.http
      .get<AzureNewsApiResult>(
        `https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=${query}&mkt=${market}&count=${count}`,
        {
          headers: new HttpHeaders({
            'Ocp-Apim-Subscription-Key': '8a7e80e55b0d4e56a491c8813f582bff'
          })
        }
      )
      .toPromise();
    return data.value;
  }
}
