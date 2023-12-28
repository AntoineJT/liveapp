// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, PhysicalSize, PhysicalPosition};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let handle = app.app_handle();
            let window = handle.get_window("main")
                .expect("error while getting main window");

            let monitor = window.current_monitor()
                .expect("unable to get current monitor (step 1)");
            let monitor2 = monitor
                .expect("unable to get current monitor (step 2)");
            let monitor_size = monitor2.size();

            // TODO remove taskbar size from workarea
            let wanted_width = f64::from(monitor_size.width) / 5.0;
            let new_width = if wanted_width >= 300.0 {
                wanted_width.floor() as u32
            } else {
                300
            };
            let new_height = monitor_size.height;
            let new_size = PhysicalSize::new(new_width, new_height);

            let new_x = monitor_size.width - new_width;
            let new_position = PhysicalPosition::new(new_x, 0);

            window.set_size(new_size)
                .expect("unable to resize window");
            window.set_position(new_position)
                .expect("unable to move window");
            window.show().expect("unable to show window");

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
