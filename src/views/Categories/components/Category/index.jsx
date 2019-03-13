import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import './styles.scss';
import Img from 'react-image';

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
        this.hover = this.hover.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.toggleCat = this.toggleCat.bind(this);
    }

    toggleCat() {
        const {categoryId, userId} = this.state;
        this.props.handleClick(categoryId, userId);
    }

    hover() {
        this.setState({
            hoverState: 'hover-on'
        });
    }

    hoverOff() {
        this.setState({
            hoverState: ''
        });
    }

    render() {
        const isSelected = (baseCat) => {
            if(this.state.selected) {
                return baseCat + " selected";
            }
            return baseCat;
        }
        return (
            <div className={"category" + ' ' + this.state.hoverState} onClick={this.toggleCat} onMouseOver={this.hover} onMouseOut={this.hoverOff}>
                <div className={this.state.selected ? "category-img selected" : "category-img"}>
                    <Img src={"/public/images/category/" + this.state.categoryImg} className="img-fluid" />
                </div>
                <div className="category-title">
                    <h5 className={this.state.selected ? "bg-primary" : "bg-secondary"}>{this.state.categoryName}</h5>
                </div>
            </div>
        );
    }
}
export default Category;