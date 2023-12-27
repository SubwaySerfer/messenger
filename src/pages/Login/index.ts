import Block from '@/core/Block';
import { template } from './index.tmpl';
import { LoginForm } from './modules';

interface LoginPageProps {
  title?: string;
}

export class Login extends Block<LoginPageProps> {
  constructor(props: LoginPageProps) {
    super('div', props);
  }

  init() {
    this.children.LoginForm = new LoginForm({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
