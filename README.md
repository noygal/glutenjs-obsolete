# GlutenJS

## Prerequisite
### Run

* [node](http://nodejs.org/) 

### Build

## Gluten element syntax

```javascript

var element = {
	exampleInputText : { //element
		tag : "div",
		style : {
			blueText : {
				color : blue;
			}
		},
		children : { //element children 
			inputText : {		
				tag : "input", //default - "div"
				id : "example-text-field", //default - null
				attributes : { // default - {}
					type : "text",
					value : ""
				}
			},
			inputButton : {
				tag : "input",
				attributes : {
					type : "button",
					onClick : "updateText()",
					value : "update",
					class : "blueText"
				},
				style : {
					backGroundColor : "black",
					color : "white"
				},
				code :  "var updateText = function() { \
							document.getElementById('example-text-value').innerHtml = \
							document.getElementById('example-text-field').value; \
						}"
			},
			exampleTextValue : {
				id : "example-text-value",
				attributes : {
					class : "blueText"
				},
				tag : "p"
			}
		}
	}
}

 ```
