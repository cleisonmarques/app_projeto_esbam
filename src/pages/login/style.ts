import { Dimensions, StyleSheet } from "react-native";
export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',        

    },
    boxtop:{
        height:Dimensions.get('window').height/3,
        marginTop:100,
        width: 30,
        resizeMode: 'contain',
        alignItems:'center',

    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%', 
        resizeMode:'center',
        alignItems:'center',
        marginTop: 100,
        //backgroundColor:'green', 

    },
    bottom:{
        height:Dimensions.get('window').height/3,
        width:'100%', 
        alignItems:'center',
        justifyContent:'center',
        marginTop:'-50'
        

    },

    
    buttom:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'250',
    backgroundColor:'red',
    width:'200',
    height:'40',
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 10,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    
    },


    caixa:{
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
        color: '#fff',
    },


})