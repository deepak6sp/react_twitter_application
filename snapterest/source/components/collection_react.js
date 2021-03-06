import React, { Component } from 'react';
var ReactDomServer = require("react-dom/server");
//var CollectionControls =  require ("./CollectionControls_react");
//var TweetList = require('./tweetList_react');
var Header = require("./header_react");


var Collection = React.createClass({
	createHtmlMarkupStringOfTweetList : function(){
		var htmlString = ReactDomServer.renderToStaticMarkup(
			<TweetList tweets = {this.props.tweets} />
			);

		var htmlMarkup = {
			html:htmlString
		};

		return JSON.stringify(htmlMarkup);
	},
	getListOfTweetIds:function(){
		return Object.keys(this.props.tweets);
	},
	getNumberOfTweetsInCollection : function(){
		return this.getListOfTweetIds().length;
	},
	render : function(){
		var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection;
		if (numberOfTweetsInCollection > 0){
			var tweets = this.props.tweets;
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			var removeAllTweetsFromCollection =  this.props.onRemoveAllTweetsFromCollection;
			var handleRemoveTweetFromCollection =  this.props.onRemoveAllTweetsFromCollection;

			return (
				<div>
					<CollectionControls numberOfTweetsInCollection = {numberOfTweetsInCollection}
						htmlMarkup={htmlMarkup} onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />

					<TweetList tweets={tweets} onRemoveAllTweetsFromCollection={handleRemoveTweetFromCollection} />
				</div>
			);
		}
		return <Header text="your collection is empty" />;
	}

});


module.exports = Collection;