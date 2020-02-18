export const clickerTypes = {
    INCREMENT_CLICK: 'CLICKER_INCREMENT_CLICKS'
}

// this is an action mapper, that has no async properties
//this means it is not going to an api anywhere
export const incrementClicks = (clicks:number) => {
    return {
        type:clickerTypes.INCREMENT_CLICK,
        payload:{
            clicks
        }
    }
}