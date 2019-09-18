// import axios from 'axios'
export const BOILER_FETCH = "BOILER_FETCH";

export const boilerFetch = boiler => ({
    type: BOILER_FETCH,
    boiler
})

export default () => dispatch =>
    fetch('url')
    .then(res => console.log(res))
    .then(res => res.json())
    .then(boiler => dispatch(boilerFetch(boiler)))
    .catch(e => alert(e));