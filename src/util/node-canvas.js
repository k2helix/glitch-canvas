const { createCanvas, Image } = require('@napi-rs/canvas');

class Canvas {
	constructor(width = 300, height = 150) {
		this.canvasEl = createCanvas(width, height);
		this.canvasEl.width = width;
		this.canvasEl.height = height;
		this.ctx = this.canvasEl.getContext('2d');
	}

	getContext() {
		return this.ctx;
	}

	toDataURL(type, encoderOptions, cb) {
		if (typeof cb === 'function') {
			cb(this.canvasEl.toDataURL(type, encoderOptions));
		} else {
			return this.canvasEl.toDataURL(type, encoderOptions);
		}
	}

	toBuffer(params) {
		return this.canvasEl.toBuffer(params);
	}

	pngStream(params) {
		return this.canvasEl.toBuffer('image/png');
	}

	jpegStream(params) {
		return this.canvasEl.toBuffer('image/jpeg');
	}

	jpegStream(params) {
		return this.canvasEl.toBuffer('image/jpeg');
	}

	get width() {
		return this.canvasEl.width;
	}

	set width(newWidth) {
		this.canvasEl.width = newWidth;
	}

	get height() {
		return this.canvasEl.height;
	}

	set height(newHeight) {
		this.canvasEl.height = newHeight;
	}
}

Canvas.Image = Image;

export default Canvas;
