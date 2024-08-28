import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import LandingApi from '../../../api/LandingApi';
import MainLayout from 'layouts/mainLayout';
import Header from 'organisms/header';
import {PremiumBoxPropsType} from 'components/organisms/premiumBox';
import {PremiumBoxContainer} from 'components/organisms/premiumBoxContainer/premiumBoxContainer.component';
import FreeTrail from 'components/organisms/freeTrail';
import {PriceBoxContainer} from 'components/organisms/priceBoxContainer/priceBoxContainer.component';
import ActionContainer from 'components/organisms/actionContainer';
import * as AllIcons from 'assets/svg';
import FooterLinks from 'components/organisms/footerLinks';
import {LandingLatestScreenStyle} from './LandingLatestScreen.style';
import {LandingLatestScreenPropsType} from './LandingLatestScreen.type';
import {LandingLatestScreenDefaultProps} from './LandingLatestScreen.default';

export const data = {
  header: {
    image: 'YoutubeLogo',
  },
  flagBox: {
    image: 'YoutubeIcon',
    text: 'Youtube Premium',
  },
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
  freeTrialEnabled: {
    title: 'not sure yet?',
    text: 'Enable Free Trial',
  },
  prices: [
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
  actionContainer: {
    title: null,
    buttonTitle: '7 Day Trial and Plan',
    cancelText: 'NO PAYMENT NOW',
    icon: 'ShieldIcon',
  },
  footerLinks: [
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
  closeButton: {
    icon: 'YoutubeIcon',
  },
};

export const LandingLatestScreen: FunctionComponent<
  LandingLatestScreenPropsType
> = inProps => {
  const props = inProps as LandingLatestScreenDefaultProps;
  return (
    <MainLayout>
      <Header
        onPressCloseButton={() => LandingApi.requests().closeMobıleApp(999)}
      />
      <View style={LandingLatestScreenStyle.container}>
        <PremiumBoxContainer
          premiumBoxes={data.premiumBoxes as PremiumBoxPropsType[]}
        />
        <FreeTrail
          headerText="not sure yet?"
          descriptionText="Enable Free Trial"
          value={true}
        />
        <PriceBoxContainer priceBoxes={data.prices} />
        <ActionContainer
          buttonTitle={data.actionContainer.buttonTitle}
          cancelText={data.actionContainer.cancelText}
          icon={data.actionContainer.icon as keyof typeof AllIcons}
        />
        <FooterLinks data={data.footerLinks} />
      </View>
    </MainLayout>
  );
};
