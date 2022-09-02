import React from "react";


export default function withHasMounted(Component) {
    class NewComponent extends React.Component{
        state = {
            hasMounted: false,
        }
        
        render(){
            const { hasMounted } = this.state
            return <Component {...this.props} hasMounted = {hasMounted}></Component>
        }

        componentDidMount() {
            this.setState({hasMounted: true})
        }
    }

    NewComponent.displayName = `withHasMounted(${Component.name})`;


    return NewComponent;
}