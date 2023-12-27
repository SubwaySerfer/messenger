import Block from '../../core/Block';
import template from './index.hbs';
import { INPUT_PATTERNS } from '../../types/patterns';
import { onFocusInput } from '../FormUserData/form';

interface InputProps {
  input_type: string;
  input_label?: string;
  input_id: string;
  value?: string;
  input_placeholder?: string;
  input_name: string;
  pattern?: INPUT_PATTERNS;
  events?: {
    change?: () => void;
    focusout?: (event: HTMLFormElement) => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        focus: onFocusInput,
      },
    });
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element!.querySelector('input')?.addEventListener(
        eventName,
        events[eventName]
      );
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element!.querySelector('input')?.removeEventListener(
        eventName,
        events[eventName]
      );
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
