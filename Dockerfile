FROM nginx
LABEL maintainer="Quetsalkoatl <quetsalkoatl@users.noreply.github.com>"
COPY nginx/default.conf /etc/nginx/conf.d
COPY dist/book-monkey /usr/share/nginx/html
