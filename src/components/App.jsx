import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import Projetos from './Projetos'
import Clientes from './Clientes'
import Sobre from './Sobre'
import Footer from './Footer'

class App extends Component {
    constructor() {
        super();
        this.state = {
            className: ''
        }
    }

    handleScroll() {
        if (document.documentElement.scrollTop > 200) {
            this.setState({
                className: 'fixed'
            })
        }else {
            this.setState({
                className: ''
            })
        }
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll()
    }

    render() {
        return (
            <div>
                <Header className={this.state.className} />
                <Home />
                <Projetos/>
                <Clientes/>
                <Sobre/>
                <Footer/>
            </div>
        )
    }

    // function App() {
    //     return(
    //         <div>
    //             <Header/>
    //             <Home/>
    //             <Projetos/>
    //             <Clientes/>
    //             <Sobre/>
    //             <Footer/>
    //         </div>
    //     );
    // }
}
export default App;