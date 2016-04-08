import React from 'react'
import { Router, Route } from 'react-router'
import history from './history'
import ArticlePage from './RouteHandlers/ArticlePage'
import ArticleListPage from './RouteHandlers/ArticleListPage'
import Root from './RouteHandlers/Root'

export default (
    <Router history = {history}>
        <Route path="/" component = {Root}>
            <Route path="articles" component = {ArticleListPage}>
                <Route path = ":id" component = {ArticlePage}/>
            </Route>
        </Route>
    </Router>
)