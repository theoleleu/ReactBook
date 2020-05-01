import React from 'react';
import PageList from '../components/pagelist'
export default class IndexPage extends React.Component {
    render() {
        return(
            <div class="text-center">
                <h2>Pages</h2>
                <PageList pages={this.props.pages} />
            </div>
        ) 
    }
}