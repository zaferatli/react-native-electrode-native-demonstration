import {PremiumBoxContainerPropsType} from './premiumBoxContainer.type';

export type PremiumBoxContainerDefaultProps = PremiumBoxContainerPropsType &
  Required<
    Pick<
      PremiumBoxContainerPropsType,
      keyof typeof premiumBoxContainerDefaultProps
    >
  >;

export const premiumBoxContainerDefaultProps: PremiumBoxContainerPropsType = {
  premiumBoxes: [
    {
      icon: 'PlanetIcon',
      title: 'Ad Free Browsing',
      description: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: 'DownloadsIcon',
      title: 'Downloads',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: 'GoogleDriveIcon',
      title: 'Co-watch with Google Meet',
      description: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
};
