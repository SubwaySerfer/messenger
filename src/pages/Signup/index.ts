import Block from '../../core/Block';
import template from './index.hbs';
import { SignupForm } from './SignupForm';

interface SignupPageProps {
  title?: string;
}

export class SignupPage extends Block<SignupPageProps> {
  constructor(props: SignupPageProps) {
    super(props);
  }

  init() {
    this.children.SignupForm = new SignupForm({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
