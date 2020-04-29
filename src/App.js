import React from 'react';
import unsplash from './API/unsplash';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';


class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
        const respones = await unsplash.get('/search/photos', {
            params: { query: term}
        });
        
        this.setState({images: respones.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: 20 }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList  images={this.state.images}/>
            </div>
        )
    }
}

export default App;