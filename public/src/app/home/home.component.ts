import { Component, OnInit } from '@angular/core';
import { FrontService } from '../service/front.service';
import {   UserLikes, ImageBack, UserLikeFromBack, ImageBackLikes } from '../api';
import { BackendService } from '../service/backend.service';
import { HtmlTagDefinition, TagContentType } from '@angular/compiler';

interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  user: User;
  counter = 1;
  counterLike = 1; // надо сделать массивом для каждой фотографии
  enrlargedImage: string;
  enlargeVision = false;
  imageBack: Array<ImageBack> = [];
  imageLikeAuthorizateUser: Array<number> = [];
  informationAboutErnlageImage: ImageBack;
  informationAboutUserErnlargeImage: User;
  informationAboutLikes: number;
  constructor(
    private frontService: FrontService,
    private backService: BackendService
  ) {}
  like( foto, n: number) {
    if (this.imageLikeAuthorizateUser[n] === 0) {
      // n + это фактичеки idFoto, дальше нужно раюотать с ним!
      console.log('!!!!!это н',  n);
      console.log('foto', foto);
      foto.src = 'assets/likeKr.png';
      this.imageLikeAuthorizateUser[n] = 1;
      const user = this.frontService.getAuthorizationUser();
      const userLikes: UserLikes = {
        id: user.id,
        likes: this.imageLikeAuthorizateUser
      };
      console.log(userLikes);
      this.frontService.setUserLike(userLikes);
      console.log('!' , this.frontService.getUserLike());
      this.backService.setUserLikes({
        id: this.frontService.getAuthorizationUser().id,
        saveFoto: this.toBackStandart(this.imageLikeAuthorizateUser)});

   //   this.frontService.informationAboutImageLikes[n] = {
   //     idFoto: n,
  //     numberLikes: this.frontService.informationAboutImageLikes[n].numberLikes + 1
  //    };

      for (let i = 0; i < this.frontService.informationAboutImageLikes.length ; i ++) {
        if (+this.frontService.informationAboutImageLikes[i].idFoto === n + 1) {
          console.log('прибавляем к', this.imageBack[i].idFoto);

          this.backService.setInformationAboutImageLikes({
            idFoto: (n + 1),
            numberLikes: (+this.frontService.informationAboutImageLikes[i].numberLikes + 1)
          });
          this.frontService.informationAboutImageLikes[i].numberLikes = this.frontService.informationAboutImageLikes[i].numberLikes + 1;
          break;
        }
      }
      this.imageLikeAuthorizateUser[n] = 1;
      console.log('все лайки на фронте', this.frontService.informationAboutImageLikes);
    } else {
      // $event.target.src = 'assets/like.png';
      foto.src = 'assets/likes.png';
      this.imageLikeAuthorizateUser[n] = 0;
      const user = this.frontService.getAuthorizationUser();
      const userLikes: UserLikes = {
        id: user.id,
        likes: this.imageLikeAuthorizateUser
      };
      this.frontService.setUserLike(userLikes);
      console.log(userLikes);
      this.backService.setUserLikes({
        id: this.frontService.getAuthorizationUser().id,
        saveFoto: this.toBackStandart(this.imageLikeAuthorizateUser)});
   /*   this.backService.setInformationAboutImageLikes({
          idFoto: n + 1,
          numberLikes: (+this.frontService.informationAboutImageLikes[n].numberLikes - 1)
        }); */
     // this.frontService.informationAboutImageLikes[n] = {
     //     idFoto: n,
     //     numberLikes: this.frontService.informationAboutImageLikes[n].numberLikes - 1
     //   };
      for (let i = 0; i < this.frontService.informationAboutImageLikes.length ; i ++) {
      if (+this.frontService.informationAboutImageLikes[i].idFoto === n + 1) {
        this.backService.setInformationAboutImageLikes({
          idFoto: (n + 1),
          numberLikes: (+this.frontService.informationAboutImageLikes[i].numberLikes - 1)
        });
        this.frontService.informationAboutImageLikes[i].numberLikes = this.frontService.informationAboutImageLikes[i].numberLikes - 1;
        break;
      }
    }
     //   this.frontService.informationAboutImageLikes[n].numberLikes = this.frontService.informationAboutImageLikes[n].numberLikes - 1;
        this.imageLikeAuthorizateUser[n] = 0;
        console.log('все лайки на фронте', this.frontService.informationAboutImageLikes);
        console.log('Отправилось' , this.frontService.informationAboutImageLikes[n].numberLikes);
    }
  }

  toBackStandart(arr: Array<number>) {
    let sr  = '' ;
    for (let i = 0 ; i < arr.length ; i++) {
    // sr += (arr[i].toString() + ',');
     if (i === arr.length - 1) {
       sr += arr[i].toString();
     } else {
      sr += (arr[i].toString() + ',');
     }
    }
    console.log('?????' , sr);
    return sr;
  }

  toFrontStandart(sr: string) {
    const str = sr.split(',' , this.frontService.numberPhotos);
    const arr: Array<number> = [];
    for (let i = 0 ; i < str.length ; i++) {
    arr.push(+str[i]); }
    console.log(arr);
    return arr;
  }

  enlargedImages(foto) {
    this.backService.getInformationAboutImageLikes().subscribe((likes: Array<ImageBackLikes>) => {
      this.frontService.informationAboutImageLikes = likes;
      console.log('sssss1' , this.frontService.informationAboutImageLikes);
    });
    console.log(foto.src);
    this.enrlargedImage = foto.src.split('http://localhost:4200/', 2 )[1];
    console.log(this.enrlargedImage);
    this.invertEnlargeVision();
  }
  informationAboutErnlargeImage(foto) {
    const src = foto.src;
    this.backService.getImage().subscribe((images: Array<ImageBack>) => {
      for (let i = 0 ; i < images.length ; i++) {
        console.log('&' , src.split('http://localhost:4200/', 2)[1]);
        if (images[i].src === src.split('http://localhost:4200/', 2)[1]) {
        this.informationAboutErnlageImage = images[i];
        console.log('Открыли' , this.informationAboutErnlageImage);
        }

      }
      for (let i = 0 ; i < images.length ; i++) {
        // console.log(this.informationAboutErnlageImage.idFoto);
        // console.log(this.frontService.informationAboutImageLikes[i].idFoto.toString());
        if (this.enrlargedImage === this.frontService.images[i].src){
         let idFoto = this.frontService.images[i].idFoto;
         console.log('//////' , idFoto );
         console.log(this.frontService.informationAboutImageLikes.length);
         for (let j = 0 ; j < this.frontService.informationAboutImageLikes.length ; j++) {
           console.log('$$$$$' , this.frontService.informationAboutImageLikes[j].idFoto);
               if (this.frontService.informationAboutImageLikes[j].idFoto === +idFoto) {
                 this.informationAboutLikes = this.frontService.informationAboutImageLikes[j].numberLikes;
                 console.log('LIKES' , this.informationAboutLikes);
               }
           }
         //this.informationAboutLikes
          // this.informationAboutLikes = this.frontService.getInformationAboutImageLikes()[i].numberLikes;
       // console.log('BIL TYT');
        }
       }
      for (let i = 0 ; i < this.frontService.getUsers().length ; i++) {
        if (this.frontService.getUsers()[i].id === this.informationAboutErnlageImage.id) {
            this.user = this.frontService.getUsers()[i];
        }
      }

      console.log('!!!!!' , this.informationAboutErnlageImage);
      console.log('$' , this.user);
      console.log('likes' , this.informationAboutLikes);
    });
  }
  invertEnlargeVision() {
    this.enlargeVision = !this.enlargeVision;
  }
  ngOnInit(): void {
    this.user = this.frontService.getAuthorizationUser();
    this.imageBack = this.frontService.images;
    if (this.frontService.newImages) {
    this.backService.getImage().subscribe((images: Array<ImageBack>) => {
      for (let i = this.frontService.numberPhotos; i < images.length; i++) {
        this.frontService.numberPhotos++;
        this.imageBack.push(images[i]);
        this.imageLikeAuthorizateUser.push(0);
      }
      this.frontService.images = this.imageBack;
    });
    this.frontService.setUserImage(this.user.id);
  }
    this.frontService.newImages = false;
    const like: UserLikes = this.frontService.getUserLike();
    this.imageLikeAuthorizateUser = like.likes;
    console.log('!!!!!' , this.imageLikeAuthorizateUser);
    this.backService.getUserLikes().subscribe((data: Array<UserLikeFromBack>) => {
      for (let i = 0 ; i < data.length ; i++) {
     if ( data[i].id === this.frontService.getAuthorizationUser().id) {
       console.log(data[i]);
       const like = this.toFrontStandart(data[i].saveFoto);
       console.log('like = ' , like);
       this.frontService.setUserLike({
         id: this.frontService.getAuthorizationUser().id,
         likes: like
       });
       this.imageLikeAuthorizateUser = like;
     }
    }
   });
   this.backService.getInformationAboutImageLikes().subscribe((likes: Array<ImageBackLikes>) => {
    this.frontService.informationAboutImageLikes = likes;
    console.log('sssss1' , this.frontService.informationAboutImageLikes);
  });

}

}
