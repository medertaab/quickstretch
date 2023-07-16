import React, { useEffect, useState } from "react";
import { CompleteModalStyled } from "./CompleteModal.styled";
import { handleStreak, shareText } from "./CompleteModalUtils";

export default function CompleteModal(props: any) {
  const { title, setIsComplete, progress, mode } = props;
  const [shareButtonText, setShareButtonText] = useState("Share");

  const isFullyCompleted = Object.values(progress).every(
    (value) => value === true
  );

  handleStreak(mode, isFullyCompleted);

  return (
    <CompleteModalStyled className="fade-in">
      <div className="container slide-up">
        <button
          className="close-button"
          type="button"
          aria-label="Close completion window"
          onClick={() => setIsComplete(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        </button>

        <h3>Nice job!</h3>
        <p>
          You completed today's <strong>{title}</strong> set
        </p>

        <div className="stats-grid">
          <div>
            <span className="stats-number">
              {localStorage.getItem(`${mode}-streak`) || "0"}
            </span>
            <span className="stats-streak">Current streak</span>
          </div>
          <div>
            <span className="stats-number">
              {localStorage.getItem(`${mode}-maxstreak`) || "0"}
            </span>
            <span className="stats-streak">Longest streak</span>
          </div>
        </div>
        {!isFullyCompleted && (
          <p className="notice">
            (Complete the entire set to increase your streak)
          </p>
        )}

        <button className="share-button" type="button" onClick={() => {shareText(title, setShareButtonText)}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z" />
          </svg>
          {shareButtonText}
        </button>
      </div>
    </CompleteModalStyled>
  );
}
