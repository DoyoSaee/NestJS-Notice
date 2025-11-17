import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  findAll() {
    return 'findAll';
  }

  findOne(id: number) {
    return `findOne ${id}`;
  }

  create(body: any) {
    return 'create' + body;
  }

  update(id: number, body: any) {
    return `update ${id}` + body;
  }

  delete(id: number) {
    return `delete ${id}`;
  }
}
