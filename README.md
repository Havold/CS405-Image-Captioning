# 📷 Image Enhancing, Processing Web Application

This application provides a user interface for image processing features such as sharpening, denoising, and edge detection. It is built with React, using React Router for navigation and @tanstack/react-query for state management and data fetching. The interface includes four main pages: Home, Denoising, Sharpening, and EdgeDetectors Page.

## 🌟 Features
- **Home:** Displays the main page of the application.
- **Denoising:** Provides image denoising functionality using 2 filters: Mean, Median Filter.
- **Sharpening:** Sharpens images with adjustable sharpening levels.
- **Edge Detectors:** Detects image edges using Sobel, Prewitt, and Canny methods.

## 🛠️ System Requirements

Before running the application, ensure you have the following installed:
- Node.js 20.17.0 __(Recommend)__

## 🚀 Getting Started
1. Clone the repository to your local machine:
    ```
    git clone https://github.com/Havold/CS406-Lab03-FE.git
    cd CS406-Lab03-FE
    ```

2. Install the dependencies:
    ```
    npm install
    ```

3. Start the application:
    ```
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## ⚠️ Important Notice
- This project needs a Backend to process the input image, to be able to run the BE, I suggest you check out my BE project here: https://github.com/Havold/CS406-Lab03-BE

## Tech Stack
- **React**: Front-end framework for building user interfaces.
- **React Router**: For managing navigation between pages.
- **@tanstack/react-query**: For managing server state and data fetching.
- **SCSS**: For styling the application.

## Routes
- `/`: Home page.
- `/denoising`: Denoising feature.
- `/sharpening`: Sharpening feature.
- `/edge-detectors`: Edge detection feature.
----------------------------------------------------------------------------------------
# 📷 Ứng Dụng Web Xử lý, Cải Thiện Ảnh 

Ứng dụng này cung cấp giao diện người dùng cho các tính năng xử lý ảnh như làm nét (sharpening), giảm nhiễu (denoising), và phát hiện cạnh (edge detection). Ứng dụng được xây dựng bằng React, sử dụng React Router để điều hướng và @tanstack/react-query để quản lý trạng thái và lấy dữ liệu. Giao diện bao gồm 4 trang chính: Trang chủ, trang Denoising, trang Sharpening, và trang EdgeDetectors.


## 🌟 Tính năng
- **Trang chủ:** Hiển thị trang chủ của ứng dụng.
- **Denoising:** Cung cấp tính năng giảm nhiễu ảnh bằng 2 bộ lọc: Bộ lọc trung bình (Mean), bộ lọc trung vị (Median).
- **Sharpening:** Làm nét ảnh với mức độ làm nét có thể tùy chỉnh.
- **EdgeDetectors:** Phát hiện cạnh của ảnh sử dụng các phương pháp Sobel, Prewitt, và Canny.

## 🛠️ Requirements

Trước khi chạy ứng dụng, hãy đảm bảo bạn đã cài đặt:
- Node.js 20.17.0 __(Recommend)__

## 🚀 Bắt đầu thôi!
1. Clone dự án về máy:
    ```
    git clone https://github.com/Havold/CS406-Lab03-FE.git
    cd CS406-Lab03-FE
    ```

2. Cài đặt các dependencies:
    ```
    npm install
    ```

3. Chạy ứng dụng:
    ```
    npm start
    ```

4. Mở trình duyệt và truy cập vào `http://localhost:3000` để xem ứng dụng.

## ⚠️ Lưu ý quan trọng
- Ứng dụng này cần phải có Backend xử lý ảnh đầu vào, để có thể chạy được phẩn BE, tôi đề xuất bạn nên xem qua dự án BE của tôi ở đây: https://github.com/Havold/CS406-Lab03-BE

## Công nghệ sử dụng
- **React**: Framework front-end để xây dựng giao diện người dùng.
- **React Router**: Quản lý điều hướng giữa các trang.
- **@tanstack/react-query**: Quản lý trạng thái máy chủ và lấy dữ liệu.
- **SCSS**: Để tạo kiểu dáng cho ứng dụng.

## Các Route
- `/`: Trang chủ
- `/denoising`: Tính năng làm giảm nhiễu ảnh.
- `/sharpening`: Tính năng làm mượt ảnh.
- `/edge-detectors`: Tính năng phát hiện cạnh.
