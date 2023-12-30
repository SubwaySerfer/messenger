import Block from '@/core/Block';
import { template } from './index.tmpl';
import { SignupForm } from './SignupForm';
import { onSubmitForm } from '@/modules/forms/form';

export class SignupPage extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.SigninForm = new SignupForm({
      events: {
        submit: onSubmitForm,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
