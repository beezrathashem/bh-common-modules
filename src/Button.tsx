import * as React from "react";
import { useEffect } from 'react'
import { Button as RNButton, Text, TouchableOpacity } from "react-native";
import type { ButtonProps } from "react-native";
import moment from 'moment';
import twrnc from "twrnc";
// import TrackPlayer from 'react-native-track-player';
// const twrnc = require('packages/ui-native/node_modules/twrnc')

export const Button = ({ title = "Cool Native", ...props }: ButtonProps) => {
  // return <RNButton title={title} {...props} />;
  //   useEffect(() => {
  //       const setup = async () => {
  //           // await TrackPlayer.setupPlayer()
  //
  //       }
  //       setup()
  //   }, [])

  return (
    <TouchableOpacity>
      <Text>{JSON.stringify(moment().format('MMMM Do YYYY, h:mm:ss a'))}</Text>
      <Text style={twrnc`text-red-200`}>heoooodi</Text>
    </TouchableOpacity>
  )
};
