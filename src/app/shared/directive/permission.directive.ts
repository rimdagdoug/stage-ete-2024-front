import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermissionDirective]'
})
export class PermissionDirective implements OnInit{

  @Input('appPermissionDirective') roleToCheck!: string;

  constructor(private el: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,

  ) { }

  ngOnInit(): void {
    const role : string | undefined = localStorage.getItem('role')?.toString();
    role === this.roleToCheck ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
  }

}
