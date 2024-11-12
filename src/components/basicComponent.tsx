import React, {Component} from 'react';
interface Compo
{
    name:string;
}
class BasicComponent extends Component<Compo>
{
    render():JSX.Element{
        return <h1>{this.props.name} </h1>
    }
}
export default BasicComponent;