import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
