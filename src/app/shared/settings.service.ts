import { Injectable } from '@angular/core';
import {Settings} from "./settings";

// for assets/settings[.template].json
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings!: Settings;
}
