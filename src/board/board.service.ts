import { Injectable } from '@nestjs/common';
import { CreateBoardDto, UpdateBoardDto } from './dto/board.dto';

@Injectable()
export class BoardService {
  //DB
  private boards = [
    {
      id: 1,
      title: 'title1',
      name: 'name1',
    },
    {
      id: 2,
      title: 'title2',
      name: 'name2',
    },
    {
      id: 3,
      title: 'title3',
      name: 'name3',
    },
    {
      id: 4,
      title: 'title4',
      name: 'name4',
    },
    {
      id: 5,
      title: 'title5',
      name: 'name5',
    },
    {
      id: 6,
      title: 'title6',
      name: 'name6',
    },
    {
      id: 7,
      title: 'title7',
      name: 'name7',
    },
    {
      id: 8,
      title: 'title8',
      name: 'name8',
    },
    {
      id: 9,
      title: 'title9',
      name: 'name9',
    },
    {
      id: 10,
      title: 'title10',
      name: 'name10',
    },
  ];

  //전체 조회
  findAll() {
    return this.boards;
  }

  //단건 조회
  findOne(id: number) {
    return this.boards.find((board) => board.id === id);
  }

  //생성
  create(data: CreateBoardDto) {
    const newBoard = {
      id: this.getNextId(),
      title: data.title,
      name: data.name,
    };
    this.boards.push(newBoard);
    return newBoard;
  }

  //id 찾기
  getNextId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }

  //수정
  update(id: number, data: UpdateBoardDto) {
    const board = this.findOne(id);
    if (board) {
      if (data.title) board.title = data.title;
      if (data.name) board.name = data.name;
      return board;
    }
    return null;
  }

  //삭제
  delete(id: number) {
    const index = this.boards.findIndex((board) => board.id === id);
    if (index > -1) {
      return this.boards.splice(index, 1);
    }
    return null;
  }
}
