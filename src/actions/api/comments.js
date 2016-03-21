import $ from 'jquery'


export function loadById({ id }) {
    console.log(id);
    return $.get(`/api/comment?article=${id}`)
}
