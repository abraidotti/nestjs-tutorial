import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  // private readonly items: Item[] = [
  //   {
  //     id: '1',
  //     name: 'Item One',
  //     quantity: 100,
  //     description: 'This is Item One',
  //   },
  //   {
  //     id: '2',
  //     name: 'Item Two',
  //     quantity: 50,
  //     description: 'This is item Two',
  //   },
  // ];

  // findAll(): Item[] {
  //   return this.items;
  // }

  // findOne(id: string): Item {
  //   return this.items.find(item => item.id === id);
  // }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
