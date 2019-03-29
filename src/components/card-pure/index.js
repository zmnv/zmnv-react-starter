import React from 'react';

export const CardPure = ({title, description, image, imageSize, backgroundBlur}) => {
    title = title || 'Заголовок карточки';
    description = description || '';
    // image = image || 'https://media2.24aul.ru/imgs/57ecc85b231ede261cbb3c70/';
    image = image || '';
    const isThereImage = image !== '' && image !== 'https://media2.24aul.ru/imgs/57fef701231ede155877bd1b/';
    return (
        <div className="ez-card flex">
            {isThereImage && <div className="ez-card__image-container flex-no-shrink">
                <div className="ez-card__image" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: imageSize
                }}>&nbsp;</div>
                {backgroundBlur && <div className="ez-card__image-container--blured" style={{backgroundImage: `url(${image})`}}></div>}
            </div>}
            <div className="ez-card__content-container flex-shrink-expand">
                <div className="ez-card__title ez-card-padding">{title}</div>
                <div className="ez-card__description ez-card-padding">{description}</div>
            </div>
        </div>
    );
}
