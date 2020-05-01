import React from 'react';
import {Link} from 'react-router-dom';

export default class Pagelist extends React.Component {
    renderPages(){
        const pages = Object.values(this.props.pages);

        return pages.map((p) => <div><h3><Link to={`/pages/${p._id}`}>{p.title}</Link></h3></div>);
    }
    render() {
    return (
        <div>
            {this.renderPages()}
        </div>
    )
    }
}