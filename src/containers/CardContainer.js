import React, { Component } from 'react';
import { CardPure } from '../components/card-pure';

const styleInput = {
    width: '100%',
    display: 'block'
}

const styleRadio = {
    display: 'inline-block',
    marginRight: '12px'
}

export class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            image: props.image,
            title: props.title,
            description: props.description,
            imageSize: props.imageSize,
            backgroundBlur: props.backgroundBlur
        };

        this.handleImageSizeChange = this.handleImageSizeChange.bind(this);
        this.handleBackgroundBlurChange = this.handleBackgroundBlurChange.bind(this);
    }

    handleImageSizeChange(event) {
        this.setState({
            imageSize: event.target.value
        });
    }

    handleBackgroundBlurChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div style={{marginBottom: '128px'}}>
                <form style={{marginBottom: '24px'}}>
                    <label style={styleRadio}>Размер изображения: </label>
                    <label style={styleRadio}>
                        <input type="radio" name="imageSize" value="cover"
                            checked={this.state.imageSize === 'cover'}
                            onChange={this.handleImageSizeChange} />
                        {' '}заполнить
                    </label>
                    <label style={styleRadio}>
                        <input type="radio" name="imageSize" value="contain"
                            checked={this.state.imageSize === 'contain'}
                            onChange={this.handleImageSizeChange} />
                        {' '}целиком
                    </label>
                    <label style={styleRadio}>
                        <input type="checkbox" name="backgroundBlur" checked={this.state.backgroundBlur} onChange={this.handleBackgroundBlurChange} />
                        {' '}размытый фон
                    </label>
                </form>
                <a href={this.state.url} target="_blank"><CardPure {...this.state} /></a>
            </div>
        );
    }
}
