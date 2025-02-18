function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "invalid";
    }
    let totalSeconds = times.reduce((sum, time) => sum + time, 0);
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds % 3600) / 60);
    let second = totalSeconds % 60;
    return { hour, minute, second };
}

console.log(calculateSleepTime([]));