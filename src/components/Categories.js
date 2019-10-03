import React from 'react';
import {Row,Col,Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Category from './Category';
import shortid from 'shortid';
import {loadCats, toggleCat} from '../actions/categories';
import { connect } from 'react-redux';


class Categories extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.loadUserCategories();
    }




    loadUserCategories = () => {
        return fetch(process.env.API_ROOT + 'usercategories/' + this.props.userId)
            .then(response => response.json())
            .then(json => {
            this.props.loadCats(json);
        });
    }


    handleAddCat = (categoryId) => {
        this.handleToggleCat(categoryId, 'post');
    }


    handleRemoveCat = (categoryId) => {
        this.handleToggleCat(categoryId,'delete');
    }


    handleToggleCat = (categoryId, method) => {

        const params = {
            method: method,
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                {
                    "category_id": categoryId, 
                    user_id: this.props.userId
                }
            )
        }

        //const toDispatch = categoryUserId !== null ? unSelectCat : selectCat;
        return fetch(process.env.API_ROOT + 'usercategories/', params)
        .then(response => response.json())
        .then(json => {
           this.props.toggleCat(json);
        });

    }



    render() {
        return (
            <Container fluid className="categories nopadding">
                <Row>
                    <Col xs={12} lg={10} className="offset-lg-1">
                    <div className="page-container">
                        <div className="title-container">
                            <h4>Pick your favorite categories to contine</h4>
                        </div>
                        <div className="content-container">
                            <div className="category-container">
                                {
                                    this.props.categoryArray.map((item) => {
                                        return <Category className="category" handleAddCat={this.handleAddCat} handleRemoveCat={this.handleRemoveCat} key={shortid.generate()} categoryData={item} />
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



const mapStateToProps = state => {
	// current state properties passed down to LoginComponent (LoginComponent.js)
	const { categoryArray } = state.categories;
	return { 
        categoryArray, 
        userId: state.userSession.userId    
    }
  };
  

  const mapDispatchToProps = (dispatch) => {
    // all passed in from LoginOperations (operations.js)
    return {
        loadCats: (catData) => dispatch(loadCats(catData)),
        toggleCat: (catData) => dispatch(toggleCat(catData))
    }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  
