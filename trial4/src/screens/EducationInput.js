import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Container, Content, DatePicker,Form, Input ,Label, H3, Item, Button,Card, H2} from 'native-base';
import {connect} from 'react-redux'

import {educationAdd} from './../actions/actions'

import moment from 'moment'


class EducationInput extends React.Component {

    constructor(props){
        super(props);
        this.state={
            institute: "",
            major: "",
            date: ""
        }
    }

    generateUserObject = () => {
        const userObject = {
            institute: this.state.institute,
            major: this.state.major,
            date: this.state.date
        }

        this.props.educationAdd(userObject);
        this.props.changeIt();

        this.setState(()=>{
            return {
                institute: "",
                major: "",
                date: ""
            }
        })
        console.log(this.state.company + "dwadaw")
    }

    render (){
        return(
  
           
                    <View style={{padding:5}}>
                    <Card style={{padding:5}}>
                    <Form style={{margin:2}}>
                        <Item stackedLabel>
                            <Label><H3>Educational Institute</H3></Label>
                            <Input value={this.state.institute} onChangeText={(institute)=>{
                                this.setState(()=>{
                                    return {
                                        institute: institute
                                    }
                                })
                            }} />
                        </Item>
                        <Item stackedLabel >
                            <Label><H3>Degree</H3></Label>
                            <Input value={this.state.major} onChangeText={(major)=>{
                                this.setState(()=>{
                                    return {
                                        major: major
                                    }
                                })
                            }} />
                        </Item>
                    </Form>
                    <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <DatePicker
                        defaultDate={new Date()}
                        maximumDate={new Date()}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "black" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                       
                        onDateChange={(date)=>{
                            const dateVar = moment(date).format('DD-MM-YYYY');
                            console.log(dateVar)
                            this.setState(()=>{
                                return {
                                    date:dateVar
                                }

                            })
                            
                        }}
                        />
                    </View>
                    <TouchableOpacity onPress = {this.generateUserObject} style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Text style={{color:"#1589FF", fontSize: 20}}>Add</Text>
                    </TouchableOpacity>
                    </Card>
                    </View>
 
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        educationAdd: (userObject)=>{dispatch(educationAdd(userObject))}
    }
}

export default connect(undefined, mapDispatchToProps)(EducationInput);