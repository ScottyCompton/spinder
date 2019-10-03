import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import Img from 'react-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: this.props.categoryData.category_name,
            categoryImg: this.props.categoryData.category_img,
            categoryId: this.props.categoryData.category_id,
            userId: this.props.categoryData.user_id,
            selected: this.props.categoryData.user_id !== null,
            hoverState: ''
        }
    }

    toggleCat = () => {
        const {categoryId, selected} = this.state;
        if(selected) {
            this.props.handleRemoveCat(categoryId);
        } else {
            this.props.handleAddCat(categoryId);
        }
    }

    hover = () => {
        this.setState({
            hoverState: 'hover-on'
        });
    }

    hoverOff = () =>{
        this.setState({
            hoverState: ''
        });
    }

    render() {

        return (
            <div className={"category" + ' ' + this.state.hoverState} onClick={this.toggleCat} onMouseOver={this.hover} onMouseOut={this.hoverOff}>
                <div className={this.state.selected ? "category-checkbox selected" : "category-checkbox"}><FontAwesomeIcon icon={faCheckSquare} size="2x" /></div>
                <div className={this.state.selected ? "category-img selected" : "category-img"}>
                    <Img src={"../images/category/" + this.state.categoryImg} className="img-fluid" />
                </div>
                <div className="category-title">
                    <h5 className={this.state.selected ? "bg-primary" : "bg-secondary"}>{this.state.categoryName}</h5>
                </div>
            </div>
        );
    }
}
export default Category;