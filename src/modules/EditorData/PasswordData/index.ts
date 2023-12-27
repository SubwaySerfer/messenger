import Block from '../../../core/Block';
import template from './index.hbs';
import { LineHelper } from '../../../components/LineHelper';
import { ProfileInput } from '../../../components/ProfileInput';
import FormValidator from '../../../utils/Validator';

interface PasswordDataProps {
  formId: string;
}

export class PasswordData extends Block<PasswordDataProps> {
  constructor(props: PasswordDataProps) {
    super(props);
  }

  init() {
    (this.children.OldPasInput = new ProfileInput({
      inputLabel: 'Старый пароль',
      inputPlaceholder: '•••••••••',
      input_name: 'oldPassword',
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        },
      },
    })),
      (this.children.NewPasInput = new ProfileInput({
        inputLabel: 'Новый пароль',
        inputPlaceholder: '•••••••••••',
        input_name: 'new_password',
        id: 'new_password',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.RepeatNewPasInput = new ProfileInput({
        inputLabel: 'Повторите новый пароль',
        inputPlaceholder: '•••••••••••',
        input_name: 'repeat_password',
        id: 'repeat_password',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.LineHelper = new LineHelper({})),
      (this.children.LineHelper1 = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
