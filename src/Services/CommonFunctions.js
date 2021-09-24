export const search = (data = [], keys = [], query) => {
    let result = [];

    data.forEach(element => {
        keys.forEach(key => {
            if (element[key]) {
                if (element[key].toLowerCase().match(query.toLowerCase())) {
                    result = [...result, element]
                    return;
                };
            }
        });
    });
    return result;
}

export const formatNumber = (number) => {
    let formatedNumber = parseFloat(number);
    return formatedNumber
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}