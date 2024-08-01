import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ArticleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
