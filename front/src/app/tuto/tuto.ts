import { Comments } from '../news/comments';

export class Tuto {
public listComments:Comments[]=[]
    constructor(
        public id:number=null,
        public title:string=null,
        public content:string=null,
        public created_at:Date=new Date(),
        public updated_at:Date=new Date()        
    ){ }
}
