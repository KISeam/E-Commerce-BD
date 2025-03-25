import React, { useState, useEffect } from "react";
import DayOfTheDealCarts from "./Day Of The Deal Componemts/DayOfTheDealCarts";

const DayOfTheDeal = ({dealCatagory}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="my-16 md:my-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-700">
                  Day Of The <span className="text-[#5CAF90]">Deal</span>
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Don't wait. The time will never be just right.
                </p>
              </div>

              <div className="text-md font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-md w-fit">
                <div className="flex gap-2">
                  <div>
                    <span className="countdown font-mono">
                      <span
                        style={{ "--value": timeLeft.days }}
                        aria-live="polite"
                        aria-label={`${timeLeft.days} days remaining`}
                      >
                        {timeLeft.days}
                      </span>
                    </span>
                    days
                  </div>
                  <span>:</span>
                  <div>
                    <span className="countdown font-mono">
                      <span
                        style={{ "--value": timeLeft.hours }}
                        aria-live="polite"
                        aria-label={`${timeLeft.hours} hours remaining`}
                      >
                        {timeLeft.hours}
                      </span>
                    </span>
                    hours
                  </div>
                  <span>:</span>

                  <div>
                    <span className="countdown font-mono">
                      <span
                        style={{ "--value": timeLeft.minutes }}
                        aria-live="polite"
                        aria-label={`${timeLeft.minutes} minutes remaining`}
                      >
                        {timeLeft.minutes}
                      </span>
                    </span>
                    min
                  </div>
                  <span>:</span>
                  <div>
                    <span className="countdown font-mono">
                      <span
                        style={{ "--value": timeLeft.seconds }}
                        aria-live="polite"
                        aria-label={`${timeLeft.seconds} seconds remaining`}
                      >
                        {timeLeft.seconds}
                      </span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
            </div>
            <DayOfTheDealCarts dealCatagory={dealCatagory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DayOfTheDeal;
