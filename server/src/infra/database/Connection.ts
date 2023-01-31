export default interface Connection {
    query(query: string, values?: any[]): Promise<any>;
    close (): Promise<void>;
}