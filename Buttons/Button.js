import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../Constants/colors'

const Button = (props) => {
        const filledBgColor = props.color || COLORS.primary;
        const outlinedColor = COLORS.white;
        const bgColor = props.filled ? filledBgColor : outlinedColor;
        const textColor = props.filled ? COLORS.white : COLORS.primary;
  return (
    <TouchableOpacity style={{...styles.button,
                              ...{backgroundColor: bgColor},
                              ...props.style
    }}
     onPress={props.onPress} >  

     <Text style={{fontSize: 18, ... { color: textColor}}} >{props.title}
     </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
       
        paddingBottom: 16,
        paddingVertical: 15,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default Button