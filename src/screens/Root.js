import React from 'react'
import Header from '../components/Header';
import AlbumList from '../components/AlbumList';

export default class Root extends React.Component {
  render() {
    return (
      <>
      <Header headerText='My great header :)' />
      <AlbumList />
      </>
    )
  }
}