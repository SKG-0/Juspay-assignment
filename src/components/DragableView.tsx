import React, {
  useRef,
  ReactNode,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Image,
  useWindowDimensions,
  Text,
} from 'react-native';
import {Easing} from 'react-native-reanimated';

const DragableView = forwardRef((props, ref) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const angle = useRef(new Animated.Value(0)).current;

  const {width, height} = useWindowDimensions();

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useImperativeHandle(ref, () => ({
    moveXBy50() {
      Animated.timing(pan, {
        toValue: {x: (pan.x as any)._value + 50, y: (pan.y as any)._value},
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },

    moveYBy50() {
      Animated.timing(pan, {
        toValue: {x: (pan.x as any)._value, y: (pan.y as any)._value + 50},
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
    moveXY50() {
      Animated.timing(pan, {
        toValue: {x: (pan.x as any)._value + 50, y: (pan.y as any)._value + 50},
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
    rotate360() {
      Animated.timing(angle, {
        toValue: 360,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
    goToInitPos() {
      Animated.timing(pan, {
        toValue: {x: 0, y: 0},
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
    goToRandomPos() {
      Animated.timing(pan, {
        toValue: {x: getRandomNumber(1, 100), y: getRandomNumber(1, 100)},
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    },
    sayHello() {
      opacity.setValue(1);

      Animated.timing(opacity, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    },
    increaseSize() {
      Animated.timing(scaleValue, {
        toValue: (scaleValue._value as any) + 0.5,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    },
    decreaseSize() {
      Animated.timing(scaleValue, {
        toValue: (scaleValue._value as any) - 0.5,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    },
  }));

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: e => {
        // console.log((pan.y as any)._value, height * 0.45);
        // if (
        //   (pan.x as any)._value < -width / 2 ||
        //   (pan.x as any)._value > width / 2
        // ) {
        //   pan.setValue({x: 0, y: 0});
        // }
        // if ((pan.y as any)._value < -height * 0.45) {
        //   console.log('out of bound');
        //   Animated.timing(pan, {
        //     toValue: {x: 0, y: 0},
        //     duration: 1000,
        //     easing: Easing.linear,
        //     useNativeDriver: true,
        //   }).start();
        // }
        pan.extractOffset();
      },
    }),
  ).current;

  const spin = angle.interpolate({
    inputRange: [0, 90, 180, 270, 360],
    outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        transform: [
          {translateX: pan.x},
          {translateY: pan.y},
          {rotate: spin},
          {scale: scaleValue},
        ],
      }}
      {...panResponder.panHandlers}>
      <Animated.Text
        style={{
          opacity: opacity,
          color: '#fff',
          backgroundColor: 'blue',
          paddingHorizontal: '.1%',
          paddingVertical: '.5%',
          textAlign: 'center',
          borderRadius: 25,
        }}>
        Hello
      </Animated.Text>
      <Image source={props.obj} style={styles.box} />
    </Animated.View>
  );
});
const styles = StyleSheet.create({
  box: {height: 70, width: 70},
});
export {DragableView};
