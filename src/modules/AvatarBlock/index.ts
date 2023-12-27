import Block from '@/core/Block';
import { template } from './index.tmpl';

interface AvatarBlockProps {
  showName?: string;
  avatar?: string;
  imageAlt?: string;
  nameProfile?: string;
}

export class AvatarBlock extends Block<AvatarBlockProps> {
  constructor(props: AvatarBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
