export async function axeAcessibilityReporter(){
    if(process.env.NODE_ENV === 'development' && ){
        const axe= await require('@axe-core/react')
        const React = require('react');
        const ReactDOM = require('react-dom');


        axe(React, ReactDOM, 1000)
    }
}