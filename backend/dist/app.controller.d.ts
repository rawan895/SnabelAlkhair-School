export declare class AppController {
    private users;
    getHello(): string;
    register(body: {
        name: string;
        email: string;
        password: string;
    }): {
        success: boolean;
        message: string;
    };
    login(body: {
        email: string;
        password: string;
    }): {
        success: boolean;
        message: string;
        name?: undefined;
        email?: undefined;
    } | {
        success: boolean;
        message: string;
        name: string;
        email: string;
    };
}
