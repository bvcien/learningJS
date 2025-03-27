# Sử dụng Nginx làm máy chủ web
FROM nginx:alpine

# Sao chép toàn bộ nội dung (.) vào thư mục phục vụ của Nginx
COPY . /usr/share/nginx/html/

# Mở cổng 80
EXPOSE 80
