import { Component, MouseEvent, ReactNode } from "react";

interface IProps {
  images: string[]
}

class Carousel extends Component<IProps> {
  state = {
    active: 0
  }

  static defaultProps = {
    images: [
      'http://pets-images.dev-apis.com/pets/none.jpg'
    ]
  }

  handleActive = (ev: MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    if (ev.currentTarget.dataset.index) {
      this.setState({
        active: +ev.currentTarget.dataset.index
      }, () => console.log(this.state));
    }
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
