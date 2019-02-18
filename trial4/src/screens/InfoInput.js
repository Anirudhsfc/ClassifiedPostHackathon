import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Container, Content, DatePicker,Form, Input ,Label, H3, Item, Button,Card, H2} from 'native-base';
import {connect} from 'react-redux'

import {experienceAdd} from './../actions/actions'

import moment from 'moment'


class InfoInput extends React.Component {

    constructor(props){
        super(props);
        this.state={
            company: "",
            title: "",
            shortDescription: "",
            date: ""
        }
    }

    generateUserObject = () => {
        const userObject = {
            company: this.state.company,
            title: this.state.title,
            shortDescription: this.state.shortDescription,
            date: this.state.date
        }

        this.props.experienceAdd(userObject);
        this.props.changeIt();

        this.setState(()=>{
            return {
                company: "",
                title: "",
                shortDescription: "",
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
                            <Label><H3>Company</H3></Label>
                            <Input value={this.state.company} onChangeText={(company)=>{
                                this.setState(()=>{
                                    return {
                                        company: company
                                    }
                                })
                            }} />
                        </Item>
                        <Item stackedLabel >
                            <Label><H3>Title</H3></Label>
                            <Input value={this.state.title} onChangeText={(title)=>{
                                this.setState(()=>{
                                    return {
                                        title: title
                                    }
                                })
                            }} />
                        </Item>
                        <Item stackedLabel >
                            <Label><H3>Short Description</H3></Label>
                            <Input value={this.state.shortDescription} onChangeText={(shortDescription)=>{
                                this.setState(()=>{
                                    return {
                                        shortDescription: shortDescription
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
        experienceAdd: (userObject)=>{dispatch(experienceAdd(userObject))}
    }
}

export default connect(undefined, mapDispatchToProps)(InfoInput);