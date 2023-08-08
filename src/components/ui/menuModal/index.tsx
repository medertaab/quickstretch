import { useTheme } from "../../../hooks/ThemeContext";
import { useAutoplay } from "../../../hooks/AutoplayContext";
import { MenuModalStyled } from "./MenuModal.styled";
import ToggleButton from "../ToggleButton";

export default function MenuModal(props: any) {
  const { theme, toggleTheme } = useTheme() as any;
  const { autoplay, toggleAutoplay } = useAutoplay() as any;
  const { setOpenMenu } = props;

  // Prevent bubbling
  function menuClick(e: any) {
    e.stopPropagation();
  }

  // Make current streaks object
  const currentStreaks = Object.keys(localStorage).reduce(
    (acc: any, val: any) => {
      const keys = Object.keys(localStorage);
      if (val.includes("streak") && !val.includes("max")) {
        const keyname = val.split("_")[0].toLowerCase();
        acc[keyname] = localStorage.getItem(val);
      }
      return acc;
    },
    {}
  );

  return (
    <MenuModalStyled onClick={() => setOpenMenu(false)} className="slide-up-fast">
      <div className="menu-container" onClick={menuClick}>
        <button type="button" onClick={() => setOpenMenu(false)} name="Close menu">
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

        <ToggleButton toggle={toggleTheme} on={theme === "dark"}>
          Dark mode:
        </ToggleButton>
        <ToggleButton toggle={toggleAutoplay} on={autoplay}>
          Default autoplay:
        </ToggleButton>

        <h3>Current streaks:</h3>
        <ul className="streaks">
          {Object.keys(currentStreaks).length < 1 && (
            "Complete an exercise to get a streak going"
          )}
          {Object.keys(currentStreaks).map((key) => {
            return (
              <li>
                <span>{key} stretch: </span>
                <span>
                  {currentStreaks[key]}{" "}
                  {currentStreaks[key] === "1" ? "day" : "days"}
                </span>
              </li>
            );
          })}
        </ul>
        <a href="http://medertaab.com/" className="copyright">© MT</a>
      </div>
    </MenuModalStyled>
  );
}


