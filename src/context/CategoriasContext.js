import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = '7AODS573JH5TQUCOTFJJ';

    state = { 
        categorias: []
     }

    componentDidMount() {
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {

        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es-ES`;
        
        let {data: {categories: categorias = []} = {}} = await axios.get(url);

        this.setState({categorias});
    }
    render() { 
        return ( 
            <CategoriasContext.Provider
                value={{
                    categorias: this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
         );
    }
}
 
export default CategoriasProvider;