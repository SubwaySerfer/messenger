import Block from '@/core/Block';
import { template } from './index.tmpl';
import { SignupForm } from './SignupForm';

interface SignupPageProps {
  title?: string;
}

export class SignupPage extends Block<SignupPageProps> {
  constructor(props: SignupPageProps) {
    super('div', props);
  }

  init() {
    this.children.SigninForm = new SignupForm({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
