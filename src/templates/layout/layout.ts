import head = require('./head');

export interface LayoutOptions {
	headOptions : head.HeadOptions;
}

export class Layout {
	MobileLayout(options : LayoutOptions) {
		var result = {
			html : {
				_ : '<!DOCTYPE html>',
				_include : head.Head.HeadMobile(options.headOptions),
				body : 'Test'
			},
			css : {
				body : {
					backgroundColor : 'red'
				}
			}
		}
	}
}