mod client;

mod commands;
mod errors;

use crate::commands::*;
use crate::client::HttpClient;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(HttpClient::new().unwrap())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            products,
            register_product
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
