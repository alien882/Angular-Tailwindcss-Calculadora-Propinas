export interface MenuItem {
    id: number;
    name: string;
    price: number;
    quantity?: number;
}

export interface TipOptions {
    id: string;
    value: number;
    label: string;
}