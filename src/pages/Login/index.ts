import Block from '../../core/Block';
import template from './index.hbs';
import { LoginForm } from './modules';

// interface LoginPageProps {
//   title?: string;
// }

export class LoginPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this._children.LoginForm = new LoginForm();
  }

  render() {
    return this.compile(template, this.props);
  }
}
