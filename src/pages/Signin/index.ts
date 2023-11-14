import Block from '../../modules/utils/Block';
import template from './index.hbs';
import { SigninForm } from './SiginForm';

interface SiginPageProps {
  title?: string;
}

export class SigninPage extends Block<SiginPageProps> {
  constructor(props: SiginPageProps) {
    super(props);
  }

  init() {
    this.children.SigninForm = new SigninForm({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
