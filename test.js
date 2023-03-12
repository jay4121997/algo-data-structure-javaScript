class Loop extends React.Component {
    constructor() {
      super();
      this.state = {
        currentImage: 0,
        count: 0
      };
    }
  
    componentDidMount() {
      this.startAnimation();
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    startAnimation = () => {
      this.interval = setInterval(() => {
        if (this.state.currentImage < this.props.images.length - 1) {
          this.setState(state => ({ currentImage: state.currentImage + 1 }));
        } else {
          this.setState(state => ({ currentImage: 0 }));
        }
      }, this.props.speed);
    };
  
    countLoad = () => {
      this.setState(state => ({ count: state.count + 1 }));
    };
  
    render() {
      const { currentImage } = this.state;
  
      return (
        <div className="flip-book">
          <img
          alt='preview'
            src={this.props.preview}
            className={
              this.state.count >= this.props.images.length
                ? "preview done"
                : "preview"
            }
          />
          {this.props.images.map((image, index) => (
            <img
             alt='motion'
              key={index}
              className={currentImage === index ? "active" : ""}
              src={image}
              onLoad={this.countLoad}
            />
          ))}
        </div>
      );
    }
  }
  
  export default Loop;
  