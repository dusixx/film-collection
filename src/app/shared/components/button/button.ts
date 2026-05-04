import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  variant = input<'primary' | 'secondary'>('primary');
  text = input<string>();
  routerLink = input<string | unknown[]>();
  style = input<string>();

  buttonClick = output<Event>();

  className = computed(() => {
    const classes = ['base'];

    if (this.variant() == 'primary') {
      classes.push('primary');
    } else {
      classes.push('secondary');
    }
    return classes.join(' ');
  });

  onClick(event: Event) {
    this.buttonClick.emit(event);
  }
}
