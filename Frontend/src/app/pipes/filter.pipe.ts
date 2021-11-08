import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 //@ts-ignore
  transform(value: any[], filterString: string, propName: string): any[] {

    const resultArray = [];
    if (value) {

      if (value.length === 0 || filterString === '' || propName === '') {
        return value;
      }

      for (const item of value) { 
        if (typeof item[propName] == 'string') {
          filterString.toLocaleLowerCase();
          if (filterString) {
            return value.filter((i) => i[propName].toLocaleLowerCase().indexOf(filterString) !== -1);
          } else {
            return value;
          }
          break;
        }
        else {
          for (const item2 of value) {
            if (item2[propName] === filterString) {
              resultArray.push(item2);
            }
          }
          return resultArray;
        }
        break;
      }
    }
  }
}
