import React, { useState, useEffect } from "react";
import CompleteCardStyled from "../../styles/CompleteCard.styled";

export default function CompleteCard(props: any) {
  const { title, setIsComplete, progress, mode } = props;
  const [shareButtonText, setShareButtonText] = useState("Share");

  function handleStreak(progress : any) {
    const isFullyCompleted = Object.values(progress).every(value => value === true)

    const today = new Date().toLocaleDateString()
    const yesterdayDate = new Date()
    yesterdayDate.setDate(yesterdayDate.getDate() - 1)
    const yesterday = yesterdayDate.toLocaleDateString()

    const latestDate = localStorage.getItem(`${mode}-latest`);
    const previousDate = localStorage.getItem(`${mode}-previous`);

    if (!isFullyCompleted) {
      // If user previously completed the set today or yesterday
      if (latestDate && latestDate !== today && latestDate !== yesterday) {
        localStorage.setItem(`${mode}-streak`, "0")
      }
      return
    }
    
    // If user completed a set, but already completed before today
    if (latestDate === today) {
      return;
    }
    
    // If last completed set was yesterday
    if (latestDate === yesterday || !previousDate) {
      const oldStreak = localStorage.getItem(`${mode}-streak`);
      const newStreak = Number(oldStreak) + 1;
      localStorage.setItem(`${mode}-streak`, String(newStreak));
      
      const maxStreak = Number(localStorage.getItem(`${mode}-maxstreak`));
      if (newStreak > maxStreak) {
        localStorage.setItem(`${mode}-maxstreak`, String(newStreak));
      }
    // If last completed set was not yesterday - break streak
    } else {
      localStorage.setItem(`${mode}-streak`, "1");
    }
    
    // Update data for future reference
    localStorage.setItem(`${mode}-previous`, latestDate || "");
    localStorage.setItem(`${mode}-latest`, today);
  }

  handleStreak(progress)

  function shareText() {
    const text = `I just completed a ${title} set on http://quickstretch.com (${localStorage.getItem(
      `${mode}-streak`
    )} day streak)`;
    navigator.clipboard.writeText(text);
    setShareButtonText("Copied to clipboard!");
    setTimeout(() => {
      setShareButtonText("Share");
    }, 1500);
  }

  return (
    <CompleteCardStyled className="fade-in">
      <div className="container slide-up">
        <button
          className="close-button"
          type="button"
          onClick={() => setIsComplete(false)}
        >
          ❌
        </button>

        <h3>Nice job!</h3>
        <p>
          You completed today's <strong>{title}</strong> set
        </p>
        {/* {!isFullyCompleted && <p className="notice">Complete the entire set to increase your streak</p>} */}

        <div className="stats-grid">
          <div>
            <span className="stats-number">
              {localStorage.getItem(`${mode}-streak`)}
            </span>
            <span className="stats-streak">Current streak</span>
          </div>
          <div>
            <span className="stats-number">
              {localStorage.getItem(`${mode}-maxstreak`)}
            </span>
            <span className="stats-streak">Longest streak</span>
          </div>
        </div>

        <button className="share-button" type="button" onClick={shareText}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z" />
          </svg>
          {shareButtonText}
        </button>
      </div>
    </CompleteCardStyled>
  );
}
