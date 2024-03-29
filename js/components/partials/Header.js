/**
 * Header.js
 * Page header element
 *
 * @providesModule Header
 * @flow
 */
'use strict'; /* enables JS strict mode for any ES5 code */

/*
 * import modules 
 */

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
  } from 'react-native';

var {height, width} = Dimensions.get('window'); /* gets screen dimensions */

/* 
 * defines the Header class 
 */

var Header = React.createClass({

  /* 
   * specifies types for properties that this component receives 
   */

  propTypes: {
    containerStyle: View.propTypes.style,
  },

 /*
  * render(): returns JSX that declaratively specifies header UI
  */

  render() {
    const noTitle = this.props.noTitle;
    const childCount = (this.props.children && this.props.children.length) || 0;

    if (childCount === 4) {
      return (
        <View style={[styles.headerContainer, this.props.containerStyle]}>
          <View style={styles.header}>
            <View style={{position: 'absolute', left: 10}}>{this.props.children[0]}</View>
            {this.props.children[1]}
            <View style={{position: 'absolute', right: 10}}>{this.props.children[2]}</View>
            {this.props.children[3]}
          </View>
        </View>
      )
    } else if (childCount === 3) {
      return (
        <View style={[styles.headerContainer, this.props.containerStyle]}>
          <View style={styles.header}>
            <View style={{position: 'absolute', left: 10}}>{this.props.children[0]}</View>
            {this.props.children[1]}
            <View style={{position: 'absolute', right: 10}}>{this.props.children[2]}</View>
          </View>
        </View>
      )
    } else if (childCount === 2) {
      return (
        <View style={[styles.headerContainer, this.props.containerStyle]}>
          <View style={styles.header}>
            <View style={{position: 'absolute', left: 10}}>{this.props.children[0]}</View>
            <View style={{position: 'absolute', right: 10}}>{this.props.children[1]}</View>
          </View>
        </View>
      )
    } else {
      return (
        <View style={[styles.headerContainer, this.props.containerStyle]} />
      )
    }
  }
});

/*
 * CSS stylings
 */

var styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    width,
    height: height / 8.5,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: height / 25
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'AvenirNextCondensed-Regular'
  }
});

/*
 * export the module so it can be imported into other components
 */

module.exports = Header;