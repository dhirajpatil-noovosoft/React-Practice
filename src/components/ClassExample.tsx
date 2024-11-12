import React from "react";
type MyProps = {
    message: string;
};
type MyState = {
    count: number;
};

class ClassExample extends React.Component<MyProps, MyState> {
    state: MyState = {
        count: 0,
    };

    render() {
        return (
            <div onClick={() => this.increment(1)}>
                {this.props.message} {this.state.count}
            </div>
        );
    }
    increment = (amt : number)=>{
        this.setState(() => ({
            count: this.state.count + amt,
        }));
    };
}

export default ClassExample;