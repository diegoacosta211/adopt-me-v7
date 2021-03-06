import { Component, lazy } from "react";
import { useParams } from 'react-router-dom';
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { PetApiResponse, Animal } from "./types";
import { RootState } from "./redux/store";
import { connect } from "react-redux";

const Modal = lazy(() => import('./Modal'));

class Details extends Component<{ params: {id?: string}, theme: string}> {
  state = {
    loading: true,
    showModal: false,
    animal: '' as Animal,
    breed: '',
    city: '',
    state: '',
    description: '',
    name: '',
    images: [] as string[],
  }

  async componentDidMount() {
    if (!this.props.params.id) return;
    const res = await fetch(`
      http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}
    `);
    const data = (await res.json()) as PetApiResponse;
    this.setState({
      loading: false,
      ...data.pets[0],
    })
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }
    const { animal, breed, city, state, description, name, images, showModal } = this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h2>{name}</h2>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button onClick={this.toggleModal} className="btn" style={{ backgroundColor: this.props.theme}}>Adopt {name}</button>
          <p>{description}</p>
          {
            showModal ?
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}</h1>
                  <div className="buttons">
                    <a href="https://bit.ly/pet-adopt">Yes</a>
                    <button onClick={this.toggleModal}>No</button>
                  </div>
                </div>
              </Modal> : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  theme: state.theme
});

const ReduxWrappedDetails = connect(mapStateToProps)(Details);

const WithRouterDetails = () => (
  <ErrorBoundary>
    <ReduxWrappedDetails params={useParams<{ id: string }>()} />
  </ErrorBoundary>
)

export default WithRouterDetails;
