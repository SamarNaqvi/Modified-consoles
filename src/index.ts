export class ConsoleModifier{

    static success (str:string){
        console.log(`%c ${str}`, "color:green");
    }

    static danger (str:string){
        console.log(`%c ${str}`, "color:red");
    }

    static warning (str:string){
        console.log(`%c ${str}`, "color:orange");
    }

    static genericFormatter(str:string, stylings:string)
    {
        console.log(`%c ${str}`, stylings)
    }

    static groupConsole(obj: {title:string, groupMessages:string[]})
    {
        console.group(obj.title);
        for (let msg in obj.groupMessages)
            {
                console.log(obj.groupMessages[msg]);
            }
        console.groupEnd();
    }
    
};