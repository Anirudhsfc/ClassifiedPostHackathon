import React from 'react';
import {} from 'react-native';
import {Container, Content, Form, Item, Label, Input, H3, Card, CardItem, View} from 'native-base';

import {Col, Grid, Row} from 'react-native-easy-grid'


export default class InfoDisplay extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
        
                    <Form> 
                        <View style={{padding:5}}>
                        <Card>
                                <CardItem bordered >
                                    <Grid>
                                        <Row>
                                        <H3>Educational Institute</H3>
                                        </Row>
                                        <Row>
                                        <Label>{this.props.objectSent.institute}</Label>
                                        </Row>
                                    </Grid>
                                </CardItem>
                                <CardItem bordered >
                                    <Grid>
                                        <Row>
                                        <H3>Degree</H3>
                                        </Row>
                                        <Row>
                                        <Label>{this.props.objectSent.degree}</Label>
                                        </Row>
                                    </Grid>
                                </CardItem>
                                <CardItem bordered >
                                    <Grid>
                                        <Row>
                                        <H3>Date</H3>
                                        </Row>
                                        <Row>
                                        <Label>{this.props.objectSent.date}</Label>
                                        </Row>
                                    </Grid>
                                </CardItem>
                                <CardItem bordered >
                                    <Grid>
                                        <Row>
                                        <H3>Date</H3>
                                        </Row>
                                        <Row>
                                        <Label>{this.props.objectSent.date}</Label>
                                        </Row>
                                    </Grid>
                                </CardItem>
                                
                        </Card>

   
                        </View>
     
                    </Form>
           
        )
    }
}