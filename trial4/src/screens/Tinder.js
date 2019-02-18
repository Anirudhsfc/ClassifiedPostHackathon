import React, { Component } from 'react';
import { Image,TouchableOpacity } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,Content } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {connect} from 'react-redux'

//images
import one from './../images/1.jpeg'
import two from './../images/2.jpeg'
import three from './../images/3.jpeg'
import four from './../images/4.jpeg'
import five from './../images/5.jpeg'
import six from './../images/6.jpeg'
import seven from './../images/7.jpeg'

//api calls

import axios from 'axios';



const getArrayForSwipe = async(position) => {
        const url = `https://nighthawks18.herokuapp.com/jobs?filter=${position}`;
        console.log(url)
       return axios.get(url).then((respose)=>{
            return respose
        }).catch((error)=>{

            console.log(error+'tinder data loading error')
            
        })
    }
    


class TinderSwipe extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }   



    componentDidMount(){
            console.log(this.props.position);
            console.log('lololololol')
            getArrayForSwipe(this.props.position).then((response)=>{
                console.log(response.data);
                this.setState(()=>{
                    return {
                        tinderArray: response.data
                    }
                })
            })
    }

    getRandom = () => {
        let value =  Math.random()*100000000;
        console.log(value)
        let val1 = Math.round(value/7); 
        value = Math.round(value-(val1*7)) < 0 ? -1*Math.round(value-(val1*7)) : 1*Math.round(value-(val1*7));
        console.log(value)
        switch(value){
            case 1: return <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wise-2ff49.appspot.com/o/image1.jpeg?alt=media&token=be3fe015-bbad-4674-b3b3-1b2095ef97fc'}} style={{height:300, flex:1, flexDirection:'row'}}/>
            case 2: return <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wise-2ff49.appspot.com/o/image2.jpeg?alt=media&token=3c3fa187-f81e-4734-8c39-85aa6b9aefcc'}} style={{height:300, flex:1, flexDirection:'row'}}/>
            case 3: return <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wise-2ff49.appspot.com/o/image3.jpeg?alt=media&token=acad9071-2e97-4a3f-9555-7356cb1c7d22'}} style={{height:300, flex:1, flexDirection:'row'}}/>
            case 4: return <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wise-2ff49.appspot.com/o/image4.jpeg?alt=media&token=7c4473b4-5b51-4187-af45-f83872b4d367'}} style={{height:300, flex:1, flexDirection:'row'}}/>
            case 5: return <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wise-2ff49.appspot.com/o/image5.jpeg?alt=media&token=24537de0-3c74-41ca-b92a-1f6b6d309de8'}} style={{height:300,flex:1, flexDirection:'row'}}/>
            case 6: return <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wise-2ff49.appspot.com/o/image6.jpeg?alt=media&token=7bcc8d4e-4e7f-4630-9bd6-98a1c5f06f80'}} style={{height:300, flex:1, flexDirection:'row'}}/>
            case 7: return <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wise-2ff49.appspot.com/o/image7.jpeg?alt=media&token=87d4c5a2-25ba-468a-a2c8-15f734e3c0c2'}} style={{height:300, flex:1, flexDirection:'row'}}/>
            default: return <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/wise-2ff49.appspot.com/o/image7.jpeg?alt=media&token=87d4c5a2-25ba-468a-a2c8-15f734e3c0c2'}} style={{height:300, flex:1, flexDirection:'row'}}/>

         }

    }

  render(){

    if(this.state.tinderArray){
        return (
      
        
            <Container>

              <Content>
                  <View style={{backgroundColor:'black'}}>
                <DeckSwiper
                  dataSource={this.state.tinderArray}
                  renderItem={item =>
                    
                    <View style={{padding:5}}>
                  
                    <Card style={{ elevation: 0, flex:1, }}>
                    <CardItem>
                    <View style={{ color: '#222f3e', flex:1,flexDirection:'row'}}>
                    <Icon name="md-bookmark" style={{paddingLeft:5}}
                         />
                    </View>
                    </CardItem>
                    <View style={{flexDirection:'row',justifyContent:'center', alignContent:'center'}}>
                    <CardItem style={{color: '#e6b31e'}} button >
                        <Text style={{fontSize:30, fontWeight:'bold', alignContent:'center', justifyContent:'center', color:'#e6b31e'}}>{item.DISPLAYNAME}</Text>        
                    </CardItem>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center', alignContent:'center', fontSize:25}}>
                    <CardItem>
                        <Text style={{color: '#e6b31e'}}>{item.jobtitle}</Text>
                    </CardItem>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center', alignContent:'center', fontSize:25}}>
                    <CardItem>
         
                            <Text style={{color: '#e6b31e'}}>Salary: {item.salary}</Text>
                        

                     
                    </CardItem>
                    <CardItem>
                    <Text style={{color: '#e6b31e'}}>Rating: {item.percentage}</Text>
                    </CardItem>

                    </View>
                    <CardItem>
                            {this.getRandom()}
                
                    

                    </CardItem>
                    

                     
                    </Card>
                   
                   <View>
                   
                   
                   </View>
                                   
                
              </View>
          
                  }
                />
                    </View>
               </Content>     
            </Container>
            
            
          );
    
    }else{
        return(
            <View/>
        )
    }


  }
 
   
  }

  
  const mapStateToProps = (state) => {
      return {
        position: state.position
      }
  }

  export default connect(mapStateToProps, undefined)(TinderSwipe);
