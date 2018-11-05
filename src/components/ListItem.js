import React, { Component } from 'react';
import { UIManager, LayoutAnimation, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    constructor() {
        super();
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        if (this.props.expanded) {
            return ( 
                <CardSection>
                <Text> {this.props.library.description} </Text>
                </CardSection>
            );
        }
    }

    render() {
      //  console.log(this.props);

        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id) } >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle} > {this.props.library.title} </Text>
                    </CardSection>
                    {this.renderDescription()}  
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);