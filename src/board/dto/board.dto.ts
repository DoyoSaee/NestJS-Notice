import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty({ description: '게시글 제목', example: '새로운 게시글 제목' })
  title: string;

  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
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
