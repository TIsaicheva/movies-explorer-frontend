function getTimeFromMins(mins) {
    const hours = Math.trunc(mins/60);
	const minutes = mins % 60;
	return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
};

export default getTimeFromMins;