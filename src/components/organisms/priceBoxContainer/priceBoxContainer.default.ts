import {PriceBoxContainerPropsType} from './priceBoxContainer.type';

export type PriceBoxContainerDefaultProps = PriceBoxContainerPropsType &
  Required<
    Pick<PriceBoxContainerPropsType, keyof typeof priceBoxContainerDefaultProps>
  >;

export const priceBoxContainerDefaultProps: PriceBoxContainerPropsType = {
  priceBoxes: [
    {
      title: 'YEARLY ACCESS',
      saving: 'SAVE %89',
      price: '$0,11/day',
      boldPrice: '$39.99/year',
    },
    {
      title: '30-DAY FREE TRIAL',
      saving: '',
      price: '',
      boldPrice: 'then $6.99/week',
    },
  ],
};
