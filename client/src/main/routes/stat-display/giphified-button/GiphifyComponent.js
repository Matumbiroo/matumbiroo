import React from 'react';

class GiphifyComponent extends React.Component {


    render() {
        let artist = this.props.artist;
        let song = this.props.currentSong.name;

    return (
        <div>
            <div>Title: {song}</div>
            <div>Artist: {artist} </div>
            {this.props.genGifs()}
        </div>
        )
    }
}

export default GiphifyComponent;