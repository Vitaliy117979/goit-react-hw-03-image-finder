import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
  }

  onEscapePress = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { url, onClose } = this.props;

    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img src={url} alt="IMG" />
        </div>
      </div>
    );
  }
}