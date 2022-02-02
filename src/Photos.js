import React, { Component } from "react"
import axios from 'axios';
import { Carousel , Button , Form } from "react-bootstrap";


class Photos extends Component {

    state ={ photos: [] , selectedId:1};

    async componentDidMount(){
   let result =  await axios.get("https://jsonplaceholder.typicode.com/photos")
     this.setState({ photos: result.data});
     this.setState({ photos:this.state.photos.filter(photo=>photo.albumId === 2)});
     console.log(this.state.photos);
       }
    
    onChange = (e) => {
        this.setState({ selectedId: e.target.value});
           console.log(this.state.selectedId);
           this.setState({ photos:this.state.photos.filter(photo=>photo.albumId === parseInt(this.state.selectedId))});
           console.log(this.state.photos);
       }

render(){
  return (
      <div className="Photos">
<h1 className="success"> hello from react</h1>
<Carousel>
  {this.state.photos.map (ph =>(
       <Carousel.Item >
       <img
         className="d-block w-100"
         src={ph.url}
         alt="First slide"
       />
       <Carousel.Caption>
         <h3>{ph.albumId}</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
  ))
     
  }
  
</Carousel>
<Form.Select aria-label="Default select example"  onChange={this.onChange}>
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
       </div>
     

  )}}

export default Photos;