// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, PhysicalSize, PhysicalPosition, Window};

fn compute_default_width(max_width: u32) -> u32 {
    const MIN_WIDTH: u32 = 300;
    
    let wanted_width = f64::from(max_width) / 5.0;
    if wanted_width >= f64::from(MIN_WIDTH) {
        wanted_width.floor() as u32
    } else {
        MIN_WIDTH
    }
}

///
/// Maximize window and get its inner size and inner position.
/// This gives us a "workarea" thing.
/// This is a workaround to the fact that we can't get the taskbar 
/// height for now in tauri.
/// It was suggested in this issue: https://github.com/tauri-apps/tauri/issues/6592
///
fn hack_maximize_workarea(window: &Window) -> (PhysicalSize<u32>, PhysicalPosition<i32>) {
    window.maximize().expect("unable to maximize window");

    let max_win_size = window.inner_size()
        .expect("unable to find window size");
    let max_win_pos = window.inner_position()
        .expect("unable to find window position");

    (max_win_size, max_win_pos)
}

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

            let (workarea_size, workarea_position) 
                = hack_maximize_workarea(&window);

            let new_width = compute_default_width(monitor_size.width);
            let new_height = workarea_size.height;
            let new_size = PhysicalSize::new(new_width, new_height);

            let new_x = monitor_size.width - new_width;
            let new_y = workarea_position.y.try_into()
                .expect("negative y position for window");
            let new_position = PhysicalPosition::new(new_x, new_y);

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
