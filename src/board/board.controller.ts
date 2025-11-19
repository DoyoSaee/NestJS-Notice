import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { CreateBoardDto, UpdateBoardDto } from './dto/board.dto';

@Controller('board')
@ApiTags('Board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  //전체 조회
  @Get()
  @ApiOperation({
    summary: '전체 게시글 조회',
    description: '모든 게시글을 조회합니다.',
  })
  @ApiResponse({ status: 200, description: '성공' })
  findAll() {
    return this.boardService.findAll();
  }

  //단건 조회
  @Get(':id')
  @ApiOperation({
    summary: '단일 게시글 조회',
    description: '특정 ID의 게시글을 조회합니다.',
  })
  @ApiResponse({ status: 200, description: '성공' })
  @ApiResponse({ status: 404, description: '게시글을 찾을 수 없음' })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.boardService.findOne(+id);
  }

  //생성
  @Post()
  @ApiOperation({
    summary: '게시글 생성',
    description: '새로운 게시글을 생성합니다.',
  })
  @ApiResponse({ status: 201, description: '성공' })
  create(@Body() body: CreateBoardDto) {
    return this.boardService.create(body);
  }

  //수정
  @Put(':id')
  @ApiOperation({
    summary: '게시글 수정',
    description: '특정 ID의 게시글을 수정합니다.',
  })
  @ApiResponse({ status: 200, description: '성공' })
  @ApiResponse({ status: 404, description: '게시글을 찾을 수 없음' })
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: UpdateBoardDto,
  ) {
    return this.boardService.update(+id, body);
  }

  //삭제
  @Delete(':id')
  @ApiOperation({
    summary: '게시글 삭제',
    description: '특정 ID의 게시글을 삭제합니다.',
  })
  @ApiResponse({ status: 200, description: '성공' })
  @ApiResponse({ status: 404, description: '게시글을 찾을 수 없음' })
  delete(@Param('id') id: string) {
    return this.boardService.delete(+id);
  }
}
