// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, PhysicalSize, PhysicalPosition, Window};

/// Compute main window default width.
/// 
/// Default width = screen_width / 5 (min: 300)
/// If screen_width / 5 is lesser than 300 then
/// return 300.
fn compute_default_width(max_width: u32) -> u32 {
    const MIN_WIDTH: u32 = 300;
    
    let wanted_width = f64::from(max_width) / 5.0;
    if wanted_width >= f64::from(MIN_WIDTH) {
        wanted_width.floor() as u32
    } else {
        MIN_WIDTH
    }
}

/// Compute main window default height.
/// 
/// Default height = screen_height - taskbar_height.
/// 
/// WARN: This function maximizes window!
fn compute_default_height(window: &Window) -> u32 {
    hack_maximize_to_get_max_size(window).height
}

/// Maximize window and get its inner size.
/// This is a workaround to the fact that we can't get the taskbar
/// height for now in tauri.
/// See: https://github.com/tauri-apps/tauri/issues/6592
/// 
/// WARN: This function maximizes window!
fn hack_maximize_to_get_max_size(window: &Window) -> PhysicalSize<u32> {
    window.maximize().expect("unable to maximize window");

    window.inner_size()
        .expect("unable to find window size")
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let handle = app.app_handle();
            let window = handle.get_window("main")
                .expect("error while getting main window");

            let opt_monitor = window.current_monitor()
                .expect("unable to get current monitor (step 1)");
            let monitor = opt_monitor
                .expect("unable to get current monitor (step 2)");
            let monitor_size = monitor.size();

            let new_width = compute_default_width(monitor_size.width);
            let new_height = compute_default_height(&window);
            let new_size = PhysicalSize::new(new_width, new_height);

            let new_x = monitor_size.width - new_width;
            const TOP_RIGHT: u32 = 0;
            let new_position = PhysicalPosition::new(new_x, TOP_RIGHT);

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
