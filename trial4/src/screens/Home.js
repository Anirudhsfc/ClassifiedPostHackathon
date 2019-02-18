import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { Container, Content, Item, Form, Label, Input, H3, CardItem} from 'native-base';
import {Grid, Row , Col} from 'native-base'

import {connect} from 'react-redux'

import InfoInput from './InfoInput'
import InfoDisplay from './InfoDisplay'
import EducationInput from './EducationInput';
import EducationDisplay from './EducationDisplay'


import {positionAdd} from './../actions/actions'

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            experienceInput: true,
            educationInput: true,
            position: ''
        }
        }
    
    componentDidMount(){
        console.log(this.props.experience)
    }

    addMoreExperience = () => {
        this.setState(()=>{
            return{
                experienceInput: true
            }
        })
    }

    addMoreEducation = () => {
        this.setState(()=>{
            return{
                educationInput: true
            }
        })
    }

    noMoreExperience = () => {
        this.setState(()=>{
            return{
                experienceInput: false
            }
        })
    }

    noMoreEducation = () => {
        this.setState(()=>{
            return{
                educationInput: false
            }
        })
    }



    render(){
        console.log(this.props.experience)
        return(
            <Container>
                <Content>
                    <View style={{padding:5}}>
                    <CardItem bordered >
                        <Grid>
                            <Row>
                            <H3>Name</H3>
                            </Row>
                            <Row>
                            <Input/>
                            </Row>
                        </Grid>
                    </CardItem>
                    </View>
                    {/* experienceInput */}
                    <View style = {{borderWidth: 0.5, borderColor:'black', margin:10}} /> 
                   { this.props.experience.map((userObject)=>{
                       return <InfoDisplay objectSent={userObject}/>
                   })}
                  
                   {this.state.experienceInput ? <InfoInput changeIt = {this.noMoreExperience}/> : <View/> }
                   <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                   <TouchableOpacity onPress={this.addMoreExperience}>
                       <Text>Add More Experience</Text>
                   </TouchableOpacity>
                   </View>

                   <View style = {{borderWidth: 0.5, borderColor:'black', margin:10}} /> 
                   {/* educationInput */}
                   { this.props.education.map((userObject)=>{
                       return <EducationDisplay objectSent={userObject}/>
                   })}
                  
                   {this.state.educationInput ? <EducationInput changeIt = {this.noMoreEducation}/> : <View/> }
                   <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                   <TouchableOpacity onPress={this.addMoreEducation}>
                       <Text>Add More Education</Text>
                   </TouchableOpacity>
                   </View>

                   <View style = {{borderWidth: 0.5, borderColor:'black', margin:10}} /> 


                   <View style={{padding:5}}>
                    <CardItem bordered >
                        <Grid>
                            <Row>
                            <H3>Email</H3>
                            </Row>
                            <Row>
                            <Input/>
                            </Row>
                        </Grid>
                    </CardItem>

                    <View style = {{borderWidth: 0.5, borderColor:'black', margin:10}} /> 


                    <View style={{padding:5}}>
                    <CardItem bordered >
                        <Grid>
                            <Row>
                            <H3>Position Wanted</H3>
                            </Row>
                            <Row>
                            <Input value={this.state.position} onChangeText={(value)=>{
                                                                    console.log(value)
                                                                    this.setState(()=>{
                                                                        return {
                                                                            position: value
                                                                        }
                                                                    })
                                                            }}/>
                            </Row>
                        </Grid>
                    </CardItem>
                    </View>
                    </View>

                </Content>


                
                <Button onPress={()=>{
                                
                                this.props.positionChanged(this.state.position)
                                this.props.navigation.navigate('TabBased')}} title={'Done'}/>

            </Container>
         
               
            
        )
    }}

const mapStateToProps = (state) => {
    return {
        experience: state.experience,
        education: state.education
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        positionChanged: (position)=>{dispatch(positionAdd(position))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);