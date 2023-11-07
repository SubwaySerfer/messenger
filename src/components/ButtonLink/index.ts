import template from './index.hbs';
import Block from '../../modules/utils/Block';

// export const ButtonLink = ({ to, textLink, exitMode }) => {
//   return Handlebars.compile(tmpl)({ to, textLink, exitMode });
// };

interface ButtonLinkProps {
  to?: string;
  textLink?: string;
  exitMode?: boolean;
}

export class ButtonLink extends Block {
  constructor(props: ButtonLinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
