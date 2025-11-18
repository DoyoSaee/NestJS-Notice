import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @ApiProperty({ description: '게시글 제목', example: '새로운 게시글 제목' })
  title: string;

  @ApiProperty({ description: '작성자 이름', example: '홍길동' })
  name: string;
}

export class UpdateBoardDto {
  @ApiProperty({
    description: '수정할 게시글 제목',
    example: '수정된 게시글 제목',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: '수정할 작성자 이름',
    example: '김철수',
    required: false,
  })
  name?: string;
}
