import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.servise";

@Controller('/api')
export class AppController {
  constructor(private appSevice: AppService) {
  }
  @Get('/users')
  getUsers() {
    return this.appSevice.getUsers()
  }
}