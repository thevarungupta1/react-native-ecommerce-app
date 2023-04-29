import { View, Text } from 'react-native'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishlist } from '../redux/actions/WishListAction'
import { FlatList } from 'react-native-gesture-handler';
import CartItem from '../common/CartItem';

const Wishlist = () => {
  const dispatch = useDispatch();
  const listData = useSelector(state => state.Reducers2);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={listData}
        renderItem={({ item, index }) => {
          return (
            <CartItem 
            isWishlist={'swe'}
              item={ item }
              onRemoveFromWishList={() => {
                dispatch(removeFromWishlist(index))
              }}              
            />
          )
        }}
      />
    </View>
  )
}

export default Wishlist