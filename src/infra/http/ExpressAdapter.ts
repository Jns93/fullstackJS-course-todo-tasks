import express, { Request, Response } from "express";
import Http from "./http";

export default class ExpressAdapter implements Http {
    app: any;

    constructor() {  
        // App Express
        this.app = express();
    }
    route(method: string, url: string, callback: Function): void {
        this.app[method](url, async function(req: Request, res: Response) {
            const output  = await callback(req.params, req.body);
            res.json(output);
        });
    }
    listen(port: number): void {
        this.app.listen(port);
    }

}