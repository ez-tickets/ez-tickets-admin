import { titleBarStyle } from "@/screen/Home/components/styles/Titlebar.css.ts";
import { Link } from "react-router-dom";

function TitleBar() {
  return (
    <div className={titleBarStyle.container} data-tauri-drag-region>
      <span className={titleBarStyle.title}>EZ Tickets Admin</span>
      <Link to={"/"}>ログアウト</Link>
    </div>
  );
}

export default TitleBar;
