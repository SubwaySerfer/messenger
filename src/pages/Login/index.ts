import Block from '@/core/Block';
import { template } from './index.tmpl';
import { LoginForm } from './modules';

export class Login extends Block {
  constructor() {
    super('', {});
  }

  // init() {
  //   this.children.LoginForm = new LoginForm({});
  // }

  render() {
    return this.compile(template, this.props);
  }
}
