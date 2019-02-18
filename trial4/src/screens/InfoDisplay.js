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
                                        <H3>Company</H3>
                                        </Row>
                                        <Row>
                                        <Label>{this.props.objectSent.company}</Label>
                                        </Row>
                                    </Grid>
                                </CardItem>
                                <CardItem bordered >
                                    <Grid>
                                        <Row>
                                        <H3>Title</H3>
                                        </Row>
                                        <Row>
                                        <Label>{this.props.objectSent.title}</Label>
                                        </Row>
                                    </Grid>
                                </CardItem>
                                <CardItem bordered >
                                    <Grid>
                                        <Row>
                                        <H3>Short Description</H3>
                                        </Row>
                                        <Row>
                                        <Label>{this.props.objectSent.shortDescription}</Label>
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