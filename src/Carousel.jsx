import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0
  }

  static defaultProps = {
    images: [
      'http://pets-images.dev-apis.com/pets/none.jpg'
    ]
  }

  handleActive = ev => {
    ev.preventDefault();
    this.setState({
      active: +ev.currentTarget.dataset.index
    }, () => console.log(this.state));
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="Animal" />
        <div className="carousel-smaller">
          {
            images.map((photo, idx) => (
              <button data-index={idx} key={idx} onClick={this.handleActive}>
                <img src={photo} alt="animal thumb" className={idx === active ? 'active' : ''} />
              </button>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Carousel;
