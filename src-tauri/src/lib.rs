mod client;

mod commands;
mod errors;
mod models;

use crate::commands::*;
use crate::client::HttpClient;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(HttpClient::new().unwrap())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            get_products,
            get_product_details,
            get_products_in_category,
            register_product,
            update_product,
            delete_product,
            get_categories,
            create_category,
            update_category,
            delete_category,
            change_ordering_categories,
            add_product_to_category,
            remove_product_from_category,
            change_ordering_product_in_category
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
