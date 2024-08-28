import {PremiumBoxPropsType} from './premiumBox.type';

export type PremiumBoxDefaultProps = PremiumBoxPropsType &
  Required<Pick<PremiumBoxPropsType, keyof typeof premiumBoxDefaultProps>>;

export const premiumBoxDefaultProps: PremiumBoxPropsType = {
  icon: 'DownloadsIcon',
  title: 'Ad Free Browsing',
  description: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit',
};
