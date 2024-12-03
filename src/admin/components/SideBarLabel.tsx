import { Fragment, type JSX, useState } from "react";
import { sideBarStyle } from "@/admin/components/styles/SideBar.css.ts";

type SideBarLabelProps = {
  title: string;
  element: JSX.Element;
  addButton: boolean;
};

function SideBarLabel({ title, element, addButton }: SideBarLabelProps) {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <Fragment>
      <details>
        <summary>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className={sideBarStyle.textContainer}
            onClick={() => setExpand(!expand)}
          >
            <p className={sideBarStyle.arrow}>{expand ? "▼" : "▶"}</p>
            {title}
          </div>
          {addButton && (
            <button type={"button"} className={sideBarStyle.addButton}>
              +
            </button>
          )}
        </summary>
        <div>{element}</div>
      </details>
    </Fragment>
  );
}

export default SideBarLabel;
