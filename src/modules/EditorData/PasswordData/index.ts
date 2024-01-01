import Block from '@/core/Block';
import { template } from './index.tmpl';
import { LineHelper } from '@/components/LineHelper';
import { ProfileInput } from '@/components/ProfileInput';
import FormValidator from '@/utils/Validator';
import { ButtonSubmit } from '@/components';

interface PasswordDataProps {
  formId: string;
  events: {
    submit?: (e: SubmitEvent) => void;
  };
}

export class PasswordData extends Block<PasswordDataProps> {
  constructor(props: PasswordDataProps) {
    super('div', props);
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
        input_name: 'newPassword',
        id: 'newPassword',
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
        input_name: 'newPassword',
        id: 'newPasswordRepeat',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.ButtonSubmit = new ButtonSubmit({
        buttonTitle: 'Сохранить',
        type: 'submit',
        id: 'dataForm',
        class: 'button-submit',
      }));
    (this.children.LineHelper = new LineHelper({})),
      (this.children.LineHelper1 = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
