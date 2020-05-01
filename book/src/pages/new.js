import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


 
export default class NewPage extends React.Component {
    state = {
        page: {
            title:'',
            body:'',
            _id :'',
            image:'',
        }
    }

    updateValue = (e) => {
        const {page} = this.state;

        this.setState({
            page : {...page, [e.target.name]: e.target.value}
        });
    }
    handleSave = async (e) => {
        e.preventDefault();

        const id = await this.props.onSave(this.state.page);
        this.state.page._id=id;
        this.props.history.replace(`./pages/${id}`)
        
    }
    render() {
        const {page} =this.state;
        return (
            
            <div>
                <h1>Nouvelle Page</h1>
                <form onSubmit={this.handleSave}>
                <div className="page-form-field">
                    
                    <input type="text" class="form-control form-control-lg" name="title" value={page.title} placeholder="Titre" onChange={this.updateValue} required/>
                    
                </div>
                <div className="">
                    <textarea class="form-control form-control-lg"  placeholder="Texte"name="body" value={page.body} onChange={this.updateValue}  />
            </div>
            <div className="">
            <textarea class="form-control form-control-sm"  placeholder="Url de l'image" name="image" value={page.image} onChange={this.updateValue}  />
       </div>
            <div className="">
                <button className="btn btn-success text-align"> Save </button>
                <Link to="/" class="btn btn-danger text-align">Cancel</Link>
            </div>
            </form>
            </div>
        )
    }
}