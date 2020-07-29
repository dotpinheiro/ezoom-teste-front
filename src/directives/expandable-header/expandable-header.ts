import {Directive, ElementRef, Renderer2} from '@angular/core';

/**
 * Generated class for the ExpandableHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[expandable-header]' // Attribute selector
})
export class ExpandableHeaderDirective {

  constructor(private _element: ElementRef, private renderer: Renderer2) {
  }

}
