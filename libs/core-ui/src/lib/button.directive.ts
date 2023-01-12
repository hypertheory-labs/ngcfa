import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'a[htUiButton],button[htUiButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input() variant?: UiVariants;
  @Input() size?: UiButtonSizes;
  constructor(private el: ElementRef<HTMLElement>) {
    const theElement = el.nativeElement;

    theElement.classList.add('btn');
  }

  ngOnInit() {
    const theElement = this.el.nativeElement;
    if (this.variant) {
      theElement.classList.add(UI_VARIANTS[this.variant]);
    }
    if (this.size) {
      theElement.classList.add(UI_BUTTON_SIZES[this.size]);
    }

    // if the element doesn't have a type attribute and it is a button then add the type attribute of 'button'

    if (isMissingTypeAttribute(theElement) && isButton(theElement)) {
      theElement.setAttribute('type', 'button');
    }
  }
}

const UI_VARIANTS = {
  primary: 'btn-primary',
  warning: 'btn-warning',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
} as const;

type UiVariants = keyof typeof UI_VARIANTS;

const UI_BUTTON_SIZES = {
  small: 'btn-sm',
  large: 'btn-lg',
  xsmall: 'btn-xs',
};

type UiButtonSizes = keyof typeof UI_BUTTON_SIZES;
function isMissingTypeAttribute(element: HTMLElement) {
  return !element.hasAttribute('type');
}

function isButton(element: HTMLElement) {
  return element.tagName == 'BUTTON';
}
