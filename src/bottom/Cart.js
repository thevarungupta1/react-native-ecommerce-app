import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import CartItem from '../common/CartItem';
import {removeFromCart} from '../redux/actions/CartAction';
import CustomButton from '../common/CustomButton';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CartItem
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No Item Added in Cart</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{marginBottom: 80}}>
          <CustomButton
            bgColor={'green'}
            textColor={'#fff'}
            title={'Checkout'}
            onPress={() => {}}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
