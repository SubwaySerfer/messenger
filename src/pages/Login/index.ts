import Block from '@/core/Block';
import { template } from './index.tmpl';
import { LoginForm } from './modules';
import { onSubmitForm } from '@/modules/forms/form';

export class Login extends Block {
  constructor() {
    super('', {});
  }

  init() {
    this.children.LoginForm = new LoginForm({
      events: {
        submit: onSubmitForm,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
