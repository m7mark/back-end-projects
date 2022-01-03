import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.servise";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mark',
      password: '1324',
      database: 'nestApiUlbi',
      models: [],
      autoLoadModels:true,
    }),
  ],
})
export class AppModule { }