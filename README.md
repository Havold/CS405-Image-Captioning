# 📷 Image Enhancing, Processing Web Application

This application provides a user interface for image processing features such as sharpening, denoising, and edge detection. It is built with React, using React Router for navigation and @tanstack/react-query for state management and data fetching. The interface includes two main pages: Home, Denoising, Sharpening, and EdgeDetectors Page.

## 🌟 Features
- **Home:** Displays the main page of the application.
- **Denoising:** Provides image denoising functionality using 2 filters: Mean, Median Filter.
- **Sharpening:** Sharpens images with adjustable sharpening levels.
- **Edge Detectors:** Detects image edges using Sobel, Prewitt, and Canny methods.

## 🛠️ System Requirements

Before running the application, ensure you have the following installed:
- Node.js 20.17.0 __(Recommend)__

## 🚀 Getting Started

### Backend
1. Clone the repository to your local machine:
```
git clone https://github.com/Havold/CS406-Lab03-BE.git
cd CS406-Lab03-BE
```
2. Install the dependencies:
```
pip install -r requirements.txt
```
3. Set up the directory structure:
  - For details I suggest you check out my BE project: https://github.com/Havold/CS406-Lab02-BE-Raw
4. Run the backend application:
```
python app.py
```

### Frontend
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
- To be able to run the Backend, I suggest you check out my BE project here: https://github.com/Havold/CS406-Lab03-BE

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
# 😎 Ứng dụng web so sánh hình ảnh dựa trên giá trị histogram

Trang web này cho phép người dùng tải lên một bức ảnh và so sánh nó với các ảnh khác để tìm ra những bức ảnh tương tự. Giao diện bao gồm hai trang chính: Trang chính (`Home`) và Trang kết quả (`Result`).

## 🌟 Tính năng
- Tải lên ảnh để so sánh.
- Sử dụng cân bằng histogram (`equalizeHist`) để tăng độ chính xác trong việc so sánh.
- Chọn số lượng ảnh tương tự muốn hiển thị (top 5 hoặc top 10).
- Hiển thị kết quả so sánh các ảnh tương tự.

## 🛠️ Requirements

Trước khi chạy ứng dụng, hãy đảm bảo bạn đã cài đặt:
- Node.js 20.17.0 __(Recommend)__

## 🚀 Bắt đầu thôi!

### Backend
1. Clone dự án backend về máy:
```
git clone https://github.com/Havold/CS406-Lab02-BE-Raw.git
cd CS406-Lab02-BE-Raw
```
2. Cài đặt các dependencies:
```
pip install -r requirements.txt
```
3. Cấu trúc thư mục:
   - Để chi tiết tôi đề xuất bạn nên xem qua dự án BE của tôi: https://github.com/Havold/CS406-Lab02-BE-Raw
4. Chạy ứng dụng backend:
```
python app.py
```

### Frontend
1. Clone dự án về máy:
    ```
    git clone [<repository-url>](https://github.com/Havold/CS406-Lab02-FE.git)
    cd CS406-Lab02-FE
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
- Để có thể chạy được phẩn Backend, tôi đề xuất bạn nên xem qua dự án BE của tôi ở đây: https://github.com/Havold/CS406-Lab02-BE-Raw
