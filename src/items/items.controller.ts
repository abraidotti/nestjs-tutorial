import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  // Req,
  // Res,
} from '@nestjs/common';
import { CreateItemDto } from './DTO/create-item.dto';
// import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  // //  GET localhost:3000/items
  // @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   // the default return is below, but let's use Express's Response function instead
  //   // return 'Get all items';

  //   console.log('request url: ', req.url);
  //   return res.send('Hello World');
  // }

  //  GET localhost:3000/items/1
  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemsService.findOne(id);
  }

  //   POST to localhost:3000/items
  //   body:
  //    {
  //        "name": "Item One",
  //        "description": "This is the first item",
  //        "quantity": 100
  //    }
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  //   DELETE to localhost:3000/items
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Delete ${id}`;
  }

  //   POST to localhost:3000/items/1
  //    {
  //        "name": "Item One",
  //        "description": "This is the first item",
  //        "quantity": 101
  //    }
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
