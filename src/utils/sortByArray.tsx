type obj = {[key: string] : any}

export function sortByKey<T>(array: T[], key: keyof T): T[] {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}