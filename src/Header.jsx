import React from "react";


class Header extends React.Components {
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

export default Header;