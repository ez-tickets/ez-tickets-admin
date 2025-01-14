import { sideBarStyle } from "@/admin/components/styles/SideBar.css.ts";
import { Fragment, type JSX, useState } from "react";
import { IconPlus, IconSettings } from "@tabler/icons-react";
import type { MouseEvent } from "react";

type SideBarLabelProps = {
  title: string;
  element: JSX.Element;
  addHandler?: () => void;
  configHandler?: () => void;
};

function SideBarLabel({
  title,
  element,
  addHandler,
  configHandler,
}: SideBarLabelProps) {
  const [expand, setExpand] = useState<boolean>(false);

  const clickHandler = (
    e: MouseEvent<SVGSVGElement>,
    handler?: (() => void) | undefined,
  ) => {
    e.preventDefault();
    if (handler) handler();
  };

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

          {configHandler && (
            <IconSettings
              onClick={(e) => clickHandler(e, addHandler)}
              className={sideBarStyle.button}
            />
          )}

          {addHandler && (
            <IconPlus
              onClick={(e) => clickHandler(e, configHandler)}
              className={sideBarStyle.button}
            />
          )}
        </summary>
        <div>{element}</div>
      </details>
    </Fragment>
  );
}

export default SideBarLabel;
