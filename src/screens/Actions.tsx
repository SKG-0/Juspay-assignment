import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import logo from '../images/scratch.png';
const Actions = ({navigation}) => {
  const actions = [
    {
      action: 'Move X by 50',
    },
    {
      action: 'Move Y by 50',
    },
    {
      action: 'Rotate 360',
    },
    {
      action: 'goto (0,0)',
    },
    {
      action: 'Move X=50,Y=50',
    },
    {
      action: 'go to random position',
    },
    {
      action: 'Say hello',
    },
    {
      action: 'Increase size',
    },
    {
      action: 'Dec size',
    },
    {
      action: 'Repeat',
    },
  ];
  const [currentAction, setCurrentAction] = useState('1');
  const [action1, setAction1] = useState([] as any);
  const [action2, setAction2] = useState([] as any);
  return (
    <View style={{flex: 1}}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => {
            navigation.navigate('Home', {
              action1: action1,
              action2: action2,
            });
          }}>
          <Text style={styles.doneBtnText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.options}>
          <Text style={styles.code}>CODE</Text>
          {actions.map(action => (
            <TouchableOpacity
              onPress={() => {
                if (currentAction == '1') {
                  setAction1([...action1, action.action]);
                } else if (currentAction == '2') {
                  setAction2([...action2, action.action]);
                }
              }}>
              <Text style={styles.action}>{action.action}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.options}>
          <Text style={[styles.code, {color: 'green'}]}>ACTION</Text>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              onPress={() => {
                setCurrentAction('1');
              }}>
              <Text
                style={[
                  styles.actionButton,
                  {
                    backgroundColor: currentAction == '1' ? 'green' : 'gray',
                  },
                ]}>
                Action 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCurrentAction('2');
              }}>
              <Text
                style={[
                  styles.actionButton,
                  {
                    backgroundColor: currentAction == '2' ? 'green' : 'gray',
                  },
                ]}>
                Action 2
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {currentAction == '1' ? (
              <>
                {action1.map((item: string) => (
                  <Text style={styles.action}>{item}</Text>
                ))}
              </>
            ) : (
              <>
                {action2.map((item: string) => (
                  <Text style={styles.action}>{item}</Text>
                ))}
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#068FFF',
    height: 60,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: '70%',
    width: '35%',
  },
  options: {
    borderColor: 'black',
    borderWidth: 0.5,
    width: '50%',
    marginHorizontal: '1%',
    marginVertical: '1%',
    borderRadius: 10,
  },
  doneBtn: {
    color: 'white',
    marginRight: '5%',
  },
  doneBtnText: {color: 'white', fontSize: 16},
  code: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '4%',
    color: '#068FFF',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
    marginBottom: '3%',
  },
  action: {
    color: 'white',
    backgroundColor: '#068FFF',
    paddingVertical: '3%',
    textAlign: 'center',
    marginVertical: '3%',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: '3%',
  },
});
export default Actions;
