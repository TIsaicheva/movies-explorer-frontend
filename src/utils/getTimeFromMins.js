function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
	let minutes = mins % 60;
	return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
};

export default getTimeFromMins;