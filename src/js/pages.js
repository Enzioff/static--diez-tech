const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Веб-студия DIEZ Tech Калининград.",
        head,
        sectionHeader,
        sectionFooter,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/services-detail.html",
        filename: "services-detail.html",
        inject: "body",
        title: "Интернет-магазин | Diez Tech",
        head,
        sectionHeader,
        sectionFooter,
        temp
    }),
	new HtmlWebpackPlugin({
		template: "./src/pages/services.html",
		filename: "services.html",
		inject: "body",
		title: "Услуги | Diez Tech",
		head,
		sectionHeader,
		sectionFooter,
		temp
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/blog.html",
		filename: "blog.html",
		inject: "body",
		title: "Блог | Diez Tech",
		head,
		sectionHeader,
		sectionFooter,
		temp
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/blog-detail.html",
		filename: "blog-detail.html",
		inject: "body",
		title: "Блог детальная | Diez Tech",
		head,
		sectionHeader,
		sectionFooter,
		temp
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/case.html",
		filename: "case.html",
		inject: "body",
		title: "Кейс | Diez Tech",
		head,
		sectionHeader,
		sectionFooter,
		temp
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/case-detail.html",
		filename: "case-detail.html",
		inject: "body",
		title: "Кейс-Детальная | Diez Tech",
		head,
		sectionHeader,
		sectionFooter,
		temp
	}),
	new HtmlWebpackPlugin({
		template: "./src/pages/contacts.html",
		filename: "contacts.html",
		inject: "body",
		title: "Контакты | Diez Tech",
		head,
		sectionHeader,
		sectionFooter,
		temp
	}),
];