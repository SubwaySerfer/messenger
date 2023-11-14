import Block from '../utils/Block';
import template from './index.hbs';

interface AvatarBlockProps {
  showName?: string;
  avatar?: string;
  imageAlt?: string;
  nameProfile?: string;
}

export class AvatarBlock extends Block<AvatarBlockProps> {
  constructor(props: AvatarBlockProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
