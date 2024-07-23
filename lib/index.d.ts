export declare class ConsoleModifier {
    static success(str: string): void;
    static danger(str: string): void;
    static warning(str: string): void;
    static genericFormatter(str: string, stylings: string): void;
    static groupConsole(obj: {
        title: string;
        groupMessages: string[];
    }): void;
}
