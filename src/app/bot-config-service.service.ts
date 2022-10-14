import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BotConfigServiceService {
  constructor(private http: HttpClient) {}

  getAllConfigurations() {
    return this.http.get(
      'https://chatbotconsole.azurewebsites.net/api/BotConfiguration'
    );
  }

  getSpecificConfig(applicationName: string) {
    return this.http.get(
      'https://chatbotconsole.azurewebsites.net/api/BotConfiguration/application?applicationName=' +
        applicationName
    );
  }

  saveConfig(postValue: any) {
    return this.http.post(
      'https://chatbotconsole.azurewebsites.net/api/BotConfiguration',
      postValue
    );
  }
}
