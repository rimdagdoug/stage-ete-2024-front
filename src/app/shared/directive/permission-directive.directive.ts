import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermissionDirective]'
})
export class PermissionDirectiveDirective implements OnInit{

  @Input('appPermissionDirective') roleToCheck!: string;

  constructor(private el: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,

  ) { }

  ngOnInit(): void {
    const role : string | undefined = localStorage.getItem('role')?.toString();
    console.log(role);
    console.log(this.roleToCheck);
    const isRoleValid = role === this.roleToCheck;
      if(isRoleValid) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainer.clear();
      }
  }

}
