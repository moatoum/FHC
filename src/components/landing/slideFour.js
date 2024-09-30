import React from "react";
import PricingPlan from "../pricing";
import { FreeType, FreeCost, FreeTime, MonthType, MonthTime, MonthCost, YearType, YearCost, YearTime } from '../../constants';

const SlideFour = () => {

    const freeData = `{"type": "${FreeType}", "cost": "${FreeCost}", "time": "${FreeTime}", "one": "Generate 5 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "Lifetime access", "five": "Theory & Image Course"}`;
    const parsedFreeData = JSON.parse(freeData);

    const monthData = `{"type": "${MonthType}", "cost": "${MonthCost}", "time": "/${MonthTime}", "one": "Generate 10 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "1 Month Access", "five": "Theory & Image Course"}`;
    const parsedMonthData = JSON.parse(monthData);

    const YearData = `{"type": "${YearType}", "cost": "${YearCost}", "time": "/${YearTime}", "one": "Generate 10 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "1 Year Access", "five": "Theory & Image Course"}`;
    const parsedYearData = JSON.parse(YearData);

    return (
        <div className="dark:bg-black py-14">
        </div>
    );
};

export default SlideFour;
