import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/user.entity';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { UsersService } from '../users.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthService,
    UsersService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
