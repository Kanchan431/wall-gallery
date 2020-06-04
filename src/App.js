import React from 'react';
import './App.css';


export default class App extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
            images: [],
            isLoaded: false,
          }
        }

        componentDidMount(){
          fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              images: json,
            })
          });

        }


        render() {

          var { isLoaded, images } = this.state;

          if(!isLoaded) {
            return <h1>Loading....</h1>
          }
          else {

            return (
              <div>

              <ul class="galleryContainer">

                {images.map(image => (
                  <li key={image.id} class="galleryItem">
                    <img src={image.urls.regular} alt="images" />
                  </li>
                ))}

              </ul>

              </div>
            );

          }

        }
      }

