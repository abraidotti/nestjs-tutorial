import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'Item One',
      quantity: 100,
      description: 'This is Item One',
    },
    {
      id: '2',
      name: 'Item Two',
      quantity: 50,
      description: 'This is item Two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
