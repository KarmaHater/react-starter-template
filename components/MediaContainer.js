import React from 'react';
import Movie from './Media.js';
import './../styles/Media.scss';

function renderMovies (medias) {
    return medias.map(function (media, i) {
        return <Movie key={i} media={media}/>
    })
}

export class MediasContainer extends React.Component {

    static propTypes = {
        medias: React.PropTypes.array.isRequired,
    }


    componentWillMount() {
        this.props.actions.loadMedia()
    }

    handleFilter() {

    }

    render() {
        var medias = renderMovies(this.props.medias)
        return (
            <div>
                <div className='medias-container'>
                    {medias}
                </div>
            </div>
        )
    }
}

export default MediasContainer;