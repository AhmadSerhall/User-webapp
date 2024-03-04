// animations.ts
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      stagger('100ms', [
        animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ], { optional: true })
  ])
]);
