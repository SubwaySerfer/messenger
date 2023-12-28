import Block from '@/core/Block';
import { template } from './index.tmpl';
import { SignupForm } from './SignupForm';

export class SignupPage extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.SigninForm = new SignupForm({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
