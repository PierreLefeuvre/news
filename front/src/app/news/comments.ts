export class Comments{
    constructor( 
        public id:number=null,
        public news_id:number=null,
        public user_id:number=null,
        public comment:string=null,
        public created_at:Date=new Date(),
        public updated_at:Date=new Date(),
        public name:string=null
        ){}
}