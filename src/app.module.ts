import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
  TasksModule,
    TypeOrmModule.forRoot({
	  type: 'postgres',
	  host: 'localhost',
	  port: 5432,
	  username: 'taskmanager',
	  password: 'taskmanager',
	  database: 'taskmanager',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
