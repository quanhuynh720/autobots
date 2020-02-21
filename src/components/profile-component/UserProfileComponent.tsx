import React, { SyntheticEvent } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import IUser from '../../model/shapes/IUser';
import { Link } from 'react-router-dom';

interface ProfileDisplayProps {
    // userId: number
    // firstname: string
    // lastname: string
    // username: string
    // password:string
    // email: string
    user: IUser
}
export class UserProfile extends React.Component<ProfileDisplayProps>{
    constructor(props: any){
        super(props);
        this.state ={
            username: '',
            firstname:'',
            email: '',
        }
    }
    grabUserInfo = (event: any ) => {
        console.log(this.props.user.email);
        if(this.props.user.url == ""){
        console.log("I profpic is null");
        }
    }
     photo = "https://i.kym-cdn.com/news_feeds/icons/mobile/000/029/140/628.jpg";
    render() {
        return(
            <>
            <Card style={{ maxWidth: "500px", minHeight: "400px" }}>
                <CardImg className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm" src= {this.props.user.url ==""? this.photo : this.props.user.url}
                 alt="Test Image Missing" />
                <CardBody>
                    <CardTitle>{this.props.user.username}</CardTitle>
                    <CardSubtitle>{this.props.user.firstname} </CardSubtitle>
                    <CardSubtitle>{this.props.user.lastname} </CardSubtitle>
                    <CardSubtitle>{this.props.user.email} </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardTitle>Bio:</CardTitle>
                    <CardText>{this.props.user.bio}</CardText>
                </CardBody>
            </Card>
            <div>
            <Button onClick={this.grabUserInfo}>my info</Button>
            <Link to="/postList"> Back to Posts</Link>
            </div>
            </>
        );
    }
}

export default UserProfile