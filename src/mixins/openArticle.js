export default {
    getInitialState() {
        return {
            openArticleId: null
        }
    },

    openArticle(openArticleId) {
        return (ev) => {
            if (ev) ev.preventDefault();
            this.setState({ openArticleId })
        }
    }
}