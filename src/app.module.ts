import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { AuthModule } from './users/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'mainpass',
      username: 'postgres',
      entities: [Users],
      database: 'quiz_app_db',
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
