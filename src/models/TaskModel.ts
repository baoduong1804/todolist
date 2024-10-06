export interface TaskModel{
    title:string,
    description: string,
    dueDate:Date,
    star:Date,
    end:Date,
    uids:string[],
    color?:string,
    fileUrls:string[]
}