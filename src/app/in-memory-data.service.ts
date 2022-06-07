import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice',image:'https://image.vtc.vn/upload/2021/08/04/5c86585ed2ce7839b3783cc7-07010641.jpg'  },
      { id: 13, name: 'Bombasto',image:'https://icdn.24h.com.vn/upload/2-2019/images/2019-04-22/1555918499-957-bi-quyet-tap-luyen-de-co-than-hinh-trong-mo-cua-dan-biet-doi-sieu-anh-hung-7-1555907341-width600height338.jpg' },
      { id: 14, name: 'Celeritas',image:'https://www.elleman.vn/wp-content/uploads/2020/08/29/183334/anh-bia_chadwick-boseman_qua-doi_elle-man_0820.jpg' },
      { id: 15, name: 'Magneta',image:'https://image.thanhnien.vn/w1024/Uploaded/2022/bzivoxbp/2020_01_03/wonderwoman20_jrov.jpg' },
      { id: 16, name: 'RubberMan',image:'https://static1.dienanh.net/360x720/upload/2018/05/11/hulk-va-chiec-quan-ki-dieu-bien-hinh-la-rach-sach-tru-quan-87efdf.jpg' },
      { id: 17, name: 'Dynama',image:'https://vcdn1-giaitri.vnecdn.net/2022/05/05/DoctorStrange2mmm-1651738078-4301-1651738447.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=hvLU0ITOvD2EhxFK8TD8Og' },
      { id: 18, name: 'Dr. IQ',image:'https://besthqwallpapers.com/Uploads/28-11-2020/147311/thumb2-the-flash-3d-art-superheroes-marvel-comics-fan-art.jpg' },
      { id: 19, name: 'Magma',image:'https://4.bp.blogspot.com/-hF3DteZfKAM/V_XIgGI1jGI/AAAAAAAALiU/aB6quomBb0kz047fzIfCszhmvlZJrIB2wCLcB/s640/Nh%25C3%25A2n%2Bv%25E1%25BA%25ADt%2BVision%2BMarvel.jpg' },
      { id: 20, name: 'Tornado',image:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/97/Scarlet_Witch.jpg/revision/latest?cb=20220501012641' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
 