# 📷 Image Captioning Web Application

This application serves as a user-friendly interface for evaluating and comparing different Image Captioning models. Users can upload images, select a captioning model, and view the generated captions. The system is built using React for the frontend and Flask for the backend. It supports seamless interaction between the user and three pre-trained models: CLIP + mBart, CLIP + mT5, and CLIP + PhoGPT (but PhoGPT is not available).

## 🌟 Features
- **Home Page:** Introduces the team, the project goals, and the three captioning models in detail.
- **Experiment Page**: Allows users to upload images, choose one of the available models, and generate captions for evaluation.

## 🛠️ System Requirements

Before running the application, ensure you have the following installed:
- Node.js 20.17.0 __(Recommend)__
- Python 3.10.13 __(Recommend)__
- Flask and its dependencies (listed in the backend repository)
## 🚀 Getting Started
1. Clone the **Frontend** repository:
    ```
    git clone https://github.com/Havold/CS406-Image-Captioning.git
    cd CS406-Image-Captioning
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
- This project needs a Backend to process the input image and generate caption, to be able to run the BE, I suggest you check out my BE project here: https://github.com/Havold/CS406-Image-Captioning-BE

## Tech Stack
- **React**: Front-end framework for building user interfaces.
- **React Router**: For managing navigation between pages.
- **@tanstack/react-query**: For managing server state and data fetching.
- **SCSS**: For styling the application.

## Routes
1. `/`: Home page serves as the landing page of the application. It includes:
    -  A brief introduction to the project and its objectives.
    -  Detailed explanations of the three Image Captioning models. Each model section highlights the approach, strengths, and use cases to guide users in selecting the most appropriate model for their needs:
        -  **CLIP + mBART.**
        -  **CLIP + mT5.**
        -  **CLIP + PhoGPT.**
2. `/image-captioning`: Allows users to:
    - **Upload Images:** Supports common formats like JPEG and PNG.
    - __Select a Model:__ Users can choose from the three captioning models.
    - __Generate Captions:__ Displays the caption generated by the selected model in real time.
The page is designed to provide an interactive experience with minimal latency and clear output, ensuring users can test and evaluate the models effectively.
----------------------------------------------------------------------------------------
# 📷 Ứng Dụng Web Xử lý, Cải Thiện Ảnh 

Ứng dụng này cung cấp giao diện người dùng cho các tính năng xử lý ảnh như làm nét (sharpening), giảm nhiễu (denoising), và phát hiện cạnh (edge detection). Ứng dụng được xây dựng bằng React, sử dụng React Router để điều hướng và @tanstack/react-query để quản lý trạng thái và lấy dữ liệu. Giao diện bao gồm 4 trang chính: Trang chủ, trang Denoising, trang Sharpening, và trang EdgeDetectors.


## 🌟 Tính năng
- **Trang chủ:** Hiển thị trang chủ của ứng dụng.
- **Denoising:** Cung cấp tính năng thêm các loại nhiễu khác nhau (Sparkle, Salt and Pepper, Gaussian) vào ảnh và giảm nhiễu ảnh bằng 2 bộ lọc: Bộ lọc trung bình (Mean), bộ lọc trung vị (Median).
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
