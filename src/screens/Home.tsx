import React, {useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DragableView} from '../components/DragableView';
import logo from '../images/scratch.png';
import reset from '../images/reset.png';
import sprite from '../images/sprite.png';
import ball from '../images/ball.png';
import play from '../images/play.png';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Home = ({navigation, route}) => {
  console.log(route.params);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const executeMovement = async () => {
    if (route.params != undefined) {
      console.log(route.params.action1);
      if (route.params.action1.length > 0) {
        route.params.action1.forEach((item: any) => {
          if (item === 'Move X by 50') {
            console.log('x present');
            ref1.current.moveXBy50();
          }
          if (item === 'Move Y by 50') {
            console.log('y present');
            ref1.current.moveYBy50();
          }
          if (item === 'Rotate 360') {
            ref1.current.rotate360();
          }
          if (item === 'goto (0,0)') {
            ref1.current.goToInitPos();
          }
          if (item === 'Move X=50,Y=50') {
            ref1.current.moveXY50();
          }
          if (item === 'go to random position') {
            ref1.current.goToRandomPos();
          }
          if (item === 'Say hello') {
            ref1.current.sayHello();
          }
          if (item === 'Increase size') {
            ref1.current.increaseSize();
          }

          if (item === 'Dec size') {
            ref1.current.decreaseSize();
          }

          if (item === 'Repeat') {
            ref1.current.moveXBy50();
          }
        });
      }
      if (route.params.action2.length > 0) {
        route.params.action2.map((item: any) => {
          if (item === 'Move X by 50') {
            ref2.current.moveXBy50();
          }
          if (item === 'Move Y by 50') {
            ref2.current.moveYBy50();
          }
          if (item === 'Rotate 360') {
            ref2.current.rotate360();
          }
          if (item === 'goto (0,0)') {
            ref2.current.goToInitPos();
          }
          if (item === 'Move X=50,Y=50') {
            ref2.current.moveXY50();
          }
          if (item === 'go to random position') {
            ref2.current.goToRandomPos();
          }
          if (item === 'Say hello') {
            ref2.current.sayHello();
          }
          if (item === 'Increase size') {
            ref2.current.increaseSize();
          }

          if (item === 'Dec size') {
            ref2.current.decreaseSize();
          }

          if (item === 'Repeat') {
            ref2.current.moveXBy50();
          }
        });
      }
    }
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
          <TouchableOpacity>
            <Image source={reset} style={styles.reset} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.canvas}>
        <DragableView
          obj={sprite}
          action={route.params?.action1}
          ref={ref1}></DragableView>
        <DragableView
          obj={ball}
          action={route.params?.action2}
          ref={ref2}></DragableView>
      </View>
      <View>
        <TouchableOpacity style={styles.play} onPress={() => executeMovement()}>
          <Image source={play} />
        </TouchableOpacity>
      </View>
      <View
        style={{marginTop: '5%', marginHorizontal: '2%', flexDirection: 'row'}}>
        <View style={styles.card}>
          <Image source={sprite} style={styles.sprite} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Actions');
            }}>
            <Text style={styles.cardText}>Add Actions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={ball} style={styles.sprite} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Actions');
            }}>
            <Text style={styles.cardText}>Add Actions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: '70%',
    width: '35%',
  },
  reset: {
    width: 30,
    height: 30,
    marginRight: '3%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#068FFF',
    height: 60,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '35%',
    height: '40%',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'column',
    marginHorizontal: '2%',
  },
  sprite: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  cardText: {
    backgroundColor: '#068FFF',
    color: 'white',
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
    marginTop: '3%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  canvas: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%',
    width: '100%',
  },
  play: {
    alignSelf: 'flex-end',
    marginTop: '-10%',
    backgroundColor: '#068FFF',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
