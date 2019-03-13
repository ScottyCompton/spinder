import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.scss';
import Category from './components/Category';
import shortid from 'shortid';

class CategoriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.loadUserCats = this.props.loadUserCategories;
        this.handleCatClick = this.props.handleCatClick;
    }

    componentWillMount() {
        this.loadUserCats();
    }

    render() {
        return (
            <Container fluid className="categories nopadding">
                <Row>
                    <Col xs={12}>
                    <div className="page-container">
                        <div className="title-container">
                            <h4>Pick your favorite categories to contine</h4>
                        </div>
                        <div className="content-container">
                            <div className="category-container">
                                {
                                    this.props.categoryArray.map((item) => {
                                        return <Category className="category" handleClick={this.props.handleCatClick} key={shortid.generate()} categoryData={item} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        )        
    }
}


export default CategoriesComponent