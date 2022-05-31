import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HaloopEntity } from 'src/haloops/entities/haloop.entity';
import { HaloopsController } from 'src/haloops/haloops.controller';
import { HaloopsService } from 'src/haloops/haloops.service';

@Module({
  imports: [TypeOrmModule.forFeature([HaloopEntity])],
  providers: [HaloopsService],
  controllers: [HaloopsController],
})
export class HaloopsModule {}
