import React from 'react';
import axios from 'axios';
import { Container, Header, Content, Button, Text, View, Card, CardItem, Body, List, H3} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {connect} from 'react-redux'





const getArrayForSwipe = async(position) => {
    const url = `https://nighthawks18.herokuapp.com/jobs?filter=${position}`

       return axios.get(url).then((respose)=>{
            return respose
        }).catch((error)=>{

            console.log(error+'tinder data loading error')
            
        })
    }
    


export class App extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
    return(
  
        <View style={{margin:5}}>
        <Grid>
        <Col size={8}>
        <View style={{margin:5}}>
          <Card style={{margin:5}}>
          <CardItem button onPress={()=>alert("add link to the the page of the company")}>
            <Body>
              
              <Text style={{fontWeight:'bold'}}>
                {this.props.jobObject.DISPLAYNAME}
              </Text>
              <Text style={{fontSize:13,fontWeight:'bold'}}>
                {this.props.jobObject.jobtitle}
              </Text>
            </Body>
          </CardItem>
        </Card>
        </View>
        </Col>

        <Col size={2}>
        <Grid>
            <Row size={3}></Row>
            <Row size={3}>
            < Button>
                <Text>Apply</Text>
            </Button> 
            </Row>
            <Row size={1}></Row>
        </Grid>
       
          </Col>
          </Grid>
          </View>
  
    );
  }
}






class ListView extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        getArrayForSwipe(this.props.position).then((response)=>{
            console.log(response.data);
            this.setState(()=>{
                return {
                    List: response.data
                }
            })
        })

    }

    render(){

        if(this.state.List){
            return (

                <Container>
                    <Content>
                        {this.state.List.map(eachObject=>
                             <App jobObject={eachObject}/>)}
                    </Content>
                </Container>

            )
        }else {
            return(
                <View/>
            )
        }

        
    }
}


const mapStateToProps = (state) => {
    return{
        position: state.position
    }
}

export default connect(mapStateToProps, undefined)(ListView);