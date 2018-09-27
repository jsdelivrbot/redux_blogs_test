import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField} 
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField} 
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField} 
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate(values) {
    // values -> { title: 'asf', categories: 'fsdf', content: 'fdsf'}
    const errors = {};

    // validate inputs from values
    if(!values.title || values.title.length < 3) {
        errors.title = 'Enter a title that is ate least 3 characters, please!'
    }
    if(!values.categories) {
        errors.categories = 'Enter categories, please!'
    }
    if(!values.content) {
        errors.content = 'Enter content, please!'
    }

    // if errors is an empty object, there is no issue with form submission!
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm',
})(PostsNew);