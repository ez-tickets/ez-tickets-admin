// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tracing_subscriber::EnvFilter;
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;

fn main() {
    tracing_subscriber::registry()
        .with(EnvFilter::new("trace"))
        .with(tracing_subscriber::fmt::layer())
        .init();
    
    ez_tickets_admin_lib::run()
}
