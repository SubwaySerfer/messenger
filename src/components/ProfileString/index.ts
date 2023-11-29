import Block from '../../core/Block';
import template from './index.hbs';

interface ProfileStringProps {
  stringName: string;
  stringValue: string;
}

export class ProfileString extends Block<ProfileStringProps> {
  constructor(props: ProfileStringProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
