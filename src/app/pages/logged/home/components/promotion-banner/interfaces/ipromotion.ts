export interface IPromotion {
    image: string;
    author: {
        name: string;
        login: string;
        picture: string;
    },
    expiration_date: Date;
    start_date: Date;
    text_data: string;
    promoID: string;
}