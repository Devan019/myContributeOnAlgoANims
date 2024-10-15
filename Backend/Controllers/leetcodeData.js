async function getLeetcodeData(uname) {
    const api = await fetch(`https://leetcode-stats-api.herokuapp.com/${uname}`);
    const data = await api.json();
    // console.log(data);


    let submissionCalendarArray = [];

    function formatetDate(milisec) {
        const date = new Date(milisec * 1000);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return formattedDate;
    }

    function loopForSub() {
        const submissionCalendar = data.submissionCalendar;

        Object.keys(submissionCalendar).forEach((value) => {
            const dateMillisec = parseInt(value, 10);
            const str = formatetDate(dateMillisec);
            submissionCalendarArray.push({
                date: str,
                submissions: submissionCalendar[value],
            });
        });
    }
    loopForSub();


    const obj = {
        status:  data.status,

        totalQuestions: data.totalQuestions,
        totalSolved: data.totalSolved,
        totalUnsolved: (data.totalQuestions - data.totalSolved),

        totalEasy: data.totalEasy,
        easySolved: data.easySolved,
        easyUnsolved: (data.totalEasy - data.easySolved),

        totalMedium: data.totalMedium,
        mediumSolved: data.mediumSolved,
        mediumUnsolved: (data.totalMedium - data.mediumSolved),

        totalHard: data.totalHard,
        hardSolved: data.hardSolved,
        hardUnsolved: (data.totalHard - data.hardSolved),

        acceptanceRate: data.acceptanceRate,
        ranking: data.ranking,
        contributionPoints: data.contributionPoints,

        submissionCalendar : submissionCalendarArray
    };
    
    return obj;
}
module.exports = getLeetcodeData;
// async function main() {
//     const obj = await getLeetcodeData("devanchauhan012");
//     console.log(obj);
// }
// main();
