import React from "react";
import CatInterface from '../../Interfaces/CatInterface'
import './index.scss'

export default class CatCard extends React.Component<CatInterface, {}> {
    constructor(props: CatInterface) {
        super(props);
    }

    render() {
        return (
            <img
                className={'cat-card'}
                src={this.props.url}
                alt={this.props.id}/>
        );
    }
}