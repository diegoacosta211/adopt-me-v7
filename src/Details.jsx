import { Component } from "react";
import { useParams } from 'react-router-dom';
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./theme-context";

class Details extends Component {
  state = {
    loading: true,
    pet: {}
  }

  async componentDidMount() {
    const res = await fetch(`
      http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}
    `);
    const data = await res.json();
    this.setState({
      loading: false,
      ...data.pets[0]
    })
  }


  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }
    const { animal, breed, city, state, description, name, images } = this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h2>{name}</h2>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {
              ([theme]) => <button className="btn" style={{ backgroundColor: theme}}>Adopt {name}</button>
            }
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WithRouterDetails = () => <ErrorBoundary><Details params={useParams()} /></ErrorBoundary>

export default WithRouterDetails;
