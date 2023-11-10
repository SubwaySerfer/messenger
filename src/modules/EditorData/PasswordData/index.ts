import Block from '../../utils/Block';
import template from './index.hbs';
import { LineHelper } from '../../../components/LineHelper';
import { ProfileInput } from '../../../components/ProfileInput';
import FormValidator from '../../utils/Validator';

export class PasswordData extends Block {
  constructor(props: unknown) {
    super(props);
  }

  init() {
    (this.children.OldPasInput = new ProfileInput({
      inputLabel: 'Старый пароль',
      inputPlaceholder: '•••••••••',
      input_name: 'oldPassword',
    })),
      (this.children.NewPasInput = new ProfileInput({
        inputLabel: 'Новый пароль',
        inputPlaceholder: '•••••••••••',
        input_name: 'newPassword',
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
        input_name: 'repeatPassword',
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
