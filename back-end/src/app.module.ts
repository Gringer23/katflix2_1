import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import {getTypeOrmConfig} from './config/typeorm.config'
import {UserModule} from './user/user.module'
import {FilmsModule} from './films/films.module'
import {CommentModule} from './comment/comment.module'
import {AuthModule} from './auth/auth.module'
import {MediaModule} from './media/media.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig
		}),
		UserModule,
		FilmsModule,
		CommentModule,
		AuthModule,
		MediaModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
