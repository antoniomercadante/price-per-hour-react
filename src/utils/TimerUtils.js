export const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
};

export const priceHandler = (pricePerHour, timer) => {
    const pricePerMin = pricePerHour / 60;
    const pricePerSec = pricePerMin / 60;
    const finalPrice = pricePerSec * timer;

    return `R$ ${finalPrice.toFixed(2).replace(".", ",")}`
};