import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailContainerStyle, thumbnailStyle, headerContentStyle, headerTextStyle, imageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired
}

export default AlbumDetail;