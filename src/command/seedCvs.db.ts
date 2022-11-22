import { NestFactory } from "@nestjs/core";
import { randFirstName, randJobTitle, randJobType, randLastName, randNumber, randPassword } from "@ngneat/falso";
import { CvService } from "src/cv/cv.service";
import { Cv } from "src/cv/entities/cv.entity";

import { AppModule } from "../app.module";

// async function bootstrap() {
//   const app = await NestFactory.createApplicationContext(AppModule);
//   const cvService = app.get(CvService);
//   const 
//   for (let i=0; i < 50; i++) {
//     const cv = new Cv();
//     cv.name = randLastName() ;
//     cv.firstname=randFirstName() ;
//     cv.age=randNumber({ min: 10, max: 80 })
//     cv.cin=randNumber({ min: 10000000, max: 99999999 })
//     cv.password=randPassword()
//     cv.job=randJobTitle()
//     // cv.path=randJobType()
//     // cv.user=
//     // cv.skills=
//     await cvService.create(cv);
//   }
//   await app.close();
// }


// bootstrap();