import React from 'react';
// import { getData } from './Utils';

class Card extends React.Component {
    render() {
        // const getData = async () => { 
        // let dataResult = fetch('https://acnhapi.com/v1/villagers');
        // let villagers = await dataResult.json();
        // return villagers;
        // }
        //const villagers = getData();
        // console.log(getData);
        let villagers = [];
        async function getData() {
            const apifetch = await fetch('https://acnhapi.com/v1/villagers');
            let vill = await apifetch.json();
            console.log(vill);
            return vill;
        }
        villagers = getData();
        // if (undefined === villagers) {
        //     console.log('hi');
        //     villagers = getData();
        // }
        // const villagers = async getData();
        console.log(villagers);
        return (
            <div>
                <h2>name</h2>
                <img></img>
                <p><i>catch phrase</i></p>
                <p>birthday</p>
            </div>
        )
    }
}

export default Card;