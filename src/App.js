import React from "react";
import "./App.scss";
import Header from './Header'

class App extends React.Components {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }
    handleToggleMenu() {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }
    render() {
        return (
            <div>
                <Header 
                    isMenuOpen={this.state.isMenuOpen} 
                    onToggleMenu={this.handleToggleMenu}
                />
                {/* Other stuff */}
            </div>
        );
    }
}

export default App;
