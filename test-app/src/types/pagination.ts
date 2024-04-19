interface Pagination<T> {
    first: number;
    items: number;
    last: number;
    next: number;
    pages: number;
    prev: number | null;
    data: Array<T>
}