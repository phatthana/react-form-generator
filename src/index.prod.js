import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'

export default (params) => {

    const appString = renderToStaticMarkup(<App {...params}/>)
    const htmlString = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${appString}</body></html>`

    return htmlString

}