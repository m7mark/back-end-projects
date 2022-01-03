import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getUsers() {
    return [{ user: 'me', id: 1 }]
  }
}