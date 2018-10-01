export default class Dairy{
    name: string;
    comments: string[];

    constructor(name: string, comments = []){
        this.name = name;
        this.comments = comments;
    }

    addComment(comment: string){
        this.comments.push(comment);
    }
}