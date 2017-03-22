import Backbone from 'backbone'

var STORE = Object.assign({},Backbone.Events,{
	data: {
		items: [],
		uniqueIDCounter: 0
	},

	set: function(obj){
		this.data = Object.assign(this.data, obj)
		this.trigger('dataUpdated')
	},

//adds to uniqueIDCounter in the STORE data so that each task can be identified
	createUniqueID: function (){
		return this.data.uniqueIDCounter ++
	}

})

export default STORE