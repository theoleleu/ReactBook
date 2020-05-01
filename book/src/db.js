import PouchDB from 'pouchdb';

export default class DB {
    constructor(name){
        this.db = new PouchDB(name);
    }
    async getAllPages(){
        let allPages= await this.db.allDocs({include_docs: true});
        let pages ={};

        allPages.rows.forEach(p => pages[p.id] = p.doc);
        return pages;
    }
    async createPage(page){
        page.createAt= new Date();
        page.updateAt = new Date();

        const res = await this.db.post({...page});
        return res;
    }
}