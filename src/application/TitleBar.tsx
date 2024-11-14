import { titleBarStyle } from "@/application/Titlebar.css.ts";
import { getCurrentWindow } from "@tauri-apps/api/window";

function TitleBar() {
  const appWindow = getCurrentWindow();

  const appMinimize = async () => {
    await appWindow.minimize();
  };
  const appToggleMaximize = async () => {
    await appWindow.toggleMaximize();
  };
  const appExit = async () => {
    await appWindow.close();
  };

  // biome-ignore format: code is simple, no longer modify.
  return (
    <div className={titleBarStyle.container} data-tauri-drag-region>
      <span className={titleBarStyle.title}>EZ Tickets Admin</span>
      <div className={titleBarStyle.commonToolBox.container}>
        <button type={"button"} className={titleBarStyle.commonToolBox.button} onClick={appMinimize}>
          <img src="https://api.iconify.design/mdi:window-minimize.svg" alt="minimize"/>
        </button>
        <button type={"button"} className={titleBarStyle.commonToolBox.button} onClick={appToggleMaximize}>
          <img src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize"/>
        </button>
        <div id="alert">
          <button type={"button"} className={titleBarStyle.commonToolBox.button} onClick={appExit}>
            <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
