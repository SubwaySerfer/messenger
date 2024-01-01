import Block from '@/core/Block';
import { template } from './index.tmpl';
import { HTTPTransport } from '@/core/HttpTransport';
import { ENDPOINTS } from '@/types/endpoints';

interface AvatarBlockProps {
  nameProfile?: string;
  imageUrl?: string;
}
export const setAvatar = (avatar: string | undefined) => ({
  imageUrl: HTTPTransport.API_URL + ENDPOINTS.resources + avatar || '',
});

export class AvatarBlock extends Block<AvatarBlockProps> {
  constructor(props: AvatarBlockProps) {
    super('div', {
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
