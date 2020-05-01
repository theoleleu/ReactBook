import React from 'react';
import Navbar from '../components/navbar';
import {Link} from 'react-router-dom';
export default class ShowPage extends React.Component {
    
    render() {
        const {page }= this.props;

        if (!page){
            return null;
        }

        if (page.image==='' || page.image===undefined){

            return (
                <div class="text-center">
                    <h1>{page.title}</h1>
                    <div>{page.body}</div>
                    </div>
                    );
        }
        return (
            <div class="mx-auto text-center" >
                <h1>{page.title}</h1>
                <div>{page.body}</div>
                <div>
                    <img alt="Show" class="fit-picture" src={page.image} id="ok"/>
                    </div>
            </div>
        );
    }
}