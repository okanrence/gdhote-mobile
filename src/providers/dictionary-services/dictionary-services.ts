import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDictionary } from '../../models/dictionary.interface';

/*
  Generated class for the DictionaryServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Dictionary<T> implements IDictionary<T> {

  constructor() {
    console.log('Hello DictionaryServicesProvider Provider');
  }



  private items: { [index: string]: T } = {};

  private count: number = 0;

  public ContainsKey(key: string): boolean {
      return this.items.hasOwnProperty(key);
  }

  public Count(): number {
      return this.count;
  }

  public Add(key: string, value: T) {
      if(!this.items.hasOwnProperty(key))
           this.count++;

      this.items[key] = value;
  }

  public Remove(key: string): T {
      var val = this.items[key];
      delete this.items[key];
      this.count--;
      return val;
  }

  public Item(key: string): T {
      return this.items[key];
  }

  public Keys(): string[] {
      var keySet: string[] = [];

      for (var prop in this.items) {
          if (this.items.hasOwnProperty(prop)) {
              keySet.push(prop);
          }
      }

      return keySet;
  }

  public Values(): T[] {
      var values: T[] = [];

      for (var prop in this.items) {
          if (this.items.hasOwnProperty(prop)) {
              values.push(this.items[prop]);
          }
      }

      return values;
  }

  
}