import { AfterViewInit, Directive, ElementRef } from '@angular/core'

@Directive({
    selector: '[inputFocus]'
})
export class InputFocus implements AfterViewInit {

    constructor(private elementRef: ElementRef) {
        // alert("input focus invoked");
        // console.log(this.elementRef);
    }

    ngAfterViewInit() {
        // console.log(this.elementRef);
        setTimeout(() => {
            this.elementRef.nativeElement.blur();
            this.elementRef.nativeElement.focus();
            this.elementRef.nativeElement.setAttribute('style', 'border-color: red');
        }, 0);
    }
}
