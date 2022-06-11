import React, { useEffect, useState } from "react";
import "./CountdownTimer.css";

/**
 * カウントダウンタイマーコンポーネント
 */
const CountdownTimer = ({ dropDate }) => {
      // ステート変数
      const [timerString, setTimerString] = useState("");

      // 副作用フック
      useEffect(() => {
            console.log("Setting interval...");
      
            // １秒ごとに時間を計算する。
            const interval = setInterval(() => {
                  const currentDate = new Date().getTime();
                  const distance = dropDate - currentDate;
            
                  // 時間の計算をするだけで、さまざまなプロパティを得ることができます
                  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
                  // 得られた出力結果を設定します
                  setTimerString(`${days}d ${hours}h ${minutes}m ${seconds}s`);
                  // distanceが0になったらドロップタイムが来たことを示します
                  if (distance < 0) {
                        console.log("Clearing interval...");
                        clearInterval(interval);
                  }
            }, 1000);

            // コンポーネントが取り外されたときには、intervalを初期化する。
            return () => {
                  if (interval) {
                        clearInterval(interval);
                  }
            };
      }, []);

      return (
            <div className="timer-container">
                  <p className="timer-header">Candy Drop Starting In</p>
                  {timerString && <p className="timer-value">{`⏰ ${timerString}`}</p>}
            </div>
      );
};

export default CountdownTimer;