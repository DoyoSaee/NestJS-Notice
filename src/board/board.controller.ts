import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('board')
export class BoardController {
  //전체 조회
  @Get()
  findAll() {
    return 'findAll';
  }

  //단건 조회
  @Get(':id')
  findOne(@Param('id') id: number) {
    return `findOne ${id}`;
  }

  //생성
  @Post()
  create(@Body() body: any) {
    return 'create' + body;
  }

  //수정
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return `update ${id}` + body;
  }

  //삭제
  @Delete(':id')
  delete(@Param('id') id: number) {
    return `delete ${id}`;
  }
}
