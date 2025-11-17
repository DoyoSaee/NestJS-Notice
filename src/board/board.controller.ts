import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  //전체 조회
  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  //단건 조회
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.boardService.findOne(id);
  }

  //생성
  @Post()
  create(@Body() body: any) {
    return this.boardService.create(body);
  }

  //수정
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.boardService.update(id, body);
  }

  //삭제
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.boardService.delete(id);
  }
}
