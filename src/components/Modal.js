import React from 'react';
import {View, Modal, Text, StyleSheet} from 'react-native';
import {Icon} from '.';
import {colors} from '../library/constants/colors';
import {check, loading, xOctagon} from '../library/constants/icons';
import {styleIcon} from '../library/styles';

const ModalComponent = ({visible, msg, isLoading, isError, confirmed}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{msg}</Text>
          {isLoading && <Icon icon={loading} style={styleIcon.iconMid} />}
          {isError && (
            <Icon icon={xOctagon} style={[styleIcon.iconMid, styles.icon]} />
          )}
          {confirmed && (
            <Icon icon={check} style={[styleIcon.iconMid, styles.check]} />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    tintColor: 'red',
  },
  check: {
    tintColor: colors.green,
  },
});

export default ModalComponent;
