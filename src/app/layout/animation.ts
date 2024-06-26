import { trigger, state, style, animate, transition } from "@angular/animations";

export const slideInOutAnimation = 
    trigger('slideInOut', [
        state('in', style({
            'transform': 'translate3d(0, 0, 0)'
        })),
        state('out', style({
            'transform': 'translate3d(50%, 0, 0)'
        })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
]);