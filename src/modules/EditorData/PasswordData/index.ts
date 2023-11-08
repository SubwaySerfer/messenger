import Block from '../../utils/Block';
import template from './index.hbs';
import { LineHelper } from '../../../components/LineHelper';
import { ProfileInput } from '../../../components/ProfileInput';

export class PasswordData extends Block {
  constructor(props: unknown) {
    super(props);
  }

  init() {
    (this.children.OldPasInput = new ProfileInput({
      inputName: 'Старый пароль',
      inputPlaceholder: '•••••••••',
      input_name: 'oldPassword',
    })),
      (this.children.NewPasInput = new ProfileInput({
        inputName: 'Новый пароль',
        inputPlaceholder: '•••••••••••',
        input_name: 'newPassword',
      })),
      (this.children.RepeatNewPasInput = new ProfileInput({
        inputName: 'Повторите новый пароль',
        inputPlaceholder: '•••••••••••',
        input_name: 'repeatPassword',
      })),
      (this.children.LineHelper = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
