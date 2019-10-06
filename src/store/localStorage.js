const noStorage = ['categories'];



export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null) {
            return undefined;
        }
        const jsonOut = JSON.parse(serializedState);


        noStorage.forEach((item) => {
            delete jsonOut[item];
        });

        return jsonOut;
        
    } catch(err) {
        return undefined;
    }
};

export const saveState = (state) => {

        try {
            const serializedState = JSON.stringify(state);
            noStorage.forEach((item) => {
                delete serializedState[item];
            });
            localStorage.setItem('state', serializedState);
            



        } catch(err) {
            // bark loudly at the console
            console.log(err);
        }


}