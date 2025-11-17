import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('board')
export class BoardController {
  @Get()
  findAll() {
    return 'findAll';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `findOne ${id}`;
  }

  @Post()
  create() {
    return 'create';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete ${id}`;
  }
}
