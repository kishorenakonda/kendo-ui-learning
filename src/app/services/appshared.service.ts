import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppSharedService {
    /**
     * @method - Sorting the Array based on the key
     * @param list - Array List
     * @param fieldTobeSorted - Based on this key it will sorted : field should be of type String
     * @param fieldType - Based on this type it will sort the data : fieldType should be of type String
     * @param sortBy - Sorting either by 'ascending' or 'descending' : sortBy should be of type String
     */
    getSortedList(list: any, fieldTobeSorted: string, fieldType: string, sortBy: string) {
        const field = fieldTobeSorted;
        fieldType = fieldType.toLowerCase();
        sortBy = sortBy.toLowerCase();
        if (fieldType === 'string') {
            if (sortBy === 'ascending') {
                const sortedList = list.sort(function (a: any, b: any) {
                    const x = a[field].toLowerCase();
                    const y = b[field].toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                });
                return sortedList;
            } else if (sortBy === 'descending') {
                const sortedList = list.sort(function (a: any, b: any) {
                    const x = a[field].toLowerCase();
                    const y = b[field].toLowerCase();
                    return x > y ? -1 : x < y ? 1 : 0;
                });
                return sortedList;
            }
        } else if (fieldType === 'integer') {
            if (sortBy === 'ascending') {
                const sortedList = list.sort(function (a: any, b: any) {
                    const x = a[field];
                    const y = b[field];
                    return x < y ? -1 : x > y ? 1 : 0;
                });
                return sortedList;
            } else if (sortBy === 'descending') {
                const sortedList = list.sort(function (a: any, b: any) {
                    const x = a[field];
                    const y = b[field];
                    return x > y ? -1 : x < y ? 1 : 0;
                });
                return sortedList;
            }
        }
    }

}
