import {FooterLinksPropsType} from './footerLinks.type';

export type FooterLinksDefaultProps = FooterLinksPropsType &
  Required<Pick<FooterLinksPropsType, keyof typeof footerLinksDefaultProps>>;

export const footerLinksDefaultProps: FooterLinksPropsType = {
  data: [
    {
      title: 'Privacy Policy',
      url: 'https://www.google.com',
    },
    {
      title: 'Terms of Service',
      url: 'https://www.google.com',
    },
    {
      title: 'Restore',
      url: 'https://www.google.com',
    },
  ],
};
