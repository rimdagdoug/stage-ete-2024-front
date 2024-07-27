import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showButton'
})
export class ShowButtonPipe implements PipeTransform {

  transform(status: unknown, ...args: unknown[]): boolean {
    // Vérifie si la valeur est "truthy"
    const role = localStorage.getItem('role')
    return ( role == 'DEVELOPER' && status == "AWAITING_DEVELOPER_INPUT" ) 
    ||  ( role == 'MANAGER' && status == "AWAITING_MANAGER_VALIDATION" ) 
    ||  ( role == 'RH' && status == "AWAITING_HR_APPROVAL" );
  }

}