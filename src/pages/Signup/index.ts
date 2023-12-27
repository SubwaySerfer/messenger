import Block from '../../core/Block';
import template from './index.hbs';
import { SignupForm } from './SignupForm';

// interface SignupPageProps {
//   title?: string;
// }

export class SignupPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.SignupForm = new SignupForm();
  }

  render() {
    return this.compile(template, this.props);
  }
}
