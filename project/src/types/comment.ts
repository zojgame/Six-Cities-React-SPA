export type Comment = {
    description: string,
    rating: number,
    commentatorName: string,
    photo: string,
    date: string
}

export type ApiComment = {
    comment: string,
    rating: number,
    hotelId : string
}
