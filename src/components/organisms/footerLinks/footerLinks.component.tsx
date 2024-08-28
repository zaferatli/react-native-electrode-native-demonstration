import {Linking, Text, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {FooterLinksDefaultProps} from './footerLinks.default';
import {FooterLinksStyle} from './footerLinks.style';
import {FooterLinksPropsType} from './footerLinks.type';
import {PremiumBox} from '../premiumBox/premiumBox.component';
import {IconWithText} from 'components/molecules/iconWithText/iconWithText.component';
import {projectColors} from 'helper/stylesHelper';
import {widthPixel} from 'helper/sizeHelper';
import Button from 'components/atoms/button';

export const FooterLinks: FunctionComponent<FooterLinksPropsType> = inProps => {
  const props = inProps as FooterLinksDefaultProps;
  return (
    <View style={[FooterLinksStyle.container, props.style]}>
      {props.data.map((footerLink, index) => (
        <>
          <Button
            key={footerLink.title}
            type="link"
            text={footerLink.title}
            onPress={() => Linking.openURL(footerLink.url as string)}
          />
          {index !== props.data.length - 1 && (
            <Text key={footerLink.title} style={FooterLinksStyle.dashText}>
              {' '}
              -{' '}
            </Text>
          )}
        </>
      ))}
    </View>
  );
};
