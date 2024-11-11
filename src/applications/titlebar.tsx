import { styled } from "@/applications/styles/titlebar.css";

function TitleBar() {
  return (
    <div className={styled.container} data-tauri-drag-region>
      <span className={styled.title}>EZ Tickets Admin</span>
      <div>

      </div>
    </div>
  );
}

export default TitleBar;