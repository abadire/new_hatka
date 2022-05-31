import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { HaloopsModule } from './haloops/haloops.module';
import connectionOptions from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionOptions),
    UserModule,
    HaloopsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
