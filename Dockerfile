FROM nginx
EXPOSE 3000
COPY ./build/ /etc/nginx

