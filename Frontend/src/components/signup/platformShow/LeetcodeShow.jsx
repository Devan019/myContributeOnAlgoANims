import React from 'react'
import PieChart from "../../chartMaker/PieChart";
import { object } from "prop-types";
function LeetcodeShow(leetcodeData) {
  return (
    <div>
      <h2 className="text-3xl m-4">Leetcode Progress :-</h2>
      <h2 className="m-2 text-xl font-medium">Ranking : {leetcodeData.ranking}</h2>
      <div className="w-11/12 h-full flex flex-wrap ">
       
        <PieChart totalQuestions={leetcodeData.totalQuestions}
                  totalSolved={leetcodeData.totalSolved}
                  label={'LeetCode Total Solved'}
                  />
        <PieChart totalQuestions={leetcodeData.totalEasy}
                  totalSolved={leetcodeData.easySolved}
                  label={'LeetCode Easy Solved'}
                  />
        <PieChart totalQuestions={leetcodeData.totalMedium}
                  totalSolved={leetcodeData.mediumSolved}
                  label={'LeetCode Medium Solved'}
                  />
        <PieChart totalQuestions={leetcodeData.totalHard}
                  totalSolved={leetcodeData.hardSolved}
                  label={'LeetCode Hard Solved'}
                  />
      </div>
    </div>
  )
}

export default LeetcodeShow
