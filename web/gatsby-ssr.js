/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// const { Helmet } = require("react-helmet").default;
// import ReactDOMServer from 'react-dom/server';

// ReactDOMServer.renderToString(<Handler />);
// exports.onRenderBody = (
//   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
//   pluginOptions
// ) => {
//   const helmet = Helmet.renderStatic()
//   setHtmlAttributes(helmet.htmlAttributes.toComponent())
//   setBodyAttributes(helmet.bodyAttributes.toComponent())
//   setHeadComponents([
//     helmet.title.toComponent(),
//     helmet.link.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     helmet.style.toComponent(),
//   ])
// }