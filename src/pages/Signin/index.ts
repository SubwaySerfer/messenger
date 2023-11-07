import Block from '../../modules/utils/Block';
import template from './index.hbs';
import { SigninForm } from './SiginForm';

export class SigninPage extends Block {
  constructor(title?: string) {
    super(title);
  }

  init() {
    this.children.SigninForm = new SigninForm({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
