    export function getData() {
        let villagers = [];
        let dataResult = [];
             dataResult = await fetch('https://acnhapi.com/v1/villagers');
             villagers = await dataResult.json();
        return villagers;
    }

    
 //     let dataResult = [];
        //     let theData = [];
        //     dataResult =  fetch('https://acnhapi.com/v1/villagers');
        //     //theData = await dataResult.json();
        //     console.log(dataResult);
        // }
        // }
        //  return getData()