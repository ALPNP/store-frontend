import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'catFilter',
    pure: false
})
export class CatFilterPipe implements PipeTransform {
    transform(items: any[]): any {
        if (!items) {
            return items;
        }

        return items.filter(item => typeof item.parentId === 'undefined');
    }
}
