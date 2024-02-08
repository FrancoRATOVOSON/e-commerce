// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    // This should be called as early in the execution of the app as possible
    // #[cfg(debug_assertions)] // only enable instrumentation in development builds
    let devtools = devtools::init();

    let builder = tauri::Builder::default();

    // #[cfg(debug_assertions)]
    // let builder = builder.plugin(devtools);

    builder
        .invoke_handler(tauri::generate_handler![greet])
        .plugin(devtools)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
