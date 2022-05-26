export interface Product {
    id: string;
    name: string;
    picture: string;
    price: number;
    store_quantity: { // para definir o máximo que um cliente pode comprar;
        maximum: number;
        minimum: number;
        actual?: number; // quantidade de itens selecionados no carrinho.
    }

}
